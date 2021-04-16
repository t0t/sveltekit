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
	w as L,
	x as I,
	y as P,
	K as q,
	a0 as S,
	a6 as D,
	a7 as V,
	R as C,
	k as T,
	C as j,
	D as A,
	I as B,
	a8 as H,
	F as G,
	n as O,
	J as R,
	T as U,
	U as z,
	V as N,
	G as _
} from '../../chunks/index-d91e1ed8.js';
import { B as F, C as J, c as Y } from '../../chunks/Cover-4b9a87b3.js';
import { S as K } from '../../chunks/Section-62f6895b.js';
import { t as Q } from '../../chunks/index-c4bdeab8.js';
import { f as W } from '../../chunks/index-65311448.js';
import '../../chunks/index-cc16b092.js';
import '../../chunks/index-78b22dae.js';
function X(e, t, s) {
	const n = e.slice();
	return (n[17] = t[s]), (n[19] = s), n;
}
const Z = (e) => ({}),
	ee = (e) => ({});
function te(e, t) {
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
			i(s, 'r', t[7]),
				i(s, 'cx', (n = Math.cos(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'cy', (a = Math.sin(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2)),
				i(s, 'class', 'svelte-1mriiq'),
				(this.first = s);
		},
		m(e, t) {
			$(e, s, t);
		},
		p(e, r) {
			(t = e),
				72 & r && n !== (n = Math.cos(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cx', n),
				72 & r && a !== (a = Math.sin(t[19] * t[3] * 2 * Math.PI) * t[19] * 0.2) && i(s, 'cy', a);
		},
		d(e) {
			e && c(s);
		}
	};
}
function se(e) {
	let t, s, S, D, C, T, j, A, B, H, G, O, R, U, z, N, _, J, Y;
	n(e[12]);
	const K = e[11].hasvideo,
		Q = a(K, e, e[10], ee),
		W =
			Q ||
			(function (e) {
				let t,
					s,
					n = [],
					a = new Map(),
					h = { length: e[6] };
				const m = (e) => e[19];
				for (let r = 0; r < h.length; r += 1) {
					let t = X(e, h, r),
						s = m(t);
					a.set(s, (n[r] = te(s, t)));
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
						i(s, 'class', 'svelte-1mriiq'),
							i(t, 'viewBox', '0 0 200 200'),
							i(t, 'xmlns', 'http://www.w3.org/2000/svg'),
							i(t, 'class', 'svelte-1mriiq');
					},
					m(e, a) {
						$(e, t, a), u(t, s);
						for (let t = 0; t < n.length; t += 1) n[t].m(s, null);
					},
					p(e, t) {
						200 & t && ((h = { length: e[6] }), (n = f(n, t, m, 1, e, h, a, s, V, te, null, X)));
					},
					d(e) {
						e && c(t);
						for (let t = 0; t < n.length; t += 1) n[t].d();
					}
				};
			})(e);
	return (
		(z = new F({ props: { variante: 0, text: 'Play' } })),
		z.$on('click', e[15]),
		{
			c() {
				(t = h('section')),
					(s = h('div')),
					W && W.c(),
					(S = m()),
					(D = h('div')),
					(C = h('h2')),
					(T = p(e[0])),
					(j = m()),
					(A = h('p')),
					(B = m()),
					(H = h('div')),
					(G = h('input')),
					(O = m()),
					(R = h('input')),
					(U = m()),
					d(z.$$.fragment),
					this.h();
			},
			l(n) {
				t = l(n, 'SECTION', { class: !0 });
				var a = o(t);
				s = l(a, 'DIV', { class: !0 });
				var r = o(s);
				W && W.l(r), r.forEach(c), (S = g(a)), (D = l(a, 'DIV', { class: !0 }));
				var i = o(D);
				C = l(i, 'H2', { class: !0 });
				var $ = o(C);
				(T = v($, e[0])),
					$.forEach(c),
					(j = g(i)),
					(A = l(i, 'P', { class: !0 })),
					o(A).forEach(c),
					(B = g(i)),
					(H = l(i, 'DIV', { class: !0 }));
				var u = o(H);
				(G = l(u, 'INPUT', { type: !0, step: !0, class: !0 })),
					(O = g(u)),
					(R = l(u, 'INPUT', { type: !0, min: !0, max: !0, class: !0 })),
					u.forEach(c),
					(U = g(i)),
					x(z.$$.fragment, i),
					i.forEach(c),
					a.forEach(c),
					this.h();
			},
			h() {
				i(s, 'class', 'BannerMedia svelte-1mriiq'),
					i(C, 'class', 'svelte-1mriiq'),
					i(A, 'class', 'svelte-1mriiq'),
					i(G, 'type', 'number'),
					i(G, 'step', '0.001'),
					i(G, 'class', 'svelte-1mriiq'),
					i(R, 'type', 'range'),
					i(R, 'min', 0),
					i(R, 'max', ne),
					i(R, 'class', 'svelte-1mriiq'),
					i(H, 'class', 'controls svelte-1mriiq'),
					i(D, 'class', 'PhiSvgText svelte-1mriiq'),
					i(t, 'class', (N = 'PhiSvg ' + e[9][e[2]] + ' svelte-1mriiq'));
			},
			m(n, a) {
				$(n, t, a),
					u(t, s),
					W && W.m(s, null),
					u(t, S),
					u(t, D),
					u(D, C),
					u(C, T),
					u(D, j),
					u(D, A),
					(A.innerHTML = e[1]),
					u(D, B),
					u(D, H),
					u(H, G),
					w(G, e[3]),
					u(H, O),
					u(H, R),
					w(R, e[6]),
					u(D, U),
					y(z, D, null),
					(_ = !0),
					J ||
						((Y = [
							b(window, 'resize', e[12]),
							b(G, 'input', e[13]),
							b(R, 'change', e[14]),
							b(R, 'input', e[14])
						]),
						(J = !0));
			},
			p(e, [s]) {
				Q ? Q.p && 1024 & s && E(Q, K, e, e[10], s, Z, ee) : W && W.p && 72 & s && W.p(e, s),
					(!_ || 1 & s) && k(T, e[0]),
					(!_ || 2 & s) && (A.innerHTML = e[1]),
					8 & s && M(G.value) !== e[3] && w(G, e[3]),
					64 & s && w(R, e[6]),
					(!_ || (4 & s && N !== (N = 'PhiSvg ' + e[9][e[2]] + ' svelte-1mriiq'))) &&
						i(t, 'class', N);
			},
			i(e) {
				_ || (L(W, e), L(z.$$.fragment, e), (_ = !0));
			},
			o(e) {
				I(W, e), I(z.$$.fragment, e), (_ = !1);
			},
			d(e) {
				e && c(t), W && W.d(e), P(z), (J = !1), q(Y);
			}
		}
	);
}
let ne = 360;
function ae(e, t, s) {
	let n,
		a,
		r,
		{ $$slots: l = {}, $$scope: o } = t,
		{ title: c = '' } = t,
		{ text: i = '' } = t,
		$ = 0.618033988749,
		u = Q(0, { duration: 500, interpolate: (e, t) => (s) => Math.round((t - e) * s + e) });
	S(e, u, (e) => s(6, (n = e)));
	let { variante: f = 0 } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && s(0, (c = e.title)),
				'text' in e && s(1, (i = e.text)),
				'variante' in e && s(2, (f = e.variante)),
				'$$scope' in e && s(10, (o = e.$$scope));
		}),
		D(u, (n = ne), n),
		[
			c,
			i,
			f,
			$,
			a,
			r,
			n,
			1.62 * 1.62,
			u,
			['Light', 'Dark', 'Colored', 'Light2'],
			o,
			l,
			function () {
				s(4, (a = window.innerWidth)), s(5, (r = window.innerHeight));
			},
			function () {
				($ = M(this.value)), s(3, $);
			},
			function () {
				(n = M(this.value)), u.set(n);
			},
			() => {
				D(u, (n = n > 0 ? 0 : ne), n);
			}
		]
	);
}
class re extends e {
	constructor(e) {
		super(), t(this, e, ae, se, s, { title: 0, text: 1, variante: 2 });
	}
}
function le(e) {
	let t, s, a, f;
	return {
		c() {
			(t = r('div')), (s = p('xxx')), this.h();
		},
		l(e) {
			t = l(e, 'div', { class: !0 }, 1);
			var n = o(t);
			(s = v(n, 'xxx')), n.forEach(c), this.h();
		},
		h() {
			i(t, 'class', 'svelte-8kh4gb');
		},
		m(e, n) {
			$(e, t, n), u(t, s), (f = !0);
		},
		i(e) {
			f ||
				(n(() => {
					a || (a = C(t, W, {}, !0)), a.run(1);
				}),
				(f = !0));
		},
		o(e) {
			a || (a = C(t, W, {}, !1)), a.run(0), (f = !1);
		},
		d(e) {
			e && c(t), e && a && a.end();
		}
	};
}
function oe(e) {
	let t,
		s,
		n,
		f,
		h,
		m = e[2] && le();
	const p = e[7].default,
		d = a(p, e, e[6], null);
	return {
		c() {
			(t = r('text')), m && m.c(), (s = T()), d && d.c(), this.h();
		},
		l(e) {
			t = l(e, 'text', { x: !0, y: !0, 'font-size': !0, class: !0 }, 1);
			var n = o(t);
			m && m.l(n), (s = T()), d && d.l(n), n.forEach(c), this.h();
		},
		h() {
			i(t, 'x', e[0]),
				i(t, 'y', e[1]),
				i(t, 'font-size', '55'),
				i(t, 'class', 'draggable svelte-8kh4gb');
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
					? 4 & a && L(m, 1)
					: ((m = le()), m.c(), L(m, 1), m.m(t, s))
				: m &&
				  (j(),
				  I(m, 1, 1, () => {
						m = null;
				  }),
				  A()),
				d && d.p && 64 & a && E(d, p, e, e[6], a, null, null),
				(!n || 1 & a) && i(t, 'x', e[0]),
				(!n || 2 & a) && i(t, 'y', e[1]);
		},
		i(e) {
			n || (L(m), L(d, e), (n = !0));
		},
		o(e) {
			I(m), I(d, e), (n = !1);
		},
		d(e) {
			e && c(t), m && m.d(), d && d.d(e), (f = !1), q(h);
		}
	};
}
function ce(e, t, s) {
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
class ie extends e {
	constructor(e) {
		super(), t(this, e, ce, oe, s, { x: 0, y: 1 });
	}
}
function $e(e) {
	let t, s, n, r, u;
	const f = e[4].default,
		m = a(f, e, e[3], null);
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
			i(t, 'name', e[0]), i(t, 'class', (s = B(e[2][e[1]]) + ' svelte-320fvo'));
		},
		m(s, a) {
			$(s, t, a), m && m.m(t, null), (n = !0), r || ((u = b(t, 'submit', H(e[5]))), (r = !0));
		},
		p(e, [a]) {
			m && m.p && 8 & a && E(m, f, e, e[3], a, null, null),
				(!n || 1 & a) && i(t, 'name', e[0]),
				(!n || (2 & a && s !== (s = B(e[2][e[1]]) + ' svelte-320fvo'))) && i(t, 'class', s);
		},
		i(e) {
			n || (L(m, e), (n = !0));
		},
		o(e) {
			I(m, e), (n = !1);
		},
		d(e) {
			e && c(t), m && m.d(e), (r = !1), u();
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
			['Variante_0', 'Variante_1'],
			a,
			n,
			function (t) {
				G(e, t);
			}
		]
	);
}
class fe extends e {
	constructor(e) {
		super(), t(this, e, ue, $e, s, { name: 0, variante: 1 });
	}
}
function he(e) {
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
				i(t, 'class', 'svelte-1amxkfy');
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
			e && c(t), (s = !1), n();
		}
	};
}
function me(e, t, s) {
	let { value: n = '' } = t,
		{ placeholder: a = '"...בראשית ברא אלהים"' } = t;
	return (
		(e.$$set = (e) => {
			'value' in e && s(0, (n = e.value)), 'placeholder' in e && s(1, (a = e.placeholder));
		}),
		[n, a, (e) => s(0, (n = e.target.value))]
	);
}
class pe extends e {
	constructor(e) {
		super(), t(this, e, me, he, s, { value: 0, placeholder: 1 });
	}
}
function de(e) {
	let t, s, n;
	const r = e[3].default,
		u = a(r, e, e[2], null);
	return {
		c() {
			(t = h('div')), u && u.c(), this.h();
		},
		l(e) {
			t = l(e, 'DIV', { class: !0 });
			var s = o(t);
			u && u.l(s), s.forEach(c), this.h();
		},
		h() {
			i(t, 'class', (s = B(e[1][e[0]]) + ' svelte-14gcc89'));
		},
		m(e, s) {
			$(e, t, s), u && u.m(t, null), (n = !0);
		},
		p(e, [a]) {
			u && u.p && 4 & a && E(u, r, e, e[2], a, null, null),
				(!n || (1 & a && s !== (s = B(e[1][e[0]]) + ' svelte-14gcc89'))) && i(t, 'class', s);
		},
		i(e) {
			n || (L(u, e), (n = !0));
		},
		o(e) {
			I(u, e), (n = !1);
		},
		d(e) {
			e && c(t), u && u.d(e);
		}
	};
}
function ge(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ variante: r = 0 } = t;
	return (
		(e.$$set = (e) => {
			'variante' in e && s(0, (r = e.variante)), '$$scope' in e && s(2, (a = e.$$scope));
		}),
		[r, ['Variante_0', 'Variante_1'], a, n]
	);
}
class ve extends e {
	constructor(e) {
		super(), t(this, e, ge, de, s, { variante: 0 });
	}
}
function xe(e, t, s) {
	const n = e.slice();
	return (n[13] = t[s]), n;
}
function we(e, t, s) {
	const n = e.slice();
	return (n[16] = t[s]), n;
}
function ye(e, t, s) {
	const n = e.slice();
	return (n[19] = t[s]), n;
}
function be(e) {
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
				i(t, 'class', 'svelte-1d2xiw');
		},
		m(e, s) {
			$(e, t, s);
		},
		p: O,
		d(e) {
			e && c(t);
		}
	};
}
function Ee(e) {
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
			e && c(t);
		}
	};
}
function ke(e) {
	let t, s;
	return (
		(t = new ie({
			props: { x: e[16].xpos, y: e[16].ypos, $$slots: { default: [Ee] }, $$scope: { ctx: e } }
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
				s || (L(t.$$.fragment, e), (s = !0));
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
function Me(e) {
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
			e && c(t);
		}
	};
}
function Le(e) {
	let t, s;
	return (
		(t = new ie({ props: { x: Se, y: De, $$slots: { default: [Me] }, $$scope: { ctx: e } } })),
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
				s || (L(t.$$.fragment, e), (s = !0));
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
function Ie(e) {
	let t, s, n, a, r;
	function l(t) {
		e[9](t);
	}
	let o = { placeholder: 'Your word' };
	return (
		void 0 !== e[1] && (o.value = e[1]),
		(t = new pe({ props: o })),
		U.push(() => z(t, 'value', l)),
		(a = new F({ props: { variante: 6, text: 'Add' } })),
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
				!s && 2 & n && ((s = !0), (a.value = e[1]), N(() => (s = !1))), t.$set(a);
			},
			i(e) {
				r || (L(t.$$.fragment, e), L(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				P(t, e), e && c(n), P(a, e);
			}
		}
	);
}
function Pe(e) {
	let t,
		s,
		a,
		f,
		p,
		v,
		w,
		b,
		E,
		k,
		M,
		q = e[4],
		S = [];
	for (let n = 0; n < q.length; n += 1) S[n] = be(ye(e, q, n));
	let D = e[5],
		V = [];
	for (let n = 0; n < D.length; n += 1) V[n] = ke(we(e, D, n));
	const B = (e) =>
		I(V[e], 1, 1, () => {
			V[e] = null;
		});
	let H = e[0],
		G = [];
	for (let n = 0; n < H.length; n += 1) G[n] = Le(xe(e, H, n));
	const O = (e) =>
		I(G[e], 1, 1, () => {
			G[e] = null;
		});
	return (
		(w = new fe({ props: { variante: 1, $$slots: { default: [Ie] }, $$scope: { ctx: e } } })),
		w.$on('submit', e[6]),
		(E = new F({ props: { variante: 1, text: 'Download *.svg' } })),
		E.$on('click', e[10]),
		{
			c() {
				(t = r('svg')), (s = r('g'));
				for (let e = 0; e < S.length; e += 1) S[e].c();
				a = T();
				for (let e = 0; e < V.length; e += 1) V[e].c();
				f = T();
				for (let e = 0; e < G.length; e += 1) G[e].c();
				(p = m()), (v = h('div')), d(w.$$.fragment), (b = m()), d(E.$$.fragment), this.h();
			},
			l(e) {
				t = l(e, 'svg', { viewBox: !0, class: !0 }, 1);
				var n = o(t);
				s = l(n, 'g', { transform: !0, class: !0 }, 1);
				var r = o(s);
				for (let t = 0; t < S.length; t += 1) S[t].l(r);
				a = T();
				for (let t = 0; t < V.length; t += 1) V[t].l(r);
				f = T();
				for (let t = 0; t < G.length; t += 1) G[t].l(r);
				r.forEach(c), n.forEach(c), (p = g(e)), (v = l(e, 'DIV', { class: !0 }));
				var i = o(v);
				x(w.$$.fragment, i), (b = g(i)), x(E.$$.fragment, i), i.forEach(c), this.h();
			},
			h() {
				i(s, 'transform', 'translate(150,150) scale(0.7)'),
					i(s, 'class', 'svelte-1d2xiw'),
					i(t, 'viewBox', '-1 -1 ' + e[3].width + ' ' + e[3].height),
					i(t, 'class', 'svelte-1d2xiw'),
					i(v, 'class', 'controls svelte-1d2xiw');
			},
			m(n, r) {
				$(n, t, r), u(t, s);
				for (let e = 0; e < S.length; e += 1) S[e].m(s, null);
				u(s, a);
				for (let e = 0; e < V.length; e += 1) V[e].m(s, null);
				u(s, f);
				for (let e = 0; e < G.length; e += 1) G[e].m(s, null);
				e[8](t), $(n, p, r), $(n, v, r), y(w, v, null), u(v, b), y(E, v, null), (M = !0);
			},
			p(e, t) {
				if (16 & t) {
					let n;
					for (q = e[4], n = 0; n < q.length; n += 1) {
						const r = ye(e, q, n);
						S[n] ? S[n].p(r, t) : ((S[n] = be(r)), S[n].c(), S[n].m(s, a));
					}
					for (; n < S.length; n += 1) S[n].d(1);
					S.length = q.length;
				}
				if (32 & t) {
					let n;
					for (D = e[5], n = 0; n < D.length; n += 1) {
						const a = we(e, D, n);
						V[n]
							? (V[n].p(a, t), L(V[n], 1))
							: ((V[n] = ke(a)), V[n].c(), L(V[n], 1), V[n].m(s, f));
					}
					for (j(), n = D.length; n < V.length; n += 1) B(n);
					A();
				}
				if (1 & t) {
					let n;
					for (H = e[0], n = 0; n < H.length; n += 1) {
						const a = xe(e, H, n);
						G[n]
							? (G[n].p(a, t), L(G[n], 1))
							: ((G[n] = Le(a)), G[n].c(), L(G[n], 1), G[n].m(s, null));
					}
					for (j(), n = H.length; n < G.length; n += 1) O(n);
					A();
				}
				const n = {};
				4194306 & t && (n.$$scope = { dirty: t, ctx: e }), w.$set(n);
			},
			i(e) {
				if (!M) {
					for (let e = 0; e < D.length; e += 1) L(V[e]);
					for (let e = 0; e < H.length; e += 1) L(G[e]);
					L(w.$$.fragment, e),
						L(E.$$.fragment, e),
						n(() => {
							k || (k = C(v, W, {}, !0)), k.run(1);
						}),
						(M = !0);
				}
			},
			o(e) {
				V = V.filter(Boolean);
				for (let t = 0; t < V.length; t += 1) I(V[t]);
				G = G.filter(Boolean);
				for (let t = 0; t < G.length; t += 1) I(G[t]);
				I(w.$$.fragment, e), I(E.$$.fragment, e), k || (k = C(v, W, {}, !1)), k.run(0), (M = !1);
			},
			d(s) {
				s && c(t),
					R(S, s),
					R(V, s),
					R(G, s),
					e[8](null),
					s && c(p),
					s && c(v),
					P(w),
					P(E),
					s && k && k.end();
			}
		}
	);
}
function qe(e) {
	let t, s;
	return (
		(t = new ve({ props: { $$slots: { default: [Pe] }, $$scope: { ctx: e } } })),
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
				s || (L(t.$$.fragment, e), (s = !0));
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
let Se = 0,
	De = 0;
function Ve(e, t, s) {
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
			document.body.removeChild(r),
			console.log(e);
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
		function (e) {
			U[e ? 'unshift' : 'push'](() => {
				(c = e), s(2, c);
			});
		},
		function (e) {
			(a = e), s(1, a);
		},
		() => i(c)
	];
}
class Ce extends e {
	constructor(e) {
		super(), t(this, e, Ve, qe, s, {});
	}
}
function Te(e) {
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
			i(t, 'class', 'Alert svelte-1pgwjkw'), _(t, 'haserror', !e[0]);
		},
		m(e, n) {
			$(e, t, n), r && r.m(t, null), (s = !0);
		},
		p(e, [s]) {
			r && r.p && 2 & s && E(r, n, e, e[1], s, null, null), 1 & s && _(t, 'haserror', !e[0]);
		},
		i(e) {
			s || (L(r, e), (s = !0));
		},
		o(e) {
			I(r, e), (s = !1);
		},
		d(e) {
			e && c(t), r && r.d(e);
		}
	};
}
function je(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t,
		{ haserror: r = !1 } = t;
	return (
		(e.$$set = (e) => {
			'haserror' in e && s(0, (r = e.haserror)), '$$scope' in e && s(1, (a = e.$$scope));
		}),
		[r, a, n]
	);
}
class Ae extends e {
	constructor(e) {
		super(), t(this, e, je, Te, s, { haserror: 0 });
	}
}
function Be(e) {
	let t, s, n, a, r;
	function l(t) {
		e[5](t);
	}
	let o = {};
	return (
		void 0 !== e[0] && (o.value = e[0]),
		(t = new pe({ props: o })),
		U.push(() => z(t, 'value', l)),
		(a = new F({ props: { variante: 6, text: 'Go!', valorinput: e[0] } })),
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
				!s && 1 & n && ((s = !0), (r.value = e[0]), N(() => (s = !1))), t.$set(r);
				const l = {};
				1 & n && (l.valorinput = e[0]), a.$set(l);
			},
			i(e) {
				r || (L(t.$$.fragment, e), L(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				I(t.$$.fragment, e), I(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				P(t, e), e && c(n), P(a, e);
			}
		}
	);
}
function He(e) {
	let t, s;
	return (
		(t = new Ae({ props: { $$slots: { default: [Ge] }, $$scope: { ctx: e } } })),
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
				s || (L(t.$$.fragment, e), (s = !0));
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
function Ge(e) {
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
			e && c(t);
		}
	};
}
function Oe(e) {
	let t, s, n, a, r, f, w, b, E, M, q, S, D, V, C, T, B, H, G, O, R, U;
	(S = new fe({ props: { variante: 0, $$slots: { default: [Be] }, $$scope: { ctx: e } } })),
		S.$on('submit', e[4]);
	let z = 1 == e[1] && He(e);
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
				d(S.$$.fragment),
				(D = m()),
				z && z.c(),
				(V = m()),
				(C = h('footer')),
				(T = h('small')),
				(B = p('בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				(H = m()),
				(G = h('small')),
				(O = h('a')),
				(R = p('Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				this.h();
		},
		l(i) {
			t = l(i, 'HEADER', { class: !0 });
			var $ = o(t);
			s = l($, 'H2', { class: !0 });
			var u = o(s);
			(n = v(u, 'Gematria App')), u.forEach(c), (a = g($)), (r = l($, 'P', { class: !0 }));
			var h = o(r);
			(f = v(h, 'Lo que valen las palabras hebreas')),
				h.forEach(c),
				$.forEach(c),
				(w = g(i)),
				(b = l(i, 'MAIN', { class: !0 }));
			var m = o(b);
			E = l(m, 'H2', { class: !0 });
			var p = o(E);
			(M = v(p, e[3])),
				p.forEach(c),
				(q = g(m)),
				x(S.$$.fragment, m),
				(D = g(m)),
				z && z.l(m),
				m.forEach(c),
				(V = g(i)),
				(C = l(i, 'FOOTER', { class: !0 }));
			var d = o(C);
			T = l(d, 'SMALL', { class: !0 });
			var y = o(T);
			(B = v(y, 'בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)')),
				y.forEach(c),
				(H = g(d)),
				(G = l(d, 'SMALL', { class: !0 }));
			var k = o(G);
			O = l(k, 'A', { href: !0, target: !0, class: !0 });
			var L = o(O);
			(R = v(L, 'Puedes tomar los textos hebreos directamente del Codex de Leningrado')),
				L.forEach(c),
				k.forEach(c),
				d.forEach(c),
				this.h();
		},
		h() {
			i(s, 'class', 'svelte-d2teuo'),
				i(r, 'class', 'svelte-d2teuo'),
				i(t, 'class', 'svelte-d2teuo'),
				i(E, 'class', 'result svelte-d2teuo'),
				i(b, 'class', 'svelte-d2teuo'),
				i(T, 'class', 'svelte-d2teuo'),
				i(O, 'href', 'https://tanach.us/Server.txt?Genesis*&content=Consonants'),
				i(O, 'target', '_blank'),
				i(O, 'class', 'svelte-d2teuo'),
				i(G, 'class', 'svelte-d2teuo'),
				i(C, 'class', 'svelte-d2teuo');
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
				y(S, b, null),
				u(b, D),
				z && z.m(b, null),
				$(e, V, l),
				$(e, C, l),
				u(C, T),
				u(T, B),
				u(C, H),
				u(C, G),
				u(G, O),
				u(O, R),
				(U = !0);
		},
		p(e, [t]) {
			(!U || 8 & t) && k(M, e[3]);
			const s = {};
			513 & t && (s.$$scope = { dirty: t, ctx: e }),
				S.$set(s),
				1 == e[1]
					? z
						? (z.p(e, t), 2 & t && L(z, 1))
						: ((z = He(e)), z.c(), L(z, 1), z.m(b, null))
					: z &&
					  (j(),
					  I(z, 1, 1, () => {
							z = null;
					  }),
					  A());
		},
		i(e) {
			U || (L(S.$$.fragment, e), L(z), (U = !0));
		},
		o(e) {
			I(S.$$.fragment, e), I(z), (U = !1);
		},
		d(e) {
			e && c(t), e && c(w), e && c(b), P(S), z && z.d(), e && c(V), e && c(C);
		}
	};
}
function Re(e, t, s) {
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
class Ue extends e {
	constructor(e) {
		super(), t(this, e, Re, Oe, s, {});
	}
}
function ze(e) {
	let t, s;
	return (
		(t = new J({
			props: { title: Y[2].title, subtitle: Y[2].subtitle, text: Y[2].text, img: Y[2].img }
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
			p: O,
			i(e) {
				s || (L(t.$$.fragment, e), (s = !0));
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
function Ne(e) {
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
				y(t, e, n), (s = !0);
			},
			p: O,
			i(e) {
				s || (L(t.$$.fragment, e), (s = !0));
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
function _e(e) {
	let t, s;
	return (
		(t = new Ce({})),
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
				s || (L(t.$$.fragment, e), (s = !0));
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
function Fe(e) {
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
				y(t, e, n), (s = !0);
			},
			i(e) {
				s || (L(t.$$.fragment, e), (s = !0));
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
function Je(e) {
	let t, s, n, a, r, l, o, i;
	return (
		(t = new K({
			props: { id: 'cover', variante: 1, $$slots: { default: [ze] }, $$scope: { ctx: e } }
		})),
		(n = new K({
			props: { id: 'phi', variante: 1, $$slots: { default: [Ne] }, $$scope: { ctx: e } }
		})),
		(r = new K({
			props: { id: 't0t', variante: 1, $$slots: { default: [_e] }, $$scope: { ctx: e } }
		})),
		(o = new K({
			props: { id: 'gematria', variante: 2, $$slots: { default: [Fe] }, $$scope: { ctx: e } }
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
					(s = g(e)),
					x(n.$$.fragment, e),
					(a = g(e)),
					x(r.$$.fragment, e),
					(l = g(e)),
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
					(L(t.$$.fragment, e),
					L(n.$$.fragment, e),
					L(r.$$.fragment, e),
					L(o.$$.fragment, e),
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
				P(t, e), e && c(s), P(n, e), e && c(a), P(r, e), e && c(l), P(o, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Je, s, {});
	}
}
