import {
	S as e,
	i as t,
	s,
	Q as a,
	M as n,
	E as l,
	c as r,
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
	a4 as y,
	r as w,
	H as b,
	O as k,
	h as E,
	a5 as M,
	w as q,
	x as I,
	y as L,
	K as P,
	a0 as D,
	a6 as H,
	a7 as S,
	R as z,
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
import { B as _, G as J, C as Y, c as K } from '../../chunks/Cover-12fb2afa.js';
import { S as Q } from '../../chunks/Section-b530c020.js';
import { t as W } from '../../chunks/index-c4bdeab8.js';
import { f as X } from '../../chunks/index-65311448.js';
import '../../chunks/index-cc16b092.js';
import '../../chunks/index-78b22dae.js';
function Z(e, t, s) {
	const a = e.slice();
	return (a[17] = t[s]), (a[19] = s), a;
}
const ee = (e) => ({}),
	te = (e) => ({});
function se(e, t) {
	let s, a, n;
	return {
		key: e,
		first: null,
		c() {
			(s = l('circle')), this.h();
		},
		l(e) {
			(s = r(e, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), o(s).forEach(c), this.h();
		},
		h() {
			i(s, 'r', t[6]),
				i(s, 'cx', (a = Math.cos(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'cy', (n = Math.sin(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'class', 'svelte-xa2qay'),
				(this.first = s);
		},
		m(e, t) {
			$(e, s, t);
		},
		p(e, l) {
			(t = e),
				36 & l && a !== (a = Math.cos(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cx', a),
				36 & l && n !== (n = Math.sin(t[19] * t[2] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cy', n);
		},
		d(e) {
			e && c(s);
		}
	};
}
function ae(e) {
	let t, s, D, H, z, A, C, B, G, T, j, V, O, R, U, F, N, J;
	a(e[11]);
	const Y = e[10].hasvideo,
		K = n(Y, e, e[9], te),
		Q =
			K ||
			(function (e) {
				let t,
					s,
					a = [],
					n = new Map(),
					h = { length: e[5] };
				const m = (e) => e[19];
				for (let l = 0; l < h.length; l += 1) {
					let t = Z(e, h, l),
						s = m(t);
					n.set(s, (a[l] = se(s, t)));
				}
				return {
					c() {
						(t = l('svg')), (s = l('g'));
						for (let e = 0; e < a.length; e += 1) a[e].c();
						this.h();
					},
					l(e) {
						t = r(e, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var n = o(t);
						s = r(n, 'g', { class: !0 }, 1);
						var l = o(s);
						for (let t = 0; t < a.length; t += 1) a[t].l(l);
						l.forEach(c), n.forEach(c), this.h();
					},
					h() {
						i(s, 'class', 'svelte-xa2qay'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-xa2qay');
					},
					m(e, n) {
						$(e, t, n), f(t, s);
						for (let t = 0; t < a.length; t += 1) a[t].m(s, null);
					},
					p(e, t) {
						100 & t && ((h = { length: e[5] }), (a = u(a, t, m, 1, e, h, n, s, S, se, null, Z)));
					},
					d(e) {
						e && c(t);
						for (let t = 0; t < a.length; t += 1) a[t].d();
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
					(D = m()),
					(H = h('div')),
					(z = h('h2')),
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
			l(a) {
				t = r(a, 'MAIN', { class: !0 });
				var n = o(t);
				s = r(n, 'DIV', { class: !0 });
				var l = o(s);
				Q && Q.l(l), l.forEach(c), (D = v(n)), (H = r(n, 'DIV', { class: !0 }));
				var i = o(H);
				z = r(i, 'H2', { class: !0 });
				var $ = o(z);
				(A = g($, e[0])),
					$.forEach(c),
					(C = v(i)),
					(B = r(i, 'P', { class: !0 })),
					o(B).forEach(c),
					(G = v(i)),
					(T = r(i, 'DIV', { class: !0 }));
				var f = o(T);
				(j = r(f, 'INPUT', { type: !0, step: !0, class: !0 })),
					(V = v(f)),
					(O = r(f, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					f.forEach(c),
					(R = v(i)),
					x(U.$$.fragment, i),
					i.forEach(c),
					n.forEach(c),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-xa2qay'),
					i(z, 'class', 'svelte-xa2qay'),
					i(B, 'class', 'svelte-xa2qay'),
					i(j, 'type', 'number'),
					i(j, 'step', '0.001'),
					i(j, 'class', 'svelte-xa2qay'),
					i(O, 'type', 'range'),
					i(O, 'min', 0),
					i(O, 'max', ne),
					i(O, 'class', 'svelte-xa2qay'),
					i(T, 'class', 'controls svelte-xa2qay'),
					i(H, 'class', 'PhiSvgText svelte-xa2qay'),
					i(t, 'class', 'PhiSvg svelte-xa2qay');
			},
			m(a, n) {
				$(a, t, n),
					f(t, s),
					Q && Q.m(s, null),
					f(t, D),
					f(t, H),
					f(H, z),
					f(z, A),
					f(H, C),
					f(H, B),
					(B.innerHTML = e[1]),
					f(H, G),
					f(H, T),
					f(T, j),
					y(j, e[2]),
					f(T, V),
					f(T, O),
					y(O, e[5]),
					f(H, R),
					w(U, H, null),
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
				K ? K.p && 512 & t && k(K, Y, e, e[9], t, ee, te) : Q && Q.p && 36 & t && Q.p(e, t),
					(!F || 1 & t) && E(A, e[0]),
					(!F || 2 & t) && (B.innerHTML = e[1]),
					4 & t && M(j.value) !== e[2] && y(j, e[2]),
					32 & t && y(O, e[5]);
			},
			i(e) {
				F || (q(Q, e), q(U.$$.fragment, e), (F = !0));
			},
			o(e) {
				I(Q, e), I(U.$$.fragment, e), (F = !1);
			},
			d(e) {
				e && c(t), Q && Q.d(e), L(U), (N = !1), P(J);
			}
		}
	);
}
let ne = 360;
function le(e, t, s) {
	let a,
		n,
		l,
		{ $$slots: r = {}, $$scope: o } = t,
		{ title: c = '' } = t,
		{ text: i = '' } = t,
		$ = 0.618033988749,
		f = W(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
	D(e, f, (e) => s(5, (a = e)));
	let { variante: u = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (c = e.title)),
				'text' in e && s(1, (i = e.text)),
				'variante' in e && s(8, (u = e.variante)),
				'$$scope' in e && s(9, (o = e.$$scope));
		}),
		H(f, (a = ne), a),
		[
			c,
			i,
			$,
			n,
			l,
			a,
			1.62 * 1.62,
			f,
			u,
			o,
			r,
			function () {
				s(3, (n = window.innerWidth)), s(4, (l = window.innerHeight));
			},
			function () {
				($ = M(this.value)), s(2, $);
			},
			function () {
				(a = M(this.value)), f.set(a);
			},
			() => {
				H(f, (a = a > 0 ? 0 : ne), a);
			}
		]
	);
}
class re extends e {
	constructor(e) {
		super(), t(this, e, le, ae, s, { title: 0, text: 1, variante: 8 });
	}
}
function oe(e) {
	let t, s, n, u;
	return {
		c() {
			(t = l('div')), (s = p('xxx')), this.h();
		},
		l(e) {
			t = r(e, 'div', { class: !0 }, 1);
			var a = o(t);
			(s = g(a, 'xxx')), a.forEach(c), this.h();
		},
		h() {
			i(t, 'class', 'svelte-ztvkln');
		},
		m(e, a) {
			$(e, t, a), f(t, s), (u = !0);
		},
		i(e) {
			u ||
				(a(() => {
					n || (n = z(t, X, {}, !0)), n.run(1);
				}),
				(u = !0));
		},
		o(e) {
			n || (n = z(t, X, {}, !1)), n.run(0), (u = !1);
		},
		d(e) {
			e && c(t), e && n && n.end();
		}
	};
}
function ce(e) {
	let t,
		s,
		a,
		u,
		h,
		m = e[2] && oe();
	const p = e[7].default,
		d = n(p, e, e[6], null);
	return {
		c() {
			(t = l('text')), m && m.c(), (s = A()), d && d.c(), this.h();
		},
		l(e) {
			t = r(e, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var a = o(t);
			m && m.l(a), (s = A()), d && d.l(a), a.forEach(c), this.h();
		},
		h() {
			i(t, 'x', e[0]),
				i(t, 'y', e[1]),
				i(t, 'font-size', '55'),
				i(t, 'class', 'draggable svelte-ztvkln');
		},
		m(n, l) {
			$(n, t, l),
				m && m.m(t, null),
				f(t, s),
				d && d.m(t, null),
				(a = !0),
				u ||
					((h = [b(window, 'mouseup', e[4]), b(t, 'mousedown', e[3]), b(t, 'mousemove', e[5])]),
					(u = !0));
		},
		p(e, [n]) {
			e[2]
				? m
					? 4 & n && q(m, 1)
					: ((m = oe()), m.c(), q(m, 1), m.m(t, s))
				: m &&
				  (C(),
				  I(m, 1, 1, () => {
						m = null;
				  }),
				  B()),
				d && d.p && 64 & n && k(d, p, e, e[6], n, null, null),
				(!a || 1 & n) && i(t, 'x', e[0]),
				(!a || 2 & n) && i(t, 'y', e[1]);
		},
		i(e) {
			a || (q(m), q(d, e), (a = !0));
		},
		o(e) {
			I(m), I(d, e), (a = !1);
		},
		d(e) {
			e && c(t), m && m.d(), d && d.d(e), (u = !1), P(h);
		}
	};
}
function ie(e, t, s) {
	let { $$slots: a = {}, $$scope: n } = t,
		{ x: l = 0 } = t,
		{ y: r = 0 } = t,
		o = !1;
	return (
		(e.$$set = (e) => {
			'x' in e && s(0, (l = e.x)),
				'y' in e && s(1, (r = e.y)),
				'$$scope' in e && s(6, (n = e.$$scope));
		}),
		[
			l,
			r,
			o,
			() => {
				s(2, (o = !0));
			},
			function () {
				s(2, (o = !1));
			},
			function (e) {
				o && (s(0, (l += 2.5 * e.movementX)), s(1, (r += 2.5 * e.movementY)));
			},
			n,
			a
		]
	);
}
class $e extends e {
	constructor(e) {
		super(), t(this, e, ie, ce, s, { x: 0, y: 1 });
	}
}
function fe(e) {
	let t, s, a, l, f;
	const u = e[4].default,
		m = n(u, e, e[3], null);
	return {
		c() {
			(t = h('form')), m && m.c(), this.h();
		},
		l(e) {
			t = r(e, 'FORM', { name: !0, class: !0 });
			var s = o(t);
			m && m.l(s), s.forEach(c), this.h();
		},
		h() {
			i(t, 'name', e[0]), i(t, 'class', (s = G(e[2][e[1]]) + ' svelte-z449we'));
		},
		m(s, n) {
			$(s, t, n), m && m.m(t, null), (a = !0), l || ((f = b(t, 'submit', T(e[5]))), (l = !0));
		},
		p(e, [n]) {
			m && m.p && 8 & n && k(m, u, e, e[3], n, null, null),
				(!a || 1 & n) && i(t, 'name', e[0]),
				(!a || (2 & n && s !== (s = G(e[2][e[1]]) + ' svelte-z449we'))) && i(t, 'class', s);
		},
		i(e) {
			a || (q(m, e), (a = !0));
		},
		o(e) {
			I(m, e), (a = !1);
		},
		d(e) {
			e && c(t), m && m.d(e), (l = !1), f();
		}
	};
}
function ue(e, t, s) {
	let { $$slots: a = {}, $$scope: n } = t,
		{ name: l = 'My form group' } = t,
		{ variante: r = 0 } = t;
	return (
		(e.$$set = (e) => {
			'name' in e && s(0, (l = e.name)),
				'variante' in e && s(1, (r = e.variante)),
				'$$scope' in e && s(3, (n = e.$$scope));
		}),
		[
			l,
			r,
			['Form_0', 'Form_1'],
			n,
			a,
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
	let t, s, a;
	return {
		c() {
			(t = h('input')), this.h();
		},
		l(e) {
			(t = r(e, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(t.value = e[0]),
				i(t, 'placeholder', e[1]),
				i(t, 'type', ''),
				i(t, 'name', ''),
				i(t, 'class', 'svelte-11h7hq1');
		},
		m(n, l) {
			$(n, t, l), s || ((a = b(t, 'input', e[2])), (s = !0));
		},
		p(e, [s]) {
			1 & s && t.value !== e[0] && (t.value = e[0]), 2 & s && i(t, 'placeholder', e[1]);
		},
		i: V,
		o: V,
		d(e) {
			e && c(t), (s = !1), a();
		}
	};
}
function pe(e, t, s) {
	let { value: a = '' } = t,
		{ placeholder: n = '"...בראשית ברא אלהים"' } = t;
	return (
		(e.$$set = (e) => {
			'value' in e && s(0, (a = e.value)), 'placeholder' in e && s(1, (n = e.placeholder));
		}),
		[a, n, (e) => s(0, (a = e.target.value))]
	);
}
class de extends e {
	constructor(e) {
		super(), t(this, e, pe, me, s, { value: 0, placeholder: 1 });
	}
}
function ve(e, t, s) {
	const a = e.slice();
	return (a[13] = t[s]), a;
}
function ge(e, t, s) {
	const a = e.slice();
	return (a[16] = t[s]), a;
}
function xe(e, t, s) {
	const a = e.slice();
	return (a[19] = t[s]), a;
}
function ye(e) {
	let t;
	return {
		c() {
			(t = l('circle')), this.h();
		},
		l(e) {
			(t = r(e, 'circle', { cx: !0, cy: !0, r: !0, id: !0, fill: !0, stroke: !0, class: !0 }, 1)),
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
				i(t, 'class', 'svelte-1xybfkt');
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
function we(e) {
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
			props: { x: e[16].xpos, y: e[16].ypos, $$slots: { default: [we] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				4194304 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
			}
		}
	);
}
function ke(e) {
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
		p(e, a) {
			1 & a && s !== (s = e[13] + '') && E(t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Ee(e) {
	let t, s;
	return (
		(t = new $e({ props: { x: De, y: He, $$slots: { default: [ke] }, $$scope: { ctx: e } } })),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				4194305 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
			}
		}
	);
}
function Me(e) {
	let t,
		s,
		a,
		n,
		u,
		h = e[4],
		m = [];
	for (let l = 0; l < h.length; l += 1) m[l] = ye(xe(e, h, l));
	let p = e[5],
		d = [];
	for (let l = 0; l < p.length; l += 1) d[l] = be(ge(e, p, l));
	const v = (e) =>
		I(d[e], 1, 1, () => {
			d[e] = null;
		});
	let g = e[0],
		x = [];
	for (let l = 0; l < g.length; l += 1) x[l] = Ee(ve(e, g, l));
	const y = (e) =>
		I(x[e], 1, 1, () => {
			x[e] = null;
		});
	return {
		c() {
			(t = l('svg')), (s = l('g'));
			for (let e = 0; e < m.length; e += 1) m[e].c();
			a = A();
			for (let e = 0; e < d.length; e += 1) d[e].c();
			n = A();
			for (let e = 0; e < x.length; e += 1) x[e].c();
			this.h();
		},
		l(e) {
			t = r(e, 'svg', { viewBox: !0, class: !0 }, 1);
			var l = o(t);
			s = r(l, 'g', { transform: !0, class: !0 }, 1);
			var i = o(s);
			for (let t = 0; t < m.length; t += 1) m[t].l(i);
			a = A();
			for (let t = 0; t < d.length; t += 1) d[t].l(i);
			n = A();
			for (let t = 0; t < x.length; t += 1) x[t].l(i);
			i.forEach(c), l.forEach(c), this.h();
		},
		h() {
			i(s, 'transform', 'translate(150,150) scale(0.7)'),
				i(s, 'class', 'svelte-1xybfkt'),
				i(t, 'viewBox', '-1 -1 ' + e[3].width + ' ' + e[3].height),
				i(t, 'class', 'svelte-1xybfkt');
		},
		m(l, r) {
			$(l, t, r), f(t, s);
			for (let e = 0; e < m.length; e += 1) m[e].m(s, null);
			f(s, a);
			for (let e = 0; e < d.length; e += 1) d[e].m(s, null);
			f(s, n);
			for (let e = 0; e < x.length; e += 1) x[e].m(s, null);
			e[10](t), (u = !0);
		},
		p(e, t) {
			if (16 & t) {
				let n;
				for (h = e[4], n = 0; n < h.length; n += 1) {
					const l = xe(e, h, n);
					m[n] ? m[n].p(l, t) : ((m[n] = ye(l)), m[n].c(), m[n].m(s, a));
				}
				for (; n < m.length; n += 1) m[n].d(1);
				m.length = h.length;
			}
			if (32 & t) {
				let a;
				for (p = e[5], a = 0; a < p.length; a += 1) {
					const l = ge(e, p, a);
					d[a] ? (d[a].p(l, t), q(d[a], 1)) : ((d[a] = be(l)), d[a].c(), q(d[a], 1), d[a].m(s, n));
				}
				for (C(), a = p.length; a < d.length; a += 1) v(a);
				B();
			}
			if (1 & t) {
				let a;
				for (g = e[0], a = 0; a < g.length; a += 1) {
					const n = ve(e, g, a);
					x[a]
						? (x[a].p(n, t), q(x[a], 1))
						: ((x[a] = Ee(n)), x[a].c(), q(x[a], 1), x[a].m(s, null));
				}
				for (C(), a = g.length; a < x.length; a += 1) y(a);
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
	let t, s, a, n, l;
	function r(t) {
		e[9](t);
	}
	let o = { placeholder: 'Your word' };
	return (
		void 0 !== e[1] && (o.value = e[1]),
		(t = new de({ props: o })),
		R.push(() => U(t, 'value', r)),
		(n = new _({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				d(t.$$.fragment), (a = m()), d(n.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (a = v(e)), x(n.$$.fragment, e);
			},
			m(e, s) {
				w(t, e, s), $(e, a, s), w(n, e, s), (l = !0);
			},
			p(e, a) {
				const n = {};
				!s && 2 & a && ((s = !0), (n.value = e[1]), F(() => (s = !1))), t.$set(n);
			},
			i(e) {
				l || (q(t.$$.fragment, e), q(n.$$.fragment, e), (l = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(n.$$.fragment, e), (l = !1);
			},
			d(e) {
				L(t, e), e && c(a), L(n, e);
			}
		}
	);
}
function Ie(e) {
	let t, s, a, n, l, u, y, b, k, E;
	return (
		(k = new he({ props: { variante: 1, $$slots: { default: [qe] }, $$scope: { ctx: e } } })),
		k.$on('submit', e[6]),
		{
			c() {
				(t = h('div')),
					(s = h('hgroup')),
					(a = h('h2')),
					(n = p('Meta-Mapa +0+1234')),
					(l = m()),
					(u = h('p')),
					(y = p('Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					(b = m()),
					d(k.$$.fragment),
					this.h();
			},
			l(e) {
				t = r(e, 'DIV', { slot: !0, class: !0 });
				var i = o(t);
				s = r(i, 'HGROUP', { class: !0 });
				var $ = o(s);
				a = r($, 'H2', { class: !0 });
				var f = o(a);
				(n = g(f, 'Meta-Mapa +0+1234')), f.forEach(c), (l = v($)), (u = r($, 'P', { class: !0 }));
				var h = o(u);
				(y = g(h, 'Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					h.forEach(c),
					$.forEach(c),
					(b = v(i)),
					x(k.$$.fragment, i),
					i.forEach(c),
					this.h();
			},
			h() {
				i(a, 'class', 'svelte-1xybfkt'),
					i(u, 'class', 'svelte-1xybfkt'),
					i(s, 'class', 'svelte-1xybfkt'),
					i(t, 'slot', 'subarea1'),
					i(t, 'class', 'svelte-1xybfkt');
			},
			m(e, r) {
				$(e, t, r),
					f(t, s),
					f(s, a),
					f(a, n),
					f(s, l),
					f(s, u),
					f(u, y),
					f(t, b),
					w(k, t, null),
					(E = !0);
			},
			p(e, t) {
				const s = {};
				4194306 & t && (s.$$scope = { dirty: t, ctx: e }), k.$set(s);
			},
			i(e) {
				E || (q(k.$$.fragment, e), (E = !0));
			},
			o(e) {
				I(k.$$.fragment, e), (E = !1);
			},
			d(e) {
				e && c(t), L(k);
			}
		}
	);
}
function Le(e) {
	let t, s, a;
	return (
		(s = new _({ props: { variante: 1, text: 'Download svg' } })),
		s.$on('click', e[8]),
		{
			c() {
				(t = h('div')), d(s.$$.fragment), this.h();
			},
			l(e) {
				t = r(e, 'DIV', { slot: !0, class: !0 });
				var a = o(t);
				x(s.$$.fragment, a), a.forEach(c), this.h();
			},
			h() {
				i(t, 'slot', 'subarea2'), i(t, 'class', 'svelte-1xybfkt');
			},
			m(e, n) {
				$(e, t, n), w(s, t, null), (a = !0);
			},
			p: V,
			i(e) {
				a || (q(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				I(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), L(s);
			}
		}
	);
}
function Pe(e) {
	let t, s;
	return (
		(t = new J({
			props: {
				variante: 0,
				$$slots: { subarea2: [Le], subarea1: [Ie], default: [Me] },
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
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			p(e, [s]) {
				const a = {};
				4194311 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
			}
		}
	);
}
let De = 0,
	He = 0;
function Se(e, t, s) {
	let a = [],
		n = '',
		l = { width: 1e3, height: 1e3 },
		r = l.width / 4,
		o = l.width / 2;
	let c = null;
	const i = (e, t = 'your-01234-map.svg') => {
		e.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		let s = e.outerHTML,
			a = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', s], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			n = URL.createObjectURL(a),
			l = document.createElement('a');
		(l.href = n),
			(l.download = t),
			document.body.appendChild(l),
			l.click(),
			document.body.removeChild(l);
	};
	return [
		a,
		n,
		c,
		l,
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
			s(0, (a = [...a, n]));
		},
		i,
		() => i(c),
		function (e) {
			(n = e), s(1, n);
		},
		function (e) {
			R[e ? 'unshift' : 'push'](() => {
				(c = e), s(2, c);
			});
		}
	];
}
class ze extends e {
	constructor(e) {
		super(), t(this, e, Se, Pe, s, {});
	}
}
function Ae(e) {
	let t, s;
	const a = e[2].default,
		l = n(a, e, e[1], null);
	return {
		c() {
			(t = h('div')), l && l.c(), this.h();
		},
		l(e) {
			t = r(e, 'DIV', { class: !0 });
			var s = o(t);
			l && l.l(s), s.forEach(c), this.h();
		},
		h() {
			i(t, 'class', 'Alert svelte-1f2caq9'), N(t, 'haserror', !e[0]);
		},
		m(e, a) {
			$(e, t, a), l && l.m(t, null), (s = !0);
		},
		p(e, [s]) {
			l && l.p && 2 & s && k(l, a, e, e[1], s, null, null), 1 & s && N(t, 'haserror', !e[0]);
		},
		i(e) {
			s || (q(l, e), (s = !0));
		},
		o(e) {
			I(l, e), (s = !1);
		},
		d(e) {
			e && c(t), l && l.d(e);
		}
	};
}
function Ce(e, t, s) {
	let { $$slots: a = {}, $$scope: n } = t,
		{ haserror: l = !1 } = t;
	return (
		(e.$$set = (e) => {
			'haserror' in e && s(0, (l = e.haserror)), '$$scope' in e && s(1, (n = e.$$scope));
		}),
		[l, n, a]
	);
}
class Be extends e {
	constructor(e) {
		super(), t(this, e, Ce, Ae, s, { haserror: 0 });
	}
}
function Ge(e) {
	let t, s, a, n, l;
	function r(t) {
		e[5](t);
	}
	let o = {};
	return (
		void 0 !== e[0] && (o.value = e[0]),
		(t = new de({ props: o })),
		R.push(() => U(t, 'value', r)),
		(n = new _({ props: { variante: 6, text: 'Go!', valorinput: e[0] } })),
		{
			c() {
				d(t.$$.fragment), (a = m()), d(n.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (a = v(e)), x(n.$$.fragment, e);
			},
			m(e, s) {
				w(t, e, s), $(e, a, s), w(n, e, s), (l = !0);
			},
			p(e, a) {
				const l = {};
				!s && 1 & a && ((s = !0), (l.value = e[0]), F(() => (s = !1))), t.$set(l);
				const r = {};
				1 & a && (r.valorinput = e[0]), n.$set(r);
			},
			i(e) {
				l || (q(t.$$.fragment, e), q(n.$$.fragment, e), (l = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(n.$$.fragment, e), (l = !1);
			},
			d(e) {
				L(t, e), e && c(a), L(n, e);
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
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				516 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
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
			4 & s && E(t, e[2]);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Ve(e) {
	let t, s, a, n, l, u, y, b, k, M, P, D, H, S, z, A, G, T, j, V, O, R, U;
	(H = new he({ props: { variante: 1, $$slots: { default: [Ge] }, $$scope: { ctx: e } } })),
		H.$on('submit', e[4]);
	let F = 1 == e[1] && Te(e);
	return {
		c() {
			(t = h('header')),
				(s = h('h2')),
				(a = p('Gematria App')),
				(n = m()),
				(l = h('p')),
				(u = p('Lo que valen las palabras hebreas')),
				(y = m()),
				(b = h('main')),
				(k = h('h2')),
				(M = p(e[3])),
				(P = m()),
				(D = h('div')),
				d(H.$$.fragment),
				(S = m()),
				F && F.c(),
				(z = m()),
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
			t = r(i, 'HEADER', { class: !0 });
			var $ = o(t);
			s = r($, 'H2', { class: !0 });
			var f = o(s);
			(a = g(f, 'Gematria App')), f.forEach(c), (n = v($)), (l = r($, 'P', { class: !0 }));
			var h = o(l);
			(u = g(h, 'Lo que valen las palabras hebreas')),
				h.forEach(c),
				$.forEach(c),
				(y = v(i)),
				(b = r(i, 'MAIN', { class: !0 }));
			var m = o(b);
			k = r(m, 'H2', { class: !0 });
			var p = o(k);
			(M = g(p, e[3])), p.forEach(c), (P = v(m)), (D = r(m, 'DIV', { class: !0 }));
			var d = o(D);
			x(H.$$.fragment, d),
				d.forEach(c),
				(S = v(m)),
				F && F.l(m),
				m.forEach(c),
				(z = v(i)),
				(A = r(i, 'FOOTER', { class: !0 }));
			var w = o(A);
			G = r(w, 'SMALL', { class: !0 });
			var E = o(G);
			(T = g(E, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				E.forEach(c),
				(j = v(w)),
				(V = r(w, 'SMALL', { class: !0 }));
			var q = o(V);
			O = r(q, 'A', { href: !0, target: !0, class: !0 });
			var I = o(O);
			(R = g(I, 'Codex de Leningrado')), I.forEach(c), q.forEach(c), w.forEach(c), this.h();
		},
		h() {
			i(s, 'class', 'svelte-1wkbovc'),
				i(l, 'class', 'svelte-1wkbovc'),
				i(t, 'class', 'svelte-1wkbovc'),
				i(k, 'class', 'result svelte-1wkbovc'),
				i(D, 'class', 'position-form svelte-1wkbovc'),
				i(b, 'class', 'svelte-1wkbovc'),
				i(G, 'class', 'svelte-1wkbovc'),
				i(O, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(O, 'target', '_blank'),
				i(O, 'class', 'svelte-1wkbovc'),
				i(V, 'class', 'svelte-1wkbovc'),
				i(A, 'class', 'svelte-1wkbovc');
		},
		m(e, r) {
			$(e, t, r),
				f(t, s),
				f(s, a),
				f(t, n),
				f(t, l),
				f(l, u),
				$(e, y, r),
				$(e, b, r),
				f(b, k),
				f(k, M),
				f(b, P),
				f(b, D),
				w(H, D, null),
				f(b, S),
				F && F.m(b, null),
				$(e, z, r),
				$(e, A, r),
				f(A, G),
				f(G, T),
				f(A, j),
				f(A, V),
				f(V, O),
				f(O, R),
				(U = !0);
		},
		p(e, [t]) {
			(!U || 8 & t) && E(M, e[3]);
			const s = {};
			513 & t && (s.$$scope = { dirty: t, ctx: e }),
				H.$set(s),
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
			U || (q(H.$$.fragment, e), q(F), (U = !0));
		},
		o(e) {
			I(H.$$.fragment, e), I(F), (U = !1);
		},
		d(e) {
			e && c(t), e && c(y), e && c(b), L(H), F && F.d(), e && c(z), e && c(A);
		}
	};
}
function Oe(e, t, s) {
	let a,
		n = '',
		l = !1,
		r = '',
		o = [];
	return (
		s(3, (a = 0)),
		[
			n,
			l,
			r,
			a,
			function () {
				s(1, (l = !1)), s(3, (a = 0)), s(0, n), (o = n.split('')), s(2, (r = ''));
				for (const e of o)
					'א' == e
						? s(3, (a += 1))
						: 'ב' == e
						? s(3, (a += 2))
						: 'ג' == e
						? s(3, (a += 3))
						: 'ד' == e
						? s(3, (a += 4))
						: 'ה' == e
						? s(3, (a += 5))
						: 'ו' == e
						? s(3, (a += 6))
						: 'ז' == e
						? s(3, (a += 7))
						: 'ח' == e
						? s(3, (a += 8))
						: 'ט' == e
						? s(3, (a += 9))
						: 'י' == e
						? s(3, (a += 10))
						: 'כ' == e
						? s(3, (a += 20))
						: 'ל' == e
						? s(3, (a += 30))
						: 'מ' == e
						? s(3, (a += 40))
						: 'ן' == e
						? s(3, (a += 50))
						: 'ס' == e
						? s(3, (a += 60))
						: 'ע' == e
						? s(3, (a += 70))
						: 'פ' == e
						? s(3, (a += 80))
						: 'צ' == e
						? s(3, (a += 90))
						: 'ק' == e
						? s(3, (a += 100))
						: 'ר' == e
						? s(3, (a += 200))
						: 'ש' == e
						? s(3, (a += 300))
						: 'ת' == e
						? s(3, (a += 400))
						: 'ך' == e
						? s(3, (a += 500))
						: 'ם' == e
						? s(3, (a += 600))
						: 'ן' == e
						? s(3, (a += 700))
						: 'ף' == e
						? s(3, (a += 800))
						: 'ץ' == e
						? s(3, (a += 900))
						: ' ' == e
						? s(3, (a += 0))
						: (s(1, (l = !0)),
						  s(1, (l = !0))
								? s(2, (r = 'Sólo contabilizan las consonantes hebreas.'))
								: (s(1, (l = !1)), s(2, (r = ''))));
				return a;
			},
			function (e) {
				(n = e), s(0, n);
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
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			p: V,
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
			}
		}
	);
}
function Fe(e) {
	let t, s;
	return (
		(t = new re({
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
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			p: V,
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
			}
		}
	);
}
function Ne(e) {
	let t, s;
	return (
		(t = new ze({})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
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
			m(e, a) {
				w(t, e, a), (s = !0);
			},
			i(e) {
				s || (q(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				L(t, e);
			}
		}
	);
}
function Je(e) {
	let t, s, a, n, l, r, o, i;
	return (
		(t = new Q({
			props: { id: 'cover', variante: 3, $$slots: { default: [Ue] }, $$scope: { ctx: e } }
		})),
		(a = new Q({
			props: { id: 'phi', variante: 2, $$slots: { default: [Fe] }, $$scope: { ctx: e } }
		})),
		(l = new Q({
			props: { id: 't0t', variante: 0, $$slots: { default: [Ne] }, $$scope: { ctx: e } }
		})),
		(o = new Q({
			props: { id: 'gematria', variante: 4, $$slots: { default: [_e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment),
					(s = m()),
					d(a.$$.fragment),
					(n = m()),
					d(l.$$.fragment),
					(r = m()),
					d(o.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e),
					(s = v(e)),
					x(a.$$.fragment, e),
					(n = v(e)),
					x(l.$$.fragment, e),
					(r = v(e)),
					x(o.$$.fragment, e);
			},
			m(e, c) {
				w(t, e, c),
					$(e, s, c),
					w(a, e, c),
					$(e, n, c),
					w(l, e, c),
					$(e, r, c),
					w(o, e, c),
					(i = !0);
			},
			p(e, [s]) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), a.$set(r);
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), l.$set(c);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), o.$set(i);
			},
			i(e) {
				i ||
					(q(t.$$.fragment, e),
					q(a.$$.fragment, e),
					q(l.$$.fragment, e),
					q(o.$$.fragment, e),
					(i = !0));
			},
			o(e) {
				I(t.$$.fragment, e),
					I(a.$$.fragment, e),
					I(l.$$.fragment, e),
					I(o.$$.fragment, e),
					(i = !1);
			},
			d(e) {
				L(t, e), e && c(s), L(a, e), e && c(n), L(l, e), e && c(r), L(o, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Je, s, {});
	}
}
