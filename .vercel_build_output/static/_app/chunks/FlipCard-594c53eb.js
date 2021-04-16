import {
	S as t,
	i as a,
	s,
	e,
	j as r,
	t as n,
	c,
	a as l,
	d as i,
	l as o,
	b as f,
	o as u,
	L as h,
	G as g,
	f as $,
	g as m,
	h as p,
	n as v,
	k as d,
	O as x,
	X as b,
	H as k,
	p as w,
	q as j,
	r as _,
	w as B,
	x as E,
	y as C
} from './vendor-02401848.js';
const D = [
	{ word: 'Velociraptor', image: '/img/velociraptor.jpg' },
	{ word: 'Raptor Delta', image: '/img/raptordelta.jpeg' },
	{ word: 'vesica piscis', image: '/img/bg3.jpg' },
	{ word: 'vesica piscis', image: '/img/bg4.jpg' }
];
function I(t) {
	let a, s, d, x, b, k;
	return {
		c() {
			(a = e('div')),
				(s = e('div')),
				(d = r()),
				(x = e('div')),
				(b = e('h2')),
				(k = n(t[0])),
				this.h();
		},
		l(e) {
			a = c(e, 'DIV', { class: !0 });
			var r = l(a);
			(s = c(r, 'DIV', { class: !0, style: !0 })),
				l(s).forEach(i),
				r.forEach(i),
				(d = o(e)),
				(x = c(e, 'DIV', { class: !0 }));
			var n = l(x);
			b = c(n, 'H2', {});
			var u = l(b);
			(k = f(u, t[0])), u.forEach(i), n.forEach(i), this.h();
		},
		h() {
			u(s, 'class', 'image svelte-3n219r'),
				h(s, 'background-image', 'url(' + t[1] + ')'),
				u(a, 'class', 'flip-box-front svelte-3n219r'),
				u(x, 'class', 'flip-box-back svelte-3n219r'),
				g(x, 'NoRebelesTxt', t[2]);
		},
		m(t, e) {
			$(t, a, e), m(a, s), $(t, d, e), $(t, x, e), m(x, b), m(b, k);
		},
		p(t, [a]) {
			2 & a && h(s, 'background-image', 'url(' + t[1] + ')'),
				1 & a && p(k, t[0]),
				4 & a && g(x, 'NoRebelesTxt', t[2]);
		},
		i: v,
		o: v,
		d(t) {
			t && i(a), t && i(d), t && i(x);
		}
	};
}
function T(t, a, s) {
	let { back_txt: e } = a,
		{ foto: r } = a,
		{ showCarBack: n } = a;
	return (
		(t.$$set = (t) => {
			'back_txt' in t && s(0, (e = t.back_txt)),
				'foto' in t && s(1, (r = t.foto)),
				'showCarBack' in t && s(2, (n = t.showCarBack));
		}),
		[e, r, n]
	);
}
class V extends t {
	constructor(t) {
		super(), a(this, t, T, I, s, { back_txt: 0, foto: 1, showCarBack: 2 });
	}
}
function y(t) {
	let a, s, r, o, h;
	return {
		c() {
			(a = e('button')), (s = n(t[0])), this.h();
		},
		l(e) {
			a = c(e, 'BUTTON', { class: !0 });
			var r = l(a);
			(s = f(r, t[0])), r.forEach(i), this.h();
		},
		h() {
			u(a, 'class', (r = b(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, r) {
			$(e, a, r), m(a, s), o || ((h = k(a, 'click', t[7])), (o = !0));
		},
		p(t, e) {
			1 & e && p(s, t[0]),
				16 & e && r !== (r = b(t[5][t[4]]) + ' svelte-1cj8l1u') && u(a, 'class', r);
		},
		d(t) {
			t && i(a), (o = !1), h();
		}
	};
}
function N(t) {
	let a, s, r, o, h;
	return {
		c() {
			(a = e('button')), (s = n(t[0])), this.h();
		},
		l(e) {
			a = c(e, 'BUTTON', { type: !0, class: !0 });
			var r = l(a);
			(s = f(r, t[0])), r.forEach(i), this.h();
		},
		h() {
			u(a, 'type', 'submit'), u(a, 'class', (r = b(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, r) {
			$(e, a, r), m(a, s), o || ((h = k(a, 'click', t[6])), (o = !0));
		},
		p(t, e) {
			1 & e && p(s, t[0]),
				16 & e && r !== (r = b(t[5][t[4]]) + ' svelte-1cj8l1u') && u(a, 'class', r);
		},
		d(t) {
			t && i(a), (o = !1), h();
		}
	};
}
function O(t) {
	let a, s, r;
	return {
		c() {
			(a = e('a')), (s = n(t[0])), this.h();
		},
		l(e) {
			a = c(e, 'A', { href: !0, target: !0, class: !0 });
			var r = l(a);
			(s = f(r, t[0])), r.forEach(i), this.h();
		},
		h() {
			u(a, 'href', t[1]),
				u(a, 'target', t[3]),
				u(a, 'class', (r = b(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(t, e) {
			$(t, a, e), m(a, s);
		},
		p(t, e) {
			1 & e && p(s, t[0]),
				2 & e && u(a, 'href', t[1]),
				8 & e && u(a, 'target', t[3]),
				16 & e && r !== (r = b(t[5][t[4]]) + ' svelte-1cj8l1u') && u(a, 'class', r);
		},
		d(t) {
			t && i(a);
		}
	};
}
function R(t) {
	let a;
	function s(t, a) {
		return t[1] ? O : t[2] ? N : y;
	}
	let e = s(t),
		r = e(t);
	return {
		c() {
			r.c(), (a = d());
		},
		l(t) {
			r.l(t), (a = d());
		},
		m(t, s) {
			r.m(t, s), $(t, a, s);
		},
		p(t, [n]) {
			e === (e = s(t)) && r ? r.p(t, n) : (r.d(1), (r = e(t)), r && (r.c(), r.m(a.parentNode, a)));
		},
		i: v,
		o: v,
		d(t) {
			r.d(t), t && i(a);
		}
	};
}
function U(t, a, s) {
	let { text: e = '' } = a,
		{ url: r = '' } = a,
		{ is_submit: n = !1 } = a,
		{ target: c = '_blank' } = a,
		{ variante: l = 0 } = a;
	return (
		(t.$$set = (t) => {
			'text' in t && s(0, (e = t.text)),
				'url' in t && s(1, (r = t.url)),
				'is_submit' in t && s(2, (n = t.is_submit)),
				'target' in t && s(3, (c = t.target)),
				'variante' in t && s(4, (l = t.variante));
		}),
		[
			e,
			r,
			n,
			c,
			l,
			['Light', 'Dark', 'Colored', 'ColoredInvert', 'UnicodeIcon', 'ScrollTo'],
			function (a) {
				x(t, a);
			},
			function (a) {
				x(t, a);
			}
		]
	);
}
class H extends t {
	constructor(t) {
		super(), a(this, t, U, R, s, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4 });
	}
}
function L(t) {
	let a, s, n, f, h, p, v, d, x, b, k;
	return (
		(n = new V({ props: { showCarBack: t[0], foto: t[1], back_txt: t[2] } })),
		(p = new H({ props: { variante: 4, text: '↜' } })),
		p.$on('click', t[4]),
		(d = new H({ props: { variante: 4, text: t[0] ? '⤿' : '⤾' } })),
		d.$on('click', t[3]),
		(b = new H({ props: { variante: 4, text: '⤳' } })),
		b.$on('click', t[5]),
		{
			c() {
				(a = e('div')),
					(s = e('div')),
					w(n.$$.fragment),
					(f = r()),
					(h = e('div')),
					w(p.$$.fragment),
					(v = r()),
					w(d.$$.fragment),
					(x = r()),
					w(b.$$.fragment),
					this.h();
			},
			l(t) {
				a = c(t, 'DIV', { class: !0 });
				var e = l(a);
				s = c(e, 'DIV', { class: !0 });
				var r = l(s);
				j(n.$$.fragment, r), r.forEach(i), (f = o(e)), (h = c(e, 'DIV', { class: !0 }));
				var u = l(h);
				j(p.$$.fragment, u),
					(v = o(u)),
					j(d.$$.fragment, u),
					(x = o(u)),
					j(b.$$.fragment, u),
					u.forEach(i),
					e.forEach(i),
					this.h();
			},
			h() {
				u(s, 'class', 'flip-box-inner svelte-1xdkst'),
					g(s, 'flip-it', t[0]),
					u(h, 'class', 'ButtonControls svelte-1xdkst'),
					u(a, 'class', 'flip-box svelte-1xdkst');
			},
			m(t, e) {
				$(t, a, e),
					m(a, s),
					_(n, s, null),
					m(a, f),
					m(a, h),
					_(p, h, null),
					m(h, v),
					_(d, h, null),
					m(h, x),
					_(b, h, null),
					(k = !0);
			},
			p(t, [a]) {
				const e = {};
				1 & a && (e.showCarBack = t[0]),
					2 & a && (e.foto = t[1]),
					4 & a && (e.back_txt = t[2]),
					n.$set(e),
					1 & a && g(s, 'flip-it', t[0]);
				const r = {};
				1 & a && (r.text = t[0] ? '⤿' : '⤾'), d.$set(r);
			},
			i(t) {
				k ||
					(B(n.$$.fragment, t),
					B(p.$$.fragment, t),
					B(d.$$.fragment, t),
					B(b.$$.fragment, t),
					(k = !0));
			},
			o(t) {
				E(n.$$.fragment, t),
					E(p.$$.fragment, t),
					E(d.$$.fragment, t),
					E(b.$$.fragment, t),
					(k = !1);
			},
			d(t) {
				t && i(a), C(n), C(p), C(d), C(b);
			}
		}
	);
}
function S(t, a, s) {
	let e, r;
	let n = !1,
		c = 0;
	return (
		(t.$$.update = () => {
			64 & t.$$.dirty && s(1, (e = D[c].image)), 64 & t.$$.dirty && s(2, (r = D[c].word));
		}),
		[
			n,
			e,
			r,
			() => s(0, (n = !n)),
			() => {
				s(0, (n = !1)), s(6, 0 === c ? (c = D.length - 1) : (c -= 1));
			},
			() => {
				s(0, (n = !1)), s(6, c === D.length - 1 ? (c = 0) : (c += 1));
			},
			c
		]
	);
}
class q extends t {
	constructor(t) {
		super(), a(this, t, S, L, s, {});
	}
}
export { H as B, q as F };
