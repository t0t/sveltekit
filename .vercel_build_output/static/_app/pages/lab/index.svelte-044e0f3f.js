import {
	S as e,
	i as t,
	s,
	Q as n,
	M as a,
	E as r,
	c as l,
	a as c,
	d as o,
	o as i,
	f as $,
	g as u,
	a3 as f,
	e as h,
	j as m,
	t as p,
	p as d,
	l as g,
	b as v,
	q as x,
	a4 as w,
	r as y,
	H as b,
	O as E,
	h as k,
	a5 as M,
	w as j,
	x as P,
	y as I,
	K as q,
	a0 as L,
	a6 as H,
	a7 as S,
	R as A,
	k as C,
	C as D,
	D as B,
	I as G,
	a8 as T,
	F as V,
	n as z,
	J as O,
	T as R,
	U,
	V as F,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { B as _, G as J, C as Y, c as K } from '../../chunks/Cover-f3b4dc33.js';
import { S as Q } from '../../chunks/Section-2261cd02.js';
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
			(s = l(e, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), c(s).forEach(o), this.h();
		},
		h() {
			i(s, 'r', t[6]),
				i(s, 'cx', (n = Math.cos(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'cy', (a = Math.sin(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'class', 'svelte-kujcv0'),
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
			e && o(s);
		}
	};
}
function ne(e) {
	let t, s, L, H, A, C, D, B, G, T, V, z, O, R, U, F, N, J;
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
						var a = c(t);
						s = l(a, 'g', { class: !0 }, 1);
						var r = c(s);
						for (let t = 0; t < n.length; t += 1) n[t].l(r);
						r.forEach(o), a.forEach(o), this.h();
					},
					h() {
						i(s, 'class', 'svelte-kujcv0'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-kujcv0');
					},
					m(e, a) {
						$(e, t, a), u(t, s);
						for (let t = 0; t < n.length; t += 1) n[t].m(s, null);
					},
					p(e, t) {
						100 & t && ((h = { length: e[5] }), (n = f(n, t, m, 1, e, h, a, s, S, se, null, Z)));
					},
					d(e) {
						e && o(t);
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
					(L = m()),
					(H = h('div')),
					(A = h('h2')),
					(C = p(e[0])),
					(D = m()),
					(B = h('p')),
					(G = m()),
					(T = h('div')),
					(V = h('input')),
					(z = m()),
					(O = h('input')),
					(R = m()),
					d(U.$$.fragment),
					this.h();
			},
			l(n) {
				t = l(n, 'MAIN', { class: !0 });
				var a = c(t);
				s = l(a, 'DIV', { class: !0 });
				var r = c(s);
				Q && Q.l(r), r.forEach(o), (L = g(a)), (H = l(a, 'DIV', { class: !0 }));
				var i = c(H);
				A = l(i, 'H2', { class: !0 });
				var $ = c(A);
				(C = v($, e[0])),
					$.forEach(o),
					(D = g(i)),
					(B = l(i, 'P', { class: !0 })),
					c(B).forEach(o),
					(G = g(i)),
					(T = l(i, 'DIV', { class: !0 }));
				var u = c(T);
				(V = l(u, 'INPUT', { type: !0, step: !0, class: !0 })),
					(z = g(u)),
					(O = l(u, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					u.forEach(o),
					(R = g(i)),
					x(U.$$.fragment, i),
					i.forEach(o),
					a.forEach(o),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-kujcv0'),
					i(A, 'class', 'svelte-kujcv0'),
					i(B, 'class', 'svelte-kujcv0'),
					i(V, 'type', 'number'),
					i(V, 'step', '0.001'),
					i(V, 'class', 'svelte-kujcv0'),
					i(O, 'type', 'range'),
					i(O, 'min', 0),
					i(O, 'max', ae),
					i(O, 'class', 'svelte-kujcv0'),
					i(T, 'class', 'controls svelte-kujcv0'),
					i(H, 'class', 'PhiSvgText svelte-kujcv0'),
					i(t, 'class', 'PhiSvg svelte-kujcv0');
			},
			m(n, a) {
				$(n, t, a),
					u(t, s),
					Q && Q.m(s, null),
					u(t, L),
					u(t, H),
					u(H, A),
					u(A, C),
					u(H, D),
					u(H, B),
					(B.innerHTML = e[1]),
					u(H, G),
					u(H, T),
					u(T, V),
					w(V, e[2]),
					u(T, z),
					u(T, O),
					w(O, e[5]),
					u(H, R),
					y(U, H, null),
					(F = !0),
					N ||
						((J = [
							b(window, 'resize', e[11]),
							b(V, 'input', e[12]),
							b(O, 'change', e[13]),
							b(O, 'input', e[13])
						]),
						(N = !0));
			},
			p(e, [t]) {
				K ? K.p && 512 & t && E(K, Y, e, e[9], t, ee, te) : Q && Q.p && 36 & t && Q.p(e, t),
					(!F || 1 & t) && k(C, e[0]),
					(!F || 2 & t) && (B.innerHTML = e[1]),
					4 & t && M(V.value) !== e[2] && w(V, e[2]),
					32 & t && w(O, e[5]);
			},
			i(e) {
				F || (j(Q, e), j(U.$$.fragment, e), (F = !0));
			},
			o(e) {
				P(Q, e), P(U.$$.fragment, e), (F = !1);
			},
			d(e) {
				e && o(t), Q && Q.d(e), I(U), (N = !1), q(J);
			}
		}
	);
}
let ae = 360;
function re(e, t, s) {
	let n,
		a,
		r,
		{ $$slots: l = {}, $$scope: c } = t,
		{ title: o = '' } = t,
		{ text: i = '' } = t,
		$ = 0.618033988749,
		u = W(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
	L(e, u, (e) => s(5, (n = e)));
	let { variante: f = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (o = e.title)),
				'text' in e && s(1, (i = e.text)),
				'variante' in e && s(8, (f = e.variante)),
				'$$scope' in e && s(9, (c = e.$$scope));
		}),
		H(u, (n = ae), n),
		[
			o,
			i,
			$,
			a,
			r,
			n,
			1.62 * 1.62,
			u,
			f,
			c,
			l,
			function () {
				s(3, (a = window.innerWidth)), s(4, (r = window.innerHeight));
			},
			function () {
				($ = M(this.value)), s(2, $);
			},
			function () {
				(n = M(this.value)), u.set(n);
			},
			() => {
				H(u, (n = n > 0 ? 0 : ae), n);
			}
		]
	);
}
class le extends e {
	constructor(e) {
		super(), t(this, e, re, ne, s, { title: 0, text: 1, variante: 8 });
	}
}
function ce(e) {
	let t, s, a, f;
	return {
		c() {
			(t = r('div')), (s = p('xxx')), this.h();
		},
		l(e) {
			t = l(e, 'div', { class: !0 }, 1);
			var n = c(t);
			(s = v(n, 'xxx')), n.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'svelte-1x7rf1j');
		},
		m(e, n) {
			$(e, t, n), u(t, s), (f = !0);
		},
		i(e) {
			f ||
				(n(() => {
					a || (a = A(t, X, {}, !0)), a.run(1);
				}),
				(f = !0));
		},
		o(e) {
			a || (a = A(t, X, {}, !1)), a.run(0), (f = !1);
		},
		d(e) {
			e && o(t), e && a && a.end();
		}
	};
}
function oe(e) {
	let t,
		s,
		n,
		f,
		h,
		m = e[2] && ce();
	const p = e[7].default,
		d = a(p, e, e[6], null);
	return {
		c() {
			(t = r('text')), m && m.c(), (s = C()), d && d.c(), this.h();
		},
		l(e) {
			t = l(e, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var n = c(t);
			m && m.l(n), (s = C()), d && d.l(n), n.forEach(o), this.h();
		},
		h() {
			i(t, 'x', e[0]),
				i(t, 'y', e[1]),
				i(t, 'font-size', '55'),
				i(t, 'class', 'draggable svelte-1x7rf1j');
		},
		m(a, r) {
			$(a, t, r),
				m && m.m(t, null),
				u(t, s),
				d && d.m(t, null),
				(n = !0),
				f ||
					((h = [b(window, 'mouseup', e[4]), b(t, 'mousedown', e[3]), b(t, 'mousemove', e[5])]),
					(f = !0));
		},
		p(e, [a]) {
			e[2]
				? m
					? 4 & a && j(m, 1)
					: ((m = ce()), m.c(), j(m, 1), m.m(t, s))
				: m &&
				  (D(),
				  P(m, 1, 1, () => {
						m = null;
				  }),
				  B()),
				d && d.p && 64 & a && E(d, p, e, e[6], a, null, null),
				(!n || 1 & a) && i(t, 'x', e[0]),
				(!n || 2 & a) && i(t, 'y', e[1]);
		},
		i(e) {
			n || (j(m), j(d, e), (n = !0));
		},
		o(e) {
			P(m), P(d, e), (n = !1);
		},
		d(e) {
			e && o(t), m && m.d(), d && d.d(e), (f = !1), q(h);
		}
	};
}
function ie(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ x: r = 0 } = t,
		{ y: l = 0 } = t,
		c = !1;
	return (
		(e.$$set = (e) => {
			'x' in e && s(0, (r = e.x)),
				'y' in e && s(1, (l = e.y)),
				'$$scope' in e && s(6, (a = e.$$scope));
		}),
		[
			r,
			l,
			c,
			() => {
				s(2, (c = !0));
			},
			function () {
				s(2, (c = !1));
			},
			function (e) {
				c && (s(0, (r += 2.5 * e.movementX)), s(1, (l += 2.5 * e.movementY)));
			},
			a,
			n
		]
	);
}
class $e extends e {
	constructor(e) {
		super(), t(this, e, ie, oe, s, { x: 0, y: 1 });
	}
}
function ue(e) {
	let t, s, n, r, u;
	const f = e[4].default,
		m = a(f, e, e[3], null);
	return {
		c() {
			(t = h('form')), m && m.c(), this.h();
		},
		l(e) {
			t = l(e, 'FORM', { name: !0, class: !0 });
			var s = c(t);
			m && m.l(s), s.forEach(o), this.h();
		},
		h() {
			i(t, 'name', e[0]), i(t, 'class', (s = G(e[2][e[1]]) + ' svelte-75cf6k'));
		},
		m(s, a) {
			$(s, t, a), m && m.m(t, null), (n = !0), r || ((u = b(t, 'submit', T(e[5]))), (r = !0));
		},
		p(e, [a]) {
			m && m.p && 8 & a && E(m, f, e, e[3], a, null, null),
				(!n || 1 & a) && i(t, 'name', e[0]),
				(!n || (2 & a && s !== (s = G(e[2][e[1]]) + ' svelte-75cf6k'))) && i(t, 'class', s);
		},
		i(e) {
			n || (j(m, e), (n = !0));
		},
		o(e) {
			P(m, e), (n = !1);
		},
		d(e) {
			e && o(t), m && m.d(e), (r = !1), u();
		}
	};
}
function fe(e, t, s) {
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
			['Variante_0', 'Form_1'],
			a,
			n,
			function (t) {
				V(e, t);
			}
		]
	);
}
class he extends e {
	constructor(e) {
		super(), t(this, e, fe, ue, s, { name: 0, variante: 1 });
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
				i(t, 'class', 'svelte-7pbckl');
		},
		m(a, r) {
			$(a, t, r), s || ((n = b(t, 'input', e[2])), (s = !0));
		},
		p(e, [s]) {
			1 & s && t.value !== e[0] && (t.value = e[0]), 2 & s && i(t, 'placeholder', e[1]);
		},
		i: z,
		o: z,
		d(e) {
			e && o(t), (s = !1), n();
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
function ge(e, t, s) {
	const n = e.slice();
	return (n[13] = t[s]), n;
}
function ve(e, t, s) {
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
				c(t).forEach(o),
				this.h();
		},
		h() {
			i(t, 'cx', e[19].cx),
				i(t, 'cy', e[19].cy),
				i(t, 'r', e[19].r),
				i(t, 'id', e[19].id),
				i(t, 'fill', 'none'),
				i(t, 'stroke', 'black'),
				i(t, 'class', 'svelte-eqgbnf');
		},
		m(e, s) {
			$(e, t, s);
		},
		p: z,
		d(e) {
			e && o(t);
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
			t = v(e, s);
		},
		m(e, s) {
			$(e, t, s);
		},
		p: z,
		d(e) {
			e && o(t);
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
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
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
			t = v(e, s);
		},
		m(e, s) {
			$(e, t, s);
		},
		p(e, n) {
			1 & n && s !== (s = e[13] + '') && k(t, s);
		},
		d(e) {
			e && o(t);
		}
	};
}
function ke(e) {
	let t, s;
	return (
		(t = new $e({ props: { x: Le, y: He, $$slots: { default: [Ee] }, $$scope: { ctx: e } } })),
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
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Me(e) {
	let t,
		s,
		n,
		a,
		f,
		h = e[4],
		m = [];
	for (let r = 0; r < h.length; r += 1) m[r] = we(xe(e, h, r));
	let p = e[5],
		d = [];
	for (let r = 0; r < p.length; r += 1) d[r] = be(ve(e, p, r));
	const g = (e) =>
		P(d[e], 1, 1, () => {
			d[e] = null;
		});
	let v = e[0],
		x = [];
	for (let r = 0; r < v.length; r += 1) x[r] = ke(ge(e, v, r));
	const w = (e) =>
		P(x[e], 1, 1, () => {
			x[e] = null;
		});
	return {
		c() {
			(t = r('svg')), (s = r('g'));
			for (let e = 0; e < m.length; e += 1) m[e].c();
			n = C();
			for (let e = 0; e < d.length; e += 1) d[e].c();
			a = C();
			for (let e = 0; e < x.length; e += 1) x[e].c();
			this.h();
		},
		l(e) {
			t = l(e, 'svg', { viewBox: !0, class: !0 }, 1);
			var r = c(t);
			s = l(r, 'g', { transform: !0, class: !0 }, 1);
			var i = c(s);
			for (let t = 0; t < m.length; t += 1) m[t].l(i);
			n = C();
			for (let t = 0; t < d.length; t += 1) d[t].l(i);
			a = C();
			for (let t = 0; t < x.length; t += 1) x[t].l(i);
			i.forEach(o), r.forEach(o), this.h();
		},
		h() {
			i(s, 'transform', 'translate(150,150) scale(0.7)'),
				i(s, 'class', 'svelte-eqgbnf'),
				i(t, 'viewBox', '-1 -1 ' + e[3].width + ' ' + e[3].height),
				i(t, 'class', 'svelte-eqgbnf');
		},
		m(r, l) {
			$(r, t, l), u(t, s);
			for (let e = 0; e < m.length; e += 1) m[e].m(s, null);
			u(s, n);
			for (let e = 0; e < d.length; e += 1) d[e].m(s, null);
			u(s, a);
			for (let e = 0; e < x.length; e += 1) x[e].m(s, null);
			e[10](t), (f = !0);
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
					const r = ve(e, p, n);
					d[n] ? (d[n].p(r, t), j(d[n], 1)) : ((d[n] = be(r)), d[n].c(), j(d[n], 1), d[n].m(s, a));
				}
				for (D(), n = p.length; n < d.length; n += 1) g(n);
				B();
			}
			if (1 & t) {
				let n;
				for (v = e[0], n = 0; n < v.length; n += 1) {
					const a = ge(e, v, n);
					x[n]
						? (x[n].p(a, t), j(x[n], 1))
						: ((x[n] = ke(a)), x[n].c(), j(x[n], 1), x[n].m(s, null));
				}
				for (D(), n = v.length; n < x.length; n += 1) w(n);
				B();
			}
		},
		i(e) {
			if (!f) {
				for (let e = 0; e < p.length; e += 1) j(d[e]);
				for (let e = 0; e < v.length; e += 1) j(x[e]);
				f = !0;
			}
		},
		o(e) {
			d = d.filter(Boolean);
			for (let t = 0; t < d.length; t += 1) P(d[t]);
			x = x.filter(Boolean);
			for (let t = 0; t < x.length; t += 1) P(x[t]);
			f = !1;
		},
		d(s) {
			s && o(t), O(m, s), O(d, s), O(x, s), e[10](null);
		}
	};
}
function je(e) {
	let t, s, n, a, r;
	function l(t) {
		e[9](t);
	}
	let c = { placeholder: 'Your word' };
	return (
		void 0 !== e[1] && (c.value = e[1]),
		(t = new de({ props: c })),
		R.push(() => U(t, 'value', l)),
		(a = new _({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = g(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				y(t, e, s), $(e, n, s), y(a, e, s), (r = !0);
			},
			p(e, n) {
				const a = {};
				!s && 2 & n && ((s = !0), (a.value = e[1]), F(() => (s = !1))), t.$set(a);
			},
			i(e) {
				r || (j(t.$$.fragment, e), j(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				P(t.$$.fragment, e), P(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				I(t, e), e && o(n), I(a, e);
			}
		}
	);
}
function Pe(e) {
	let t, s, n, a, r, f, w, b, E, k;
	return (
		(E = new he({ props: { variante: 1, $$slots: { default: [je] }, $$scope: { ctx: e } } })),
		E.$on('submit', e[6]),
		{
			c() {
				(t = h('div')),
					(s = h('hgroup')),
					(n = h('h2')),
					(a = p('Meta-Mapa +0+1234')),
					(r = m()),
					(f = h('p')),
					(w = p('Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					(b = m()),
					d(E.$$.fragment),
					this.h();
			},
			l(e) {
				t = l(e, 'DIV', { slot: !0, class: !0 });
				var i = c(t);
				s = l(i, 'HGROUP', { class: !0 });
				var $ = c(s);
				n = l($, 'H2', { class: !0 });
				var u = c(n);
				(a = v(u, 'Meta-Mapa +0+1234')), u.forEach(o), (r = g($)), (f = l($, 'P', { class: !0 }));
				var h = c(f);
				(w = v(h, 'Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					h.forEach(o),
					$.forEach(o),
					(b = g(i)),
					x(E.$$.fragment, i),
					i.forEach(o),
					this.h();
			},
			h() {
				i(n, 'class', 'svelte-eqgbnf'),
					i(f, 'class', 'svelte-eqgbnf'),
					i(s, 'class', 'svelte-eqgbnf'),
					i(t, 'slot', 'subarea1'),
					i(t, 'class', 'svelte-eqgbnf');
			},
			m(e, l) {
				$(e, t, l),
					u(t, s),
					u(s, n),
					u(n, a),
					u(s, r),
					u(s, f),
					u(f, w),
					u(t, b),
					y(E, t, null),
					(k = !0);
			},
			p(e, t) {
				const s = {};
				4194306 & t && (s.$$scope = { dirty: t, ctx: e }), E.$set(s);
			},
			i(e) {
				k || (j(E.$$.fragment, e), (k = !0));
			},
			o(e) {
				P(E.$$.fragment, e), (k = !1);
			},
			d(e) {
				e && o(t), I(E);
			}
		}
	);
}
function Ie(e) {
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
				var n = c(t);
				x(s.$$.fragment, n), n.forEach(o), this.h();
			},
			h() {
				i(t, 'slot', 'subarea2'), i(t, 'class', 'svelte-eqgbnf');
			},
			m(e, a) {
				$(e, t, a), y(s, t, null), (n = !0);
			},
			p: z,
			i(e) {
				n || (j(s.$$.fragment, e), (n = !0));
			},
			o(e) {
				P(s.$$.fragment, e), (n = !1);
			},
			d(e) {
				e && o(t), I(s);
			}
		}
	);
}
function qe(e) {
	let t, s;
	return (
		(t = new J({
			props: {
				variante: 1,
				$$slots: { subarea2: [Ie], subarea1: [Pe], default: [Me] },
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
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
let Le = 0,
	He = 0;
function Se(e, t, s) {
	let n = [],
		a = '',
		r = { width: 1e3, height: 1e3 },
		l = r.width / 4,
		c = r.width / 2;
	let o = null;
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
		o,
		r,
		[
			{ id: 'circulogrande', cx: c, cy: c, r: c },
			{ id: 'circuloizda', cx: l, cy: c, r: l },
			{ id: 'circulodcha', cx: 3 * l, cy: c, r: l }
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
		() => i(o),
		function (e) {
			(a = e), s(1, a);
		},
		function (e) {
			R[e ? 'unshift' : 'push'](() => {
				(o = e), s(2, o);
			});
		}
	];
}
class Ae extends e {
	constructor(e) {
		super(), t(this, e, Se, qe, s, {});
	}
}
function Ce(e) {
	let t, s;
	const n = e[2].default,
		r = a(n, e, e[1], null);
	return {
		c() {
			(t = h('div')), r && r.c(), this.h();
		},
		l(e) {
			t = l(e, 'DIV', { class: !0 });
			var s = c(t);
			r && r.l(s), s.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'Alert svelte-1s0l5il'), N(t, 'haserror', !e[0]);
		},
		m(e, n) {
			$(e, t, n), r && r.m(t, null), (s = !0);
		},
		p(e, [s]) {
			r && r.p && 2 & s && E(r, n, e, e[1], s, null, null), 1 & s && N(t, 'haserror', !e[0]);
		},
		i(e) {
			s || (j(r, e), (s = !0));
		},
		o(e) {
			P(r, e), (s = !1);
		},
		d(e) {
			e && o(t), r && r.d(e);
		}
	};
}
function De(e, t, s) {
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
		super(), t(this, e, De, Ce, s, { haserror: 0 });
	}
}
function Ge(e) {
	let t, s, n, a, r;
	function l(t) {
		e[5](t);
	}
	let c = {};
	return (
		void 0 !== e[0] && (c.value = e[0]),
		(t = new de({ props: c })),
		R.push(() => U(t, 'value', l)),
		(a = new _({ props: { variante: 6, text: 'Go!', valorinput: e[0] } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = g(e)), x(a.$$.fragment, e);
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
				r || (j(t.$$.fragment, e), j(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				P(t.$$.fragment, e), P(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				I(t, e), e && o(n), I(a, e);
			}
		}
	);
}
function Te(e) {
	let t, s;
	return (
		(t = new Be({ props: { $$slots: { default: [Ve] }, $$scope: { ctx: e } } })),
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
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Ve(e) {
	let t;
	return {
		c() {
			t = p(e[2]);
		},
		l(s) {
			t = v(s, e[2]);
		},
		m(e, s) {
			$(e, t, s);
		},
		p(e, s) {
			4 & s && k(t, e[2]);
		},
		d(e) {
			e && o(t);
		}
	};
}
function ze(e) {
	let t, s, n, a, r, f, w, b, E, M, q, L, H, S, A, C, G, T, V, z, O, R;
	(L = new he({ props: { variante: 0, $$slots: { default: [Ge] }, $$scope: { ctx: e } } })),
		L.$on('submit', e[4]);
	let U = 1 == e[1] && Te(e);
	return {
		c() {
			(t = h('header')),
				(s = h('h2')),
				(n = p('Gematria App')),
				(a = m()),
				(r = h('p')),
				(f = p('Lo que valen las palabras hebreas')),
				(w = m()),
				(b = h('main')),
				(E = h('h2')),
				(M = p(e[3])),
				(q = m()),
				d(L.$$.fragment),
				(H = m()),
				U && U.c(),
				(S = m()),
				(A = h('footer')),
				(C = h('small')),
				(G = p('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(T = m()),
				(V = h('small')),
				(z = h('a')),
				(O = p('Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				this.h();
		},
		l(i) {
			t = l(i, 'HEADER', { class: !0 });
			var $ = c(t);
			s = l($, 'H2', { class: !0 });
			var u = c(s);
			(n = v(u, 'Gematria App')), u.forEach(o), (a = g($)), (r = l($, 'P', { class: !0 }));
			var h = c(r);
			(f = v(h, 'Lo que valen las palabras hebreas')),
				h.forEach(o),
				$.forEach(o),
				(w = g(i)),
				(b = l(i, 'MAIN', { class: !0 }));
			var m = c(b);
			E = l(m, 'H2', { class: !0 });
			var p = c(E);
			(M = v(p, e[3])),
				p.forEach(o),
				(q = g(m)),
				x(L.$$.fragment, m),
				(H = g(m)),
				U && U.l(m),
				m.forEach(o),
				(S = g(i)),
				(A = l(i, 'FOOTER', { class: !0 }));
			var d = c(A);
			C = l(d, 'SMALL', { class: !0 });
			var y = c(C);
			(G = v(y, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				y.forEach(o),
				(T = g(d)),
				(V = l(d, 'SMALL', { class: !0 }));
			var k = c(V);
			z = l(k, 'A', { href: !0, target: !0, class: !0 });
			var j = c(z);
			(O = v(j, 'Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				j.forEach(o),
				k.forEach(o),
				d.forEach(o),
				this.h();
		},
		h() {
			i(s, 'class', 'svelte-ntgnaa'),
				i(r, 'class', 'svelte-ntgnaa'),
				i(t, 'class', 'svelte-ntgnaa'),
				i(E, 'class', 'result svelte-ntgnaa'),
				i(b, 'class', 'svelte-ntgnaa'),
				i(C, 'class', 'svelte-ntgnaa'),
				i(z, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(z, 'target', '_blank'),
				i(z, 'class', 'svelte-ntgnaa'),
				i(V, 'class', 'svelte-ntgnaa'),
				i(A, 'class', 'svelte-ntgnaa');
		},
		m(e, l) {
			$(e, t, l),
				u(t, s),
				u(s, n),
				u(t, a),
				u(t, r),
				u(r, f),
				$(e, w, l),
				$(e, b, l),
				u(b, E),
				u(E, M),
				u(b, q),
				y(L, b, null),
				u(b, H),
				U && U.m(b, null),
				$(e, S, l),
				$(e, A, l),
				u(A, C),
				u(C, G),
				u(A, T),
				u(A, V),
				u(V, z),
				u(z, O),
				(R = !0);
		},
		p(e, [t]) {
			(!R || 8 & t) && k(M, e[3]);
			const s = {};
			513 & t && (s.$$scope = { dirty: t, ctx: e }),
				L.$set(s),
				1 == e[1]
					? U
						? (U.p(e, t), 2 & t && j(U, 1))
						: ((U = Te(e)), U.c(), j(U, 1), U.m(b, null))
					: U &&
					  (D(),
					  P(U, 1, 1, () => {
							U = null;
					  }),
					  B());
		},
		i(e) {
			R || (j(L.$$.fragment, e), j(U), (R = !0));
		},
		o(e) {
			P(L.$$.fragment, e), P(U), (R = !1);
		},
		d(e) {
			e && o(t), e && o(w), e && o(b), I(L), U && U.d(), e && o(S), e && o(A);
		}
	};
}
function Oe(e, t, s) {
	let n,
		a = '',
		r = !1,
		l = '',
		c = [];
	return (
		s(3, (n = 0)),
		[
			a,
			r,
			l,
			n,
			function () {
				s(1, (r = !1)), s(3, (n = 0)), s(0, a), (c = a.split('')), s(2, (l = ''));
				for (const e of c)
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
		super(), t(this, e, Oe, ze, s, {});
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
			p: z,
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
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
			p: z,
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Ne(e) {
	let t, s;
	return (
		(t = new Ae({})),
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
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
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
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				P(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				I(t, e);
			}
		}
	);
}
function Je(e) {
	let t, s, n, a, r, l, c, i;
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
		(c = new Q({
			props: { id: 'gematria', variante: 1, $$slots: { default: [_e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment),
					(s = m()),
					d(n.$$.fragment),
					(a = m()),
					d(r.$$.fragment),
					(l = m()),
					d(c.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e),
					(s = g(e)),
					x(n.$$.fragment, e),
					(a = g(e)),
					x(r.$$.fragment, e),
					(l = g(e)),
					x(c.$$.fragment, e);
			},
			m(e, o) {
				y(t, e, o),
					$(e, s, o),
					y(n, e, o),
					$(e, a, o),
					y(r, e, o),
					$(e, l, o),
					y(c, e, o),
					(i = !0);
			},
			p(e, [s]) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), n.$set(l);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: e }), r.$set(o);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), c.$set(i);
			},
			i(e) {
				i ||
					(j(t.$$.fragment, e),
					j(n.$$.fragment, e),
					j(r.$$.fragment, e),
					j(c.$$.fragment, e),
					(i = !0));
			},
			o(e) {
				P(t.$$.fragment, e),
					P(n.$$.fragment, e),
					P(r.$$.fragment, e),
					P(c.$$.fragment, e),
					(i = !1);
			},
			d(e) {
				I(t, e), e && o(s), I(n, e), e && o(a), I(r, e), e && o(l), I(c, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Je, s, {});
	}
}
