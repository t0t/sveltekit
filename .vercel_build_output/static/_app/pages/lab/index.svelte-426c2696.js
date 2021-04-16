import {
	S as e,
	i as t,
	s,
	Q as n,
	M as a,
	E as l,
	c as r,
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
	h as k,
	a5 as j,
	w as M,
	x as z,
	y as P,
	K as L,
	a0 as I,
	a6 as S,
	a7 as C,
	R as H,
	k as D,
	C as G,
	D as B,
	I as T,
	a8 as A,
	F as O,
	n as V,
	J as q,
	T as R,
	U,
	V as F,
	G as N
} from '../../chunks/index-d91e1ed8.js';
import { B as _, C as J, c as Y } from '../../chunks/Cover-15f98305.js';
import { S as K } from '../../chunks/Section-f5afcac2.js';
import { t as Q } from '../../chunks/index-c4bdeab8.js';
import { G as W } from '../../chunks/GridBase-57efd4c1.js';
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
			(s = l('circle')), this.h();
		},
		l(e) {
			(s = r(e, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), c(s).forEach(o), this.h();
		},
		h() {
			i(s, 'r', t[7]),
				i(s, 'cx', (n = Math.cos(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'cy', (a = Math.sin(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'class', 'svelte-166lzn1'),
				(this.first = s);
		},
		m(e, t) {
			$(e, s, t);
		},
		p(e, l) {
			(t = e),
				72 & l && n !== (n = Math.cos(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cx', n),
				72 & l && a !== (a = Math.sin(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cy', a);
		},
		d(e) {
			e && o(s);
		}
	};
}
function ne(e) {
	let t, s, I, S, H, D, G, B, T, A, O, V, q, R, U, F, N, J, Y, K;
	n(e[12]);
	const Q = e[11].hasvideo,
		W = a(Q, e, e[10], te),
		X =
			W ||
			(function (e) {
				let t,
					s,
					n = [],
					a = new Map(),
					h = { length: e[6] };
				const m = (e) => e[19];
				for (let l = 0; l < h.length; l += 1) {
					let t = Z(e, h, l),
						s = m(t);
					a.set(s, (n[l] = se(s, t)));
				}
				return {
					c() {
						(t = l('svg')), (s = l('g'));
						for (let e = 0; e < n.length; e += 1) n[e].c();
						this.h();
					},
					l(e) {
						t = r(e, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var a = c(t);
						s = r(a, 'g', { class: !0 }, 1);
						var l = c(s);
						for (let t = 0; t < n.length; t += 1) n[t].l(l);
						l.forEach(o), a.forEach(o), this.h();
					},
					h() {
						i(s, 'class', 'svelte-166lzn1'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-166lzn1');
					},
					m(e, a) {
						$(e, t, a), u(t, s);
						for (let t = 0; t < n.length; t += 1) n[t].m(s, null);
					},
					p(e, t) {
						200 & t && ((h = { length: e[6] }), (n = f(n, t, m, 1, e, h, a, s, C, se, null, Z)));
					},
					d(e) {
						e && o(t);
						for (let t = 0; t < n.length; t += 1) n[t].d();
					}
				};
			})(e);
	return (
		(F = new _({ props: { variante: 0, text: 'Play' } })),
		F.$on('click', e[15]),
		{
			c() {
				(t = h('section')),
					(s = h('div')),
					X && X.c(),
					(I = m()),
					(S = h('div')),
					(H = h('hgroup')),
					(D = h('h2')),
					(G = p(e[0])),
					(B = m()),
					(T = h('p')),
					(A = m()),
					(O = h('div')),
					(V = h('input')),
					(q = m()),
					(R = h('input')),
					(U = m()),
					d(F.$$.fragment),
					this.h();
			},
			l(n) {
				t = r(n, 'SECTION', { class: !0 });
				var a = c(t);
				s = r(a, 'DIV', { class: !0 });
				var l = c(s);
				X && X.l(l), l.forEach(o), (I = g(a)), (S = r(a, 'DIV', { class: !0 }));
				var i = c(S);
				H = r(i, 'HGROUP', { class: !0 });
				var $ = c(H);
				D = r($, 'H2', { class: !0 });
				var u = c(D);
				(G = v(u, e[0])),
					u.forEach(o),
					(B = g($)),
					(T = r($, 'P', { class: !0 })),
					c(T).forEach(o),
					$.forEach(o),
					(A = g(i)),
					(O = r(i, 'DIV', { class: !0 }));
				var f = c(O);
				(V = r(f, 'INPUT', { type: !0, step: !0, class: !0 })),
					(q = g(f)),
					(R = r(f, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					f.forEach(o),
					(U = g(i)),
					x(F.$$.fragment, i),
					i.forEach(o),
					a.forEach(o),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-166lzn1'),
					i(D, 'class', 'svelte-166lzn1'),
					i(T, 'class', 'svelte-166lzn1'),
					i(H, 'class', 'svelte-166lzn1'),
					i(V, 'type', 'number'),
					i(V, 'step', '0.001'),
					i(V, 'class', 'svelte-166lzn1'),
					i(R, 'type', 'range'),
					i(R, 'min', 0),
					i(R, 'max', ae),
					i(R, 'class', 'svelte-166lzn1'),
					i(O, 'class', 'controls svelte-166lzn1'),
					i(S, 'class', 'PhiSvgText svelte-166lzn1'),
					i(t, 'class', (N = 'PhiSvg ' + e[9][e[2]] + ' svelte-166lzn1'));
			},
			m(n, a) {
				$(n, t, a),
					u(t, s),
					X && X.m(s, null),
					u(t, I),
					u(t, S),
					u(S, H),
					u(H, D),
					u(D, G),
					u(H, B),
					u(H, T),
					(T.innerHTML = e[1]),
					u(S, A),
					u(S, O),
					u(O, V),
					y(V, e[3]),
					u(O, q),
					u(O, R),
					y(R, e[6]),
					u(S, U),
					w(F, S, null),
					(J = !0),
					Y ||
						((K = [
							b(window, 'resize', e[12]),
							b(V, 'input', e[13]),
							b(R, 'change', e[14]),
							b(R, 'input', e[14])
						]),
						(Y = !0));
			},
			p(e, [s]) {
				W ? W.p && 1024 & s && E(W, Q, e, e[10], s, ee, te) : X && X.p && 72 & s && X.p(e, s),
					(!J || 1 & s) && k(G, e[0]),
					(!J || 2 & s) && (T.innerHTML = e[1]),
					8 & s && j(V.value) !== e[3] && y(V, e[3]),
					64 & s && y(R, e[6]),
					(!J || (4 & s && N !== (N = 'PhiSvg ' + e[9][e[2]] + ' svelte-166lzn1'))) &&
						i(t, 'class', N);
			},
			i(e) {
				J || (M(X, e), M(F.$$.fragment, e), (J = !0));
			},
			o(e) {
				z(X, e), z(F.$$.fragment, e), (J = !1);
			},
			d(e) {
				e && o(t), X && X.d(e), P(F), (Y = !1), L(K);
			}
		}
	);
}
let ae = 360;
function le(e, t, s) {
	let n,
		a,
		l,
		{ $$slots: r = {}, $$scope: c } = t,
		{ title: o = '' } = t,
		{ text: i = '' } = t,
		$ = 0.618033988749,
		u = Q(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
	I(e, u, (e) => s(6, (n = e)));
	let { variante: f = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (o = e.title)),
				'text' in e && s(1, (i = e.text)),
				'variante' in e && s(2, (f = e.variante)),
				'$$scope' in e && s(10, (c = e.$$scope));
		}),
		S(u, (n = ae), n),
		[
			o,
			i,
			f,
			$,
			a,
			l,
			n,
			1.62 * 1.62,
			u,
			['Light', 'Dark', 'Colored', 'Light2'],
			c,
			r,
			function () {
				s(4, (a = window.innerWidth)), s(5, (l = window.innerHeight));
			},
			function () {
				($ = j(this.value)), s(3, $);
			},
			function () {
				(n = j(this.value)), u.set(n);
			},
			() => {
				S(u, (n = n > 0 ? 0 : ae), n);
			}
		]
	);
}
class re extends e {
	constructor(e) {
		super(), t(this, e, le, ne, s, { title: 0, text: 1, variante: 2 });
	}
}
function ce(e) {
	let t, s, a, f;
	return {
		c() {
			(t = l('div')), (s = p('xxx')), this.h();
		},
		l(e) {
			t = r(e, 'div', { class: !0 }, 1);
			var n = c(t);
			(s = v(n, 'xxx')), n.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'svelte-a0c12z');
		},
		m(e, n) {
			$(e, t, n), u(t, s), (f = !0);
		},
		i(e) {
			f ||
				(n(() => {
					a || (a = H(t, X, {}, !0)), a.run(1);
				}),
				(f = !0));
		},
		o(e) {
			a || (a = H(t, X, {}, !1)), a.run(0), (f = !1);
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
			(t = l('text')), m && m.c(), (s = D()), d && d.c(), this.h();
		},
		l(e) {
			t = r(e, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var n = c(t);
			m && m.l(n), (s = D()), d && d.l(n), n.forEach(o), this.h();
		},
		h() {
			i(t, 'x', e[0]),
				i(t, 'y', e[1]),
				i(t, 'font-size', '55'),
				i(t, 'class', 'draggable svelte-a0c12z');
		},
		m(a, l) {
			$(a, t, l),
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
					? 4 & a && M(m, 1)
					: ((m = ce()), m.c(), M(m, 1), m.m(t, s))
				: m &&
				  (G(),
				  z(m, 1, 1, () => {
						m = null;
				  }),
				  B()),
				d && d.p && 64 & a && E(d, p, e, e[6], a, null, null),
				(!n || 1 & a) && i(t, 'x', e[0]),
				(!n || 2 & a) && i(t, 'y', e[1]);
		},
		i(e) {
			n || (M(m), M(d, e), (n = !0));
		},
		o(e) {
			z(m), z(d, e), (n = !1);
		},
		d(e) {
			e && o(t), m && m.d(), d && d.d(e), (f = !1), L(h);
		}
	};
}
function ie(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ x: l = 0 } = t,
		{ y: r = 0 } = t,
		c = !1;
	return (
		(e.$$set = (e) => {
			'x' in e && s(0, (l = e.x)),
				'y' in e && s(1, (r = e.y)),
				'$$scope' in e && s(6, (a = e.$$scope));
		}),
		[
			l,
			r,
			c,
			() => {
				s(2, (c = !0));
			},
			function () {
				s(2, (c = !1));
			},
			function (e) {
				c && (s(0, (l += 2.5 * e.movementX)), s(1, (r += 2.5 * e.movementY)));
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
	let t, s, n, l, u;
	const f = e[4].default,
		m = a(f, e, e[3], null);
	return {
		c() {
			(t = h('form')), m && m.c(), this.h();
		},
		l(e) {
			t = r(e, 'FORM', { name: !0, class: !0 });
			var s = c(t);
			m && m.l(s), s.forEach(o), this.h();
		},
		h() {
			i(t, 'name', e[0]), i(t, 'class', (s = T(e[2][e[1]]) + ' svelte-1stkaxy'));
		},
		m(s, a) {
			$(s, t, a), m && m.m(t, null), (n = !0), l || ((u = b(t, 'submit', A(e[5]))), (l = !0));
		},
		p(e, [a]) {
			m && m.p && 8 & a && E(m, f, e, e[3], a, null, null),
				(!n || 1 & a) && i(t, 'name', e[0]),
				(!n || (2 & a && s !== (s = T(e[2][e[1]]) + ' svelte-1stkaxy'))) && i(t, 'class', s);
		},
		i(e) {
			n || (M(m, e), (n = !0));
		},
		o(e) {
			z(m, e), (n = !1);
		},
		d(e) {
			e && o(t), m && m.d(e), (l = !1), u();
		}
	};
}
function fe(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ name: l = 'My form group' } = t,
		{ variante: r = 0 } = t;
	return (
		(e.$$set = (e) => {
			'name' in e && s(0, (l = e.name)),
				'variante' in e && s(1, (r = e.variante)),
				'$$scope' in e && s(3, (a = e.$$scope));
		}),
		[
			l,
			r,
			['Variante_0', 'Form_1'],
			a,
			n,
			function (t) {
				O(e, t);
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
			(t = r(e, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(t.value = e[0]),
				i(t, 'placeholder', e[1]),
				i(t, 'type', ''),
				i(t, 'name', ''),
				i(t, 'class', 'svelte-pfml1q');
		},
		m(a, l) {
			$(a, t, l), s || ((n = b(t, 'input', e[2])), (s = !0));
		},
		p(e, [s]) {
			1 & s && t.value !== e[0] && (t.value = e[0]), 2 & s && i(t, 'placeholder', e[1]);
		},
		i: V,
		o: V,
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
			(t = l('circle')), this.h();
		},
		l(e) {
			(t = r(e, 'circle', { cx: !0, cy: !0, r: !0, id: !0, fill: !0, stroke: !0, class: !0 }, 1)),
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
				i(t, 'class', 'svelte-hc4vm2');
		},
		m(e, s) {
			$(e, t, s);
		},
		p: V,
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
		p: V,
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
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
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
		(t = new $e({ props: { x: Ie, y: Se, $$slots: { default: [Ee] }, $$scope: { ctx: e } } })),
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
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function je(e) {
	let t,
		s,
		n,
		a,
		f,
		h = e[4],
		m = [];
	for (let l = 0; l < h.length; l += 1) m[l] = ye(xe(e, h, l));
	let p = e[5],
		d = [];
	for (let l = 0; l < p.length; l += 1) d[l] = be(ve(e, p, l));
	const g = (e) =>
		z(d[e], 1, 1, () => {
			d[e] = null;
		});
	let v = e[0],
		x = [];
	for (let l = 0; l < v.length; l += 1) x[l] = ke(ge(e, v, l));
	const y = (e) =>
		z(x[e], 1, 1, () => {
			x[e] = null;
		});
	return {
		c() {
			(t = l('svg')), (s = l('g'));
			for (let e = 0; e < m.length; e += 1) m[e].c();
			n = D();
			for (let e = 0; e < d.length; e += 1) d[e].c();
			a = D();
			for (let e = 0; e < x.length; e += 1) x[e].c();
			this.h();
		},
		l(e) {
			t = r(e, 'svg', { viewBox: !0, class: !0 }, 1);
			var l = c(t);
			s = r(l, 'g', { transform: !0, class: !0 }, 1);
			var i = c(s);
			for (let t = 0; t < m.length; t += 1) m[t].l(i);
			n = D();
			for (let t = 0; t < d.length; t += 1) d[t].l(i);
			a = D();
			for (let t = 0; t < x.length; t += 1) x[t].l(i);
			i.forEach(o), l.forEach(o), this.h();
		},
		h() {
			i(s, 'transform', 'translate(150,150) scale(0.7)'),
				i(s, 'class', 'svelte-hc4vm2'),
				i(t, 'viewBox', '-1 -1 ' + e[3].width + ' ' + e[3].height),
				i(t, 'class', 'svelte-hc4vm2');
		},
		m(l, r) {
			$(l, t, r), u(t, s);
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
					const l = xe(e, h, a);
					m[a] ? m[a].p(l, t) : ((m[a] = ye(l)), m[a].c(), m[a].m(s, n));
				}
				for (; a < m.length; a += 1) m[a].d(1);
				m.length = h.length;
			}
			if (32 & t) {
				let n;
				for (p = e[5], n = 0; n < p.length; n += 1) {
					const l = ve(e, p, n);
					d[n] ? (d[n].p(l, t), M(d[n], 1)) : ((d[n] = be(l)), d[n].c(), M(d[n], 1), d[n].m(s, a));
				}
				for (G(), n = p.length; n < d.length; n += 1) g(n);
				B();
			}
			if (1 & t) {
				let n;
				for (v = e[0], n = 0; n < v.length; n += 1) {
					const a = ge(e, v, n);
					x[n]
						? (x[n].p(a, t), M(x[n], 1))
						: ((x[n] = ke(a)), x[n].c(), M(x[n], 1), x[n].m(s, null));
				}
				for (G(), n = v.length; n < x.length; n += 1) y(n);
				B();
			}
		},
		i(e) {
			if (!f) {
				for (let e = 0; e < p.length; e += 1) M(d[e]);
				for (let e = 0; e < v.length; e += 1) M(x[e]);
				f = !0;
			}
		},
		o(e) {
			d = d.filter(Boolean);
			for (let t = 0; t < d.length; t += 1) z(d[t]);
			x = x.filter(Boolean);
			for (let t = 0; t < x.length; t += 1) z(x[t]);
			f = !1;
		},
		d(s) {
			s && o(t), q(m, s), q(d, s), q(x, s), e[10](null);
		}
	};
}
function Me(e) {
	let t, s, n, a, l;
	function r(t) {
		e[9](t);
	}
	let c = { placeholder: 'Your word' };
	return (
		void 0 !== e[1] && (c.value = e[1]),
		(t = new de({ props: c })),
		R.push(() => U(t, 'value', r)),
		(a = new _({ props: { variante: 6, text: 'Add' } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = g(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				w(t, e, s), $(e, n, s), w(a, e, s), (l = !0);
			},
			p(e, n) {
				const a = {};
				!s && 2 & n && ((s = !0), (a.value = e[1]), F(() => (s = !1))), t.$set(a);
			},
			i(e) {
				l || (M(t.$$.fragment, e), M(a.$$.fragment, e), (l = !0));
			},
			o(e) {
				z(t.$$.fragment, e), z(a.$$.fragment, e), (l = !1);
			},
			d(e) {
				P(t, e), e && o(n), P(a, e);
			}
		}
	);
}
function ze(e) {
	let t, s, n, a, l, f, y, b, E, k;
	return (
		(E = new he({ props: { variante: 1, $$slots: { default: [Me] }, $$scope: { ctx: e } } })),
		E.$on('submit', e[6]),
		{
			c() {
				(t = h('div')),
					(s = h('hgroup')),
					(n = h('h2')),
					(a = p('Meta-Mapa +0+1234')),
					(l = m()),
					(f = h('p')),
					(y = p('Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.')),
					(b = m()),
					d(E.$$.fragment),
					this.h();
			},
			l(e) {
				t = r(e, 'DIV', { slot: !0, class: !0 });
				var i = c(t);
				s = r(i, 'HGROUP', { class: !0 });
				var $ = c(s);
				n = r($, 'H2', { class: !0 });
				var u = c(n);
				(a = v(u, 'Meta-Mapa +0+1234')), u.forEach(o), (l = g($)), (f = r($, 'P', { class: !0 }));
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
				i(n, 'class', 'svelte-hc4vm2'),
					i(f, 'class', 'svelte-hc4vm2'),
					i(s, 'class', 'svelte-hc4vm2'),
					i(t, 'slot', 'subarea1'),
					i(t, 'class', 'svelte-hc4vm2');
			},
			m(e, r) {
				$(e, t, r),
					u(t, s),
					u(s, n),
					u(n, a),
					u(s, l),
					u(s, f),
					u(f, y),
					u(t, b),
					w(E, t, null),
					(k = !0);
			},
			p(e, t) {
				const s = {};
				4194306 & t && (s.$$scope = { dirty: t, ctx: e }), E.$set(s);
			},
			i(e) {
				k || (M(E.$$.fragment, e), (k = !0));
			},
			o(e) {
				z(E.$$.fragment, e), (k = !1);
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
				t = r(e, 'DIV', { slot: !0, class: !0 });
				var n = c(t);
				x(s.$$.fragment, n), n.forEach(o), this.h();
			},
			h() {
				i(t, 'slot', 'subarea2'), i(t, 'class', 'svelte-hc4vm2');
			},
			m(e, a) {
				$(e, t, a), w(s, t, null), (n = !0);
			},
			p: V,
			i(e) {
				n || (M(s.$$.fragment, e), (n = !0));
			},
			o(e) {
				z(s.$$.fragment, e), (n = !1);
			},
			d(e) {
				e && o(t), P(s);
			}
		}
	);
}
function Le(e) {
	let t, s;
	return (
		(t = new W({
			props: {
				variante: 0,
				$$slots: { subarea2: [Pe], subarea1: [ze], default: [je] },
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
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
let Ie = 0,
	Se = 0;
function Ce(e, t, s) {
	let n = [],
		a = '',
		l = { width: 1e3, height: 1e3 },
		r = l.width / 4,
		c = l.width / 2;
	let o = null;
	const i = (e, t = 'your-01234-map.svg') => {
		e.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		let s = e.outerHTML,
			n = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', s], {
				type: 'image/svg+xml;charset=utf-8'
			}),
			a = URL.createObjectURL(n),
			l = document.createElement('a');
		(l.href = a),
			(l.download = t),
			document.body.appendChild(l),
			l.click(),
			document.body.removeChild(l);
	};
	return [
		n,
		a,
		o,
		l,
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
class He extends e {
	constructor(e) {
		super(), t(this, e, Ce, Le, s, {});
	}
}
function De(e) {
	let t, s;
	const n = e[2].default,
		l = a(n, e, e[1], null);
	return {
		c() {
			(t = h('div')), l && l.c(), this.h();
		},
		l(e) {
			t = r(e, 'DIV', { class: !0 });
			var s = c(t);
			l && l.l(s), s.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'Alert svelte-llyhb0'), N(t, 'haserror', !e[0]);
		},
		m(e, n) {
			$(e, t, n), l && l.m(t, null), (s = !0);
		},
		p(e, [s]) {
			l && l.p && 2 & s && E(l, n, e, e[1], s, null, null), 1 & s && N(t, 'haserror', !e[0]);
		},
		i(e) {
			s || (M(l, e), (s = !0));
		},
		o(e) {
			z(l, e), (s = !1);
		},
		d(e) {
			e && o(t), l && l.d(e);
		}
	};
}
function Ge(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ haserror: l = !1 } = t;
	return (
		(e.$$set = (e) => {
			'haserror' in e && s(0, (l = e.haserror)), '$$scope' in e && s(1, (a = e.$$scope));
		}),
		[l, a, n]
	);
}
class Be extends e {
	constructor(e) {
		super(), t(this, e, Ge, De, s, { haserror: 0 });
	}
}
function Te(e) {
	let t, s, n, a, l;
	function r(t) {
		e[5](t);
	}
	let c = {};
	return (
		void 0 !== e[0] && (c.value = e[0]),
		(t = new de({ props: c })),
		R.push(() => U(t, 'value', r)),
		(a = new _({ props: { variante: 6, text: 'Go!', valorinput: e[0] } })),
		{
			c() {
				d(t.$$.fragment), (n = m()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (n = g(e)), x(a.$$.fragment, e);
			},
			m(e, s) {
				w(t, e, s), $(e, n, s), w(a, e, s), (l = !0);
			},
			p(e, n) {
				const l = {};
				!s && 1 & n && ((s = !0), (l.value = e[0]), F(() => (s = !1))), t.$set(l);
				const r = {};
				1 & n && (r.valorinput = e[0]), a.$set(r);
			},
			i(e) {
				l || (M(t.$$.fragment, e), M(a.$$.fragment, e), (l = !0));
			},
			o(e) {
				z(t.$$.fragment, e), z(a.$$.fragment, e), (l = !1);
			},
			d(e) {
				P(t, e), e && o(n), P(a, e);
			}
		}
	);
}
function Ae(e) {
	let t, s;
	return (
		(t = new Be({ props: { $$slots: { default: [Oe] }, $$scope: { ctx: e } } })),
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
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function Oe(e) {
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
function Ve(e) {
	let t, s, n, a, l, f, y, b, E, j, L, I, S, C, H, D, T, A, O, V, q, R;
	(I = new he({ props: { variante: 0, $$slots: { default: [Te] }, $$scope: { ctx: e } } })),
		I.$on('submit', e[4]);
	let U = 1 == e[1] && Ae(e);
	return {
		c() {
			(t = h('header')),
				(s = h('h2')),
				(n = p('Gematria App')),
				(a = m()),
				(l = h('p')),
				(f = p('Lo que valen las palabras hebreas')),
				(y = m()),
				(b = h('main')),
				(E = h('h2')),
				(j = p(e[3])),
				(L = m()),
				d(I.$$.fragment),
				(S = m()),
				U && U.c(),
				(C = m()),
				(H = h('footer')),
				(D = h('small')),
				(T = p('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(A = m()),
				(O = h('small')),
				(V = h('a')),
				(q = p('Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				this.h();
		},
		l(i) {
			t = r(i, 'HEADER', { class: !0 });
			var $ = c(t);
			s = r($, 'H2', { class: !0 });
			var u = c(s);
			(n = v(u, 'Gematria App')), u.forEach(o), (a = g($)), (l = r($, 'P', { class: !0 }));
			var h = c(l);
			(f = v(h, 'Lo que valen las palabras hebreas')),
				h.forEach(o),
				$.forEach(o),
				(y = g(i)),
				(b = r(i, 'MAIN', { class: !0 }));
			var m = c(b);
			E = r(m, 'H2', { class: !0 });
			var p = c(E);
			(j = v(p, e[3])),
				p.forEach(o),
				(L = g(m)),
				x(I.$$.fragment, m),
				(S = g(m)),
				U && U.l(m),
				m.forEach(o),
				(C = g(i)),
				(H = r(i, 'FOOTER', { class: !0 }));
			var d = c(H);
			D = r(d, 'SMALL', { class: !0 });
			var w = c(D);
			(T = v(w, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				w.forEach(o),
				(A = g(d)),
				(O = r(d, 'SMALL', { class: !0 }));
			var k = c(O);
			V = r(k, 'A', { href: !0, target: !0, class: !0 });
			var M = c(V);
			(q = v(M, 'Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				M.forEach(o),
				k.forEach(o),
				d.forEach(o),
				this.h();
		},
		h() {
			i(s, 'class', 'svelte-17jtjak'),
				i(l, 'class', 'svelte-17jtjak'),
				i(t, 'class', 'svelte-17jtjak'),
				i(E, 'class', 'result svelte-17jtjak'),
				i(b, 'class', 'svelte-17jtjak'),
				i(D, 'class', 'svelte-17jtjak'),
				i(V, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(V, 'target', '_blank'),
				i(V, 'class', 'svelte-17jtjak'),
				i(O, 'class', 'svelte-17jtjak'),
				i(H, 'class', 'svelte-17jtjak');
		},
		m(e, r) {
			$(e, t, r),
				u(t, s),
				u(s, n),
				u(t, a),
				u(t, l),
				u(l, f),
				$(e, y, r),
				$(e, b, r),
				u(b, E),
				u(E, j),
				u(b, L),
				w(I, b, null),
				u(b, S),
				U && U.m(b, null),
				$(e, C, r),
				$(e, H, r),
				u(H, D),
				u(D, T),
				u(H, A),
				u(H, O),
				u(O, V),
				u(V, q),
				(R = !0);
		},
		p(e, [t]) {
			(!R || 8 & t) && k(j, e[3]);
			const s = {};
			513 & t && (s.$$scope = { dirty: t, ctx: e }),
				I.$set(s),
				1 == e[1]
					? U
						? (U.p(e, t), 2 & t && M(U, 1))
						: ((U = Ae(e)), U.c(), M(U, 1), U.m(b, null))
					: U &&
					  (G(),
					  z(U, 1, 1, () => {
							U = null;
					  }),
					  B());
		},
		i(e) {
			R || (M(I.$$.fragment, e), M(U), (R = !0));
		},
		o(e) {
			z(I.$$.fragment, e), z(U), (R = !1);
		},
		d(e) {
			e && o(t), e && o(y), e && o(b), P(I), U && U.d(), e && o(C), e && o(H);
		}
	};
}
function qe(e, t, s) {
	let n,
		a = '',
		l = !1,
		r = '',
		c = [];
	return (
		s(3, (n = 0)),
		[
			a,
			l,
			r,
			n,
			function () {
				s(1, (l = !1)), s(3, (n = 0)), s(0, a), (c = a.split('')), s(2, (r = ''));
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
						: (s(1, (l = !0)),
						  s(1, (l = !0))
								? s(2, (r = 'Sólo contabilizan las consonantes hebreas.'))
								: (s(1, (l = !1)), s(2, (r = ''))));
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
		super(), t(this, e, qe, Ve, s, {});
	}
}
function Ue(e) {
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
			p: V,
			i(e) {
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
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
		(t = new re({
			props: {
				variante: 2,
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
			p: V,
			i(e) {
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
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
		(t = new He({})),
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
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
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
		(t = new Re({})),
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
				s || (M(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				z(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function Je(e) {
	let t, s, n, a, l, r, c, i;
	return (
		(t = new K({
			props: { id: 'cover', variante: 3, $$slots: { default: [Ue] }, $$scope: { ctx: e } }
		})),
		(n = new K({
			props: { id: 'phi', variante: 1, $$slots: { default: [Fe] }, $$scope: { ctx: e } }
		})),
		(l = new K({
			props: { id: 't0t', variante: 1, $$slots: { default: [Ne] }, $$scope: { ctx: e } }
		})),
		(c = new K({
			props: { id: 'gematria', variante: 2, $$slots: { default: [_e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment),
					(s = m()),
					d(n.$$.fragment),
					(a = m()),
					d(l.$$.fragment),
					(r = m()),
					d(c.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e),
					(s = g(e)),
					x(n.$$.fragment, e),
					(a = g(e)),
					x(l.$$.fragment, e),
					(r = g(e)),
					x(c.$$.fragment, e);
			},
			m(e, o) {
				w(t, e, o),
					$(e, s, o),
					w(n, e, o),
					$(e, a, o),
					w(l, e, o),
					$(e, r, o),
					w(c, e, o),
					(i = !0);
			},
			p(e, [s]) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), n.$set(r);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: e }), l.$set(o);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), c.$set(i);
			},
			i(e) {
				i ||
					(M(t.$$.fragment, e),
					M(n.$$.fragment, e),
					M(l.$$.fragment, e),
					M(c.$$.fragment, e),
					(i = !0));
			},
			o(e) {
				z(t.$$.fragment, e),
					z(n.$$.fragment, e),
					z(l.$$.fragment, e),
					z(c.$$.fragment, e),
					(i = !1);
			},
			d(e) {
				P(t, e), e && o(s), P(n, e), e && o(a), P(l, e), e && o(r), P(c, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Je, s, {});
	}
}
