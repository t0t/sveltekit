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
	q as d,
	l as g,
	r as v,
	a4 as x,
	H as w,
	O as y,
	a5 as b,
	w as E,
	x as k,
	y as M,
	K as j,
	a0 as I,
	a6 as D,
	a7 as L,
	t as P,
	b as B,
	R as S,
	k as V,
	C as G,
	D as T,
	I as A,
	a8 as C,
	F as H,
	n as z,
	J as F,
	T as O,
	U,
	V as N,
	h as R,
	G as _
} from '../../chunks/index-d91e1ed8.js';
import { c as q } from '../../chunks/coverData-76b1c622.js';
import { H as J, S as Y } from '../../chunks/Header-e756daf8.js';
import { L as K } from '../../chunks/List-340c877d.js';
import { L as Q, G as W, B as X } from '../../chunks/ListItem-7b7dc3dc.js';
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
				$(n, 'class', 'svelte-1u972sw'),
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
			e = P('Play');
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
		(e = new Q({
			props: { tipo: 3, variante: 6, $$slots: { default: [at] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[13]),
		{
			c() {
				p(e.$$.fragment);
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
	let e, n, I, D, P, B, S, V, G, T, A, C, H, z, F;
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
						$(n, 'class', 'svelte-1u972sw'),
							$(e, 'viewBox', '0 0 200 200'),
							$(e, 'xmlns', 'http://www.w3.org/2000/svg'),
							$(e, 'class', 'svelte-1u972sw');
					},
					m(t, r) {
						i(t, e, r), f(e, n);
						for (let e = 0; e < s.length; e += 1) s[e].m(n, null);
					},
					p(t, e) {
						100 & e && ((p = { length: t[5] }), (s = u(s, e, m, 1, t, p, r, n, L, rt, null, et)));
					},
					d(t) {
						t && c(e);
						for (let e = 0; e < s.length; e += 1) s[e].d();
					}
				};
			})(t);
	return (
		(C = new K({
			props: { tipo: 3, variante: 5, $$slots: { default: [lt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment),
					(n = m()),
					(I = h('main')),
					(D = h('div')),
					N && N.c(),
					(P = m()),
					(B = h('div')),
					(S = h('div')),
					(V = h('input')),
					(G = m()),
					(T = h('input')),
					(A = m()),
					p(C.$$.fragment),
					this.h();
			},
			l(t) {
				d(e.$$.fragment, t), (n = g(t)), (I = l(t, 'MAIN', { class: !0 }));
				var s = o(I);
				D = l(s, 'DIV', { class: !0 });
				var r = o(D);
				N && N.l(r), r.forEach(c), (P = g(s)), (B = l(s, 'DIV', { class: !0 }));
				var a = o(B);
				S = l(a, 'DIV', { class: !0 });
				var $ = o(S);
				(V = l($, 'INPUT', { type: !0, step: !0, class: !0 })),
					(G = g($)),
					(T = l($, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					$.forEach(c),
					(A = g(a)),
					d(C.$$.fragment, a),
					a.forEach(c),
					s.forEach(c),
					this.h();
			},
			h() {
				$(D, 'class', 'BannerMedia svelte-1u972sw'),
					$(V, 'type', 'number'),
					$(V, 'step', '0.001'),
					$(V, 'class', 'svelte-1u972sw'),
					$(T, 'type', 'range'),
					$(T, 'min', 0),
					$(T, 'max', ct),
					$(T, 'class', 'svelte-1u972sw'),
					$(S, 'class', 'controls svelte-1u972sw'),
					$(B, 'class', 'PhiSvgText svelte-1u972sw'),
					$(I, 'class', 'PhiSvg svelte-1u972sw');
			},
			m(s, r) {
				v(e, s, r),
					i(s, n, r),
					i(s, I, r),
					f(I, D),
					N && N.m(D, null),
					f(I, P),
					f(I, B),
					f(B, S),
					f(S, V),
					x(V, t[2]),
					f(S, G),
					f(S, T),
					x(T, t[5]),
					f(B, A),
					v(C, B, null),
					(H = !0),
					z ||
						((F = [
							w(window, 'resize', t[10]),
							w(V, 'input', t[11]),
							w(T, 'change', t[12]),
							w(T, 'input', t[12])
						]),
						(z = !0));
			},
			p(t, [n]) {
				const s = {};
				1 & n && (s.title = t[0]),
					2 & n && (s.subtitle = t[1]),
					e.$set(s),
					U ? U.p && 16384 & n && y(U, O, t, t[14], n, nt, st) : N && N.p && 36 & n && N.p(t, n),
					4 & n && b(V.value) !== t[2] && x(V, t[2]),
					32 & n && x(T, t[5]);
				const r = {};
				16416 & n && (r.$$scope = { dirty: n, ctx: t }), C.$set(r);
			},
			i(t) {
				H || (E(e.$$.fragment, t), E(N, t), E(C.$$.fragment, t), (H = !0));
			},
			o(t) {
				k(e.$$.fragment, t), k(N, t), k(C.$$.fragment, t), (H = !1);
			},
			d(t) {
				M(e, t), t && c(n), t && c(I), N && N.d(t), M(C), (z = !1), j(F);
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
	I(t, f, (t) => n(5, (s = t)));
	let { variante: u = 0 } = e;
	return (
		(t.$$set = (t) => {
			'title' in t && n(0, (c = t.title)),
				'text' in t && n(1, ($ = t.text)),
				'variante' in t && n(8, (u = t.variante)),
				'$$scope' in t && n(14, (o = t.$$scope));
		}),
		D(f, (s = ct), s),
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
				D(f, (s = s > 0 ? 0 : ct), s);
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
			(e = a('div')), (n = P('xxx')), this.h();
		},
		l(t) {
			e = l(t, 'div', { class: !0 }, 1);
			var s = o(e);
			(n = B(s, 'xxx')), s.forEach(c), this.h();
		},
		h() {
			$(e, 'class', 'svelte-wqjixv');
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
		p,
		m = t[2] && ft();
	const h = t[7].default,
		d = r(h, t, t[6], null);
	return {
		c() {
			(e = a('text')), m && m.c(), (n = V()), d && d.c(), this.h();
		},
		l(t) {
			e = l(t, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var s = o(e);
			m && m.l(s), (n = V()), d && d.l(s), s.forEach(c), this.h();
		},
		h() {
			$(e, 'x', t[0]),
				$(e, 'y', t[1]),
				$(e, 'font-size', '55'),
				$(e, 'class', 'draggable svelte-wqjixv');
		},
		m(r, a) {
			i(r, e, a),
				m && m.m(e, null),
				f(e, n),
				d && d.m(e, null),
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
				  (G(),
				  k(m, 1, 1, () => {
						m = null;
				  }),
				  T()),
				d && d.p && 64 & r && y(d, h, t, t[6], r, null, null),
				(!s || 1 & r) && $(e, 'x', t[0]),
				(!s || 2 & r) && $(e, 'y', t[1]);
		},
		i(t) {
			s || (E(m), E(d, t), (s = !0));
		},
		o(t) {
			k(m), k(d, t), (s = !1);
		},
		d(t) {
			t && c(e), m && m.d(), d && d.d(t), (u = !1), j(p);
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
			$(e, 'name', t[0]), $(e, 'class', (n = A(t[2][t[1]]) + ' svelte-ipfhpg'));
		},
		m(n, r) {
			i(n, e, r), p && p.m(e, null), (s = !0), a || ((f = w(e, 'submit', C(t[5]))), (a = !0));
		},
		p(t, [r]) {
			p && p.p && 8 & r && y(p, u, t, t[3], r, null, null),
				(!s || 1 & r) && $(e, 'name', t[0]),
				(!s || (2 & r && n !== (n = A(t[2][t[1]]) + ' svelte-ipfhpg'))) && $(e, 'class', n);
		},
		i(t) {
			s || (E(p, t), (s = !0));
		},
		o(t) {
			k(p, t), (s = !1);
		},
		d(t) {
			t && c(e), p && p.d(t), (a = !1), f();
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
				H(t, e);
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
				$(e, 'class', 'svelte-fwgxyj');
		},
		m(r, a) {
			i(r, e, a), n || ((s = w(e, 'input', t[2])), (n = !0));
		},
		p(t, [n]) {
			1 & n && e.value !== t[0] && (e.value = t[0]), 2 & n && $(e, 'placeholder', t[1]);
		},
		i: z,
		o: z,
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
				$(e, 'class', 'svelte-1kfj35v');
		},
		m(t, n) {
			i(t, e, n);
		},
		p: z,
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
			e = P(n);
		},
		l(t) {
			e = B(t, n);
		},
		m(t, n) {
			i(t, e, n);
		},
		p: z,
		d(t) {
			t && c(e);
		}
	};
}
function jt(t) {
	let e, n;
	return (
		(e = new mt({
			props: { x: t[16].xpos, y: t[16].ypos, $$slots: { default: [Mt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment);
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
function It(t) {
	let e,
		n = t[13] + '';
	return {
		c() {
			e = P(n);
		},
		l(t) {
			e = B(t, n);
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
function Dt(t) {
	let e, n;
	return (
		(e = new mt({ props: { x: At, y: Ct, $$slots: { default: [It] }, $$scope: { ctx: t } } })),
		{
			c() {
				p(e.$$.fragment);
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
function Lt(t) {
	let e,
		n,
		s,
		r,
		u,
		p = t[4],
		m = [];
	for (let a = 0; a < p.length; a += 1) m[a] = kt(Et(t, p, a));
	let h = t[5],
		d = [];
	for (let a = 0; a < h.length; a += 1) d[a] = jt(bt(t, h, a));
	const g = (t) =>
		k(d[t], 1, 1, () => {
			d[t] = null;
		});
	let v = t[0],
		x = [];
	for (let a = 0; a < v.length; a += 1) x[a] = Dt(yt(t, v, a));
	const w = (t) =>
		k(x[t], 1, 1, () => {
			x[t] = null;
		});
	return {
		c() {
			(e = a('svg')), (n = a('g'));
			for (let t = 0; t < m.length; t += 1) m[t].c();
			s = V();
			for (let t = 0; t < d.length; t += 1) d[t].c();
			r = V();
			for (let t = 0; t < x.length; t += 1) x[t].c();
			this.h();
		},
		l(t) {
			e = l(t, 'svg', { viewBox: !0, class: !0 }, 1);
			var a = o(e);
			n = l(a, 'g', { transform: !0, class: !0 }, 1);
			var $ = o(n);
			for (let e = 0; e < m.length; e += 1) m[e].l($);
			s = V();
			for (let e = 0; e < d.length; e += 1) d[e].l($);
			r = V();
			for (let e = 0; e < x.length; e += 1) x[e].l($);
			$.forEach(c), a.forEach(c), this.h();
		},
		h() {
			$(n, 'transform', 'translate(150,150) scale(0.7)'),
				$(n, 'class', 'svelte-1kfj35v'),
				$(e, 'viewBox', '-1 -1 ' + t[3].width + ' ' + t[3].height),
				$(e, 'class', 'svelte-1kfj35v');
		},
		m(a, l) {
			i(a, e, l), f(e, n);
			for (let t = 0; t < m.length; t += 1) m[t].m(n, null);
			f(n, s);
			for (let t = 0; t < d.length; t += 1) d[t].m(n, null);
			f(n, r);
			for (let t = 0; t < x.length; t += 1) x[t].m(n, null);
			t[10](e), (u = !0);
		},
		p(t, e) {
			if (16 & e) {
				let r;
				for (p = t[4], r = 0; r < p.length; r += 1) {
					const a = Et(t, p, r);
					m[r] ? m[r].p(a, e) : ((m[r] = kt(a)), m[r].c(), m[r].m(n, s));
				}
				for (; r < m.length; r += 1) m[r].d(1);
				m.length = p.length;
			}
			if (32 & e) {
				let s;
				for (h = t[5], s = 0; s < h.length; s += 1) {
					const a = bt(t, h, s);
					d[s] ? (d[s].p(a, e), E(d[s], 1)) : ((d[s] = jt(a)), d[s].c(), E(d[s], 1), d[s].m(n, r));
				}
				for (G(), s = h.length; s < d.length; s += 1) g(s);
				T();
			}
			if (1 & e) {
				let s;
				for (v = t[0], s = 0; s < v.length; s += 1) {
					const r = yt(t, v, s);
					x[s]
						? (x[s].p(r, e), E(x[s], 1))
						: ((x[s] = Dt(r)), x[s].c(), E(x[s], 1), x[s].m(n, null));
				}
				for (G(), s = v.length; s < x.length; s += 1) w(s);
				T();
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
			n && c(e), F(m, n), F(d, n), F(x, n), t[10](null);
		}
	};
}
function Pt(t) {
	let e, n, s, r, a;
	function l(e) {
		t[9](e);
	}
	let o = { placeholder: 'Your word' };
	return (
		void 0 !== t[1] && (o.value = t[1]),
		(e = new wt({ props: o })),
		O.push(() => U(e, 'value', l)),
		(r = new X({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				p(e.$$.fragment), (s = m()), p(r.$$.fragment);
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
function Bt(t) {
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
		(r = new gt({ props: { variante: 1, $$slots: { default: [Pt] }, $$scope: { ctx: t } } })),
		r.$on('submit', t[6]),
		{
			c() {
				(e = h('div')), p(n.$$.fragment), (s = m()), p(r.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var a = o(e);
				d(n.$$.fragment, a), (s = g(a)), d(r.$$.fragment, a), a.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea1'), $(e, 'class', 'svelte-1kfj35v');
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
function St(t) {
	let e;
	return {
		c() {
			e = P('Download svg');
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
function Vt(t) {
	let e, n;
	return (
		(e = new Q({
			props: { tipo: 3, variante: 6, $$slots: { default: [St] }, $$scope: { ctx: t } }
		})),
		e.$on('click', t[8]),
		{
			c() {
				p(e.$$.fragment);
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
function Gt(t) {
	let e, n, s;
	return (
		(n = new K({
			props: { tipo: 3, variante: 5, $$slots: { default: [Vt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = h('div')), p(n.$$.fragment), this.h();
			},
			l(t) {
				e = l(t, 'DIV', { slot: !0, class: !0 });
				var s = o(e);
				d(n.$$.fragment, s), s.forEach(c), this.h();
			},
			h() {
				$(e, 'slot', 'subarea2'), $(e, 'class', 'svelte-1kfj35v');
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
function Tt(t) {
	let e, n;
	return (
		(e = new W({
			props: {
				variante: 0,
				$$slots: { subarea2: [Gt], subarea1: [Bt], default: [Lt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				p(e.$$.fragment);
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
let At = 0,
	Ct = 0;
function Ht(t, e, n) {
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
class zt extends t {
	constructor(t) {
		super(), e(this, t, Ht, Tt, n, {});
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
			$(e, 'class', 'Alert svelte-zhrb1'), _(e, 'haserror', !t[0]);
		},
		m(t, s) {
			i(t, e, s), a && a.m(e, null), (n = !0);
		},
		p(t, [n]) {
			a && a.p && 2 & n && y(a, s, t, t[1], n, null, null), 1 & n && _(e, 'haserror', !t[0]);
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
		(e = new wt({ props: o })),
		O.push(() => U(e, 'value', l)),
		(r = new X({ props: { variante: 6, text: 'Go!', valorinput: t[0] } })),
		{
			c() {
				p(e.$$.fragment), (s = m()), p(r.$$.fragment);
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
				p(e.$$.fragment);
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
			e = P(t[2]);
		},
		l(n) {
			e = B(n, t[2]);
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
			e = P('Codex de Leningrado');
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
				p(e.$$.fragment);
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
	let e, n, s, r, a, u, x, w, y, b, j, I, D, L, S, V;
	(e = new J({
		props: {
			tipo: 3,
			variante: 6,
			title: 'Gematria App',
			subtitle: 'Escribe o pega letras hebreas para conocer su equivalente numérico'
		}
	})),
		(w = new gt({ props: { variante: 1, $$slots: { default: [Nt] }, $$scope: { ctx: t } } })),
		w.$on('submit', t[4]);
	let A = 1 == t[1] && Rt(t);
	return (
		(S = new K({
			props: { tipo: 3, variante: 5, $$slots: { default: [Jt] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				p(e.$$.fragment),
					(n = m()),
					(s = h('main')),
					(r = h('h2')),
					(a = P(t[3])),
					(u = m()),
					(x = h('div')),
					p(w.$$.fragment),
					(y = m()),
					A && A.c(),
					(b = m()),
					(j = h('footer')),
					(I = h('small')),
					(D = P('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					(L = m()),
					p(S.$$.fragment),
					this.h();
			},
			l($) {
				d(e.$$.fragment, $), (n = g($)), (s = l($, 'MAIN', { class: !0 }));
				var i = o(s);
				r = l(i, 'H2', { class: !0 });
				var f = o(r);
				(a = B(f, t[3])), f.forEach(c), (u = g(i)), (x = l(i, 'DIV', { class: !0 }));
				var p = o(x);
				d(w.$$.fragment, p),
					p.forEach(c),
					(y = g(i)),
					A && A.l(i),
					i.forEach(c),
					(b = g($)),
					(j = l($, 'FOOTER', { class: !0 }));
				var m = o(j);
				I = l(m, 'SMALL', { class: !0 });
				var h = o(I);
				(D = B(h, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
					h.forEach(c),
					(L = g(m)),
					d(S.$$.fragment, m),
					m.forEach(c),
					this.h();
			},
			h() {
				$(r, 'class', 'result svelte-1n8ag3o'),
					$(x, 'class', 'position-form svelte-1n8ag3o'),
					$(s, 'class', 'svelte-1n8ag3o'),
					$(I, 'class', 'svelte-1n8ag3o'),
					$(j, 'class', 'svelte-1n8ag3o');
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
					A && A.m(s, null),
					i(t, b, l),
					i(t, j, l),
					f(j, I),
					f(I, D),
					f(j, L),
					v(S, j, null),
					(V = !0);
			},
			p(t, [e]) {
				(!V || 8 & e) && R(a, t[3]);
				const n = {};
				513 & e && (n.$$scope = { dirty: e, ctx: t }),
					w.$set(n),
					1 == t[1]
						? A
							? (A.p(t, e), 2 & e && E(A, 1))
							: ((A = Rt(t)), A.c(), E(A, 1), A.m(s, null))
						: A &&
						  (G(),
						  k(A, 1, 1, () => {
								A = null;
						  }),
						  T());
				const r = {};
				512 & e && (r.$$scope = { dirty: e, ctx: t }), S.$set(r);
			},
			i(t) {
				V || (E(e.$$.fragment, t), E(w.$$.fragment, t), E(A), E(S.$$.fragment, t), (V = !0));
			},
			o(t) {
				k(e.$$.fragment, t), k(w.$$.fragment, t), k(A), k(S.$$.fragment, t), (V = !1);
			},
			d(t) {
				M(e, t), t && c(n), t && c(s), M(w), A && A.d(), t && c(b), t && c(j), M(S);
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
				p(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: z,
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
				p(e.$$.fragment);
			},
			l(t) {
				d(e.$$.fragment, t);
			},
			m(t, s) {
				v(e, t, s), (n = !0);
			},
			p: z,
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
		(e = new zt({})),
		{
			c() {
				p(e.$$.fragment);
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
				p(e.$$.fragment);
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
				p(e.$$.fragment),
					(n = m()),
					p(s.$$.fragment),
					(r = m()),
					p(a.$$.fragment),
					(l = m()),
					p(o.$$.fragment);
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
