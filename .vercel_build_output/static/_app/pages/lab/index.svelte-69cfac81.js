import {
	S as e,
	i as t,
	s,
	Q as n,
	M as a,
	E as r,
	c as l,
	a as o,
	d as c,
	o as i,
	f as $,
	g as f,
	a3 as u,
	e as h,
	j as m,
	t as p,
	p as d,
	l as v,
	b as g,
	q as x,
	a4 as w,
	r as y,
	H as b,
	O as E,
	h as M,
	a5 as z,
	w as q,
	x as I,
	y as k,
	K as L,
	a0 as P,
	a6 as D,
	a7 as H,
	R as S,
	k as A,
	C,
	D as B,
	I as G,
	a8 as T,
	F as j,
	n as V,
	J as O,
	T as R,
	U,
	V as F,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { B as _, G as J, C as Y, c as K } from '../../chunks/Cover-a94e894d.js';
import { S as Q } from '../../chunks/Section-db7b341b.js';
import { t as W } from '../../chunks/index-c4bdeab8.js';
import { f as X } from '../../chunks/index-65311448.js';
import '../../chunks/index-cc16b092.js';
import '../../chunks/index-78b22dae.js';
function Z(e, t, s) {
	const n = e.slice();
	return (n[17] = t[s]), (n[19] = s), n;
}
const ee = (e) => ({}),
	te = (e) => ({});
function se(e, t) {
	let s, n, a;
	return {
		key: e,
		first: null,
		c() {
			(s = r('circle')), this.h();
		},
		l(e) {
			(s = l(e, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), o(s).forEach(c), this.h();
		},
		h() {
			i(s, 'r', t[6]),
				i(s, 'cx', (n = Math.cos(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'cy', (a = Math.sin(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'class', 'svelte-szohv'),
				(this.first = s);
		},
		m(e, t) {
			$(e, s, t);
		},
		p(e, r) {
			(t = e),
				36 & r && n !== (n = Math.cos(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cx', n),
				36 & r && a !== (a = Math.sin(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cy', a);
		},
		d(e) {
			e && c(s);
		}
	};
}
function ne(e) {
	let t, s, P, D, S, A, C, B, G, T, j, V, O, R, U, F, N, J;
	n(e[11]);
	const Y = e[10].hasvideo,
		K = a(Y, e, e[9], te),
		Q =
			K ||
			(function (e) {
				let t,
					s,
					n = [],
					a = new Map(),
					h = { length: e[5] };
				const m = (e) => e[19];
				for (let r = 0; r < h.length; r += 1) {
					let t = Z(e, h, r),
						s = m(t);
					a.set(s, (n[r] = se(s, t)));
				}
				return {
					c() {
						(t = r('svg')), (s = r('g'));
						for (let e = 0; e < n.length; e += 1) n[e].c();
						this.h();
					},
					l(e) {
						t = l(e, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var a = o(t);
						s = l(a, 'g', { class: !0 }, 1);
						var r = o(s);
						for (let t = 0; t < n.length; t += 1) n[t].l(r);
						r.forEach(c), a.forEach(c), this.h();
					},
					h() {
						i(s, 'class', 'svelte-szohv'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-szohv');
					},
					m(e, a) {
						$(e, t, a), f(t, s);
						for (let t = 0; t < n.length; t += 1) n[t].m(s, null);
					},
					p(e, t) {
						100 & t && ((h = { length: e[5] }), (n = u(n, t, m, 1, e, h, a, s, H, se, null, Z)));
					},
					d(e) {
						e && c(t);
						for (let t = 0; t < n.length; t += 1) n[t].d();
					}
				};
			})(e);
	return (
		(U = new _({ props: { variante: 0, text: 'Play' } })),
		U.$on('click', e[14]),
		{
			c() {
				(t = h('main')),
					(s = h('div')),
					Q && Q.c(),
					(P = m()),
					(D = h('div')),
					(S = h('h2')),
					(A = p(e[0])),
					(C = m()),
					(B = h('p')),
					(G = m()),
					(T = h('div')),
					(j = h('input')),
					(V = m()),
					(O = h('input')),
					(R = m()),
					d(U.$$.fragment),
					this.h();
			},
			l(n) {
				t = l(n, 'MAIN', { class: !0 });
				var a = o(t);
				s = l(a, 'DIV', { class: !0 });
				var r = o(s);
				Q && Q.l(r), r.forEach(c), (P = v(a)), (D = l(a, 'DIV', { class: !0 }));
				var i = o(D);
				S = l(i, 'H2', { class: !0 });
				var $ = o(S);
				(A = g($, e[0])),
					$.forEach(c),
					(C = v(i)),
					(B = l(i, 'P', { class: !0 })),
					o(B).forEach(c),
					(G = v(i)),
					(T = l(i, 'DIV', { class: !0 }));
				var f = o(T);
				(j = l(f, 'INPUT', { type: !0, step: !0, class: !0 })),
					(V = v(f)),
					(O = l(f, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					f.forEach(c),
					(R = v(i)),
					x(U.$$.fragment, i),
					i.forEach(c),
					a.forEach(c),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-szohv'),
					i(S, 'class', 'svelte-szohv'),
					i(B, 'class', 'svelte-szohv'),
					i(j, 'type', 'number'),
					i(j, 'step', '0.001'),
					i(j, 'class', 'svelte-szohv'),
					i(O, 'type', 'range'),
					i(O, 'min', 0),
					i(O, 'max', ae),
					i(O, 'class', 'svelte-szohv'),
					i(T, 'class', 'controls svelte-szohv'),
					i(D, 'class', 'PhiSvgText svelte-szohv'),
					i(t, 'class', 'PhiSvg svelte-szohv');
			},
			m(n, a) {
				$(n, t, a),
					f(t, s),
					Q && Q.m(s, null),
					f(t, P),
					f(t, D),
					f(D, S),
					f(S, A),
					f(D, C),
					f(D, B),
					(B.innerHTML = e[1]),
					f(D, G),
					f(D, T),
					f(T, j),
					w(j, e[2]),
					f(T, V),
					f(T, O),
					w(O, e[5]),
					f(D, R),
					y(U, D, null),
					(F = !0),
					N ||
						((J = [
							b(window, 'resize', e[11]),
							b(j, 'input', e[12]),
							b(O, 'change', e[13]),
							b(O, 'input', e[13])
						]),
						(N = !0));
			},
			p(e, [t]) {
				K ? K.p && 512 & t && E(K, Y, e, e[9], t, ee, te) : Q && Q.p && 36 & t && Q.p(e, t),
					(!F || 1 & t) && M(A, e[0]),
					(!F || 2 & t) && (B.innerHTML = e[1]),
					4 & t && z(j.value) !== e[2] && w(j, e[2]),
					32 & t && w(O, e[5]);
			},
			i(e) {
				F || (q(Q, e), q(U.$$.fragment, e), (F = !0));
			},
			o(e) {
				I(Q, e), I(U.$$.fragment, e), (F = !1);
			},
			d(e) {
				e && c(t), Q && Q.d(e), k(U), (N = !1), L(J);
			}
		}
	);
}
let ae = 360;
function re(e, t, s) {
	let n,
		a,
		r,
		{ $$slots: l = {}, $$scope: o } = t,
		{ title: c = '' } = t,
		{ text: i = '' } = t,
		$ = 0.618033988749,
		f = W(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
	P(e, f, (e) => s(5, (n = e)));
	let { variante: u = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (c = e.title)),
				'text' in e && s(1, (i = e.text)),
				'variante' in e && s(8, (u = e.variante)),
				'$$scope' in e && s(9, (o = e.$$scope));
		}),
		D(f, (n = ae), n),
		[
			c,
			i,
			$,
			a,
			r,
			n,
			1.62 * 1.62,
			f,
			u,
			o,
			l,
			function () {
				s(3, (a = window.innerWidth)), s(4, (r = window.innerHeight));
			},
			function () {
				($ = z(this.value)), s(2, $);
			},
			function () {
				(n = z(this.value)), f.set(n);
			},
			() => {
				D(f, (n = n > 0 ? 0 : ae), n);
			}
		]
	);
}
class le extends e {
	constructor(e) {
		super(), t(this, e, re, ne, s, { title: 0, text: 1, variante: 8 });
	}
}
function oe(e) {
	let t, s, a, u;
	return {
		c() {
			(t = r('div')), (s = p('xxx')), this.h();
		},
		l(e) {
			t = l(e, 'div', { class: !0 }, 1);
			var n = o(t);
			(s = g(n, 'xxx')), n.forEach(c), this.h();
		},
		h() {
			i(t, 'class', 'svelte-1nvc92e');
		},
		m(e, n) {
			$(e, t, n), f(t, s), (u = !0);
		},
		i(e) {
			u ||
				(n(() => {
					a || (a = S(t, X, {}, !0)), a.run(1);
				}),
				(u = !0));
		},
		o(e) {
			a || (a = S(t, X, {}, !1)), a.run(0), (u = !1);
		},
		d(e) {
			e && c(t), e && a && a.end();
		}
	};
}
function ce(e) {
	let t,
		s,
		n,
		u,
		h,
		m = e[2] && oe();
	const p = e[7].default,
		d = a(p, e, e[6], null);
	return {
		c() {
			(t = r('text')), m && m.c(), (s = A()), d && d.c(), this.h();
		},
		l(e) {
			t = l(e, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var n = o(t);
			m && m.l(n), (s = A()), d && d.l(n), n.forEach(c), this.h();
		},
		h() {
			i(t, 'x', e[0]),
				i(t, 'y', e[1]),
				i(t, 'font-size', '55'),
				i(t, 'class', 'draggable svelte-1nvc92e');
		},
		m(a, r) {
			$(a, t, r),
				m && m.m(t, null),
				f(t, s),
				d && d.m(t, null),
				(n = !0),
				u ||
					((h = [b(window, 'mouseup', e[4]), b(t, 'mousedown', e[3]), b(t, 'mousemove', e[5])]),
					(u = !0));
		},
		p(e, [a]) {
			e[2]
				? m
					? 4 & a && q(m, 1)
					: ((m = oe()), m.c(), q(m, 1), m.m(t, s))
				: m &&
				  (C(),
				  I(m, 1, 1, () => {
						m = null;
				  }),
				  B()),
				d && d.p && 64 & a && E(d, p, e, e[6], a, null, null),
				(!n || 1 & a) && i(t, 'x', e[0]),
				(!n || 2 & a) && i(t, 'y', e[1]);
		},
		i(e) {
			n || (q(m), q(d, e), (n = !0));
		},
		o(e) {
			I(m), I(d, e), (n = !1);
		},
		d(e) {
			e && c(t), m && m.d(), d && d.d(e), (u = !1), L(h);
		}
	};
}
function ie(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ x: r = 0 } = t,
		{ y: l = 0 } = t,
		o = !1;
	return (
		(e.$$set = (e) => {
			'x' in e && s(0, (r = e.x)),
				'y' in e && s(1, (l = e.y)),
				'$$scope' in e && s(6, (a = e.$$scope));
		}),
		[
			r,
			l,
			o,
			() => {
				s(2, (o = !0));
			},
			function () {
				s(2, (o = !1));
			},
			function (e) {
				o && (s(0, (r += 2.5 * e.movementX)), s(1, (l += 2.5 * e.movementY)));
			},
			a,
			n
		]
	);
}
class $e extends e {
	constructor(e) {
		super(), t(this, e, ie, ce, s, { x: 0, y: 1 });
	}
}
function fe(e) {
	let t, s, n, r, f;
	const u = e[4].default,
		m = a(u, e, e[3], null);
	return {
		c() {
			(t = h('form')), m && m.c(), this.h();
		},
		l(e) {
			t = l(e, 'FORM', { name: !0, class: !0 });
			var s = o(t);
			m && m.l(s), s.forEach(c), this.h();
		},
		h() {
			i(t, 'name', e[0]), i(t, 'class', (s = G(e[2][e[1]]) + ' svelte-2zbnuf'));
		},
		m(s, a) {
			$(s, t, a), m && m.m(t, null), (n = !0), r || ((f = b(t, 'submit', T(e[5]))), (r = !0));
		},
		p(e, [a]) {
			m && m.p && 8 & a && E(m, u, e, e[3], a, null, null),
				(!n || 1 & a) && i(t, 'name', e[0]),
				(!n || (2 & a && s !== (s = G(e[2][e[1]]) + ' svelte-2zbnuf'))) && i(t, 'class', s);
		},
		i(e) {
			n || (q(m, e), (n = !0));
		},
		o(e) {
			I(m, e), (n = !1);
		},
		d(e) {
			e && c(t), m && m.d(e), (r = !1), f();
		}
	};
}
function ue(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ name: r = 'My form group' } = t,
		{ variante: l = 0 } = t;
	return (
		(e.$$set = (e) => {
			'name' in e && s(0, (r = e.name)),
				'variante' in e && s(1, (l = e.variante)),
				'$$scope' in e && s(3, (a = e.$$scope));
		}),
		[
			r,
			l,
			['Form_0', 'Form_1'],
			a,
			n,
			function (t) {
				j(e, t);
			}
		]
	);
}
class he extends e {
	constructor(e) {
		super(), t(this, e, ue, fe, s, { name: 0, variante: 1 });
	}
}
function me(e) {
	let t, s, n;
	return {
		c() {
			(t = h('input')), this.h();
		},
		l(e) {
			(t = l(e, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(t.value = e[0]),
				i(t, 'placeholder', e[1]),
				i(t, 'type', ''),
				i(t, 'name', ''),
				i(t, 'class', 'svelte-10qlsa9');
		},
		m(a, r) {
			$(a, t, r), s || ((n = b(t, 'input', e[2])), (s = !0));
		},
		p(e, [s]) {
			1 & s && t.value !== e[0] && (t.value = e[0]), 2 & s && i(t, 'placeholder', e[1]);
		},
		i: V,
		o: V,
		d(e) {
			e && c(t), (s = !1), n();
		}
	};
}
function pe(e, t, s) {
	let { value: n = '' } = t,
		{ placeholder: a = '"...בראשית ברא אלהים"' } = t;
	return (
		(e.$$set = (e) => {
			'value' in e && s(0, (n = e.value)), 'placeholder' in e && s(1, (a = e.placeholder));
		}),
		[n, a, (e) => s(0, (n = e.target.value))]
	);
}
class de extends e {
	constructor(e) {
		super(), t(this, e, pe, me, s, { value: 0, placeholder: 1 });
	}
}
function ve(e, t, s) {
	const n = e.slice();
	return (n[13] = t[s]), n;
}
function ge(e, t, s) {
	const n = e.slice();
	return (n[16] = t[s]), n;
}
function xe(e, t, s) {
	const n = e.slice();
	return (n[19] = t[s]), n;
}
function we(e) {
	let t;
	return {
		c() {
			(t = r('circle')), this.h();
		},
		l(e) {
			(t = l(e, 'circle', { cx: !0, cy: !0, r: !0, id: !0, fill: !0, stroke: !0, class: !0 }, 1)),
				o(t).forEach(c),
				this.h();
		},
		h() {
			i(t, 'cx', e[19].cx),
				i(t, 'cy', e[19].cy),
				i(t, 'r', e[19].r),
				i(t, 'id', e[19].id),
				i(t, 'fill', 'none'),
				i(t, 'stroke', 'black'),
				i(t, 'class', 'svelte-f503a8');
		},
		m(e, s) {
			$(e, t, s);
		},
		p: V,
		d(e) {
			e && c(t);
		}
	};
}
function ye(e) {
	let t,
		s = e[16].id + '';
	return {
		c() {
			t = p(s);
		},
		l(e) {
			t = g(e, s);
		},
		m(e, s) {
			$(e, t, s);
		},
		p: V,
		d(e) {
			e && c(t);
		}
	};
}
function be(e) {
	let t, s;
	return (
		(t = new $e({
			props: { x: e[16].xpos, y: e[16].ypos, $$slots: { default: [ye] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			p(e, s) {
				const n = {};
				4194304 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function Ee(e) {
	let t,
		s = e[13] + '';
	return {
		c() {
			t = p(s);
		},
		l(e) {
			t = g(e, s);
		},
		m(e, s) {
			$(e, t, s);
		},
		p(e, n) {
			1 & n && s !== (s = e[13] + '') && M(t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Me(e) {
	let t, s;
	return (
		(t = new $e({ props: { x: Pe, y: De, $$slots: { default: [Ee] }, $$scope: { ctx: e } } })),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			p(e, s) {
				const n = {};
				4194305 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function ze(e) {
	let t,
		s,
		n,
		a,
		u,
		h = e[4],
		m = [];
	for (let r = 0; r < h.length; r += 1) m[r] = we(xe(e, h, r));
	let p = e[5],
		d = [];
	for (let r = 0; r < p.length; r += 1) d[r] = be(ge(e, p, r));
	const v = (e) =>
		I(d[e], 1, 1, () => {
			d[e] = null;
		});
	let g = e[0],
		x = [];
	for (let r = 0; r < g.length; r += 1) x[r] = Me(ve(e, g, r));
	const w = (e) =>
		I(x[e], 1, 1, () => {
			x[e] = null;
		});
	return {
		c() {
			(t = r('svg')), (s = r('g'));
			for (let e = 0; e < m.length; e += 1) m[e].c();
			n = A();
			for (let e = 0; e < d.length; e += 1) d[e].c();
			a = A();
			for (let e = 0; e < x.length; e += 1) x[e].c();
			this.h();
		},
		l(e) {
			t = l(e, 'svg', { viewBox: !0, class: !0 }, 1);
			var r = o(t);
			s = l(r, 'g', { transform: !0, class: !0 }, 1);
			var i = o(s);
			for (let t = 0; t < m.length; t += 1) m[t].l(i);
			n = A();
			for (let t = 0; t < d.length; t += 1) d[t].l(i);
			a = A();
			for (let t = 0; t < x.length; t += 1) x[t].l(i);
			i.forEach(c), r.forEach(c), this.h();
		},
		h() {
			i(s, 'transform', 'translate(150,150) scale(0.7)'),
				i(s, 'class', 'svelte-f503a8'),
				i(t, 'viewBox', '-1 -1 ' + e[3].width + ' ' + e[3].height),
				i(t, 'class', 'svelte-f503a8');
		},
		m(r, l) {
			$(r, t, l), f(t, s);
			for (let e = 0; e < m.length; e += 1) m[e].m(s, null);
			f(s, n);
			for (let e = 0; e < d.length; e += 1) d[e].m(s, null);
			f(s, a);
			for (let e = 0; e < x.length; e += 1) x[e].m(s, null);
			e[10](t), (u = !0);
		},
		p(e, t) {
			if (16 & t) {
				let a;
				for (h = e[4], a = 0; a < h.length; a += 1) {
					const r = xe(e, h, a);
					m[a] ? m[a].p(r, t) : ((m[a] = we(r)), m[a].c(), m[a].m(s, n));
				}
				for (; a < m.length; a += 1) m[a].d(1);
				m.length = h.length;
			}
			if (32 & t) {
				let n;
				for (p = e[5], n = 0; n < p.length; n += 1) {
					const r = ge(e, p, n);
					d[n] ? (d[n].p(r, t), q(d[n], 1)) : ((d[n] = be(r)), d[n].c(), q(d[n], 1), d[n].m(s, a));
				}
				for (C(), n = p.length; n < d.length; n += 1) v(n);
				B();
			}
			if (1 & t) {
				let n;
				for (g = e[0], n = 0; n < g.length; n += 1) {
					const a = ve(e, g, n);
					x[n]
						? (x[n].p(a, t), q(x[n], 1))
						: ((x[n] = Me(a)), x[n].c(), q(x[n], 1), x[n].m(s, null));
				}
				for (C(), n = g.length; n < x.length; n += 1) w(n);
				B();
			}
		},
		i(e) {
			if (!u) {
				for (let e = 0; e < p.length; e += 1) q(d[e]);
				for (let e = 0; e < g.length; e += 1) q(x[e]);
				u = !0;
			}
		},
		o(e) {
			d = d.filter(Boolean);
			for (let t = 0; t < d.length; t += 1) I(d[t]);
			x = x.filter(Boolean);
			for (let t = 0; t < x.length; t += 1) I(x[t]);
			u = !1;
		},
		d(s) {
			s && c(t), O(m, s), O(d, s), O(x, s), e[10](null);
		}
	};
}
function qe(e) {
	let t, s, n, a, r;
	function l(t) {
		e[9](t);
	}
	let o = { placeholder: 'Your word' };
	return (
		void 0 !== e[1] && (o.value = e[1]),
		(t = new de({ props: o })),
		R.push(() => U(t, 'value', l)),
		(a = new _({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = v(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				y(t, e, s), $(e, n, s), y(a, e, s), (r = !0);
			},
			p(e, n) {
				const a = {};
				!s && 2 & n && ((s = !0), (a.value = e[1]), F(() => (s = !1))), t.$set(a);
			},
			i(e) {
				r || (q(t.$$.fragment, e), q(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				k(t, e), e && c(n), k(a, e);
			}
		}
	);
}
function Ie(e) {
	let t, s, n, a, r, u, w, b, E, M;
	return (
		(E = new he({ props: { variante: 1, $$slots: { default: [qe] }, $$scope: { ctx: e } } })),
		E.$on('submit', e[6]),
		{
			c() {
				(t = h('div')),
					(s = h('hgroup')),
					(n = h('h2')),
					(a = p('Meta-Mapa +0+1234')),
					(r = m()),
					(u = h('p')),
					(w = p('Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					(b = m()),
					d(E.$$.fragment),
					this.h();
			},
			l(e) {
				t = l(e, 'DIV', { slot: !0, class: !0 });
				var i = o(t);
				s = l(i, 'HGROUP', { class: !0 });
				var $ = o(s);
				n = l($, 'H2', { class: !0 });
				var f = o(n);
				(a = g(f, 'Meta-Mapa +0+1234')), f.forEach(c), (r = v($)), (u = l($, 'P', { class: !0 }));
				var h = o(u);
				(w = g(h, 'Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					h.forEach(c),
					$.forEach(c),
					(b = v(i)),
					x(E.$$.fragment, i),
					i.forEach(c),
					this.h();
			},
			h() {
				i(n, 'class', 'svelte-f503a8'),
					i(u, 'class', 'svelte-f503a8'),
					i(s, 'class', 'svelte-f503a8'),
					i(t, 'slot', 'subarea1'),
					i(t, 'class', 'svelte-f503a8');
			},
			m(e, l) {
				$(e, t, l),
					f(t, s),
					f(s, n),
					f(n, a),
					f(s, r),
					f(s, u),
					f(u, w),
					f(t, b),
					y(E, t, null),
					(M = !0);
			},
			p(e, t) {
				const s = {};
				4194306 & t && (s.$$scope = { dirty: t, ctx: e }), E.$set(s);
			},
			i(e) {
				M || (q(E.$$.fragment, e), (M = !0));
			},
			o(e) {
				I(E.$$.fragment, e), (M = !1);
			},
			d(e) {
				e && c(t), k(E);
			}
		}
	);
}
function ke(e) {
	let t, s, n;
	return (
		(s = new _({ props: { variante: 1, text: 'Download svg' } })),
		s.$on('click', e[8]),
		{
			c() {
				(t = h('div')), d(s.$$.fragment), this.h();
			},
			l(e) {
				t = l(e, 'DIV', { slot: !0, class: !0 });
				var n = o(t);
				x(s.$$.fragment, n), n.forEach(c), this.h();
			},
			h() {
				i(t, 'slot', 'subarea2'), i(t, 'class', 'svelte-f503a8');
			},
			m(e, a) {
				$(e, t, a), y(s, t, null), (n = !0);
			},
			p: V,
			i(e) {
				n || (q(s.$$.fragment, e), (n = !0));
			},
			o(e) {
				I(s.$$.fragment, e), (n = !1);
			},
			d(e) {
				e && c(t), k(s);
			}
		}
	);
}
function Le(e) {
	let t, s;
	return (
		(t = new J({
			props: {
				variante: 0,
				$$slots: { subarea2: [ke], subarea1: [Ie], default: [ze] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const n = {};
				4194311 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
let Pe = 0,
	De = 0;
function He(e, t, s) {
	let n = [],
		a = '',
		r = { width: 1e3, height: 1e3 },
		l = r.width / 4,
		o = r.width / 2;
	let c = null;
	const i = (e, t = 'your-01234-map.svg') => {
		e.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		let s = e.outerHTML,
			n = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', s], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			a = URL.createObjectURL(n),
			r = document.createElement('a');
		(r.href = a),
			(r.download = t),
			document.body.appendChild(r),
			r.click(),
			document.body.removeChild(r);
	};
	return [
		n,
		a,
		c,
		r,
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
			s(0, (n = [...n, a]));
		},
		i,
		() => i(c),
		function (e) {
			(a = e), s(1, a);
		},
		function (e) {
			R[e ? 'unshift' : 'push'](() => {
				(c = e), s(2, c);
			});
		}
	];
}
class Se extends e {
	constructor(e) {
		super(), t(this, e, He, Le, s, {});
	}
}
function Ae(e) {
	let t, s;
	const n = e[2].default,
		r = a(n, e, e[1], null);
	return {
		c() {
			(t = h('div')), r && r.c(), this.h();
		},
		l(e) {
			t = l(e, 'DIV', { class: !0 });
			var s = o(t);
			r && r.l(s), s.forEach(c), this.h();
		},
		h() {
			i(t, 'class', 'Alert svelte-brcsa1'), N(t, 'haserror', !e[0]);
		},
		m(e, n) {
			$(e, t, n), r && r.m(t, null), (s = !0);
		},
		p(e, [s]) {
			r && r.p && 2 & s && E(r, n, e, e[1], s, null, null), 1 & s && N(t, 'haserror', !e[0]);
		},
		i(e) {
			s || (q(r, e), (s = !0));
		},
		o(e) {
			I(r, e), (s = !1);
		},
		d(e) {
			e && c(t), r && r.d(e);
		}
	};
}
function Ce(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ haserror: r = !1 } = t;
	return (
		(e.$$set = (e) => {
			'haserror' in e && s(0, (r = e.haserror)), '$$scope' in e && s(1, (a = e.$$scope));
		}),
		[r, a, n]
	);
}
class Be extends e {
	constructor(e) {
		super(), t(this, e, Ce, Ae, s, { haserror: 0 });
	}
}
function Ge(e) {
	let t, s, n, a, r;
	function l(t) {
		e[5](t);
	}
	let o = {};
	return (
		void 0 !== e[0] && (o.value = e[0]),
		(t = new de({ props: o })),
		R.push(() => U(t, 'value', l)),
		(a = new _({ props: { variante: 6, text: 'Go!', valorinput: e[0] } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = v(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				y(t, e, s), $(e, n, s), y(a, e, s), (r = !0);
			},
			p(e, n) {
				const r = {};
				!s && 1 & n && ((s = !0), (r.value = e[0]), F(() => (s = !1))), t.$set(r);
				const l = {};
				1 & n && (l.valorinput = e[0]), a.$set(l);
			},
			i(e) {
				r || (q(t.$$.fragment, e), q(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				k(t, e), e && c(n), k(a, e);
			}
		}
	);
}
function Te(e) {
	let t, s;
	return (
		(t = new Be({ props: { $$slots: { default: [je] }, $$scope: { ctx: e } } })),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			p(e, s) {
				const n = {};
				516 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function je(e) {
	let t;
	return {
		c() {
			t = p(e[2]);
		},
		l(s) {
			t = g(s, e[2]);
		},
		m(e, s) {
			$(e, t, s);
		},
		p(e, s) {
			4 & s && M(t, e[2]);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Ve(e) {
	let t, s, n, a, r, u, w, b, E, z, L, P, D, H, S, A, G, T, j, V, O, R, U;
	(D = new he({ props: { variante: 1, $$slots: { default: [Ge] }, $$scope: { ctx: e } } })),
		D.$on('submit', e[4]);
	let F = 1 == e[1] && Te(e);
	return {
		c() {
			(t = h('header')),
				(s = h('h2')),
				(n = p('Gematria App')),
				(a = m()),
				(r = h('p')),
				(u = p('Lo que valen las palabras hebreas')),
				(w = m()),
				(b = h('main')),
				(E = h('h2')),
				(z = p(e[3])),
				(L = m()),
				(P = h('div')),
				d(D.$$.fragment),
				(H = m()),
				F && F.c(),
				(S = m()),
				(A = h('footer')),
				(G = h('small')),
				(T = p('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(j = m()),
				(V = h('small')),
				(O = h('a')),
				(R = p('Codex de Leningrado')),
				this.h();
		},
		l(i) {
			t = l(i, 'HEADER', { class: !0 });
			var $ = o(t);
			s = l($, 'H2', { class: !0 });
			var f = o(s);
			(n = g(f, 'Gematria App')), f.forEach(c), (a = v($)), (r = l($, 'P', { class: !0 }));
			var h = o(r);
			(u = g(h, 'Lo que valen las palabras hebreas')),
				h.forEach(c),
				$.forEach(c),
				(w = v(i)),
				(b = l(i, 'MAIN', { class: !0 }));
			var m = o(b);
			E = l(m, 'H2', { class: !0 });
			var p = o(E);
			(z = g(p, e[3])), p.forEach(c), (L = v(m)), (P = l(m, 'DIV', { class: !0 }));
			var d = o(P);
			x(D.$$.fragment, d),
				d.forEach(c),
				(H = v(m)),
				F && F.l(m),
				m.forEach(c),
				(S = v(i)),
				(A = l(i, 'FOOTER', { class: !0 }));
			var y = o(A);
			G = l(y, 'SMALL', { class: !0 });
			var M = o(G);
			(T = g(M, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				M.forEach(c),
				(j = v(y)),
				(V = l(y, 'SMALL', { class: !0 }));
			var q = o(V);
			O = l(q, 'A', { href: !0, target: !0, class: !0 });
			var I = o(O);
			(R = g(I, 'Codex de Leningrado')), I.forEach(c), q.forEach(c), y.forEach(c), this.h();
		},
		h() {
			i(s, 'class', 'svelte-xdqmoo'),
				i(r, 'class', 'svelte-xdqmoo'),
				i(t, 'class', 'svelte-xdqmoo'),
				i(E, 'class', 'result svelte-xdqmoo'),
				i(P, 'class', 'position-form svelte-xdqmoo'),
				i(b, 'class', 'svelte-xdqmoo'),
				i(G, 'class', 'svelte-xdqmoo'),
				i(O, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(O, 'target', '_blank'),
				i(O, 'class', 'svelte-xdqmoo'),
				i(V, 'class', 'svelte-xdqmoo'),
				i(A, 'class', 'svelte-xdqmoo');
		},
		m(e, l) {
			$(e, t, l),
				f(t, s),
				f(s, n),
				f(t, a),
				f(t, r),
				f(r, u),
				$(e, w, l),
				$(e, b, l),
				f(b, E),
				f(E, z),
				f(b, L),
				f(b, P),
				y(D, P, null),
				f(b, H),
				F && F.m(b, null),
				$(e, S, l),
				$(e, A, l),
				f(A, G),
				f(G, T),
				f(A, j),
				f(A, V),
				f(V, O),
				f(O, R),
				(U = !0);
		},
		p(e, [t]) {
			(!U || 8 & t) && M(z, e[3]);
			const s = {};
			513 & t && (s.$$scope = { dirty: t, ctx: e }),
				D.$set(s),
				1 == e[1]
					? F
						? (F.p(e, t), 2 & t && q(F, 1))
						: ((F = Te(e)), F.c(), q(F, 1), F.m(b, null))
					: F &&
					  (C(),
					  I(F, 1, 1, () => {
							F = null;
					  }),
					  B());
		},
		i(e) {
			U || (q(D.$$.fragment, e), q(F), (U = !0));
		},
		o(e) {
			I(D.$$.fragment, e), I(F), (U = !1);
		},
		d(e) {
			e && c(t), e && c(w), e && c(b), k(D), F && F.d(), e && c(S), e && c(A);
		}
	};
}
function Oe(e, t, s) {
	let n,
		a = '',
		r = !1,
		l = '',
		o = [];
	return (
		s(3, (n = 0)),
		[
			a,
			r,
			l,
			n,
			function () {
				s(1, (r = !1)), s(3, (n = 0)), s(0, a), (o = a.split('')), s(2, (l = ''));
				for (const e of o)
					'א' == e
						? s(3, (n += 1))
						: 'ב' == e
						? s(3, (n += 2))
						: 'ג' == e
						? s(3, (n += 3))
						: 'ד' == e
						? s(3, (n += 4))
						: 'ה' == e
						? s(3, (n += 5))
						: 'ו' == e
						? s(3, (n += 6))
						: 'ז' == e
						? s(3, (n += 7))
						: 'ח' == e
						? s(3, (n += 8))
						: 'ט' == e
						? s(3, (n += 9))
						: 'י' == e
						? s(3, (n += 10))
						: 'כ' == e
						? s(3, (n += 20))
						: 'ל' == e
						? s(3, (n += 30))
						: 'מ' == e
						? s(3, (n += 40))
						: 'ן' == e
						? s(3, (n += 50))
						: 'ס' == e
						? s(3, (n += 60))
						: 'ע' == e
						? s(3, (n += 70))
						: 'פ' == e
						? s(3, (n += 80))
						: 'צ' == e
						? s(3, (n += 90))
						: 'ק' == e
						? s(3, (n += 100))
						: 'ר' == e
						? s(3, (n += 200))
						: 'ש' == e
						? s(3, (n += 300))
						: 'ת' == e
						? s(3, (n += 400))
						: 'ך' == e
						? s(3, (n += 500))
						: 'ם' == e
						? s(3, (n += 600))
						: 'ן' == e
						? s(3, (n += 700))
						: 'ף' == e
						? s(3, (n += 800))
						: 'ץ' == e
						? s(3, (n += 900))
						: ' ' == e
						? s(3, (n += 0))
						: (s(1, (r = !0)),
						  s(1, (r = !0))
								? s(2, (l = 'Sólo contabilizan las consonantes hebreas.'))
								: (s(1, (r = !1)), s(2, (l = ''))));
				return n;
			},
			function (e) {
				(a = e), s(0, a);
			}
		]
	);
}
class Re extends e {
	constructor(e) {
		super(), t(this, e, Oe, Ve, s, {});
	}
}
function Ue(e) {
	let t, s;
	return (
		(t = new Y({
			props: { variante: 1, title: K[2].title, subtitle: K[2].subtitle, text: K[2].text }
		})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			p: V,
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function Fe(e) {
	let t, s;
	return (
		(t = new le({
			props: {
				title: 'La Divina Proporción',
				text:
					'<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>'
			}
		})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			p: V,
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function Ne(e) {
	let t, s;
	return (
		(t = new Se({})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function _e(e) {
	let t, s;
	return (
		(t = new Re({})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				y(t, e, n), (s = !0);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function Je(e) {
	let t, s, n, a, r, l, o, i;
	return (
		(t = new Q({
			props: { id: 'cover', variante: 3, $$slots: { default: [Ue] }, $$scope: { ctx: e } }
		})),
		(n = new Q({
			props: { id: 'phi', variante: 2, $$slots: { default: [Fe] }, $$scope: { ctx: e } }
		})),
		(r = new Q({
			props: { id: 't0t', variante: 0, $$slots: { default: [Ne] }, $$scope: { ctx: e } }
		})),
		(o = new Q({
			props: { id: 'gematria', variante: 4, $$slots: { default: [_e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment),
					(s = m()),
					d(n.$$.fragment),
					(a = m()),
					d(r.$$.fragment),
					(l = m()),
					d(o.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e),
					(s = v(e)),
					x(n.$$.fragment, e),
					(a = v(e)),
					x(r.$$.fragment, e),
					(l = v(e)),
					x(o.$$.fragment, e);
			},
			m(e, c) {
				y(t, e, c),
					$(e, s, c),
					y(n, e, c),
					$(e, a, c),
					y(r, e, c),
					$(e, l, c),
					y(o, e, c),
					(i = !0);
			},
			p(e, [s]) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), n.$set(l);
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), r.$set(c);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), o.$set(i);
			},
			i(e) {
				i ||
					(q(t.$$.fragment, e),
					q(n.$$.fragment, e),
					q(r.$$.fragment, e),
					q(o.$$.fragment, e),
					(i = !0));
			},
			o(e) {
				I(t.$$.fragment, e),
					I(n.$$.fragment, e),
					I(r.$$.fragment, e),
					I(o.$$.fragment, e),
					(i = !1);
			},
			d(e) {
				k(t, e), e && c(s), k(n, e), e && c(a), k(r, e), e && c(l), k(o, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Je, s, {});
	}
}
