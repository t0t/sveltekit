import {
	S as e,
	i as t,
	s,
	Q as n,
	M as l,
	E as a,
	c as r,
	a as c,
	d as o,
	o as i,
	f as h,
	g as $,
	a3 as f,
	e as u,
	j as p,
	t as m,
	p as d,
	l as v,
	b as g,
	q as x,
	a4 as w,
	r as y,
	H as E,
	O as q,
	h as b,
	a5 as M,
	w as k,
	x as I,
	y as P,
	K as L,
	a0 as S,
	a6 as T,
	a7 as A,
	R as B,
	k as H,
	C as D,
	D as j,
	n as C,
	a8 as G,
	J as N,
	G as O,
	T as V,
	U as R,
	V as U
} from '../../chunks/index-d91e1ed8.js';
import { S as F } from '../../chunks/Section-15bca940.js';
import { B as z, f as J } from '../../chunks/Button-e3a987c3.js';
import { t as K } from '../../chunks/index-c4bdeab8.js';
import '../../chunks/index-78b22dae.js';
import '../../chunks/index-cc16b092.js';
function Q(e, t, s) {
	const n = e.slice();
	return (n[17] = t[s]), (n[19] = s), n;
}
const W = (e) => ({}),
	X = (e) => ({});
function Y(e, t) {
	let s, n, l;
	return {
		key: e,
		first: null,
		c() {
			(s = a('circle')), this.h();
		},
		l(e) {
			(s = r(e, 'circle', { r: !0, cx: !0, cy: !0, class: !0 }, 1)), c(s).forEach(o), this.h();
		},
		h() {
			i(s, 'r', t[7]),
				i(s, 'cx', (n = Math.cos(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'cy', (l = Math.sin(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'class', 'svelte-1w7oqxl'),
				(this.first = s);
		},
		m(e, t) {
			h(e, s, t);
		},
		p(e, a) {
			(t = e),
				72 & a && n !== (n = Math.cos(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cx', n),
				72 & a && l !== (l = Math.sin(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cy', l);
		},
		d(e) {
			e && o(s);
		}
	};
}
function _(e) {
	let t, s, S, T, B, H, D, j, C, G, N, O, V, R, U, F, J, K, _;
	n(e[12]);
	const ee = e[11].hasvideo,
		te = l(ee, e, e[10], X),
		se =
			te ||
			(function (e) {
				let t,
					s,
					n = [],
					l = new Map(),
					u = { length: e[6] };
				const p = (e) => e[19];
				for (let a = 0; a < u.length; a += 1) {
					let t = Q(e, u, a),
						s = p(t);
					l.set(s, (n[a] = Y(s, t)));
				}
				return {
					c() {
						(t = a('svg')), (s = a('g'));
						for (let e = 0; e < n.length; e += 1) n[e].c();
						this.h();
					},
					l(e) {
						t = r(e, 'svg', { viewBox: !0, xmlns: !0, class: !0 }, 1);
						var l = c(t);
						s = r(l, 'g', { class: !0 }, 1);
						var a = c(s);
						for (let t = 0; t < n.length; t += 1) n[t].l(a);
						a.forEach(o), l.forEach(o), this.h();
					},
					h() {
						i(s, 'class', 'svelte-1w7oqxl'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-1w7oqxl');
					},
					m(e, l) {
						h(e, t, l), $(t, s);
						for (let t = 0; t < n.length; t += 1) n[t].m(s, null);
					},
					p(e, t) {
						200 & t && ((u = { length: e[6] }), (n = f(n, t, p, 1, e, u, l, s, A, Y, null, Q)));
					},
					d(e) {
						e && o(t);
						for (let t = 0; t < n.length; t += 1) n[t].d();
					}
				};
			})(e);
	return (
		(U = new z({ props: { variante: 0, text: 'Play' } })),
		U.$on('click', e[15]),
		{
			c() {
				(t = u('section')),
					(s = u('div')),
					se && se.c(),
					(S = p()),
					(T = u('div')),
					(B = u('h2')),
					(H = m(e[0])),
					(D = p()),
					(j = u('p')),
					(C = p()),
					(G = u('div')),
					(N = u('input')),
					(O = p()),
					(V = u('input')),
					(R = p()),
					d(U.$$.fragment),
					this.h();
			},
			l(n) {
				t = r(n, 'SECTION', { class: !0 });
				var l = c(t);
				s = r(l, 'DIV', { class: !0 });
				var a = c(s);
				se && se.l(a), a.forEach(o), (S = v(l)), (T = r(l, 'DIV', { class: !0 }));
				var i = c(T);
				B = r(i, 'H2', { class: !0 });
				var h = c(B);
				(H = g(h, e[0])),
					h.forEach(o),
					(D = v(i)),
					(j = r(i, 'P', { class: !0 })),
					c(j).forEach(o),
					(C = v(i)),
					(G = r(i, 'DIV', { class: !0 }));
				var $ = c(G);
				(N = r($, 'INPUT', { type: !0, step: !0, class: !0 })),
					(O = v($)),
					(V = r($, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					$.forEach(o),
					(R = v(i)),
					x(U.$$.fragment, i),
					i.forEach(o),
					l.forEach(o),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-1w7oqxl'),
					i(B, 'class', 'svelte-1w7oqxl'),
					i(j, 'class', 'svelte-1w7oqxl'),
					i(N, 'type', 'number'),
					i(N, 'step', '0.001'),
					i(N, 'class', 'svelte-1w7oqxl'),
					i(V, 'type', 'range'),
					i(V, 'min', 0),
					i(V, 'max', Z),
					i(V, 'class', 'svelte-1w7oqxl'),
					i(G, 'class', 'controls svelte-1w7oqxl'),
					i(T, 'class', 'PhiSvgText svelte-1w7oqxl'),
					i(t, 'class', (F = 'PhiSvg ' + e[9][e[2]] + ' svelte-1w7oqxl'));
			},
			m(n, l) {
				h(n, t, l),
					$(t, s),
					se && se.m(s, null),
					$(t, S),
					$(t, T),
					$(T, B),
					$(B, H),
					$(T, D),
					$(T, j),
					(j.innerHTML = e[1]),
					$(T, C),
					$(T, G),
					$(G, N),
					w(N, e[3]),
					$(G, O),
					$(G, V),
					w(V, e[6]),
					$(T, R),
					y(U, T, null),
					(J = !0),
					K ||
						((_ = [
							E(window, 'resize', e[12]),
							E(N, 'input', e[13]),
							E(V, 'change', e[14]),
							E(V, 'input', e[14])
						]),
						(K = !0));
			},
			p(e, [s]) {
				te ? te.p && 1024 & s && q(te, ee, e, e[10], s, W, X) : se && se.p && 72 & s && se.p(e, s),
					(!J || 1 & s) && b(H, e[0]),
					(!J || 2 & s) && (j.innerHTML = e[1]),
					8 & s && M(N.value) !== e[3] && w(N, e[3]),
					64 & s && w(V, e[6]),
					(!J || (4 & s && F !== (F = 'PhiSvg ' + e[9][e[2]] + ' svelte-1w7oqxl'))) &&
						i(t, 'class', F);
			},
			i(e) {
				J || (k(se, e), k(U.$$.fragment, e), (J = !0));
			},
			o(e) {
				I(se, e), I(U.$$.fragment, e), (J = !1);
			},
			d(e) {
				e && o(t), se && se.d(e), P(U), (K = !1), L(_);
			}
		}
	);
}
let Z = 360;
function ee(e, t, s) {
	let n,
		l,
		a,
		{ $$slots: r = {}, $$scope: c } = t,
		{ title: o = '' } = t,
		{ text: i = '' } = t,
		h = 0.618033988749,
		$ = K(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
	S(e, $, (e) => s(6, (n = e)));
	let { variante: f = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (o = e.title)),
				'text' in e && s(1, (i = e.text)),
				'variante' in e && s(2, (f = e.variante)),
				'$$scope' in e && s(10, (c = e.$$scope));
		}),
		T($, (n = Z), n),
		[
			o,
			i,
			f,
			h,
			l,
			a,
			n,
			1.62 * 1.62,
			$,
			['Light', 'Dark', 'Colored', 'Light2'],
			c,
			r,
			function () {
				s(4, (l = window.innerWidth)), s(5, (a = window.innerHeight));
			},
			function () {
				(h = M(this.value)), s(3, h);
			},
			function () {
				(n = M(this.value)), $.set(n);
			},
			() => {
				T($, (n = n > 0 ? 0 : Z), n);
			}
		]
	);
}
class te extends e {
	constructor(e) {
		super(), t(this, e, ee, _, s, { title: 0, text: 1, variante: 2 });
	}
}
function se(e) {
	let t, s, l, f;
	return {
		c() {
			(t = a('div')), (s = m('xxx')), this.h();
		},
		l(e) {
			t = r(e, 'div', { class: !0 }, 1);
			var n = c(t);
			(s = g(n, 'xxx')), n.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'svelte-v8ap0m');
		},
		m(e, n) {
			h(e, t, n), $(t, s), (f = !0);
		},
		i(e) {
			f ||
				(n(() => {
					l || (l = B(t, J, {}, !0)), l.run(1);
				}),
				(f = !0));
		},
		o(e) {
			l || (l = B(t, J, {}, !1)), l.run(0), (f = !1);
		},
		d(e) {
			e && o(t), e && l && l.end();
		}
	};
}
function ne(e) {
	let t,
		s,
		n,
		f,
		u,
		p = e[2] && se();
	const m = e[7].default,
		d = l(m, e, e[6], null);
	return {
		c() {
			(t = a('text')), p && p.c(), (s = H()), d && d.c(), this.h();
		},
		l(e) {
			t = r(e, 'text', { x: !0, y: !0, class: !0 }, 1);
			var n = c(t);
			p && p.l(n), (s = H()), d && d.l(n), n.forEach(o), this.h();
		},
		h() {
			i(t, 'x', e[0]), i(t, 'y', e[1]), i(t, 'class', 'draggable svelte-v8ap0m');
		},
		m(l, a) {
			h(l, t, a),
				p && p.m(t, null),
				$(t, s),
				d && d.m(t, null),
				(n = !0),
				f ||
					((u = [E(window, 'mouseup', e[4]), E(t, 'mousedown', e[3]), E(t, 'mousemove', e[5])]),
					(f = !0));
		},
		p(e, [l]) {
			e[2]
				? p
					? 4 & l && k(p, 1)
					: ((p = se()), p.c(), k(p, 1), p.m(t, s))
				: p &&
				  (D(),
				  I(p, 1, 1, () => {
						p = null;
				  }),
				  j()),
				d && d.p && 64 & l && q(d, m, e, e[6], l, null, null),
				(!n || 1 & l) && i(t, 'x', e[0]),
				(!n || 2 & l) && i(t, 'y', e[1]);
		},
		i(e) {
			n || (k(p), k(d, e), (n = !0));
		},
		o(e) {
			I(p), I(d, e), (n = !1);
		},
		d(e) {
			e && o(t), p && p.d(), d && d.d(e), (f = !1), L(u);
		}
	};
}
function le(e, t, s) {
	let { $$slots: n = {}, $$scope: l } = t,
		{ x: a = 0 } = t,
		{ y: r = 0 } = t,
		c = !1;
	return (
		(e.$$set = (e) => {
			'x' in e && s(0, (a = e.x)),
				'y' in e && s(1, (r = e.y)),
				'$$scope' in e && s(6, (l = e.$$scope));
		}),
		[
			a,
			r,
			c,
			() => {
				s(2, (c = !0));
			},
			function () {
				s(2, (c = !1));
			},
			function (e) {
				c && (s(0, (a += 2.5 * e.movementX)), s(1, (r += 2.5 * e.movementY)));
			},
			l,
			n
		]
	);
}
class ae extends e {
	constructor(e) {
		super(), t(this, e, le, ne, s, { x: 0, y: 1 });
	}
}
function re(e, t, s) {
	const n = e.slice();
	return (n[11] = t[s]), n;
}
function ce(e, t, s) {
	const n = e.slice();
	return (n[14] = t[s]), n;
}
function oe(e, t, s) {
	const n = e.slice();
	return (n[17] = t[s]), n;
}
function ie(e) {
	let t;
	return {
		c() {
			(t = a('circle')), this.h();
		},
		l(e) {
			(t = r(e, 'circle', { cx: !0, cy: !0, r: !0, id: !0, class: !0 }, 1)),
				c(t).forEach(o),
				this.h();
		},
		h() {
			i(t, 'cx', e[17].cx),
				i(t, 'cy', e[17].cy),
				i(t, 'r', e[17].r),
				i(t, 'id', e[17].id),
				i(t, 'class', 'svelte-keh5nn');
		},
		m(e, s) {
			h(e, t, s);
		},
		p: C,
		d(e) {
			e && o(t);
		}
	};
}
function he(e) {
	let t,
		s = e[14].id + '';
	return {
		c() {
			t = m(s);
		},
		l(e) {
			t = g(e, s);
		},
		m(e, s) {
			h(e, t, s);
		},
		p: C,
		d(e) {
			e && o(t);
		}
	};
}
function $e(e) {
	let t, s;
	return (
		(t = new ae({
			props: { x: e[14].xpos, y: e[14].ypos, $$slots: { default: [he] }, $$scope: { ctx: e } }
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
				256 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (k(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function fe(e) {
	let t,
		s = e[11] + '';
	return {
		c() {
			t = m(s);
		},
		l(e) {
			t = g(e, s);
		},
		m(e, s) {
			h(e, t, s);
		},
		p(e, n) {
			1 & n && s !== (s = e[11] + '') && b(t, s);
		},
		d(e) {
			e && o(t);
		}
	};
}
function ue(e) {
	let t, s;
	return (
		(t = new ae({ props: { x: me, y: de, $$slots: { default: [fe] }, $$scope: { ctx: e } } })),
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
				257 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (k(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function pe(e) {
	let t,
		s,
		f,
		m,
		g,
		b,
		M,
		S,
		T,
		A,
		C,
		O,
		V,
		R,
		U,
		F = e[3],
		K = [];
	for (let n = 0; n < F.length; n += 1) K[n] = ie(oe(e, F, n));
	let Q = e[4],
		W = [];
	for (let n = 0; n < Q.length; n += 1) W[n] = $e(ce(e, Q, n));
	const X = (e) =>
		I(W[e], 1, 1, () => {
			W[e] = null;
		});
	let Y = e[0],
		_ = [];
	for (let n = 0; n < Y.length; n += 1) _[n] = ue(re(e, Y, n));
	const Z = (e) =>
		I(_[e], 1, 1, () => {
			_[e] = null;
		});
	A = new z({ props: { variante: 1, text: 'Añade item al mapa' } });
	const ee = e[6].default,
		te = l(ee, e, e[8], null);
	return {
		c() {
			(t = a('svg')), (s = a('g'));
			for (let e = 0; e < K.length; e += 1) K[e].c();
			f = H();
			for (let e = 0; e < W.length; e += 1) W[e].c();
			m = H();
			for (let e = 0; e < _.length; e += 1) _[e].c();
			(g = p()),
				(b = u('div')),
				(M = u('form')),
				(S = u('input')),
				(T = p()),
				d(A.$$.fragment),
				(O = p()),
				te && te.c(),
				this.h();
		},
		l(e) {
			t = r(e, 'svg', { viewBox: !0, transform: !0, class: !0 }, 1);
			var n = c(t);
			s = r(n, 'g', { transform: !0, class: !0 }, 1);
			var l = c(s);
			for (let t = 0; t < K.length; t += 1) K[t].l(l);
			f = H();
			for (let t = 0; t < W.length; t += 1) W[t].l(l);
			m = H();
			for (let t = 0; t < _.length; t += 1) _[t].l(l);
			l.forEach(o), n.forEach(o), (g = v(e)), (b = r(e, 'DIV', { class: !0 }));
			var a = c(b);
			M = r(a, 'FORM', { class: !0 });
			var i = c(M);
			(S = r(i, 'INPUT', { placeholder: !0, class: !0 })),
				(T = v(i)),
				x(A.$$.fragment, i),
				i.forEach(o),
				a.forEach(o),
				(O = v(e)),
				te && te.l(e),
				this.h();
		},
		h() {
			i(s, 'transform', 'translate(150,150) scale(0.7)'),
				i(s, 'class', 'svelte-keh5nn'),
				i(t, 'viewBox', '-1 -1 ' + e[2].width + ' ' + e[2].height),
				i(t, 'transform', ''),
				i(t, 'class', 'svelte-keh5nn'),
				i(S, 'placeholder', 'infinitud, espíritu, alma, mente, cuerpo'),
				i(S, 'class', 'svelte-keh5nn'),
				i(M, 'class', 'svelte-keh5nn'),
				i(b, 'class', 'controls svelte-keh5nn');
		},
		m(n, l) {
			h(n, t, l), $(t, s);
			for (let e = 0; e < K.length; e += 1) K[e].m(s, null);
			$(s, f);
			for (let e = 0; e < W.length; e += 1) W[e].m(s, null);
			$(s, m);
			for (let e = 0; e < _.length; e += 1) _[e].m(s, null);
			h(n, g, l),
				h(n, b, l),
				$(b, M),
				$(M, S),
				w(S, e[1]),
				$(M, T),
				y(A, M, null),
				h(n, O, l),
				te && te.m(n, l),
				(V = !0),
				R || ((U = [E(S, 'input', e[7]), E(M, 'submit', G(e[5]))]), (R = !0));
		},
		p(e, [t]) {
			if (8 & t) {
				let n;
				for (F = e[3], n = 0; n < F.length; n += 1) {
					const l = oe(e, F, n);
					K[n] ? K[n].p(l, t) : ((K[n] = ie(l)), K[n].c(), K[n].m(s, f));
				}
				for (; n < K.length; n += 1) K[n].d(1);
				K.length = F.length;
			}
			if (16 & t) {
				let n;
				for (Q = e[4], n = 0; n < Q.length; n += 1) {
					const l = ce(e, Q, n);
					W[n] ? (W[n].p(l, t), k(W[n], 1)) : ((W[n] = $e(l)), W[n].c(), k(W[n], 1), W[n].m(s, m));
				}
				for (D(), n = Q.length; n < W.length; n += 1) X(n);
				j();
			}
			if (1 & t) {
				let n;
				for (Y = e[0], n = 0; n < Y.length; n += 1) {
					const l = re(e, Y, n);
					_[n]
						? (_[n].p(l, t), k(_[n], 1))
						: ((_[n] = ue(l)), _[n].c(), k(_[n], 1), _[n].m(s, null));
				}
				for (D(), n = Y.length; n < _.length; n += 1) Z(n);
				j();
			}
			2 & t && S.value !== e[1] && w(S, e[1]),
				te && te.p && 256 & t && q(te, ee, e, e[8], t, null, null);
		},
		i(e) {
			if (!V) {
				for (let e = 0; e < Q.length; e += 1) k(W[e]);
				for (let e = 0; e < Y.length; e += 1) k(_[e]);
				k(A.$$.fragment, e),
					n(() => {
						C || (C = B(b, J, {}, !0)), C.run(1);
					}),
					k(te, e),
					(V = !0);
			}
		},
		o(e) {
			W = W.filter(Boolean);
			for (let t = 0; t < W.length; t += 1) I(W[t]);
			_ = _.filter(Boolean);
			for (let t = 0; t < _.length; t += 1) I(_[t]);
			I(A.$$.fragment, e), C || (C = B(b, J, {}, !1)), C.run(0), I(te, e), (V = !1);
		},
		d(e) {
			e && o(t),
				N(K, e),
				N(W, e),
				N(_, e),
				e && o(g),
				e && o(b),
				P(A),
				e && C && C.end(),
				e && o(O),
				te && te.d(e),
				(R = !1),
				L(U);
		}
	};
}
let me = 0,
	de = 0;
function ve(e, t, s) {
	let { $$slots: n = {}, $$scope: l } = t,
		a = [],
		r = '',
		c = { width: 1e3, height: 1e3 },
		o = c.width / 4,
		i = c.width / 2,
		h = [
			{ id: 'circulogrande', cx: i, cy: i, r: i },
			{ id: 'circuloizda', cx: o, cy: i, r: o },
			{ id: 'circulodcha', cx: 3 * o, cy: i, r: o }
		];
	return (
		(e.$$set = (e) => {
			'$$scope' in e && s(8, (l = e.$$scope));
		}),
		[
			a,
			r,
			c,
			h,
			[
				{ id: 0, xpos: 0, ypos: 500 },
				{ id: 1, xpos: 500, ypos: 500 },
				{ id: 2, xpos: 750, ypos: 750 },
				{ id: 3, xpos: 750, ypos: 250 },
				{ id: 4, xpos: 1e3, ypos: 500 }
			],
			() => {
				s(0, (a = [...a, r]));
			},
			n,
			function () {
				(r = this.value), s(1, r);
			},
			l
		]
	);
}
class ge extends e {
	constructor(e) {
		super(), t(this, e, ve, pe, s, {});
	}
}
function xe(e) {
	let t, s, n;
	return {
		c() {
			(t = u('input')), this.h();
		},
		l(e) {
			(t = r(e, 'INPUT', { value: !0, placeholder: !0, type: !0, name: !0, class: !0 })), this.h();
		},
		h() {
			(t.value = e[0]),
				i(t, 'placeholder', e[1]),
				i(t, 'type', ''),
				i(t, 'name', ''),
				i(t, 'class', 'svelte-1p1lx92');
		},
		m(l, a) {
			h(l, t, a), s || ((n = E(t, 'input', e[2])), (s = !0));
		},
		p(e, [s]) {
			1 & s && t.value !== e[0] && (t.value = e[0]), 2 & s && i(t, 'placeholder', e[1]);
		},
		i: C,
		o: C,
		d(e) {
			e && o(t), (s = !1), n();
		}
	};
}
function we(e, t, s) {
	let { value: n = '' } = t,
		{ placeholder: l = '"...בראשית ברא אלהים"' } = t;
	return (
		(e.$$set = (e) => {
			'value' in e && s(0, (n = e.value)), 'placeholder' in e && s(1, (l = e.placeholder));
		}),
		[n, l, (e) => s(0, (n = e.target.value))]
	);
}
class ye extends e {
	constructor(e) {
		super(), t(this, e, we, xe, s, { value: 0, placeholder: 1 });
	}
}
function Ee(e) {
	let t, s;
	const n = e[2].default,
		a = l(n, e, e[1], null);
	return {
		c() {
			(t = u('div')), a && a.c(), this.h();
		},
		l(e) {
			t = r(e, 'DIV', { class: !0 });
			var s = c(t);
			a && a.l(s), s.forEach(o), this.h();
		},
		h() {
			i(t, 'class', 'Alert svelte-xmwip0'), O(t, 'haserror', !e[0]);
		},
		m(e, n) {
			h(e, t, n), a && a.m(t, null), (s = !0);
		},
		p(e, [s]) {
			a && a.p && 2 & s && q(a, n, e, e[1], s, null, null), 1 & s && O(t, 'haserror', !e[0]);
		},
		i(e) {
			s || (k(a, e), (s = !0));
		},
		o(e) {
			I(a, e), (s = !1);
		},
		d(e) {
			e && o(t), a && a.d(e);
		}
	};
}
function qe(e, t, s) {
	let { $$slots: n = {}, $$scope: l } = t,
		{ haserror: a = !1 } = t;
	return (
		(e.$$set = (e) => {
			'haserror' in e && s(0, (a = e.haserror)), '$$scope' in e && s(1, (l = e.$$scope));
		}),
		[a, l, n]
	);
}
class be extends e {
	constructor(e) {
		super(), t(this, e, qe, Ee, s, { haserror: 0 });
	}
}
function Me(e) {
	let t, s;
	return (
		(t = new be({ props: { $$slots: { default: [ke] }, $$scope: { ctx: e } } })),
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
				s || (k(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function ke(e) {
	let t;
	return {
		c() {
			t = m(e[2]);
		},
		l(s) {
			t = g(s, e[2]);
		},
		m(e, s) {
			h(e, t, s);
		},
		p(e, s) {
			4 & s && b(t, e[2]);
		},
		d(e) {
			e && o(t);
		}
	};
}
function Ie(e) {
	let t, s, n, l, a, f, w, q, M, L, S, T, A, B, H, C, N, O, F, J, K, Q, W, X, Y, _, Z, ee, te;
	function se(t) {
		e[5](t);
	}
	let ne = {};
	void 0 !== e[0] && (ne.value = e[0]),
		(B = new ye({ props: ne })),
		V.push(() => R(B, 'value', se)),
		(N = new z({ props: { variante: 1, text: 'Go!' } }));
	let le = 1 == e[1] && Me(e);
	return {
		c() {
			(t = u('main')),
				(s = u('header')),
				(n = u('h1')),
				(l = m('Gematria App')),
				(a = p()),
				(f = u('h3')),
				(w = m('Lo que valen las palabras hebreas')),
				(q = p()),
				(M = u('section')),
				(L = u('h2')),
				(S = m(e[3])),
				(T = p()),
				(A = u('form')),
				d(B.$$.fragment),
				(C = p()),
				d(N.$$.fragment),
				(O = p()),
				le && le.c(),
				(F = p()),
				(J = u('footer')),
				(K = u('small')),
				(Q = m('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(W = p()),
				(X = u('small')),
				(Y = u('a')),
				(_ = m('Prueba tomanto los textos hebreos directamente del Codex de Leningrado')),
				this.h();
		},
		l(i) {
			t = r(i, 'MAIN', { class: !0 });
			var h = c(t);
			s = r(h, 'HEADER', { class: !0 });
			var $ = c(s);
			n = r($, 'H1', { class: !0 });
			var u = c(n);
			(l = g(u, 'Gematria App')), u.forEach(o), (a = v($)), (f = r($, 'H3', { class: !0 }));
			var p = c(f);
			(w = g(p, 'Lo que valen las palabras hebreas')),
				p.forEach(o),
				$.forEach(o),
				(q = v(h)),
				(M = r(h, 'SECTION', { class: !0 }));
			var m = c(M);
			L = r(m, 'H2', { class: !0 });
			var d = c(L);
			(S = g(d, e[3])), d.forEach(o), (T = v(m)), (A = r(m, 'FORM', { name: !0, class: !0 }));
			var y = c(A);
			x(B.$$.fragment, y),
				(C = v(y)),
				x(N.$$.fragment, y),
				y.forEach(o),
				(O = v(m)),
				le && le.l(m),
				m.forEach(o),
				(F = v(h)),
				(J = r(h, 'FOOTER', { class: !0 }));
			var E = c(J);
			K = r(E, 'SMALL', { class: !0 });
			var b = c(K);
			(Q = g(b, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				b.forEach(o),
				(W = v(E)),
				(X = r(E, 'SMALL', { class: !0 }));
			var k = c(X);
			Y = r(k, 'A', { href: !0, target: !0, class: !0 });
			var I = c(Y);
			(_ = g(I, 'Prueba tomanto los textos hebreos directamente del Codex de Leningrado')),
				I.forEach(o),
				k.forEach(o),
				E.forEach(o),
				h.forEach(o),
				this.h();
		},
		h() {
			i(n, 'class', 'svelte-qvwih6'),
				i(f, 'class', 'svelte-qvwih6'),
				i(s, 'class', 'svelte-qvwih6'),
				i(L, 'class', 'svelte-qvwih6'),
				i(A, 'name', 'myForm'),
				i(A, 'class', 'svelte-qvwih6'),
				i(M, 'class', 'svelte-qvwih6'),
				i(K, 'class', 'svelte-qvwih6'),
				i(Y, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(Y, 'target', '_blank'),
				i(Y, 'class', 'svelte-qvwih6'),
				i(X, 'class', 'svelte-qvwih6'),
				i(J, 'class', 'svelte-qvwih6'),
				i(t, 'class', 'svelte-qvwih6');
		},
		m(r, c) {
			h(r, t, c),
				$(t, s),
				$(s, n),
				$(n, l),
				$(s, a),
				$(s, f),
				$(f, w),
				$(t, q),
				$(t, M),
				$(M, L),
				$(L, S),
				$(M, T),
				$(M, A),
				y(B, A, null),
				$(A, C),
				y(N, A, null),
				$(M, O),
				le && le.m(M, null),
				$(t, F),
				$(t, J),
				$(J, K),
				$(K, Q),
				$(J, W),
				$(J, X),
				$(X, Y),
				$(Y, _),
				(Z = !0),
				ee || ((te = E(A, 'submit', G(e[4]))), (ee = !0));
		},
		p(e, [t]) {
			(!Z || 8 & t) && b(S, e[3]);
			const s = {};
			!H && 1 & t && ((H = !0), (s.value = e[0]), U(() => (H = !1))),
				B.$set(s),
				1 == e[1]
					? le
						? (le.p(e, t), 2 & t && k(le, 1))
						: ((le = Me(e)), le.c(), k(le, 1), le.m(M, null))
					: le &&
					  (D(),
					  I(le, 1, 1, () => {
							le = null;
					  }),
					  j());
		},
		i(e) {
			Z || (k(B.$$.fragment, e), k(N.$$.fragment, e), k(le), (Z = !0));
		},
		o(e) {
			I(B.$$.fragment, e), I(N.$$.fragment, e), I(le), (Z = !1);
		},
		d(e) {
			e && o(t), P(B), P(N), le && le.d(), (ee = !1), te();
		}
	};
}
function Pe(e, t, s) {
	let n = '',
		l = !1,
		a = '',
		r = 0,
		c = [];
	return [
		n,
		l,
		a,
		r,
		function () {
			s(1, (l = !1)), s(3, (r = 0)), s(0, n), (c = n.split('')), s(2, (a = ''));
			for (const e of c)
				'א' == e
					? s(3, (r += 1))
					: 'ב' == e
					? s(3, (r += 2))
					: 'ג' == e
					? s(3, (r += 3))
					: 'ד' == e
					? s(3, (r += 4))
					: 'ה' == e
					? s(3, (r += 5))
					: 'ו' == e
					? s(3, (r += 6))
					: 'ז' == e
					? s(3, (r += 7))
					: 'ח' == e
					? s(3, (r += 8))
					: 'ט' == e
					? s(3, (r += 9))
					: 'י' == e
					? s(3, (r += 10))
					: 'כ' == e
					? s(3, (r += 20))
					: 'ל' == e
					? s(3, (r += 30))
					: 'מ' == e
					? s(3, (r += 40))
					: 'ן' == e
					? s(3, (r += 50))
					: 'ס' == e
					? s(3, (r += 60))
					: 'ע' == e
					? s(3, (r += 70))
					: 'פ' == e
					? s(3, (r += 80))
					: 'צ' == e
					? s(3, (r += 90))
					: 'ק' == e
					? s(3, (r += 100))
					: 'ר' == e
					? s(3, (r += 200))
					: 'ש' == e
					? s(3, (r += 300))
					: 'ת' == e
					? s(3, (r += 400))
					: 'ך' == e
					? s(3, (r += 500))
					: 'ם' == e
					? s(3, (r += 600))
					: 'ן' == e
					? s(3, (r += 700))
					: 'ף' == e
					? s(3, (r += 800))
					: 'ץ' == e
					? s(3, (r += 900))
					: ' ' == e
					? s(3, (r += 0))
					: (s(1, (l = !0)),
					  s(1, (l = !0))
							? s(2, (a = 'Sólo contabilizan las consonantes hebreas.'))
							: (s(1, (l = !1)), s(2, (a = ''))));
			return r;
		},
		function (e) {
			(n = e), s(0, n);
		}
	];
}
class Le extends e {
	constructor(e) {
		super(), t(this, e, Pe, Ie, s, {});
	}
}
function Se(e) {
	let t, s;
	return (
		(t = new te({ props: { variante: 2, title: 'phi title', text: 'testttt' } })),
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
			p: C,
			i(e) {
				s || (k(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function Te(e) {
	let t, s;
	return (
		(t = new ge({})),
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
				s || (k(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function Ae(e) {
	let t, s;
	return (
		(t = new Le({})),
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
				s || (k(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				I(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				P(t, e);
			}
		}
	);
}
function Be(e) {
	let t, s, n, l, a, r;
	return (
		(t = new F({
			props: { id: 'phi', variante: 1, $$slots: { default: [Se] }, $$scope: { ctx: e } }
		})),
		(n = new F({
			props: { id: 't0t', variante: 4, $$slots: { default: [Te] }, $$scope: { ctx: e } }
		})),
		(a = new F({
			props: { id: 'gematria', variante: 0, $$slots: { default: [Ae] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				d(t.$$.fragment), (s = p()), d(n.$$.fragment), (l = p()), d(a.$$.fragment);
			},
			l(e) {
				x(t.$$.fragment, e), (s = v(e)), x(n.$$.fragment, e), (l = v(e)), x(a.$$.fragment, e);
			},
			m(e, c) {
				y(t, e, c), h(e, s, c), y(n, e, c), h(e, l, c), y(a, e, c), (r = !0);
			},
			p(e, [s]) {
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), t.$set(l);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), n.$set(r);
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), a.$set(c);
			},
			i(e) {
				r || (k(t.$$.fragment, e), k(n.$$.fragment, e), k(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(n.$$.fragment, e), I(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				P(t, e), e && o(s), P(n, e), e && o(l), P(a, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Be, s, {});
	}
}
