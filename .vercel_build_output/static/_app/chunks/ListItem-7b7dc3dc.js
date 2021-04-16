import {
	S as t,
	i as s,
	s as a,
	k as l,
	f as e,
	n,
	d as c,
	F as r,
	e as i,
	t as u,
	c as o,
	a as h,
	b as d,
	o as f,
	I as v,
	G as p,
	g as m,
	H as b,
	h as _,
	C as g,
	x as I,
	D as q,
	w as $,
	M as E,
	j as D,
	l as B,
	O as V
} from './index-d91e1ed8.js';
import './Header-e756daf8.js';
function y(t) {
	let s, a, l, n, r;
	return {
		c() {
			(s = i('button')), (a = u(t[0])), this.h();
		},
		l(l) {
			s = o(l, 'BUTTON', { class: !0 });
			var e = h(s);
			(a = d(e, t[0])), e.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (l = v(t[6][t[4]]) + ' svelte-1nh87cg')), p(s, 'not-clickable', '' == t[5]);
		},
		m(l, c) {
			e(l, s, c), m(s, a), n || ((r = b(s, 'click', t[8])), (n = !0));
		},
		p(t, e) {
			1 & e && _(a, t[0]),
				80 & e && l !== (l = v(t[6][t[4]]) + ' svelte-1nh87cg') && f(s, 'class', l),
				112 & e && p(s, 'not-clickable', '' == t[5]);
		},
		d(t) {
			t && c(s), (n = !1), r();
		}
	};
}
function x(t) {
	let s, a, l, n, r;
	return {
		c() {
			(s = i('button')), (a = u(t[0])), this.h();
		},
		l(l) {
			s = o(l, 'BUTTON', { type: !0, class: !0 });
			var e = h(s);
			(a = d(e, t[0])), e.forEach(c), this.h();
		},
		h() {
			f(s, 'type', 'submit'), f(s, 'class', (l = v(t[6][t[4]]) + ' svelte-1nh87cg'));
		},
		m(l, c) {
			e(l, s, c), m(s, a), n || ((r = b(s, 'click', t[7])), (n = !0));
		},
		p(t, e) {
			1 & e && _(a, t[0]),
				80 & e && l !== (l = v(t[6][t[4]]) + ' svelte-1nh87cg') && f(s, 'class', l);
		},
		d(t) {
			t && c(s), (n = !1), r();
		}
	};
}
function L(t) {
	let s, a, l;
	return {
		c() {
			(s = i('a')), (a = u(t[0])), this.h();
		},
		l(l) {
			s = o(l, 'A', { class: !0, href: !0 });
			var e = h(s);
			(a = d(e, t[0])), e.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (l = 'button ' + t[6][t[4]] + ' svelte-1nh87cg')), f(s, 'href', t[1]);
		},
		m(t, l) {
			e(t, s, l), m(s, a);
		},
		p(t, e) {
			1 & e && _(a, t[0]),
				80 & e && l !== (l = 'button ' + t[6][t[4]] + ' svelte-1nh87cg') && f(s, 'class', l),
				2 & e && f(s, 'href', t[1]);
		},
		d(t) {
			t && c(s);
		}
	};
}
function w(t) {
	let s, a, l;
	return {
		c() {
			(s = i('a')), (a = u(t[0])), this.h();
		},
		l(l) {
			s = o(l, 'A', { class: !0, href: !0, target: !0 });
			var e = h(s);
			(a = d(e, t[0])), e.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (l = 'button ' + t[6][t[4]] + ' svelte-1nh87cg')),
				f(s, 'href', t[1]),
				f(s, 'target', t[3]);
		},
		m(t, l) {
			e(t, s, l), m(s, a);
		},
		p(t, e) {
			1 & e && _(a, t[0]),
				80 & e && l !== (l = 'button ' + t[6][t[4]] + ' svelte-1nh87cg') && f(s, 'class', l),
				2 & e && f(s, 'href', t[1]),
				8 & e && f(s, 'target', t[3]);
		},
		d(t) {
			t && c(s);
		}
	};
}
function G(t) {
	let s;
	function a(t, s) {
		return t[3] ? w : !t[3] && t[1] ? L : t[2] ? x : y;
	}
	let r = a(t),
		i = r(t);
	return {
		c() {
			i.c(), (s = l());
		},
		l(t) {
			i.l(t), (s = l());
		},
		m(t, a) {
			i.m(t, a), e(t, s, a);
		},
		p(t, [l]) {
			r === (r = a(t)) && i ? i.p(t, l) : (i.d(1), (i = r(t)), i && (i.c(), i.m(s.parentNode, s)));
		},
		i: n,
		o: n,
		d(t) {
			i.d(t), t && c(s);
		}
	};
}
function k(t, s, a) {
	let l,
		{ text: e = '' } = s,
		{ url: n = '' } = s,
		{ is_submit: c = !1 } = s,
		{ target: i = !1 } = s,
		{ variante: u = 0 } = s,
		{ valorinput: o = 'input' } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && a(0, (e = t.text)),
				'url' in t && a(1, (n = t.url)),
				'is_submit' in t && a(2, (c = t.is_submit)),
				'target' in t && a(3, (i = t.target)),
				'variante' in t && a(4, (u = t.variante)),
				'valorinput' in t && a(5, (o = t.valorinput));
		}),
		a(
			6,
			(l = [
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
			n,
			c,
			i,
			u,
			o,
			l,
			function (s) {
				r(t, s);
			},
			function (s) {
				r(t, s);
			}
		]
	);
}
class N extends t {
	constructor(t) {
		super(),
			s(this, t, k, G, a, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4, valorinput: 5 });
	}
}
const T = (t) => ({}),
	O = (t) => ({}),
	j = (t) => ({}),
	A = (t) => ({}),
	U = (t) => ({}),
	H = (t) => ({}),
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
			s = u('"define un tipo de layout"');
		},
		l(t) {
			s = d(t, '"define un tipo de layout"');
		},
		m(t, a) {
			e(t, s, a);
		},
		p: n,
		i: n,
		o: n,
		d(t) {
			t && c(s);
		}
	};
}
function X(t) {
	let s, a, l, n, r, u, d, p, b, _, g, q, y, x, L, w;
	const G = t[4].default,
		k = E(G, t, t[3], null),
		N = t[4].subarea1,
		K = E(N, t, t[3], J),
		P = t[4].subarea2,
		Q = E(P, t, t[3], S),
		R = t[4].subarea3,
		W = E(R, t, t[3], F),
		X = t[4].subarea4,
		Y = E(X, t, t[3], H),
		Z = t[4].subarea5,
		tt = E(Z, t, t[3], A),
		st = t[4].subarea6,
		at = E(st, t, t[3], O);
	return {
		c() {
			(s = i('div')),
				(a = i('div')),
				k && k.c(),
				(l = D()),
				(n = i('div')),
				K && K.c(),
				(r = D()),
				(u = i('div')),
				Q && Q.c(),
				(d = D()),
				(p = i('div')),
				W && W.c(),
				(b = D()),
				(_ = i('div')),
				Y && Y.c(),
				(g = D()),
				(q = i('div')),
				tt && tt.c(),
				(y = D()),
				(x = i('div')),
				at && at.c(),
				this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var e = h(s);
			a = o(e, 'DIV', { class: !0 });
			var i = h(a);
			k && k.l(i), i.forEach(c), (l = B(e)), (n = o(e, 'DIV', { class: !0 }));
			var f = h(n);
			K && K.l(f), f.forEach(c), (r = B(e)), (u = o(e, 'DIV', { class: !0 }));
			var v = h(u);
			Q && Q.l(v), v.forEach(c), (d = B(e)), (p = o(e, 'DIV', { class: !0 }));
			var m = h(p);
			W && W.l(m), m.forEach(c), (b = B(e)), (_ = o(e, 'DIV', { class: !0 }));
			var I = h(_);
			Y && Y.l(I), I.forEach(c), (g = B(e)), (q = o(e, 'DIV', { class: !0 }));
			var $ = h(q);
			tt && tt.l($), $.forEach(c), (y = B(e)), (x = o(e, 'DIV', { class: !0 }));
			var E = h(x);
			at && at.l(E), E.forEach(c), e.forEach(c), this.h();
		},
		h() {
			f(a, 'class', 'subarea a svelte-1dfaotq'),
				f(n, 'class', 'subarea b svelte-1dfaotq'),
				f(u, 'class', 'subarea c svelte-1dfaotq'),
				f(p, 'class', 'subarea d svelte-1dfaotq'),
				f(_, 'class', 'subarea e svelte-1dfaotq'),
				f(q, 'class', 'subarea f svelte-1dfaotq'),
				f(x, 'class', 'subarea g svelte-1dfaotq'),
				f(s, 'class', (L = v(t[2][t[1]]) + ' svelte-1dfaotq'));
		},
		m(t, c) {
			e(t, s, c),
				m(s, a),
				k && k.m(a, null),
				m(s, l),
				m(s, n),
				K && K.m(n, null),
				m(s, r),
				m(s, u),
				Q && Q.m(u, null),
				m(s, d),
				m(s, p),
				W && W.m(p, null),
				m(s, b),
				m(s, _),
				Y && Y.m(_, null),
				m(s, g),
				m(s, q),
				tt && tt.m(q, null),
				m(s, y),
				m(s, x),
				at && at.m(x, null),
				(w = !0);
		},
		p(t, a) {
			k && k.p && 8 & a && V(k, G, t, t[3], a, null, null),
				K && K.p && 8 & a && V(K, N, t, t[3], a, z, J),
				Q && Q.p && 8 & a && V(Q, P, t, t[3], a, M, S),
				W && W.p && 8 & a && V(W, R, t, t[3], a, C, F),
				Y && Y.p && 8 & a && V(Y, X, t, t[3], a, U, H),
				tt && tt.p && 8 & a && V(tt, Z, t, t[3], a, j, A),
				at && at.p && 8 & a && V(at, st, t, t[3], a, T, O),
				(!w || (2 & a && L !== (L = v(t[2][t[1]]) + ' svelte-1dfaotq'))) && f(s, 'class', L);
		},
		i(t) {
			w || ($(k, t), $(K, t), $(Q, t), $(W, t), $(Y, t), $(tt, t), $(at, t), (w = !0));
		},
		o(t) {
			I(k, t), I(K, t), I(Q, t), I(W, t), I(Y, t), I(tt, t), I(at, t), (w = !1);
		},
		d(t) {
			t && c(s),
				k && k.d(t),
				K && K.d(t),
				Q && Q.d(t),
				W && W.d(t),
				Y && Y.d(t),
				tt && tt.d(t),
				at && at.d(t);
		}
	};
}
function Y(t) {
	let s, a, l, n, r, u, d, p;
	const b = t[4].subarea1,
		_ = E(b, t, t[3], R),
		g = t[4].default,
		q = E(g, t, t[3], null),
		y = t[4].subarea2,
		x = E(y, t, t[3], P);
	return {
		c() {
			(s = i('div')),
				(a = i('div')),
				_ && _.c(),
				(l = D()),
				(n = i('div')),
				q && q.c(),
				(r = D()),
				(u = i('div')),
				x && x.c(),
				this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var e = h(s);
			a = o(e, 'DIV', { class: !0 });
			var i = h(a);
			_ && _.l(i), i.forEach(c), (l = B(e)), (n = o(e, 'DIV', { class: !0 }));
			var d = h(n);
			q && q.l(d), d.forEach(c), (r = B(e)), (u = o(e, 'DIV', { class: !0 }));
			var f = h(u);
			x && x.l(f), f.forEach(c), e.forEach(c), this.h();
		},
		h() {
			f(a, 'class', 'svelte-1dfaotq'),
				f(n, 'class', 'svelte-1dfaotq'),
				f(u, 'class', 'svelte-1dfaotq'),
				f(s, 'class', (d = v(t[2][t[1]]) + ' svelte-1dfaotq'));
		},
		m(t, c) {
			e(t, s, c),
				m(s, a),
				_ && _.m(a, null),
				m(s, l),
				m(s, n),
				q && q.m(n, null),
				m(s, r),
				m(s, u),
				x && x.m(u, null),
				(p = !0);
		},
		p(t, a) {
			_ && _.p && 8 & a && V(_, b, t, t[3], a, Q, R),
				q && q.p && 8 & a && V(q, g, t, t[3], a, null, null),
				x && x.p && 8 & a && V(x, y, t, t[3], a, K, P),
				(!p || (2 & a && d !== (d = v(t[2][t[1]]) + ' svelte-1dfaotq'))) && f(s, 'class', d);
		},
		i(t) {
			p || ($(_, t), $(q, t), $(x, t), (p = !0));
		},
		o(t) {
			I(_, t), I(q, t), I(x, t), (p = !1);
		},
		d(t) {
			t && c(s), _ && _.d(t), q && q.d(t), x && x.d(t);
		}
	};
}
function Z(t) {
	let s, a, n, r;
	const i = [Y, X, W],
		u = [];
	function o(t, s) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2;
	}
	return (
		(s = o(t)),
		(a = u[s] = i[s](t)),
		{
			c() {
				a.c(), (n = l());
			},
			l(t) {
				a.l(t), (n = l());
			},
			m(t, a) {
				u[s].m(t, a), e(t, n, a), (r = !0);
			},
			p(t, [l]) {
				let e = s;
				(s = o(t)),
					s === e
						? u[s].p(t, l)
						: (g(),
						  I(u[e], 1, 1, () => {
								u[e] = null;
						  }),
						  q(),
						  (a = u[s]),
						  a ? a.p(t, l) : ((a = u[s] = i[s](t)), a.c()),
						  $(a, 1),
						  a.m(n.parentNode, n));
			},
			i(t) {
				r || ($(a), (r = !0));
			},
			o(t) {
				I(a), (r = !1);
			},
			d(t) {
				u[s].d(t), t && c(n);
			}
		}
	);
}
function tt(t, s, a) {
	let { $$slots: l = {}, $$scope: e } = s,
		{ tipo: n = 0 } = s,
		{ variante: c = 0 } = s;
	return (
		(t.$$set = (t) => {
			'tipo' in t && a(0, (n = t.tipo)),
				'variante' in t && a(1, (c = t.variante)),
				'$$scope' in t && a(3, (e = t.$$scope));
		}),
		[n, c, ['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4', 'Grid_5', 'Grid_6'], e, l]
	);
}
class st extends t {
	constructor(t) {
		super(), s(this, t, tt, Z, a, { tipo: 0, variante: 1 });
	}
}
const at = (t) => ({ class: 16 & t }),
	lt = (t) => ({ class: t[5][t[4]] }),
	et = (t) => ({ class: 16 & t }),
	nt = (t) => ({ class: t[5][t[4]] });
function ct(t) {
	let s, a, l;
	const n = t[7].default,
		r = E(n, t, t[6], null);
	return {
		c() {
			(s = i('div')), r && r.c(), this.h();
		},
		l(t) {
			s = o(t, 'DIV', { class: !0 });
			var a = h(s);
			r && r.l(a), a.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (a = v(t[5][t[4]]) + ' svelte-iweyq1'));
		},
		m(t, a) {
			e(t, s, a), r && r.m(s, null), (l = !0);
		},
		p(t, e) {
			r && r.p && 64 & e && V(r, n, t, t[6], e, null, null),
				(!l || (16 & e && a !== (a = v(t[5][t[4]]) + ' svelte-iweyq1'))) && f(s, 'class', a);
		},
		i(t) {
			l || ($(r, t), (l = !0));
		},
		o(t) {
			I(r, t), (l = !1);
		},
		d(t) {
			t && c(s), r && r.d(t);
		}
	};
}
function rt(t) {
	let s, a, l, n, r;
	const u = t[7].default,
		d = E(u, t, t[6], null);
	return {
		c() {
			(s = i('button')), d && d.c(), this.h();
		},
		l(t) {
			s = o(t, 'BUTTON', { class: !0 });
			var a = h(s);
			d && d.l(a), a.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (a = v(t[5][t[4]]) + ' svelte-iweyq1'));
		},
		m(a, c) {
			e(a, s, c), d && d.m(s, null), (l = !0), n || ((r = b(s, 'click', t[8])), (n = !0));
		},
		p(t, e) {
			d && d.p && 64 & e && V(d, u, t, t[6], e, null, null),
				(!l || (16 & e && a !== (a = v(t[5][t[4]]) + ' svelte-iweyq1'))) && f(s, 'class', a);
		},
		i(t) {
			l || ($(d, t), (l = !0));
		},
		o(t) {
			I(d, t), (l = !1);
		},
		d(t) {
			t && c(s), d && d.d(t), (n = !1), r();
		}
	};
}
function it(t) {
	let s, a, l;
	const n = t[7].default,
		r = E(n, t, t[6], null);
	return {
		c() {
			(s = i('a')), r && r.c(), this.h();
		},
		l(t) {
			s = o(t, 'A', { class: !0, href: !0, alt: !0, target: !0 });
			var a = h(s);
			r && r.l(a), a.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (a = v(t[5][t[4]]) + ' svelte-iweyq1')),
				f(s, 'href', t[0]),
				f(s, 'alt', t[1]),
				f(s, 'target', t[2]);
		},
		m(t, a) {
			e(t, s, a), r && r.m(s, null), (l = !0);
		},
		p(t, e) {
			r && r.p && 64 & e && V(r, n, t, t[6], e, null, null),
				(!l || (16 & e && a !== (a = v(t[5][t[4]]) + ' svelte-iweyq1'))) && f(s, 'class', a),
				(!l || 1 & e) && f(s, 'href', t[0]),
				(!l || 2 & e) && f(s, 'alt', t[1]),
				(!l || 4 & e) && f(s, 'target', t[2]);
		},
		i(t) {
			l || ($(r, t), (l = !0));
		},
		o(t) {
			I(r, t), (l = !1);
		},
		d(t) {
			t && c(s), r && r.d(t);
		}
	};
}
function ut(t) {
	let s;
	const a = t[7].default,
		l = E(a, t, t[6], lt);
	return {
		c() {
			l && l.c();
		},
		l(t) {
			l && l.l(t);
		},
		m(t, a) {
			l && l.m(t, a), (s = !0);
		},
		p(t, s) {
			l && l.p && 80 & s && V(l, a, t, t[6], s, at, lt);
		},
		i(t) {
			s || ($(l, t), (s = !0));
		},
		o(t) {
			I(l, t), (s = !1);
		},
		d(t) {
			l && l.d(t);
		}
	};
}
function ot(t) {
	let s, a, l;
	const n = t[7].default,
		r = E(n, t, t[6], nt);
	return {
		c() {
			(s = i('li')), r && r.c(), this.h();
		},
		l(t) {
			s = o(t, 'LI', { class: !0 });
			var a = h(s);
			r && r.l(a), a.forEach(c), this.h();
		},
		h() {
			f(s, 'class', (a = v(t[5][t[4]]) + ' svelte-iweyq1'));
		},
		m(t, a) {
			e(t, s, a), r && r.m(s, null), (l = !0);
		},
		p(t, e) {
			r && r.p && 80 & e && V(r, n, t, t[6], e, et, nt),
				(!l || (16 & e && a !== (a = v(t[5][t[4]]) + ' svelte-iweyq1'))) && f(s, 'class', a);
		},
		i(t) {
			l || ($(r, t), (l = !0));
		},
		o(t) {
			I(r, t), (l = !1);
		},
		d(t) {
			t && c(s), r && r.d(t);
		}
	};
}
function ht(t) {
	let s, a, n, r;
	const i = [ot, ut, it, rt, ct],
		u = [];
	function o(t, s) {
		return 0 === t[3] ? 0 : 1 === t[3] ? 1 : 2 === t[3] ? 2 : 3 === t[3] ? 3 : 4;
	}
	return (
		(s = o(t)),
		(a = u[s] = i[s](t)),
		{
			c() {
				a.c(), (n = l());
			},
			l(t) {
				a.l(t), (n = l());
			},
			m(t, a) {
				u[s].m(t, a), e(t, n, a), (r = !0);
			},
			p(t, [l]) {
				let e = s;
				(s = o(t)),
					s === e
						? u[s].p(t, l)
						: (g(),
						  I(u[e], 1, 1, () => {
								u[e] = null;
						  }),
						  q(),
						  (a = u[s]),
						  a ? a.p(t, l) : ((a = u[s] = i[s](t)), a.c()),
						  $(a, 1),
						  a.m(n.parentNode, n));
			},
			i(t) {
				r || ($(a), (r = !0));
			},
			o(t) {
				I(a), (r = !1);
			},
			d(t) {
				u[s].d(t), t && c(n);
			}
		}
	);
}
function dt(t, s, a) {
	let { $$slots: l = {}, $$scope: e } = s,
		{ href: n = '' } = s,
		{ alt: c = '' } = s,
		{ target: i = '' } = s,
		{ tipo: u = 0 } = s,
		{ variante: o = 0 } = s;
	return (
		(t.$$set = (t) => {
			'href' in t && a(0, (n = t.href)),
				'alt' in t && a(1, (c = t.alt)),
				'target' in t && a(2, (i = t.target)),
				'tipo' in t && a(3, (u = t.tipo)),
				'variante' in t && a(4, (o = t.variante)),
				'$$scope' in t && a(6, (e = t.$$scope));
		}),
		[
			n,
			c,
			i,
			u,
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
			l,
			function (s) {
				r(t, s);
			}
		]
	);
}
class ft extends t {
	constructor(t) {
		super(), s(this, t, dt, ht, a, { href: 0, alt: 1, target: 2, tipo: 3, variante: 4 });
	}
}
export { N as B, st as G, ft as L };
