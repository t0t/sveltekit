var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	s = Object.getOwnPropertySymbols,
	r = Object.prototype.propertyIsEnumerable,
	a = (e, s, r) =>
		s in e ? t(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[s] = r),
	n = (t, n) => {
		for (var o in n || (n = {})) e.call(n, o) && a(t, o, n[o]);
		if (s) for (var o of s(n)) r.call(n, o) && a(t, o, n[o]);
		return t;
	};
import {
	S as o,
	i,
	s as l,
	e as c,
	t as u,
	c as h,
	a as p,
	b as d,
	d as f,
	f as m,
	g,
	h as v,
	j as y,
	k as $,
	l as w,
	n as b,
	m as E,
	o as _,
	p as x,
	q,
	r as k,
	u as S,
	v as L,
	w as R,
	x as O,
	y as I,
	z as A,
	A as P,
	B as T,
	C as j,
	D as C,
	E as N,
	F as U,
	G as V,
	H as M,
	I as D,
	J as z,
	K
} from './chunks/index-83f33906.js';
import { w as B } from './chunks/index-729ebf5a.js';
function F(t) {
	let e,
		s,
		r = t[1].stack + '';
	return {
		c() {
			(e = c('pre')), (s = u(r));
		},
		l(t) {
			e = h(t, 'PRE', {});
			var a = p(e);
			(s = d(a, r)), a.forEach(f);
		},
		m(t, r) {
			m(t, e, r), g(e, s);
		},
		p(t, e) {
			2 & e && r !== (r = t[1].stack + '') && v(s, r);
		},
		d(t) {
			t && f(e);
		}
	};
}
function H(t) {
	let e,
		s,
		r,
		a,
		n,
		o,
		i,
		l = t[1].message + '',
		E = t[1].stack && F(t);
	return {
		c() {
			(e = c('h1')),
				(s = u(t[0])),
				(r = y()),
				(a = c('p')),
				(n = u(l)),
				(o = y()),
				E && E.c(),
				(i = $());
		},
		l(c) {
			e = h(c, 'H1', {});
			var u = p(e);
			(s = d(u, t[0])), u.forEach(f), (r = w(c)), (a = h(c, 'P', {}));
			var m = p(a);
			(n = d(m, l)), m.forEach(f), (o = w(c)), E && E.l(c), (i = $());
		},
		m(t, l) {
			m(t, e, l), g(e, s), m(t, r, l), m(t, a, l), g(a, n), m(t, o, l), E && E.m(t, l), m(t, i, l);
		},
		p(t, [e]) {
			1 & e && v(s, t[0]),
				2 & e && l !== (l = t[1].message + '') && v(n, l),
				t[1].stack
					? E
						? E.p(t, e)
						: ((E = F(t)), E.c(), E.m(i.parentNode, i))
					: E && (E.d(1), (E = null));
		},
		i: b,
		o: b,
		d(t) {
			t && f(e), t && f(r), t && f(a), t && f(o), E && E.d(t), t && f(i);
		}
	};
}
function W(t, e, s) {
	let { status: r } = e,
		{ error: a } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)), 'error' in t && s(1, (a = t.error));
		}),
		[r, a]
	);
}
class G extends o {
	constructor(t) {
		super(), i(this, t, W, H, l, { status: 0, error: 1 });
	}
}
function J(t) {
	let e, s, r;
	const a = [t[4] || {}];
	var n = t[2][1];
	function o(t) {
		let e = {};
		for (let s = 0; s < a.length; s += 1) e = E(e, a[s]);
		return { props: e };
	}
	return (
		n && (e = new n(o())),
		{
			c() {
				e && x(e.$$.fragment), (s = $());
			},
			l(t) {
				e && q(e.$$.fragment, t), (s = $());
			},
			m(t, a) {
				e && k(e, t, a), m(t, s, a), (r = !0);
			},
			p(t, r) {
				const i = 16 & r ? S(a, [L(t[4] || {})]) : {};
				if (n !== (n = t[2][1])) {
					if (e) {
						j();
						const t = e;
						O(t.$$.fragment, 1, 0, () => {
							I(t, 1);
						}),
							C();
					}
					n
						? ((e = new n(o())), x(e.$$.fragment), R(e.$$.fragment, 1), k(e, s.parentNode, s))
						: (e = null);
				} else n && e.$set(i);
			},
			i(t) {
				r || (e && R(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				e && O(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && f(s), e && I(e, t);
			}
		}
	);
}
function Y(t) {
	let e, s;
	return (
		(e = new G({ props: { status: t[0], error: t[1] } })),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, r) {
				k(e, t, r), (s = !0);
			},
			p(t, s) {
				const r = {};
				1 & s && (r.status = t[0]), 2 & s && (r.error = t[1]), e.$set(r);
			},
			i(t) {
				s || (R(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				O(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				I(e, t);
			}
		}
	);
}
function X(t) {
	let e, s, r, a;
	const n = [Y, J],
		o = [];
	function i(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = i(t)),
		(s = o[e] = n[e](t)),
		{
			c() {
				s.c(), (r = $());
			},
			l(t) {
				s.l(t), (r = $());
			},
			m(t, s) {
				o[e].m(t, s), m(t, r, s), (a = !0);
			},
			p(t, a) {
				let l = e;
				(e = i(t)),
					e === l
						? o[e].p(t, a)
						: (j(),
						  O(o[l], 1, 1, () => {
								o[l] = null;
						  }),
						  C(),
						  (s = o[e]),
						  s ? s.p(t, a) : ((s = o[e] = n[e](t)), s.c()),
						  R(s, 1),
						  s.m(r.parentNode, r));
			},
			i(t) {
				a || (R(s), (a = !0));
			},
			o(t) {
				O(s), (a = !1);
			},
			d(t) {
				o[e].d(t), t && f(r);
			}
		}
	);
}
function Q(t) {
	let e,
		s = t[6] && Z(t);
	return {
		c() {
			(e = c('div')), s && s.c(), this.h();
		},
		l(t) {
			e = h(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var r = p(e);
			s && s.l(r), r.forEach(f), this.h();
		},
		h() {
			_(e, 'id', 'svelte-announcer'),
				_(e, 'aria-live', 'assertive'),
				_(e, 'aria-atomic', 'true'),
				_(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			m(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = Z(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && f(e), s && s.d();
		}
	};
}
function Z(t) {
	let e, s;
	return {
		c() {
			(e = u('Navigated to ')), (s = u(t[7]));
		},
		l(r) {
			(e = d(r, 'Navigated to ')), (s = d(r, t[7]));
		},
		m(t, r) {
			m(t, e, r), m(t, s, r);
		},
		p(t, e) {
			128 & e && v(s, t[7]);
		},
		d(t) {
			t && f(e), t && f(s);
		}
	};
}
function tt(t) {
	let e, s, r, a;
	const n = [t[3] || {}];
	let o = { $$slots: { default: [X] }, $$scope: { ctx: t } };
	for (let l = 0; l < n.length; l += 1) o = E(o, n[l]);
	e = new t[8]({ props: o });
	let i = t[5] && Q(t);
	return {
		c() {
			x(e.$$.fragment), (s = y()), i && i.c(), (r = $());
		},
		l(t) {
			q(e.$$.fragment, t), (s = w(t)), i && i.l(t), (r = $());
		},
		m(t, n) {
			k(e, t, n), m(t, s, n), i && i.m(t, n), m(t, r, n), (a = !0);
		},
		p(t, [s]) {
			const a = 8 & s ? S(n, [L(t[3] || {})]) : {};
			2071 & s && (a.$$scope = { dirty: s, ctx: t }),
				e.$set(a),
				t[5]
					? i
						? i.p(t, s)
						: ((i = Q(t)), i.c(), i.m(r.parentNode, r))
					: i && (i.d(1), (i = null));
		},
		i(t) {
			a || (R(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			O(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			I(e, t), t && f(s), i && i.d(t), t && f(r);
		}
	};
}
function et(t, e, s) {
	let { status: r } = e,
		{ error: a } = e,
		{ stores: n } = e,
		{ page: o } = e,
		{ components: i } = e,
		{ props_0: l = null } = e,
		{ props_1: c = null } = e;
	const u = i[0];
	A('__svelte__', n), P(n.page.notify);
	let h = !1,
		p = !1,
		d = null;
	return (
		T(() => {
			const t = n.page.subscribe(() => {
				h && (s(6, (p = !0)), s(7, (d = document.title)));
			});
			return s(5, (h = !0)), t;
		}),
		(t.$$set = (t) => {
			'status' in t && s(0, (r = t.status)),
				'error' in t && s(1, (a = t.error)),
				'stores' in t && s(9, (n = t.stores)),
				'page' in t && s(10, (o = t.page)),
				'components' in t && s(2, (i = t.components)),
				'props_0' in t && s(3, (l = t.props_0)),
				'props_1' in t && s(4, (c = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && n.page.set(o);
		}),
		[r, a, i, l, c, h, p, d, u, n, o]
	);
}
class st extends o {
	constructor(t) {
		super(),
			i(this, t, et, tt, l, {
				status: 0,
				error: 1,
				stores: 9,
				page: 10,
				components: 2,
				props_0: 3,
				props_1: 4
			});
	}
}
let rt;
const at = {},
	nt = function (t, e) {
		if (!e) return t();
		if (void 0 === rt) {
			const t = document.createElement('link').relList;
			rt = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in at) return;
				at[t] = !0;
				const e = t.endsWith('.css'),
					s = e ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${t}"]${s}`)) return;
				const r = document.createElement('link');
				return (
					(r.rel = e ? 'stylesheet' : rt),
					e || ((r.as = 'script'), (r.crossOrigin = '')),
					(r.href = t),
					document.head.appendChild(r),
					e
						? new Promise((t, e) => {
								r.addEventListener('load', t), r.addEventListener('error', e);
						  })
						: void 0
				);
			})
		).then(() => t());
	};
function ot(t) {
	let e, s, r, a, n, o, i, l, v, $, E, x, q;
	return {
		c() {
			(e = c('aside')),
				(s = c('small')),
				(r = u('Follow me at Instagram')),
				(a = y()),
				(n = c('ul')),
				(o = c('li')),
				(i = c('a')),
				(l = N('svg')),
				(v = N('title')),
				($ = u('Instagram')),
				(E = N('circle')),
				(x = N('path')),
				(q = N('path')),
				this.h();
		},
		l(t) {
			e = h(t, 'ASIDE', { class: !0 });
			var c = p(e);
			s = h(c, 'SMALL', { class: !0 });
			var u = p(s);
			(r = d(u, 'Follow me at Instagram')),
				u.forEach(f),
				(a = w(c)),
				(n = h(c, 'UL', { class: !0 }));
			var m = p(n);
			o = h(m, 'LI', { class: !0 });
			var g = p(o);
			i = h(g, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var y = p(i);
			l = h(y, 'svg', { xmlns: !0, viewBox: !0, class: !0 }, 1);
			var b = p(l);
			v = h(b, 'title', { class: !0 }, 1);
			var _ = p(v);
			($ = d(_, 'Instagram')),
				_.forEach(f),
				(E = h(b, 'circle', { cx: !0, cy: !0, r: !0, class: !0 }, 1)),
				p(E).forEach(f),
				(x = h(b, 'path', { d: !0, class: !0 }, 1)),
				p(x).forEach(f),
				(q = h(b, 'path', { d: !0, class: !0 }, 1)),
				p(q).forEach(f),
				b.forEach(f),
				y.forEach(f),
				g.forEach(f),
				m.forEach(f),
				c.forEach(f),
				this.h();
		},
		h() {
			_(s, 'class', 'svelte-1nrg4na'),
				_(v, 'class', 'svelte-1nrg4na'),
				_(E, 'cx', '12.145'),
				_(E, 'cy', '3.892'),
				_(E, 'r', '0.96'),
				_(E, 'class', 'svelte-1nrg4na'),
				_(
					x,
					'd',
					'M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z'
				),
				_(x, 'class', 'svelte-1nrg4na'),
				_(
					q,
					'd',
					'M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z'
				),
				_(q, 'class', 'svelte-1nrg4na'),
				_(l, 'xmlns', 'http://www.w3.org/2000/svg'),
				_(l, 'viewBox', '0 0 16 16'),
				_(l, 'class', 'svelte-1nrg4na'),
				_(i, 'href', 'https://www.instagram.com/noelia__requena/'),
				_(i, 'target', '_blank'),
				_(i, 'rel', 'noopener'),
				_(i, 'class', 'svelte-1nrg4na'),
				_(o, 'class', 'svelte-1nrg4na'),
				_(n, 'class', 'svelte-1nrg4na'),
				_(e, 'class', 'Links svelte-1nrg4na');
		},
		m(t, c) {
			m(t, e, c),
				g(e, s),
				g(s, r),
				g(e, a),
				g(e, n),
				g(n, o),
				g(o, i),
				g(i, l),
				g(l, v),
				g(v, $),
				g(l, E),
				g(l, x),
				g(l, q);
		},
		p: b,
		i: b,
		o: b,
		d(t) {
			t && f(e);
		}
	};
}
class it extends o {
	constructor(t) {
		super(), i(this, t, null, ot, l, {});
	}
}
function lt(t) {
	let e, s, r;
	return (
		(s = new it({})),
		{
			c() {
				(e = c('footer')), x(s.$$.fragment), this.h();
			},
			l(t) {
				e = h(t, 'FOOTER', { class: !0 });
				var r = p(e);
				q(s.$$.fragment, r), r.forEach(f), this.h();
			},
			h() {
				_(e, 'class', 'svelte-sy3bfl');
			},
			m(t, a) {
				m(t, e, a), k(s, e, null), (r = !0);
			},
			p: b,
			i(t) {
				r || (R(s.$$.fragment, t), (r = !0));
			},
			o(t) {
				O(s.$$.fragment, t), (r = !1);
			},
			d(t) {
				t && f(e), I(s);
			}
		}
	);
}
class ct extends o {
	constructor(t) {
		super(), i(this, t, null, lt, l, {});
	}
}
const ut = [
	{ name: 'home', url: '/' },
	{ name: 'artwork', url: '/artworks' },
	{ name: 'about', url: '/about' },
	{ name: 'philosophy', url: '/philosophy' }
];
function ht(t, e, s) {
	const r = t.slice();
	return (r[4] = e[s]), r;
}
function pt(t) {
	let e,
		s,
		r,
		a,
		n = t[4].name + '';
	return {
		c() {
			(e = c('a')), (s = u(n)), this.h();
		},
		l(t) {
			e = h(t, 'A', { href: !0, class: !0 });
			var r = p(e);
			(s = d(r, n)), r.forEach(f), this.h();
		},
		h() {
			_(e, 'href', t[4].url), _(e, 'class', 'svelte-w7x0aa'), U(e, 'active', t[0] === t[4].name);
		},
		m(n, o) {
			m(n, e, o), g(e, s), r || ((a = V(e, 'click', t[1])), (r = !0));
		},
		p(t, s) {
			1 & s && U(e, 'active', t[0] === t[4].name);
		},
		d(t) {
			t && f(e), (r = !1), a();
		}
	};
}
function dt(t) {
	let e, s, r, a, n, o, i, l, u;
	document.title = e = 'SvelteKit UI - ' + t[0];
	let d = ut,
		v = [];
	for (let c = 0; c < d.length; c += 1) v[c] = pt(ht(t, d, c));
	const $ = t[3].default,
		b = M($, t, t[2], null);
	return (
		(l = new ct({})),
		{
			c() {
				(s = y()), (r = c('main')), (a = c('nav'));
				for (let t = 0; t < v.length; t += 1) v[t].c();
				(n = y()), (o = c('section')), b && b.c(), (i = y()), x(l.$$.fragment), this.h();
			},
			l(t) {
				D('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(f),
					(s = w(t)),
					(r = h(t, 'MAIN', { class: !0 }));
				var e = p(r);
				a = h(e, 'NAV', { class: !0 });
				var c = p(a);
				for (let s = 0; s < v.length; s += 1) v[s].l(c);
				c.forEach(f), (n = w(e)), (o = h(e, 'SECTION', { class: !0 }));
				var u = p(o);
				b && b.l(u), u.forEach(f), (i = w(e)), q(l.$$.fragment, e), e.forEach(f), this.h();
			},
			h() {
				_(a, 'class', 'svelte-w7x0aa'),
					_(o, 'class', 'svelte-w7x0aa'),
					_(r, 'class', 'svelte-w7x0aa');
			},
			m(t, e) {
				m(t, s, e), m(t, r, e), g(r, a);
				for (let s = 0; s < v.length; s += 1) v[s].m(a, null);
				g(r, n), g(r, o), b && b.m(o, null), g(r, i), k(l, r, null), (u = !0);
			},
			p(t, [s]) {
				if (
					((!u || 1 & s) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e), 3 & s)
				) {
					let e;
					for (d = ut, e = 0; e < d.length; e += 1) {
						const r = ht(t, d, e);
						v[e] ? v[e].p(r, s) : ((v[e] = pt(r)), v[e].c(), v[e].m(a, null));
					}
					for (; e < v.length; e += 1) v[e].d(1);
					v.length = d.length;
				}
				b && b.p && 4 & s && z(b, $, t, t[2], s, null, null);
			},
			i(t) {
				u || (R(b, t), R(l.$$.fragment, t), (u = !0));
			},
			o(t) {
				O(b, t), O(l.$$.fragment, t), (u = !1);
			},
			d(t) {
				t && f(s), t && f(r), K(v, t), b && b.d(t), I(l);
			}
		}
	);
}
function ft(t, e, s) {
	let { $$slots: r = {}, $$scope: a } = e,
		n = '';
	return (
		(t.$$set = (t) => {
			'$$scope' in t && s(2, (a = t.$$scope));
		}),
		[
			n,
			(t) => {
				s(0, (n = t.srcElement.firstChild.data));
			},
			a,
			r
		]
	);
}
var mt = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends o {
		constructor(t) {
			super(), i(this, t, ft, dt, l, {});
		}
	}
});
const gt = [
		() =>
			nt(() => import('./pages/index.svelte-d023179f.js'), [
				'/_app/pages/index.svelte-d023179f.js',
				'/_app/assets/pages/index.svelte-2867184f.css',
				'/_app/chunks/index-83f33906.js',
				'/_app/chunks/Button-ee442612.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-1b31e13c.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			nt(() => import('./pages/philosophy/index.svelte-30c29084.js'), [
				'/_app/pages/philosophy/index.svelte-30c29084.js',
				'/_app/assets/pages/philosophy/index.svelte-e3b19d08.css',
				'/_app/chunks/index-83f33906.js',
				'/_app/chunks/Section-1b31e13c.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			nt(() => import('./pages/artworks/index.svelte-15e16f07.js'), [
				'/_app/pages/artworks/index.svelte-15e16f07.js',
				'/_app/assets/pages/artworks/index.svelte-5309a721.css',
				'/_app/chunks/index-83f33906.js',
				'/_app/chunks/Button-ee442612.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/index-78b22dae.js',
				'/_app/chunks/Section-1b31e13c.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			nt(() => import('./pages/about/index.svelte-b94231b0.js'), [
				'/_app/pages/about/index.svelte-b94231b0.js',
				'/_app/assets/pages/about/index.svelte-23a90989.css',
				'/_app/chunks/index-83f33906.js',
				'/_app/chunks/Section-1b31e13c.js',
				'/_app/assets/Section-95823de1.css',
				'/_app/chunks/index-729ebf5a.js',
				'/_app/chunks/index-78b22dae.js'
			])
	],
	vt = [
		[/^\/$/, [gt[0]]],
		[/^\/philosophy\/?$/, [gt[1]]],
		[/^\/artworks\/?$/, [gt[2]]],
		[/^\/about\/?$/, [gt[3]]]
	];
function yt() {
	return { x: pageXOffset, y: pageYOffset };
}
function $t(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class wt {
	constructor({ base: t, routes: e }) {
		(this.base = t), (this.routes = e);
	}
	init(t) {
		let e;
		(this.renderer = t),
			(t.router = this),
			(this.enabled = !0),
			'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			}),
			addEventListener('scroll', () => {
				clearTimeout(e),
					(e = setTimeout(() => {
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': yt() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const s = (t) => {
			const e = $t(t.target);
			e && e.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(e.href));
		};
		let r;
		addEventListener('touchstart', s),
			addEventListener('mousemove', (t) => {
				clearTimeout(r),
					(r = setTimeout(() => {
						s(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const e = $t(t.target);
				if (!e) return;
				if (!e.href) return;
				const s = 'object' == typeof e.href && 'SVGAnimatedString' === e.href.constructor.name,
					r = String(s ? e.href.baseVal : e.href);
				if (r === location.href) return void (location.hash || t.preventDefault());
				if (e.hasAttribute('download') || 'external' === e.getAttribute('rel')) return;
				if (s ? e.target.baseVal : e.target) return;
				const a = new URL(r);
				if (a.pathname === location.pathname && a.search === location.search) return;
				const n = this.parse(a);
				if (n) {
					const s = e.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', a.href),
						this._navigate(n, s ? yt() : null, [], a.hash),
						t.preventDefault();
				}
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href),
						s = this.parse(e);
					s ? this._navigate(s, t.state['sveltekit:scroll'], []) : (location.href = location.href);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(t) {
		if (t.origin !== location.origin) return null;
		if (!t.pathname.startsWith(this.base)) return null;
		const e = t.pathname.slice(this.base.length) || '/',
			s = this.routes.filter(([t]) => t.test(e));
		if (s.length > 0) {
			const r = new URLSearchParams(t.search);
			return { id: `${e}?${r}`, routes: s, path: e, query: r };
		}
	}
	async goto(t, { noscroll: e = !1, replaceState: s = !1 } = {}, r) {
		if (this.enabled) {
			const a = new URL(
					t,
					(function (t) {
						let e = t.baseURI;
						if (!e) {
							const s = t.getElementsByTagName('base');
							e = s.length ? s[0].href : t.URL;
						}
						return e;
					})(document)
				),
				n = this.parse(a);
			if (n)
				return (
					history[s ? 'replaceState' : 'pushState']({}, '', t),
					this._navigate(n, e ? yt() : null, r, a.hash)
				);
		}
		return (location.href = t), new Promise(() => {});
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(t) {
		const e = this.parse(t);
		if (e) return this.renderer.load(e);
		throw new Error(`Could not prefetch ${t.href}`);
	}
	async _navigate(t, e, s, r) {
		this.renderer.notify({ path: t.path, query: t.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(t, s),
			document.body.focus();
		const a = r && document.getElementById(r.slice(1));
		e
			? scrollTo(e.x, e.y)
			: a
			? scrollTo(0, a.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function bt(t) {
	if (t.error) {
		const e = 'string' == typeof t.error ? new Error(t.error) : t.error,
			s = t.status;
		return e instanceof Error
			? !s || s < 400 || s > 599
				? (console.warn(
						'"error" returned from load() without a valid status code — defaulting to 500'
				  ),
				  { status: 500, error: e })
				: { status: s, error: e }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`
					)
			  };
	}
	if (t.redirect) {
		if (!t.status || 3 !== Math.floor(t.status / 100))
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if ('string' != typeof t.redirect)
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	return t;
}
function Et(t) {
	const e = B(t);
	let s = !0;
	return {
		notify: function () {
			(s = !0), e.update((t) => t);
		},
		set: function (t) {
			(s = !1), e.set(t);
		},
		subscribe: function (t) {
			let r;
			return e.subscribe((e) => {
				(void 0 === r || (s && e !== r)) && t((r = e));
			});
		}
	};
}
function _t(t, a) {
	const n = 'string' == typeof t ? t : t.url,
		o = document.querySelector(`script[type="svelte-data"][url="${n}"]`);
	if (o) {
		const t = JSON.parse(o.textContent),
			{ body: a } = t,
			n = ((t, a) => {
				var n = {};
				for (var o in t) e.call(t, o) && a.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && s) for (var o of s(t)) a.indexOf(o) < 0 && r.call(t, o) && (n[o] = t[o]);
				return n;
			})(t, ['body']);
		return Promise.resolve(new Response(a, n));
	}
	return fetch(t, a);
}
class xt {
	constructor({ Root: t, layout: e, target: s, session: r, host: a }) {
		(this.Root = t),
			(this.layout = e),
			(this.host = a),
			(this.router = null),
			(this.target = s),
			(this.started = !1),
			(this.current = { page: null, query: null, session_changed: !1, nodes: [], contexts: [] }),
			(this.caches = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: Et({}), navigating: B(null), session: B(r) }),
			(this.$session = null),
			(this.root = null);
		let n = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !n)) return;
			this.current.session_changed = !0;
			const e = this.router.parse(new URL(location.href));
			this.update(e, []);
		}),
			(n = !0);
	}
	async start(t) {
		const e = await this._load(t);
		e.redirect ? (location.href = new URL(e.redirect, location.href).href) : this._init(e);
	}
	notify({ path: t, query: e }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: t, query: e }
				});
	}
	async update(t, e) {
		const s = (this.token = {}),
			r = await this._get_navigation_result(t);
		if (s !== this.token) return;
		if (r.reload) location.reload();
		else if (r.redirect) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(r.redirect, { replaceState: !0 }, [...e, t.path])
					: (location.href = new URL(r.redirect, location.href).href));
			this.root.$set({ status: 500, error: new Error('Redirect loop') });
		} else
			this.started
				? ((this.current = r.state),
				  this.root.$set(r.props),
				  this.stores.navigating.set(null),
				  await 0)
				: this._init(r);
		dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null);
		!1 === r.state.nodes[r.state.nodes.length - 1].module.router
			? this.router.disable()
			: this.router.enable();
	}
	load(t) {
		return (
			(this.loading.promise = this._get_navigation_result(t)),
			(this.loading.id = t.id),
			this.loading.promise
		);
	}
	async _get_navigation_result(t) {
		if (this.loading.id === t.id) return this.loading.promise;
		for (let e = 0; e < t.routes.length; e += 1) {
			const s = t.routes[e],
				[r, a, n] = s;
			if (1 === s.length) return { reload: !0 };
			let o = e + 1;
			for (; o < t.routes.length; ) {
				const e = t.routes[o];
				if (e[0].toString() !== r.toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (o += 1);
			}
			const i = a.map((t) => t()),
				l = {
					host: this.host,
					path: t.path,
					params: n ? n(s[0].exec(t.path)) : {},
					query: t.query
				},
				c = await this._load({ status: 200, error: null, nodes: i, page: l });
			if (c) return c;
		}
		return await this._load({
			status: 404,
			error: new Error(`Not found: ${t.path}`),
			nodes: [],
			page: { host: this.host, path: t.path, query: t.query, params: {} }
		});
	}
	_init(t) {
		(this.current = t.state),
			(this.root = new this.Root({
				target: this.target,
				props: n({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _load({ status: t, error: e, nodes: s, page: r }) {
		const a = r.query.toString(),
			o = {
				state: { page: r, query: a, session_changed: !1, nodes: [], contexts: [] },
				props: { status: t, error: e, components: [] }
			},
			i = {
				params: Object.keys(r.params).filter(
					(t) => !this.current.page || this.current.page.params[t] !== r.params[t]
				),
				query: a !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const t = [this.layout, ...s],
				l = [];
			let c;
			for (let s = 0; s < t.length; s += 1) {
				const u = this.current.nodes[s],
					h = this.current.contexts[s],
					p = await t[s];
				if (((o.props.components[s] = p.default), p.preload))
					throw new Error(
						'preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading'
					);
				if (
					!u ||
					p !== u.module ||
					i.params.some((t) => u.uses.params.has(t)) ||
					(i.query && u.uses.query) ||
					(i.session && u.uses.session) ||
					(i.context && u.uses.context)
				) {
					const u = r.path + a,
						h = this.caches.get(p),
						d = h && h.get(u);
					let f, m;
					if (!d || (i.context && d.node.uses.context)) {
						f = { module: p, uses: { params: new Set(), query: !1, session: !1, context: !1 } };
						const a = {};
						for (const t in r.params)
							Object.defineProperty(a, t, {
								get: () => (f.uses.params.add(t), r.params[t]),
								enumerable: !0
							});
						const o = this.$session;
						if (p.load) {
							m = await p.load.call(null, {
								page: {
									host: r.host,
									path: r.path,
									params: a,
									get query() {
										return (f.uses.query = !0), r.query;
									}
								},
								get session() {
									return (f.uses.session = !0), o;
								},
								get context() {
									return (f.uses.context = !0), n({}, c);
								},
								fetch: this.started ? fetch : _t
							});
							const i = s === t.length - 1 && !e;
							if (!m && i) return;
						}
					} else ({ node: f, loaded: m } = d);
					if (m) {
						if (((m = bt(m)), m.error)) {
							if (e) throw e;
							return await this._load({
								status: m.status || 500,
								error: m.error,
								nodes: [],
								page: { host: r.host, path: r.path, query: r.query, params: {} }
							});
						}
						if (m.redirect) return { redirect: m.redirect };
						if ((m.context && ((i.context = !0), (c = n(n({}, c), m.context))), m.maxage)) {
							this.caches.has(p) || this.caches.set(p, new Map());
							const t = this.caches.get(p),
								e = { node: f, loaded: m };
							t.set(u, e);
							let s = !1;
							const r = setTimeout(() => {
									a();
								}, 1e3 * m.maxage),
								a = () => {
									t.get(u) === e && t.delete(u), n(), clearTimeout(r);
								},
								n = this.stores.session.subscribe(() => {
									s && a();
								});
							s = !0;
						}
						l[s] = m.props;
					}
					(o.state.nodes[s] = f), (o.state.contexts[s] = c);
				} else (o.state.nodes[s] = u), (o.state.contexts[s] = c = h);
			}
			return (
				(await Promise.all(l)).forEach((t, e) => {
					t && (o.props[`props_${e}`] = t);
				}),
				(this.current.page && r.path === this.current.page.path && !i.query) || (o.props.page = r),
				o
			);
		} catch (l) {
			if (e) throw e;
			return await this._load({
				status: 500,
				error: l,
				nodes: [],
				page: { host: r.host, path: r.path, query: r.query, params: {} }
			});
		}
	}
}
async function qt({ paths: t, target: e, session: s, host: r, route: a, hydrate: n }) {
	const o = a && new wt({ base: t.base, routes: vt }),
		i = new xt({ Root: st, layout: mt, target: e, session: s, host: r });
	n && (await i.start(n)), a && o.init(i), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { qt as start };
