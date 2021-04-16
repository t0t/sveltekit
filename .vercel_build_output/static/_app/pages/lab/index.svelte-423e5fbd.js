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
	a4 as y,
	r as w,
	H as b,
	O as E,
	h as M,
	a5 as z,
	w as j,
	x as k,
	y as P,
	K as I,
	a0 as L,
	a6 as H,
	a7 as G,
	R as S,
	k as A,
	C as B,
	D as C,
	I as D,
	a8 as T,
	F as V,
	n as O,
	J as R,
	T as U,
	U as q,
	V as F,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { B as _, C as J, c as Y } from '../../chunks/Cover-1da3f25f.js';
import { S as K } from '../../chunks/Section-554b0cec.js';
import { t as Q } from '../../chunks/index-c4bdeab8.js';
import { G as W } from '../../chunks/GridBase-6deb16d5.js';
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
				i(s, 'class', 'svelte-cz9d2y'),
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
	let t, s, L, H, S, A, B, C, D, T, V, O, R, U, q, F, N, J, Y;
	n(e[11]);
	const K = e[10].hasvideo,
		Q = a(K, e, e[9], te),
		W =
			Q ||
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
						i(s, 'class', 'svelte-cz9d2y'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-cz9d2y');
					},
					m(e, a) {
						$(e, t, a), u(t, s);
						for (let t = 0; t < n.length; t += 1) n[t].m(s, null);
					},
					p(e, t) {
						100 & t && ((h = { length: e[5] }), (n = f(n, t, m, 1, e, h, a, s, G, se, null, Z)));
					},
					d(e) {
						e && o(t);
						for (let t = 0; t < n.length; t += 1) n[t].d();
					}
				};
			})(e);
	return (
		(F = new _({ props: { variante: 0, text: 'Play' } })),
		F.$on('click', e[14]),
		{
			c() {
				(t = h('main')),
					(s = h('div')),
					W && W.c(),
					(L = m()),
					(H = h('div')),
					(S = h('hgroup')),
					(A = h('h2')),
					(B = p(e[0])),
					(C = m()),
					(D = h('p')),
					(T = m()),
					(V = h('div')),
					(O = h('input')),
					(R = m()),
					(U = h('input')),
					(q = m()),
					d(F.$$.fragment),
					this.h();
			},
			l(n) {
				t = l(n, 'MAIN', { class: !0 });
				var a = c(t);
				s = l(a, 'DIV', { class: !0 });
				var r = c(s);
				W && W.l(r), r.forEach(o), (L = g(a)), (H = l(a, 'DIV', { class: !0 }));
				var i = c(H);
				S = l(i, 'HGROUP', { class: !0 });
				var $ = c(S);
				A = l($, 'H2', { class: !0 });
				var u = c(A);
				(B = v(u, e[0])),
					u.forEach(o),
					(C = g($)),
					(D = l($, 'P', { class: !0 })),
					c(D).forEach(o),
					$.forEach(o),
					(T = g(i)),
					(V = l(i, 'DIV', { class: !0 }));
				var f = c(V);
				(O = l(f, 'INPUT', { type: !0, step: !0, class: !0 })),
					(R = g(f)),
					(U = l(f, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					f.forEach(o),
					(q = g(i)),
					x(F.$$.fragment, i),
					i.forEach(o),
					a.forEach(o),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-cz9d2y'),
					i(A, 'class', 'svelte-cz9d2y'),
					i(D, 'class', 'svelte-cz9d2y'),
					i(S, 'class', 'svelte-cz9d2y'),
					i(O, 'type', 'number'),
					i(O, 'step', '0.001'),
					i(O, 'class', 'svelte-cz9d2y'),
					i(U, 'type', 'range'),
					i(U, 'min', 0),
					i(U, 'max', ae),
					i(U, 'class', 'svelte-cz9d2y'),
					i(V, 'class', 'controls svelte-cz9d2y'),
					i(H, 'class', 'PhiSvgText svelte-cz9d2y'),
					i(t, 'class', 'PhiSvg svelte-cz9d2y');
			},
			m(n, a) {
				$(n, t, a),
					u(t, s),
					W && W.m(s, null),
					u(t, L),
					u(t, H),
					u(H, S),
					u(S, A),
					u(A, B),
					u(S, C),
					u(S, D),
					(D.innerHTML = e[1]),
					u(H, T),
					u(H, V),
					u(V, O),
					y(O, e[2]),
					u(V, R),
					u(V, U),
					y(U, e[5]),
					u(H, q),
					w(F, H, null),
					(N = !0),
					J ||
						((Y = [
							b(window, 'resize', e[11]),
							b(O, 'input', e[12]),
							b(U, 'change', e[13]),
							b(U, 'input', e[13])
						]),
						(J = !0));
			},
			p(e, [t]) {
				Q ? Q.p && 512 & t && E(Q, K, e, e[9], t, ee, te) : W && W.p && 36 & t && W.p(e, t),
					(!N || 1 & t) && M(B, e[0]),
					(!N || 2 & t) && (D.innerHTML = e[1]),
					4 & t && z(O.value) !== e[2] && y(O, e[2]),
					32 & t && y(U, e[5]);
			},
			i(e) {
				N || (j(W, e), j(F.$$.fragment, e), (N = !0));
			},
			o(e) {
				k(W, e), k(F.$$.fragment, e), (N = !1);
			},
			d(e) {
				e && o(t), W && W.d(e), P(F), (J = !1), I(Y);
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
		u = Q(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
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
				($ = z(this.value)), s(2, $);
			},
			function () {
				(n = z(this.value)), u.set(n);
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
			i(t, 'class', 'svelte-cy0gso');
		},
		m(e, n) {
			$(e, t, n), u(t, s), (f = !0);
		},
		i(e) {
			f ||
				(n(() => {
					a || (a = S(t, X, {}, !0)), a.run(1);
				}),
				(f = !0));
		},
		o(e) {
			a || (a = S(t, X, {}, !1)), a.run(0), (f = !1);
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
			(t = r('text')), m && m.c(), (s = A()), d && d.c(), this.h();
		},
		l(e) {
			t = l(e, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var n = c(t);
			m && m.l(n), (s = A()), d && d.l(n), n.forEach(o), this.h();
		},
		h() {
			i(t, 'x', e[0]),
				i(t, 'y', e[1]),
				i(t, 'font-size', '55'),
				i(t, 'class', 'draggable svelte-cy0gso');
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
				  (B(),
				  k(m, 1, 1, () => {
						m = null;
				  }),
				  C()),
				d && d.p && 64 & a && E(d, p, e, e[6], a, null, null),
				(!n || 1 & a) && i(t, 'x', e[0]),
				(!n || 2 & a) && i(t, 'y', e[1]);
		},
		i(e) {
			n || (j(m), j(d, e), (n = !0));
		},
		o(e) {
			k(m), k(d, e), (n = !1);
		},
		d(e) {
			e && o(t), m && m.d(), d && d.d(e), (f = !1), I(h);
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
			i(t, 'name', e[0]), i(t, 'class', (s = D(e[2][e[1]]) + ' svelte-i0y6ig'));
		},
		m(s, a) {
			$(s, t, a), m && m.m(t, null), (n = !0), r || ((u = b(t, 'submit', T(e[5]))), (r = !0));
		},
		p(e, [a]) {
			m && m.p && 8 & a && E(m, f, e, e[3], a, null, null),
				(!n || 1 & a) && i(t, 'name', e[0]),
				(!n || (2 & a && s !== (s = D(e[2][e[1]]) + ' svelte-i0y6ig'))) && i(t, 'class', s);
		},
		i(e) {
			n || (j(m, e), (n = !0));
		},
		o(e) {
			k(m, e), (n = !1);
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
				i(t, 'class', 'svelte-e55vkt');
		},
		m(a, r) {
			$(a, t, r), s || ((n = b(t, 'input', e[2])), (s = !0));
		},
		p(e, [s]) {
			1 & s && t.value !== e[0] && (t.value = e[0]), 2 & s && i(t, 'placeholder', e[1]);
		},
		i: O,
		o: O,
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
function ye(e) {
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
				i(t, 'class', 'svelte-1856sc1');
		},
		m(e, s) {
			$(e, t, s);
		},
		p: O,
		d(e) {
			e && o(t);
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
			t = v(e, s);
		},
		m(e, s) {
			$(e, t, s);
		},
		p: O,
		d(e) {
			e && o(t);
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
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			p(e, s) {
				const n = {};
				4194304 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
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
			1 & n && s !== (s = e[13] + '') && M(t, s);
		},
		d(e) {
			e && o(t);
		}
	};
}
function Me(e) {
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
				w(t, e, n), (s = !0);
			},
			p(e, s) {
				const n = {};
				4194305 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function ze(e) {
	let t,
		s,
		n,
		a,
		f,
		h = e[4],
		m = [];
	for (let r = 0; r < h.length; r += 1) m[r] = ye(xe(e, h, r));
	let p = e[5],
		d = [];
	for (let r = 0; r < p.length; r += 1) d[r] = be(ve(e, p, r));
	const g = (e) =>
		k(d[e], 1, 1, () => {
			d[e] = null;
		});
	let v = e[0],
		x = [];
	for (let r = 0; r < v.length; r += 1) x[r] = Me(ge(e, v, r));
	const y = (e) =>
		k(x[e], 1, 1, () => {
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
			var r = c(t);
			s = l(r, 'g', { transform: !0, class: !0 }, 1);
			var i = c(s);
			for (let t = 0; t < m.length; t += 1) m[t].l(i);
			n = A();
			for (let t = 0; t < d.length; t += 1) d[t].l(i);
			a = A();
			for (let t = 0; t < x.length; t += 1) x[t].l(i);
			i.forEach(o), r.forEach(o), this.h();
		},
		h() {
			i(s, 'transform', 'translate(150,150) scale(0.7)'),
				i(s, 'class', 'svelte-1856sc1'),
				i(t, 'viewBox', '-1 -1 ' + e[3].width + ' ' + e[3].height),
				i(t, 'class', 'svelte-1856sc1');
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
					m[a] ? m[a].p(r, t) : ((m[a] = ye(r)), m[a].c(), m[a].m(s, n));
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
				for (B(), n = p.length; n < d.length; n += 1) g(n);
				C();
			}
			if (1 & t) {
				let n;
				for (v = e[0], n = 0; n < v.length; n += 1) {
					const a = ge(e, v, n);
					x[n]
						? (x[n].p(a, t), j(x[n], 1))
						: ((x[n] = Me(a)), x[n].c(), j(x[n], 1), x[n].m(s, null));
				}
				for (B(), n = v.length; n < x.length; n += 1) y(n);
				C();
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
			for (let t = 0; t < d.length; t += 1) k(d[t]);
			x = x.filter(Boolean);
			for (let t = 0; t < x.length; t += 1) k(x[t]);
			f = !1;
		},
		d(s) {
			s && o(t), R(m, s), R(d, s), R(x, s), e[10](null);
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
		U.push(() => q(t, 'value', l)),
		(a = new _({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = g(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				w(t, e, s), $(e, n, s), w(a, e, s), (r = !0);
			},
			p(e, n) {
				const a = {};
				!s && 2 & n && ((s = !0), (a.value = e[1]), F(() => (s = !1))), t.$set(a);
			},
			i(e) {
				r || (j(t.$$.fragment, e), j(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				k(t.$$.fragment, e), k(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				P(t, e), e && o(n), P(a, e);
			}
		}
	);
}
function ke(e) {
	let t, s, n, a, r, f, y, b, E, M;
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
					(y = p('Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
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
				(y = v(h, 'Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					h.forEach(o),
					$.forEach(o),
					(b = g(i)),
					x(E.$$.fragment, i),
					i.forEach(o),
					this.h();
			},
			h() {
				i(n, 'class', 'svelte-1856sc1'),
					i(f, 'class', 'svelte-1856sc1'),
					i(s, 'class', 'svelte-1856sc1'),
					i(t, 'slot', 'subarea1'),
					i(t, 'class', 'svelte-1856sc1');
			},
			m(e, l) {
				$(e, t, l),
					u(t, s),
					u(s, n),
					u(n, a),
					u(s, r),
					u(s, f),
					u(f, y),
					u(t, b),
					w(E, t, null),
					(M = !0);
			},
			p(e, t) {
				const s = {};
				4194306 & t && (s.$$scope = { dirty: t, ctx: e }), E.$set(s);
			},
			i(e) {
				M || (j(E.$$.fragment, e), (M = !0));
			},
			o(e) {
				k(E.$$.fragment, e), (M = !1);
			},
			d(e) {
				e && o(t), P(E);
			}
		}
	);
}
function Pe(e) {
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
				i(t, 'slot', 'subarea2'), i(t, 'class', 'svelte-1856sc1');
			},
			m(e, a) {
				$(e, t, a), w(s, t, null), (n = !0);
			},
			p: O,
			i(e) {
				n || (j(s.$$.fragment, e), (n = !0));
			},
			o(e) {
				k(s.$$.fragment, e), (n = !1);
			},
			d(e) {
				e && o(t), P(s);
			}
		}
	);
}
function Ie(e) {
	let t, s;
	return (
		(t = new W({
			props: {
				variante: 1,
				$$slots: { subarea2: [Pe], subarea1: [ke], default: [ze] },
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
				w(t, e, n), (s = !0);
			},
			p(e, [s]) {
				const n = {};
				4194311 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
let Le = 0,
	He = 0;
function Ge(e, t, s) {
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
			U[e ? 'unshift' : 'push'](() => {
				(o = e), s(2, o);
			});
		}
	];
}
class Se extends e {
	constructor(e) {
		super(), t(this, e, Ge, Ie, s, {});
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
			var s = c(t);
			r && r.l(s), s.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'Alert svelte-1a2ptyz'), N(t, 'haserror', !e[0]);
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
			k(r, e), (s = !1);
		},
		d(e) {
			e && o(t), r && r.d(e);
		}
	};
}
function Be(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ haserror: r = !1 } = t;
	return (
		(e.$$set = (e) => {
			'haserror' in e && s(0, (r = e.haserror)), '$$scope' in e && s(1, (a = e.$$scope));
		}),
		[r, a, n]
	);
}
class Ce extends e {
	constructor(e) {
		super(), t(this, e, Be, Ae, s, { haserror: 0 });
	}
}
function De(e) {
	let t, s, n, a, r;
	function l(t) {
		e[5](t);
	}
	let c = {};
	return (
		void 0 !== e[0] && (c.value = e[0]),
		(t = new de({ props: c })),
		U.push(() => q(t, 'value', l)),
		(a = new _({ props: { variante: 6, text: 'Go!', valorinput: e[0] } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = g(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				w(t, e, s), $(e, n, s), w(a, e, s), (r = !0);
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
				k(t.$$.fragment, e), k(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				P(t, e), e && o(n), P(a, e);
			}
		}
	);
}
function Te(e) {
	let t, s;
	return (
		(t = new Ce({ props: { $$slots: { default: [Ve] }, $$scope: { ctx: e } } })),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			p(e, s) {
				const n = {};
				516 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
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
			4 & s && M(t, e[2]);
		},
		d(e) {
			e && o(t);
		}
	};
}
function Oe(e) {
	let t, s, n, a, r, f, y, b, E, z, I, L, H, G, S, A, D, T, V, O, R, U;
	(L = new he({ props: { variante: 0, $$slots: { default: [De] }, $$scope: { ctx: e } } })),
		L.$on('submit', e[4]);
	let q = 1 == e[1] && Te(e);
	return {
		c() {
			(t = h('header')),
				(s = h('h2')),
				(n = p('Gematria App')),
				(a = m()),
				(r = h('p')),
				(f = p('Lo que valen las palabras hebreas')),
				(y = m()),
				(b = h('main')),
				(E = h('h2')),
				(z = p(e[3])),
				(I = m()),
				d(L.$$.fragment),
				(H = m()),
				q && q.c(),
				(G = m()),
				(S = h('footer')),
				(A = h('small')),
				(D = p('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(T = m()),
				(V = h('small')),
				(O = h('a')),
				(R = p('Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
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
				(y = g(i)),
				(b = l(i, 'MAIN', { class: !0 }));
			var m = c(b);
			E = l(m, 'H2', { class: !0 });
			var p = c(E);
			(z = v(p, e[3])),
				p.forEach(o),
				(I = g(m)),
				x(L.$$.fragment, m),
				(H = g(m)),
				q && q.l(m),
				m.forEach(o),
				(G = g(i)),
				(S = l(i, 'FOOTER', { class: !0 }));
			var d = c(S);
			A = l(d, 'SMALL', { class: !0 });
			var w = c(A);
			(D = v(w, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				w.forEach(o),
				(T = g(d)),
				(V = l(d, 'SMALL', { class: !0 }));
			var M = c(V);
			O = l(M, 'A', { href: !0, target: !0, class: !0 });
			var j = c(O);
			(R = v(j, 'Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				j.forEach(o),
				M.forEach(o),
				d.forEach(o),
				this.h();
		},
		h() {
			i(s, 'class', 'svelte-1mtbxyj'),
				i(r, 'class', 'svelte-1mtbxyj'),
				i(t, 'class', 'svelte-1mtbxyj'),
				i(E, 'class', 'result svelte-1mtbxyj'),
				i(b, 'class', 'svelte-1mtbxyj'),
				i(A, 'class', 'svelte-1mtbxyj'),
				i(O, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(O, 'target', '_blank'),
				i(O, 'class', 'svelte-1mtbxyj'),
				i(V, 'class', 'svelte-1mtbxyj'),
				i(S, 'class', 'svelte-1mtbxyj');
		},
		m(e, l) {
			$(e, t, l),
				u(t, s),
				u(s, n),
				u(t, a),
				u(t, r),
				u(r, f),
				$(e, y, l),
				$(e, b, l),
				u(b, E),
				u(E, z),
				u(b, I),
				w(L, b, null),
				u(b, H),
				q && q.m(b, null),
				$(e, G, l),
				$(e, S, l),
				u(S, A),
				u(A, D),
				u(S, T),
				u(S, V),
				u(V, O),
				u(O, R),
				(U = !0);
		},
		p(e, [t]) {
			(!U || 8 & t) && M(z, e[3]);
			const s = {};
			513 & t && (s.$$scope = { dirty: t, ctx: e }),
				L.$set(s),
				1 == e[1]
					? q
						? (q.p(e, t), 2 & t && j(q, 1))
						: ((q = Te(e)), q.c(), j(q, 1), q.m(b, null))
					: q &&
					  (B(),
					  k(q, 1, 1, () => {
							q = null;
					  }),
					  C());
		},
		i(e) {
			U || (j(L.$$.fragment, e), j(q), (U = !0));
		},
		o(e) {
			k(L.$$.fragment, e), k(q), (U = !1);
		},
		d(e) {
			e && o(t), e && o(y), e && o(b), P(L), q && q.d(), e && o(G), e && o(S);
		}
	};
}
function Re(e, t, s) {
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
class Ue extends e {
	constructor(e) {
		super(), t(this, e, Re, Oe, s, {});
	}
}
function qe(e) {
	let t, s;
	return (
		(t = new J({
			props: { variante: 1, title: Y[2].title, subtitle: Y[2].subtitle, text: Y[2].text }
		})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			p: O,
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
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
				w(t, e, n), (s = !0);
			},
			p: O,
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
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
				w(t, e, n), (s = !0);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function _e(e) {
	let t, s;
	return (
		(t = new Ue({})),
		{
			c() {
				d(t.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (s = !0);
			},
			i(e) {
				s || (j(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				k(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function Je(e) {
	let t, s, n, a, r, l, c, i;
	return (
		(t = new K({
			props: { id: 'cover', variante: 3, $$slots: { default: [qe] }, $$scope: { ctx: e } }
		})),
		(n = new K({
			props: { id: 'phi', variante: 2, $$slots: { default: [Fe] }, $$scope: { ctx: e } }
		})),
		(r = new K({
			props: { id: 't0t', variante: 0, $$slots: { default: [Ne] }, $$scope: { ctx: e } }
		})),
		(c = new K({
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
				w(t, e, o),
					$(e, s, o),
					w(n, e, o),
					$(e, a, o),
					w(r, e, o),
					$(e, l, o),
					w(c, e, o),
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
				k(t.$$.fragment, e),
					k(n.$$.fragment, e),
					k(r.$$.fragment, e),
					k(c.$$.fragment, e),
					(i = !1);
			},
			d(e) {
				P(t, e), e && o(s), P(n, e), e && o(a), P(r, e), e && o(l), P(c, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Je, s, {});
	}
}
