import {
	S as t,
	i as s,
	s as a,
	k as e,
	f as r,
	n as l,
	d as c,
	O as n,
	e as i,
	t as u,
	c as o,
	a as h,
	b as f,
	o as d,
	X as v,
	g as m,
	H as p,
	h as b
} from './index-a07a4dd8.js';
function g(t) {
	let s, a, e, l, n;
	return {
		c() {
			(s = i('button')), (a = u(t[0])), this.h();
		},
		l(e) {
			s = o(e, 'BUTTON', { class: !0 });
			var r = h(s);
			(a = f(r, t[0])), r.forEach(c), this.h();
		},
		h() {
			d(s, 'class', (e = v(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, c) {
			r(e, s, c), m(s, a), l || ((n = p(s, 'click', t[7])), (l = !0));
		},
		p(t, r) {
			1 & r && b(a, t[0]),
				16 & r && e !== (e = v(t[5][t[4]]) + ' svelte-1cj8l1u') && d(s, 'class', e);
		},
		d(t) {
			t && c(s), (l = !1), n();
		}
	};
}
function j(t) {
	let s, a, e, l, n;
	return {
		c() {
			(s = i('button')), (a = u(t[0])), this.h();
		},
		l(e) {
			s = o(e, 'BUTTON', { type: !0, class: !0 });
			var r = h(s);
			(a = f(r, t[0])), r.forEach(c), this.h();
		},
		h() {
			d(s, 'type', 'submit'), d(s, 'class', (e = v(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(e, c) {
			r(e, s, c), m(s, a), l || ((n = p(s, 'click', t[6])), (l = !0));
		},
		p(t, r) {
			1 & r && b(a, t[0]),
				16 & r && e !== (e = v(t[5][t[4]]) + ' svelte-1cj8l1u') && d(s, 'class', e);
		},
		d(t) {
			t && c(s), (l = !1), n();
		}
	};
}
function x(t) {
	let s, a, e;
	return {
		c() {
			(s = i('a')), (a = u(t[0])), this.h();
		},
		l(e) {
			s = o(e, 'A', { href: !0, target: !0, class: !0 });
			var r = h(s);
			(a = f(r, t[0])), r.forEach(c), this.h();
		},
		h() {
			d(s, 'href', t[1]),
				d(s, 'target', t[3]),
				d(s, 'class', (e = v(t[5][t[4]]) + ' svelte-1cj8l1u'));
		},
		m(t, e) {
			r(t, s, e), m(s, a);
		},
		p(t, r) {
			1 & r && b(a, t[0]),
				2 & r && d(s, 'href', t[1]),
				8 & r && d(s, 'target', t[3]),
				16 & r && e !== (e = v(t[5][t[4]]) + ' svelte-1cj8l1u') && d(s, 'class', e);
		},
		d(t) {
			t && c(s);
		}
	};
}
function k(t) {
	let s;
	function a(t, s) {
		return t[1] ? x : t[2] ? j : g;
	}
	let n = a(t),
		i = n(t);
	return {
		c() {
			i.c(), (s = e());
		},
		l(t) {
			i.l(t), (s = e());
		},
		m(t, a) {
			i.m(t, a), r(t, s, a);
		},
		p(t, [e]) {
			n === (n = a(t)) && i ? i.p(t, e) : (i.d(1), (i = n(t)), i && (i.c(), i.m(s.parentNode, s)));
		},
		i: l,
		o: l,
		d(t) {
			i.d(t), t && c(s);
		}
	};
}
function T(t, s, a) {
	let { text: e = '' } = s,
		{ url: r = '' } = s,
		{ is_submit: l = !1 } = s,
		{ target: c = '_blank' } = s,
		{ variante: i = 0 } = s;
	return (
		(t.$$set = (t) => {
			'text' in t && a(0, (e = t.text)),
				'url' in t && a(1, (r = t.url)),
				'is_submit' in t && a(2, (l = t.is_submit)),
				'target' in t && a(3, (c = t.target)),
				'variante' in t && a(4, (i = t.variante));
		}),
		[
			e,
			r,
			l,
			c,
			i,
			['Light', 'Dark', 'Colored', 'ColoredInvert', 'UnicodeIcon', 'ScrollTo'],
			function (s) {
				n(t, s);
			},
			function (s) {
				n(t, s);
			}
		]
	);
}
class _ extends t {
	constructor(t) {
		super(), s(this, t, T, k, a, { text: 0, url: 1, is_submit: 2, target: 3, variante: 4 });
	}
}
export { _ as B };
