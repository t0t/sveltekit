import {
	S as t,
	i as s,
	s as l,
	k as a,
	f as e,
	n as c,
	d as n,
	F as r,
	e as u,
	t as i,
	c as o,
	a as h,
	b as d,
	o as v,
	I as p,
	G as f,
	g as m,
	H as b,
	h as _,
	C as I,
	x as $,
	D as E,
	w as g,
	M as D,
	j as B,
	l as V,
	O as j
} from './index-d91e1ed8.js';
import './Header-a9ed1c92.js';
function x(t) {
	let s, l, a, c, r;
	return {
		c() {
			(s = u('button')), (l = i(t[0])), this.h();
		},
		l(a) {
			s = o(a, 'BUTTON', { class: !0 });
			var e = h(s);
			(l = d(e, t[0])), e.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (a = p(t[6][t[4]]) + ' svelte-8jln4a')), f(s, 'not-clickable', '' == t[5]);
		},
		m(a, n) {
			e(a, s, n), m(s, l), c || ((r = b(s, 'click', t[8])), (c = !0));
		},
		p(t, e) {
			1 & e && _(l, t[0]),
				80 & e && a !== (a = p(t[6][t[4]]) + ' svelte-8jln4a') && v(s, 'class', a),
				112 & e && f(s, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && n(s), (c = !1), r();
		}
	};
}
function L(t) {
	let s, l, a, c, r;
	return {
		c() {
			(s = u('button')), (l = i(t[0])), this.h();
		},
		l(a) {
			s = o(a, 'BUTTON', { type: !0, class: !0 });
			var e = h(s);
			(l = d(e, t[0])), e.forEach(n), this.h();
		},
		h() {
			v(s, 'type', 'submit'), v(s, 'class', (a = p(t[6][t[4]]) + ' svelte-8jln4a'));
		},
		m(a, n) {
			e(a, s, n), m(s, l), c || ((r = b(s, 'click', t[7])), (c = !0));
		},
		p(t, e) {
			1 & e && _(l, t[0]),
				80 & e && a !== (a = p(t[6][t[4]]) + ' svelte-8jln4a') && v(s, 'class', a);
		},
		d(t) {
			t && n(s), (c = !1), r();
		}
	};
}
function G(t) {
	let s, l, a;
	return {
		c() {
			(s = u('a')), (l = i(t[0])), this.h();
		},
		l(a) {
			s = o(a, 'A', { class: !0, href: !0 });
			var e = h(s);
			(l = d(e, t[0])), e.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-8jln4a')), v(s, 'href', t[1]);
		},
		m(t, a) {
			e(t, s, a), m(s, l);
		},
		p(t, e) {
			1 & e && _(l, t[0]),
				80 & e && a !== (a = 'button ' + t[6][t[4]] + ' svelte-8jln4a') && v(s, 'class', a),
				2 & e && v(s, 'href', t[1]);
		},
		d(t) {
			t && n(s);
		}
	};
}
function q(t) {
	let s, l, a;
	return {
		c() {
			(s = u('a')), (l = i(t[0])), this.h();
		},
		l(a) {
			s = o(a, 'A', { class: !0, href: !0, target: !0 });
			var e = h(s);
			(l = d(e, t[0])), e.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (a = 'button ' + t[6][t[4]] + ' svelte-8jln4a')),
				v(s, 'href', t[1]),
				v(s, 'target', t[3]);
		},
		m(t, a) {
			e(t, s, a), m(s, l);
		},
		p(t, e) {
			1 & e && _(l, t[0]),
				80 & e && a !== (a = 'button ' + t[6][t[4]] + ' svelte-8jln4a') && v(s, 'class', a),
				2 & e && v(s, 'href', t[1]),
				8 & e && v(s, 'target', t[3]);
		},
		d(t) {
			t && n(s);
		}
	};
}
function k(t) {
	let s;
	function l(t, s) {
		return t[3] ? q : !t[3] && t[1] ? G : t[2] ? L : x;
	}
	let r = l(t),
		u = r(t);
	return {
		c() {
			u.c(), (s = a());
		},
		l(t) {
			u.l(t), (s = a());
		},
		m(t, l) {
			u.m(t, l), e(t, s, l);
		},
		p(t, [a]) {
			r === (r = l(t)) && u ? u.p(t, a) : (u.d(1), (u = r(t)), u && (u.c(), u.m(s.parentNode, s)));
		},
		i: c,
		o: c,
		d(t) {
			u.d(t), t && n(s);
		}
	};
}
function N(t, s, l) {
	let a,
		{ text: e = '' } = s,
		{ url: c = '' } = s,
		{ is_submit: n = !1 } = s,
		{ target: u = !1 } = s,
		{ variante: i = 0 } = s,
		{ valorinput: o = 'input' } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && l(0, (e = t.text)),
				'url' in t && l(1, (c = t.url)),
				'is_submit' in t && l(2, (n = t.is_submit)),
				'target' in t && l(3, (u = t.target)),
				'variante' in t && l(4, (i = t.variante)),
				'valorinput' in t && l(5, (o = t.valorinput));
		}),
		l(
			6,
			(a = [
				'Button_0',
				'Button_1',
				'Button_2',
				'Button_3',
				'Button_4',
				'Button_5',
				'Button_6',
				'Button_7',
				'Button_8'
			])
		),
		[
			e,
			c,
			n,
			u,
			i,
			o,
			a,
			function (s) {
				r(t, s);
			},
			function (s) {
				r(t, s);
			}
		]
	);
}
class T extends t {
	constructor(t) {
		super(),
			s(this, t, N, k, l, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
const y = (t) => ({}),
	O = (t) => ({}),
	A = (t) => ({}),
	U = (t) => ({}),
	H = (t) => ({}),
	w = (t) => ({}),
	C = (t) => ({}),
	F = (t) => ({}),
	M = (t) => ({}),
	S = (t) => ({}),
	z = (t) => ({}),
	J = (t) => ({}),
	K = (t) => ({}),
	P = (t) => ({}),
	Q = (t) => ({}),
	R = (t) => ({});
function W(t) {
	let s;
	return {
		c() {
			s = i('"define un tipo de layout"');
		},
		l(t) {
			s = d(t, '"define un tipo de layout"');
		},
		m(t, l) {
			e(t, s, l);
		},
		p: c,
		i: c,
		o: c,
		d(t) {
			t && n(s);
		}
	};
}
function X(t) {
	let s, l, a, c, r, i, d, f, b, _, I, E, x, L, G, q;
	const k = t[4].default,
		N = D(k, t, t[3], null),
		T = t[4].subarea1,
		K = D(T, t, t[3], J),
		P = t[4].subarea2,
		Q = D(P, t, t[3], S),
		R = t[4].subarea3,
		W = D(R, t, t[3], F),
		X = t[4].subarea4,
		Y = D(X, t, t[3], w),
		Z = t[4].subarea5,
		tt = D(Z, t, t[3], U),
		st = t[4].subarea6,
		lt = D(st, t, t[3], O);
	return {
		c() {
			(s = u('div')),
				(l = u('div')),
				N && N.c(),
				(a = B()),
				(c = u('div')),
				K && K.c(),
				(r = B()),
				(i = u('div')),
				Q && Q.c(),
				(d = B()),
				(f = u('div')),
				W && W.c(),
				(b = B()),
				(_ = u('div')),
				Y && Y.c(),
				(I = B()),
				(E = u('div')),
				tt && tt.c(),
				(x = B()),
				(L = u('div')),
				lt && lt.c(),
				this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var e = h(s);
			l = o(e, 'DIV', { class: !0 });
			var u = h(l);
			N && N.l(u), u.forEach(n), (a = V(e)), (c = o(e, 'DIV', { class: !0 }));
			var v = h(c);
			K && K.l(v), v.forEach(n), (r = V(e)), (i = o(e, 'DIV', { class: !0 }));
			var p = h(i);
			Q && Q.l(p), p.forEach(n), (d = V(e)), (f = o(e, 'DIV', { class: !0 }));
			var m = h(f);
			W && W.l(m), m.forEach(n), (b = V(e)), (_ = o(e, 'DIV', { class: !0 }));
			var $ = h(_);
			Y && Y.l($), $.forEach(n), (I = V(e)), (E = o(e, 'DIV', { class: !0 }));
			var g = h(E);
			tt && tt.l(g), g.forEach(n), (x = V(e)), (L = o(e, 'DIV', { class: !0 }));
			var D = h(L);
			lt && lt.l(D), D.forEach(n), e.forEach(n), this.h();
		},
		h() {
			v(l, 'class', 'subarea a svelte-1ocur8b'),
				v(c, 'class', 'subarea b svelte-1ocur8b'),
				v(i, 'class', 'subarea c svelte-1ocur8b'),
				v(f, 'class', 'subarea d svelte-1ocur8b'),
				v(_, 'class', 'subarea e svelte-1ocur8b'),
				v(E, 'class', 'subarea f svelte-1ocur8b'),
				v(L, 'class', 'subarea g svelte-1ocur8b'),
				v(s, 'class', (G = p(t[2][t[1]]) + ' svelte-1ocur8b'));
		},
		m(t, n) {
			e(t, s, n),
				m(s, l),
				N && N.m(l, null),
				m(s, a),
				m(s, c),
				K && K.m(c, null),
				m(s, r),
				m(s, i),
				Q && Q.m(i, null),
				m(s, d),
				m(s, f),
				W && W.m(f, null),
				m(s, b),
				m(s, _),
				Y && Y.m(_, null),
				m(s, I),
				m(s, E),
				tt && tt.m(E, null),
				m(s, x),
				m(s, L),
				lt && lt.m(L, null),
				(q = !0);
		},
		p(t, l) {
			N && N.p && 8 & l && j(N, k, t, t[3], l, null, null),
				K && K.p && 8 & l && j(K, T, t, t[3], l, z, J),
				Q && Q.p && 8 & l && j(Q, P, t, t[3], l, M, S),
				W && W.p && 8 & l && j(W, R, t, t[3], l, C, F),
				Y && Y.p && 8 & l && j(Y, X, t, t[3], l, H, w),
				tt && tt.p && 8 & l && j(tt, Z, t, t[3], l, A, U),
				lt && lt.p && 8 & l && j(lt, st, t, t[3], l, y, O),
				(!q || (2 & l && G !== (G = p(t[2][t[1]]) + ' svelte-1ocur8b'))) && v(s, 'class', G);
		},
		i(t) {
			q || (g(N, t), g(K, t), g(Q, t), g(W, t), g(Y, t), g(tt, t), g(lt, t), (q = !0));
		},
		o(t) {
			$(N, t), $(K, t), $(Q, t), $(W, t), $(Y, t), $(tt, t), $(lt, t), (q = !1);
		},
		d(t) {
			t && n(s),
				N && N.d(t),
				K && K.d(t),
				Q && Q.d(t),
				W && W.d(t),
				Y && Y.d(t),
				tt && tt.d(t),
				lt && lt.d(t);
		}
	};
}
function Y(t) {
	let s, l, a, c, r, i, d, f;
	const b = t[4].subarea1,
		_ = D(b, t, t[3], R),
		I = t[4].default,
		E = D(I, t, t[3], null),
		x = t[4].subarea2,
		L = D(x, t, t[3], P);
	return {
		c() {
			(s = u('div')),
				(l = u('div')),
				_ && _.c(),
				(a = B()),
				(c = u('div')),
				E && E.c(),
				(r = B()),
				(i = u('div')),
				L && L.c(),
				this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var e = h(s);
			l = o(e, 'DIV', { class: !0 });
			var u = h(l);
			_ && _.l(u), u.forEach(n), (a = V(e)), (c = o(e, 'DIV', { class: !0 }));
			var d = h(c);
			E && E.l(d), d.forEach(n), (r = V(e)), (i = o(e, 'DIV', { class: !0 }));
			var v = h(i);
			L && L.l(v), v.forEach(n), e.forEach(n), this.h();
		},
		h() {
			v(l, 'class', 'svelte-1ocur8b'),
				v(c, 'class', 'svelte-1ocur8b'),
				v(i, 'class', 'svelte-1ocur8b'),
				v(s, 'class', (d = p(t[2][t[1]]) + ' svelte-1ocur8b'));
		},
		m(t, n) {
			e(t, s, n),
				m(s, l),
				_ && _.m(l, null),
				m(s, a),
				m(s, c),
				E && E.m(c, null),
				m(s, r),
				m(s, i),
				L && L.m(i, null),
				(f = !0);
		},
		p(t, l) {
			_ && _.p && 8 & l && j(_, b, t, t[3], l, Q, R),
				E && E.p && 8 & l && j(E, I, t, t[3], l, null, null),
				L && L.p && 8 & l && j(L, x, t, t[3], l, K, P),
				(!f || (2 & l && d !== (d = p(t[2][t[1]]) + ' svelte-1ocur8b'))) && v(s, 'class', d);
		},
		i(t) {
			f || (g(_, t), g(E, t), g(L, t), (f = !0));
		},
		o(t) {
			$(_, t), $(E, t), $(L, t), (f = !1);
		},
		d(t) {
			t && n(s), _ && _.d(t), E && E.d(t), L && L.d(t);
		}
	};
}
function Z(t) {
	let s, l, c, r;
	const u = [Y, X, W],
		i = [];
	function o(t, s) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2;
	}
	return (
		(s = o(t)),
		(l = i[s] = u[s](t)),
		{
			c() {
				l.c(), (c = a());
			},
			l(t) {
				l.l(t), (c = a());
			},
			m(t, l) {
				i[s].m(t, l), e(t, c, l), (r = !0);
			},
			p(t, [a]) {
				let e = s;
				(s = o(t)),
					s === e
						? i[s].p(t, a)
						: (I(),
						  $(i[e], 1, 1, () => {
								i[e] = null;
						  }),
						  E(),
						  (l = i[s]),
						  l ? l.p(t, a) : ((l = i[s] = u[s](t)), l.c()),
						  g(l, 1),
						  l.m(c.parentNode, c));
			},
			i(t) {
				r || (g(l), (r = !0));
			},
			o(t) {
				$(l), (r = !1);
			},
			d(t) {
				i[s].d(t), t && n(c);
			}
		}
	);
}
function tt(t, s, l) {
	let { $$slots: a = {}, $$scope: e } = s,
		{ tipo: c = 0 } = s,
		{ variante: n = 0 } = s;
	return (
		(t.$$set = (t) => {
			'tipo' in t && l(0, (c = t.tipo)),
				'variante' in t && l(1, (n = t.variante)),
				'$$scope' in t && l(3, (e = t.$$scope));
		}),
		[c, n, ['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4', 'Grid_5', 'Grid_6'], e, a]
	);
}
class st extends t {
	constructor(t) {
		super(), s(this, t, tt, Z, l, { tipo: 0, variante: 1 });
	}
}
const lt = (t) => ({ class: 16 & t }),
	at = (t) => ({ class: t[5][t[4]] }),
	et = (t) => ({ class: 16 & t }),
	ct = (t) => ({ class: t[5][t[4]] });
function nt(t) {
	let s, l, a;
	const c = t[7].default,
		r = D(c, t, t[6], null);
	return {
		c() {
			(s = u('div')), r && r.c(), this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var l = h(s);
			r && r.l(l), l.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (l = p(t[5][t[4]]) + ' svelte-opmqld'));
		},
		m(t, l) {
			e(t, s, l), r && r.m(s, null), (a = !0);
		},
		p(t, e) {
			r && r.p && 64 & e && j(r, c, t, t[6], e, null, null),
				(!a || (16 & e && l !== (l = p(t[5][t[4]]) + ' svelte-opmqld'))) && v(s, 'class', l);
		},
		i(t) {
			a || (g(r, t), (a = !0));
		},
		o(t) {
			$(r, t), (a = !1);
		},
		d(t) {
			t && n(s), r && r.d(t);
		}
	};
}
function rt(t) {
	let s, l, a, c, r;
	const i = t[7].default,
		d = D(i, t, t[6], null);
	return {
		c() {
			(s = u('button')), d && d.c(), this.h();
		},
		l(t) {
			s = o(t, 'BUTTON', { class: !0 });
			var l = h(s);
			d && d.l(l), l.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (l = p(t[5][t[4]]) + ' svelte-opmqld'));
		},
		m(l, n) {
			e(l, s, n), d && d.m(s, null), (a = !0), c || ((r = b(s, 'click', t[8])), (c = !0));
		},
		p(t, e) {
			d && d.p && 64 & e && j(d, i, t, t[6], e, null, null),
				(!a || (16 & e && l !== (l = p(t[5][t[4]]) + ' svelte-opmqld'))) && v(s, 'class', l);
		},
		i(t) {
			a || (g(d, t), (a = !0));
		},
		o(t) {
			$(d, t), (a = !1);
		},
		d(t) {
			t && n(s), d && d.d(t), (c = !1), r();
		}
	};
}
function ut(t) {
	let s, l, a;
	const c = t[7].default,
		r = D(c, t, t[6], null);
	return {
		c() {
			(s = u('a')), r && r.c(), this.h();
		},
		l(t) {
			s = o(t, 'A', { class: !0, href: !0, alt: !0, target: !0 });
			var l = h(s);
			r && r.l(l), l.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (l = p(t[5][t[4]]) + ' svelte-opmqld')),
				v(s, 'href', t[0]),
				v(s, 'alt', t[1]),
				v(s, 'target', t[2]);
		},
		m(t, l) {
			e(t, s, l), r && r.m(s, null), (a = !0);
		},
		p(t, e) {
			r && r.p && 64 & e && j(r, c, t, t[6], e, null, null),
				(!a || (16 & e && l !== (l = p(t[5][t[4]]) + ' svelte-opmqld'))) && v(s, 'class', l),
				(!a || 1 & e) && v(s, 'href', t[0]),
				(!a || 2 & e) && v(s, 'alt', t[1]),
				(!a || 4 & e) && v(s, 'target', t[2]);
		},
		i(t) {
			a || (g(r, t), (a = !0));
		},
		o(t) {
			$(r, t), (a = !1);
		},
		d(t) {
			t && n(s), r && r.d(t);
		}
	};
}
function it(t) {
	let s;
	const l = t[7].default,
		a = D(l, t, t[6], at);
	return {
		c() {
			a && a.c();
		},
		l(t) {
			a && a.l(t);
		},
		m(t, l) {
			a && a.m(t, l), (s = !0);
		},
		p(t, s) {
			a && a.p && 80 & s && j(a, l, t, t[6], s, lt, at);
		},
		i(t) {
			s || (g(a, t), (s = !0));
		},
		o(t) {
			$(a, t), (s = !1);
		},
		d(t) {
			a && a.d(t);
		}
	};
}
function ot(t) {
	let s, l, a;
	const c = t[7].default,
		r = D(c, t, t[6], ct);
	return {
		c() {
			(s = u('li')), r && r.c(), this.h();
		},
		l(t) {
			s = o(t, 'LI', { class: !0 });
			var l = h(s);
			r && r.l(l), l.forEach(n), this.h();
		},
		h() {
			v(s, 'class', (l = p(t[5][t[4]]) + ' svelte-opmqld'));
		},
		m(t, l) {
			e(t, s, l), r && r.m(s, null), (a = !0);
		},
		p(t, e) {
			r && r.p && 80 & e && j(r, c, t, t[6], e, et, ct),
				(!a || (16 & e && l !== (l = p(t[5][t[4]]) + ' svelte-opmqld'))) && v(s, 'class', l);
		},
		i(t) {
			a || (g(r, t), (a = !0));
		},
		o(t) {
			$(r, t), (a = !1);
		},
		d(t) {
			t && n(s), r && r.d(t);
		}
	};
}
function ht(t) {
	let s, l, c, r;
	const u = [ot, it, ut, rt, nt],
		i = [];
	function o(t, s) {
		return 0 === t[3] ? 0 : 1 === t[3] ? 1 : 2 === t[3] ? 2 : 3 === t[3] ? 3 : 4;
	}
	return (
		(s = o(t)),
		(l = i[s] = u[s](t)),
		{
			c() {
				l.c(), (c = a());
			},
			l(t) {
				l.l(t), (c = a());
			},
			m(t, l) {
				i[s].m(t, l), e(t, c, l), (r = !0);
			},
			p(t, [a]) {
				let e = s;
				(s = o(t)),
					s === e
						? i[s].p(t, a)
						: (I(),
						  $(i[e], 1, 1, () => {
								i[e] = null;
						  }),
						  E(),
						  (l = i[s]),
						  l ? l.p(t, a) : ((l = i[s] = u[s](t)), l.c()),
						  g(l, 1),
						  l.m(c.parentNode, c));
			},
			i(t) {
				r || (g(l), (r = !0));
			},
			o(t) {
				$(l), (r = !1);
			},
			d(t) {
				i[s].d(t), t && n(c);
			}
		}
	);
}
function dt(t, s, l) {
	let { $$slots: a = {}, $$scope: e } = s,
		{ href: c = '' } = s,
		{ alt: n = '' } = s,
		{ target: u = '' } = s,
		{ tipo: i = 0 } = s,
		{ variante: o = 0 } = s;
	return (
		(t.$$set = (t) => {
			'href' in t && l(0, (c = t.href)),
				'alt' in t && l(1, (n = t.alt)),
				'target' in t && l(2, (u = t.target)),
				'tipo' in t && l(3, (i = t.tipo)),
				'variante' in t && l(4, (o = t.variante)),
				'$$scope' in t && l(6, (e = t.$$scope));
		}),
		[
			c,
			n,
			u,
			i,
			o,
			[
				'ListItem_0',
				'ListItem_1',
				'ListItem_2',
				'ListItem_3',
				'ListItem_4',
				'ListItem_5',
				'ListItem_6',
				'ListItem_7'
			],
			e,
			a,
			function (s) {
				r(t, s);
			}
		]
	);
}
class vt extends t {
	constructor(t) {
		super(), s(this, t, dt, ht, l, { href: 0, alt: 1, target: 2, tipo: 3, variante: 4 });
	}
}
export { T as B, st as G, vt as L };
