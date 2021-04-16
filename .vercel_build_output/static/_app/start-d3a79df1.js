var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	r = Object.getOwnPropertySymbols,
	s = Object.prototype.propertyIsEnumerable,
	n = (e, r, s) =>
		r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[r] = s),
	o = (t, o) => {
		for (var a in o || (o = {})) e.call(o, a) && n(t, a, o[a]);
		if (r) for (var a of r(o)) s.call(o, a) && n(t, a, o[a]);
		return t;
	};
import {
	S as a,
	i,
	s as l,
	e as c,
	t as u,
	c as h,
	a as d,
	b as p,
	d as f,
	f as m,
	g,
	h as y,
	j as v,
	k as $,
	l as b,
	n as w,
	m as _,
	o as E,
	p as x,
	q,
	r as k,
	u as R,
	v as S,
	w as L,
	x as O,
	y as P,
	z as T,
	A as j,
	B as A,
	C as N,
	D as U,
	E as I,
	F as C,
	G as V,
	H as D,
	I as K,
	J as M
} from './chunks/index-a07a4dd8.js';
import { w as z } from './chunks/index-4e5ad634.js';
function B(t) {
	let e,
		r,
		s = t[1].stack + '';
	return {
		c() {
			(e = c('pre')), (r = u(s));
		},
		l(t) {
			e = h(t, 'PRE', {});
			var n = d(e);
			(r = p(n, s)), n.forEach(f);
		},
		m(t, s) {
			m(t, e, s), g(e, r);
		},
		p(t, e) {
			2 & e && s !== (s = t[1].stack + '') && y(r, s);
		},
		d(t) {
			t && f(e);
		}
	};
}
function W(t) {
	let e,
		r,
		s,
		n,
		o,
		a,
		i,
		l = t[1].message + '',
		_ = t[1].stack && B(t);
	return {
		c() {
			(e = c('h1')),
				(r = u(t[0])),
				(s = v()),
				(n = c('p')),
				(o = u(l)),
				(a = v()),
				_ && _.c(),
				(i = $());
		},
		l(c) {
			e = h(c, 'H1', {});
			var u = d(e);
			(r = p(u, t[0])), u.forEach(f), (s = b(c)), (n = h(c, 'P', {}));
			var m = d(n);
			(o = p(m, l)), m.forEach(f), (a = b(c)), _ && _.l(c), (i = $());
		},
		m(t, l) {
			m(t, e, l), g(e, r), m(t, s, l), m(t, n, l), g(n, o), m(t, a, l), _ && _.m(t, l), m(t, i, l);
		},
		p(t, [e]) {
			1 & e && y(r, t[0]),
				2 & e && l !== (l = t[1].message + '') && y(o, l),
				t[1].stack
					? _
						? _.p(t, e)
						: ((_ = B(t)), _.c(), _.m(i.parentNode, i))
					: _ && (_.d(1), (_ = null));
		},
		i: w,
		o: w,
		d(t) {
			t && f(e), t && f(s), t && f(n), t && f(a), _ && _.d(t), t && f(i);
		}
	};
}
function F(t, e, r) {
	let { status: s } = e,
		{ error: n } = e;
	return (
		(t.$$set = (t) => {
			'status' in t && r(0, (s = t.status)), 'error' in t && r(1, (n = t.error));
		}),
		[s, n]
	);
}
class G extends a {
	constructor(t) {
		super(), i(this, t, F, W, l, { status: 0, error: 1 });
	}
}
function H(t) {
	let e, r, s;
	const n = [t[4] || {}];
	var o = t[2][1];
	function a(t) {
		let e = {};
		for (let r = 0; r < n.length; r += 1) e = _(e, n[r]);
		return { props: e };
	}
	return (
		o && (e = new o(a())),
		{
			c() {
				e && x(e.$$.fragment), (r = $());
			},
			l(t) {
				e && q(e.$$.fragment, t), (r = $());
			},
			m(t, n) {
				e && k(e, t, n), m(t, r, n), (s = !0);
			},
			p(t, s) {
				const i = 16 & s ? R(n, [S(t[4] || {})]) : {};
				if (o !== (o = t[2][1])) {
					if (e) {
						N();
						const t = e;
						O(t.$$.fragment, 1, 0, () => {
							P(t, 1);
						}),
							U();
					}
					o
						? ((e = new o(a())), x(e.$$.fragment), L(e.$$.fragment, 1), k(e, r.parentNode, r))
						: (e = null);
				} else o && e.$set(i);
			},
			i(t) {
				s || (e && L(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && O(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && f(r), e && P(e, t);
			}
		}
	);
}
function J(t) {
	let e, r;
	return (
		(e = new G({ props: { status: t[0], error: t[1] } })),
		{
			c() {
				x(e.$$.fragment);
			},
			l(t) {
				q(e.$$.fragment, t);
			},
			m(t, s) {
				k(e, t, s), (r = !0);
			},
			p(t, r) {
				const s = {};
				1 & r && (s.status = t[0]), 2 & r && (s.error = t[1]), e.$set(s);
			},
			i(t) {
				r || (L(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				O(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				P(e, t);
			}
		}
	);
}
function Y(t) {
	let e, r, s, n;
	const o = [J, H],
		a = [];
	function i(t, e) {
		return t[1] ? 0 : 1;
	}
	return (
		(e = i(t)),
		(r = a[e] = o[e](t)),
		{
			c() {
				r.c(), (s = $());
			},
			l(t) {
				r.l(t), (s = $());
			},
			m(t, r) {
				a[e].m(t, r), m(t, s, r), (n = !0);
			},
			p(t, n) {
				let l = e;
				(e = i(t)),
					e === l
						? a[e].p(t, n)
						: (N(),
						  O(a[l], 1, 1, () => {
								a[l] = null;
						  }),
						  U(),
						  (r = a[e]),
						  r ? r.p(t, n) : ((r = a[e] = o[e](t)), r.c()),
						  L(r, 1),
						  r.m(s.parentNode, s));
			},
			i(t) {
				n || (L(r), (n = !0));
			},
			o(t) {
				O(r), (n = !1);
			},
			d(t) {
				a[e].d(t), t && f(s);
			}
		}
	);
}
function X(t) {
	let e,
		r = t[6] && Q(t);
	return {
		c() {
			(e = c('div')), r && r.c(), this.h();
		},
		l(t) {
			e = h(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var s = d(e);
			r && r.l(s), s.forEach(f), this.h();
		},
		h() {
			E(e, 'id', 'svelte-announcer'),
				E(e, 'aria-live', 'assertive'),
				E(e, 'aria-atomic', 'true'),
				E(e, 'class', 'svelte-1j55zn5');
		},
		m(t, s) {
			m(t, e, s), r && r.m(e, null);
		},
		p(t, s) {
			t[6] ? (r ? r.p(t, s) : ((r = Q(t)), r.c(), r.m(e, null))) : r && (r.d(1), (r = null));
		},
		d(t) {
			t && f(e), r && r.d();
		}
	};
}
function Q(t) {
	let e, r;
	return {
		c() {
			(e = u('Navigated to ')), (r = u(t[7]));
		},
		l(s) {
			(e = p(s, 'Navigated to ')), (r = p(s, t[7]));
		},
		m(t, s) {
			m(t, e, s), m(t, r, s);
		},
		p(t, e) {
			128 & e && y(r, t[7]);
		},
		d(t) {
			t && f(e), t && f(r);
		}
	};
}
function Z(t) {
	let e, r, s, n;
	const o = [t[3] || {}];
	let a = { $$slots: { default: [Y] }, $$scope: { ctx: t } };
	for (let l = 0; l < o.length; l += 1) a = _(a, o[l]);
	e = new t[8]({ props: a });
	let i = t[5] && X(t);
	return {
		c() {
			x(e.$$.fragment), (r = v()), i && i.c(), (s = $());
		},
		l(t) {
			q(e.$$.fragment, t), (r = b(t)), i && i.l(t), (s = $());
		},
		m(t, o) {
			k(e, t, o), m(t, r, o), i && i.m(t, o), m(t, s, o), (n = !0);
		},
		p(t, [r]) {
			const n = 8 & r ? R(o, [S(t[3] || {})]) : {};
			2071 & r && (n.$$scope = { dirty: r, ctx: t }),
				e.$set(n),
				t[5]
					? i
						? i.p(t, r)
						: ((i = X(t)), i.c(), i.m(s.parentNode, s))
					: i && (i.d(1), (i = null));
		},
		i(t) {
			n || (L(e.$$.fragment, t), (n = !0));
		},
		o(t) {
			O(e.$$.fragment, t), (n = !1);
		},
		d(t) {
			P(e, t), t && f(r), i && i.d(t), t && f(s);
		}
	};
}
function tt(t, e, r) {
	let { status: s } = e,
		{ error: n } = e,
		{ stores: o } = e,
		{ page: a } = e,
		{ components: i } = e,
		{ props_0: l = null } = e,
		{ props_1: c = null } = e;
	const u = i[0];
	T('__svelte__', o), j(o.page.notify);
	let h = !1,
		d = !1,
		p = null;
	return (
		A(() => {
			const t = o.page.subscribe(() => {
				h && (r(6, (d = !0)), r(7, (p = document.title)));
			});
			return r(5, (h = !0)), t;
		}),
		(t.$$set = (t) => {
			'status' in t && r(0, (s = t.status)),
				'error' in t && r(1, (n = t.error)),
				'stores' in t && r(9, (o = t.stores)),
				'page' in t && r(10, (a = t.page)),
				'components' in t && r(2, (i = t.components)),
				'props_0' in t && r(3, (l = t.props_0)),
				'props_1' in t && r(4, (c = t.props_1));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && o.page.set(a);
		}),
		[s, n, i, l, c, h, d, p, u, o, a]
	);
}
class et extends a {
	constructor(t) {
		super(),
			i(this, t, tt, Z, l, {
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
const st = {},
	nt = function (t, e) {
		if (!e) return t();
		if (void 0 === rt) {
			const t = document.createElement('link').relList;
			rt = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in st) return;
				st[t] = !0;
				const e = t.endsWith('.css'),
					r = e ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${t}"]${r}`)) return;
				const s = document.createElement('link');
				return (
					(s.rel = e ? 'stylesheet' : rt),
					e || ((s.as = 'script'), (s.crossOrigin = '')),
					(s.href = t),
					document.head.appendChild(s),
					e
						? new Promise((t, e) => {
								s.addEventListener('load', t), s.addEventListener('error', e);
						  })
						: void 0
				);
			})
		).then(() => t());
	};
function ot(t) {
	let e, r, s, n, o;
	const a = t[1].default,
		i = I(a, t, t[0], null);
	return {
		c() {
			(e = c('footer')),
				(r = c('p')),
				(s = u('This is the default site footer')),
				(n = v()),
				i && i.c(),
				this.h();
		},
		l(t) {
			e = h(t, 'FOOTER', { class: !0 });
			var o = d(e);
			r = h(o, 'P', {});
			var a = d(r);
			(s = p(a, 'This is the default site footer')),
				a.forEach(f),
				(n = b(o)),
				i && i.l(o),
				o.forEach(f),
				this.h();
		},
		h() {
			E(e, 'class', 'svelte-1wa2g83');
		},
		m(t, a) {
			m(t, e, a), g(e, r), g(r, s), g(e, n), i && i.m(e, null), (o = !0);
		},
		p(t, [e]) {
			i && i.p && 1 & e && C(i, a, t, t[0], e, null, null);
		},
		i(t) {
			o || (L(i, t), (o = !0));
		},
		o(t) {
			O(i, t), (o = !1);
		},
		d(t) {
			t && f(e), i && i.d(t);
		}
	};
}
function at(t, e, r) {
	let { $$slots: s = {}, $$scope: n } = e;
	return (
		(t.$$set = (t) => {
			'$$scope' in t && r(0, (n = t.$$scope));
		}),
		[n, s]
	);
}
class it extends a {
	constructor(t) {
		super(), i(this, t, at, ot, l, {});
	}
}
const lt = [
	{ name: 'home', url: '/' },
	{ name: 'artwork', url: '/artworks' },
	{ name: 'about', url: '/about' }
];
function ct(t, e, r) {
	const s = t.slice();
	return (s[4] = e[r]), s;
}
function ut(t) {
	let e,
		r,
		s,
		n,
		o = t[4].name + '';
	return {
		c() {
			(e = c('a')), (r = u(o)), this.h();
		},
		l(t) {
			e = h(t, 'A', { href: !0, class: !0 });
			var s = d(e);
			(r = p(s, o)), s.forEach(f), this.h();
		},
		h() {
			E(e, 'href', t[4].url), E(e, 'class', 'svelte-w7x0aa'), V(e, 'active', t[0] === t[4].name);
		},
		m(o, a) {
			m(o, e, a), g(e, r), s || ((n = D(e, 'click', t[1])), (s = !0));
		},
		p(t, r) {
			1 & r && V(e, 'active', t[0] === t[4].name);
		},
		d(t) {
			t && f(e), (s = !1), n();
		}
	};
}
function ht(t) {
	let e, r, s, n, o, a, i, l, u;
	document.title = e = 'SvelteKit UI - ' + t[0];
	let p = lt,
		y = [];
	for (let c = 0; c < p.length; c += 1) y[c] = ut(ct(t, p, c));
	const $ = t[3].default,
		w = I($, t, t[2], null);
	return (
		(l = new it({})),
		{
			c() {
				(r = v()), (s = c('main')), (n = c('nav'));
				for (let t = 0; t < y.length; t += 1) y[t].c();
				(o = v()), (a = c('section')), w && w.c(), (i = v()), x(l.$$.fragment), this.h();
			},
			l(t) {
				K('[data-svelte="svelte-1ygbxhz"]', document.head).forEach(f),
					(r = b(t)),
					(s = h(t, 'MAIN', { class: !0 }));
				var e = d(s);
				n = h(e, 'NAV', { class: !0 });
				var c = d(n);
				for (let r = 0; r < y.length; r += 1) y[r].l(c);
				c.forEach(f), (o = b(e)), (a = h(e, 'SECTION', { class: !0 }));
				var u = d(a);
				w && w.l(u), u.forEach(f), (i = b(e)), q(l.$$.fragment, e), e.forEach(f), this.h();
			},
			h() {
				E(n, 'class', 'svelte-w7x0aa'),
					E(a, 'class', 'svelte-w7x0aa'),
					E(s, 'class', 'svelte-w7x0aa');
			},
			m(t, e) {
				m(t, r, e), m(t, s, e), g(s, n);
				for (let r = 0; r < y.length; r += 1) y[r].m(n, null);
				g(s, o), g(s, a), w && w.m(a, null), g(s, i), k(l, s, null), (u = !0);
			},
			p(t, [r]) {
				if (
					((!u || 1 & r) && e !== (e = 'SvelteKit UI - ' + t[0]) && (document.title = e), 3 & r)
				) {
					let e;
					for (p = lt, e = 0; e < p.length; e += 1) {
						const s = ct(t, p, e);
						y[e] ? y[e].p(s, r) : ((y[e] = ut(s)), y[e].c(), y[e].m(n, null));
					}
					for (; e < y.length; e += 1) y[e].d(1);
					y.length = p.length;
				}
				w && w.p && 4 & r && C(w, $, t, t[2], r, null, null);
			},
			i(t) {
				u || (L(w, t), L(l.$$.fragment, t), (u = !0));
			},
			o(t) {
				O(w, t), O(l.$$.fragment, t), (u = !1);
			},
			d(t) {
				t && f(r), t && f(s), M(y, t), w && w.d(t), P(l);
			}
		}
	);
}
function dt(t, e, r) {
	let { $$slots: s = {}, $$scope: n } = e,
		o = '';
	return (
		(t.$$set = (t) => {
			'$$scope' in t && r(2, (n = t.$$scope));
		}),
		[
			o,
			(t) => {
				r(0, (o = t.srcElement.firstChild.data));
			},
			n,
			s
		]
	);
}
var pt = Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	default: class extends a {
		constructor(t) {
			super(), i(this, t, dt, ht, l, {});
		}
	}
});
const ft = [
		() =>
			nt(() => import('./pages/index.svelte-5b313928.js'), [
				'/_app/pages/index.svelte-5b313928.js',
				'/_app/assets/pages/index.svelte-8a8b585e.css',
				'/_app/chunks/index-a07a4dd8.js',
				'/_app/chunks/index-4e5ad634.js',
				'/_app/chunks/Button-6edc0c58.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/Section-114a1592.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			nt(() => import('./pages/artworks/index.svelte-4f1e0d0e.js'), [
				'/_app/pages/artworks/index.svelte-4f1e0d0e.js',
				'/_app/assets/pages/artworks/index.svelte-8b4c64f7.css',
				'/_app/chunks/index-a07a4dd8.js',
				'/_app/chunks/Button-6edc0c58.js',
				'/_app/assets/Button-d752f774.css',
				'/_app/chunks/Section-114a1592.js',
				'/_app/assets/Section-95823de1.css'
			]),
		() =>
			nt(() => import('./pages/about/index.svelte-2895d9b9.js'), [
				'/_app/pages/about/index.svelte-2895d9b9.js',
				'/_app/assets/pages/about/index.svelte-ff3d7986.css',
				'/_app/chunks/index-a07a4dd8.js',
				'/_app/chunks/Section-114a1592.js',
				'/_app/assets/Section-95823de1.css'
			])
	],
	mt = [
		[/^\/$/, [ft[0]]],
		[/^\/artworks\/?$/, [ft[1]]],
		[/^\/about\/?$/, [ft[2]]]
	];
function gt() {
	return { x: pageXOffset, y: pageYOffset };
}
function yt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class vt {
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
						const t = o(o({}, history.state || {}), { 'sveltekit:scroll': gt() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const r = (t) => {
			const e = yt(t.target);
			e && e.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(e.href));
		};
		let s;
		addEventListener('touchstart', r),
			addEventListener('mousemove', (t) => {
				clearTimeout(s),
					(s = setTimeout(() => {
						r(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const e = yt(t.target);
				if (!e) return;
				if (!e.href) return;
				const r = 'object' == typeof e.href && 'SVGAnimatedString' === e.href.constructor.name,
					s = String(r ? e.href.baseVal : e.href);
				if (s === location.href) return void (location.hash || t.preventDefault());
				if (e.hasAttribute('download') || 'external' === e.getAttribute('rel')) return;
				if (r ? e.target.baseVal : e.target) return;
				const n = new URL(s);
				if (n.pathname === location.pathname && n.search === location.search) return;
				const o = this.parse(n);
				if (o) {
					const r = e.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', n.href),
						this._navigate(o, r ? gt() : null, [], n.hash),
						t.preventDefault();
				}
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href),
						r = this.parse(e);
					r ? this._navigate(r, t.state['sveltekit:scroll'], []) : (location.href = location.href);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(t) {
		if (t.origin !== location.origin) return null;
		if (!t.pathname.startsWith(this.base)) return null;
		const e = t.pathname.slice(this.base.length) || '/',
			r = this.routes.filter(([t]) => t.test(e));
		if (r.length > 0) {
			const s = new URLSearchParams(t.search);
			return { id: `${e}?${s}`, routes: r, path: e, query: s };
		}
	}
	async goto(t, { noscroll: e = !1, replaceState: r = !1 } = {}, s) {
		if (this.enabled) {
			const n = new URL(
					t,
					(function (t) {
						let e = t.baseURI;
						if (!e) {
							const r = t.getElementsByTagName('base');
							e = r.length ? r[0].href : t.URL;
						}
						return e;
					})(document)
				),
				o = this.parse(n);
			if (o)
				return (
					history[r ? 'replaceState' : 'pushState']({}, '', t),
					this._navigate(o, e ? gt() : null, s, n.hash)
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
	async _navigate(t, e, r, s) {
		this.renderer.notify({ path: t.path, query: t.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(t, r),
			document.body.focus();
		const n = s && document.getElementById(s.slice(1));
		e
			? scrollTo(e.x, e.y)
			: n
			? scrollTo(0, n.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function $t(t) {
	if (t.error) {
		const e = 'string' == typeof t.error ? new Error(t.error) : t.error,
			r = t.status;
		return e instanceof Error
			? !r || r < 400 || r > 599
				? (console.warn(
						'"error" returned from load() without a valid status code — defaulting to 500'
				  ),
				  { status: 500, error: e })
				: { status: r, error: e }
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
function bt(t) {
	const e = z(t);
	let r = !0;
	return {
		notify: function () {
			(r = !0), e.update((t) => t);
		},
		set: function (t) {
			(r = !1), e.set(t);
		},
		subscribe: function (t) {
			let s;
			return e.subscribe((e) => {
				(void 0 === s || (r && e !== s)) && t((s = e));
			});
		}
	};
}
function wt(t, n) {
	const o = 'string' == typeof t ? t : t.url,
		a = document.querySelector(`script[type="svelte-data"][url="${o}"]`);
	if (a) {
		const t = JSON.parse(a.textContent),
			{ body: n } = t,
			o = ((t, n) => {
				var o = {};
				for (var a in t) e.call(t, a) && n.indexOf(a) < 0 && (o[a] = t[a]);
				if (null != t && r) for (var a of r(t)) n.indexOf(a) < 0 && s.call(t, a) && (o[a] = t[a]);
				return o;
			})(t, ['body']);
		return Promise.resolve(new Response(n, o));
	}
	return fetch(t, n);
}
class _t {
	constructor({ Root: t, layout: e, target: r, session: s, host: n }) {
		(this.Root = t),
			(this.layout = e),
			(this.host = n),
			(this.router = null),
			(this.target = r),
			(this.started = !1),
			(this.current = { page: null, query: null, session_changed: !1, nodes: [], contexts: [] }),
			(this.caches = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: bt({}), navigating: z(null), session: z(s) }),
			(this.$session = null),
			(this.root = null);
		let o = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !o)) return;
			this.current.session_changed = !0;
			const e = this.router.parse(new URL(location.href));
			this.update(e, []);
		}),
			(o = !0);
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
		const r = (this.token = {}),
			s = await this._get_navigation_result(t);
		if (r !== this.token) return;
		if (s.reload) location.reload();
		else if (s.redirect) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(s.redirect, { replaceState: !0 }, [...e, t.path])
					: (location.href = new URL(s.redirect, location.href).href));
			this.root.$set({ status: 500, error: new Error('Redirect loop') });
		} else
			this.started
				? ((this.current = s.state),
				  this.root.$set(s.props),
				  this.stores.navigating.set(null),
				  await 0)
				: this._init(s);
		dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null);
		!1 === s.state.nodes[s.state.nodes.length - 1].module.router
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
			const r = t.routes[e],
				[s, n, o] = r;
			if (1 === r.length) return { reload: !0 };
			let a = e + 1;
			for (; a < t.routes.length; ) {
				const e = t.routes[a];
				if (e[0].toString() !== s.toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (a += 1);
			}
			const i = n.map((t) => t()),
				l = {
					host: this.host,
					path: t.path,
					params: o ? o(r[0].exec(t.path)) : {},
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
				props: o({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _load({ status: t, error: e, nodes: r, page: s }) {
		const n = s.query.toString(),
			a = {
				state: { page: s, query: n, session_changed: !1, nodes: [], contexts: [] },
				props: { status: t, error: e, components: [] }
			},
			i = {
				params: Object.keys(s.params).filter(
					(t) => !this.current.page || this.current.page.params[t] !== s.params[t]
				),
				query: n !== this.current.query,
				session: this.current.session_changed,
				context: !1
			};
		try {
			const t = [this.layout, ...r],
				l = [];
			let c;
			for (let r = 0; r < t.length; r += 1) {
				const u = this.current.nodes[r],
					h = this.current.contexts[r],
					d = await t[r];
				if (((a.props.components[r] = d.default), d.preload))
					throw new Error(
						'preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading'
					);
				if (
					!u ||
					d !== u.module ||
					i.params.some((t) => u.uses.params.has(t)) ||
					(i.query && u.uses.query) ||
					(i.session && u.uses.session) ||
					(i.context && u.uses.context)
				) {
					const u = s.path + n,
						h = this.caches.get(d),
						p = h && h.get(u);
					let f, m;
					if (!p || (i.context && p.node.uses.context)) {
						f = { module: d, uses: { params: new Set(), query: !1, session: !1, context: !1 } };
						const n = {};
						for (const t in s.params)
							Object.defineProperty(n, t, {
								get: () => (f.uses.params.add(t), s.params[t]),
								enumerable: !0
							});
						const a = this.$session;
						if (d.load) {
							m = await d.load.call(null, {
								page: {
									host: s.host,
									path: s.path,
									params: n,
									get query() {
										return (f.uses.query = !0), s.query;
									}
								},
								get session() {
									return (f.uses.session = !0), a;
								},
								get context() {
									return (f.uses.context = !0), o({}, c);
								},
								fetch: this.started ? fetch : wt
							});
							const i = r === t.length - 1 && !e;
							if (!m && i) return;
						}
					} else ({ node: f, loaded: m } = p);
					if (m) {
						if (((m = $t(m)), m.error)) {
							if (e) throw e;
							return await this._load({
								status: m.status || 500,
								error: m.error,
								nodes: [],
								page: { host: s.host, path: s.path, query: s.query, params: {} }
							});
						}
						if (m.redirect) return { redirect: m.redirect };
						if ((m.context && ((i.context = !0), (c = o(o({}, c), m.context))), m.maxage)) {
							this.caches.has(d) || this.caches.set(d, new Map());
							const t = this.caches.get(d),
								e = { node: f, loaded: m };
							t.set(u, e);
							let r = !1;
							const s = setTimeout(() => {
									n();
								}, 1e3 * m.maxage),
								n = () => {
									t.get(u) === e && t.delete(u), o(), clearTimeout(s);
								},
								o = this.stores.session.subscribe(() => {
									r && n();
								});
							r = !0;
						}
						l[r] = m.props;
					}
					(a.state.nodes[r] = f), (a.state.contexts[r] = c);
				} else (a.state.nodes[r] = u), (a.state.contexts[r] = c = h);
			}
			return (
				(await Promise.all(l)).forEach((t, e) => {
					t && (a.props[`props_${e}`] = t);
				}),
				(this.current.page && s.path === this.current.page.path && !i.query) || (a.props.page = s),
				a
			);
		} catch (l) {
			if (e) throw e;
			return await this._load({
				status: 500,
				error: l,
				nodes: [],
				page: { host: s.host, path: s.path, query: s.query, params: {} }
			});
		}
	}
}
async function Et({ paths: t, target: e, session: r, host: s, route: n, hydrate: o }) {
	const a = n && new vt({ base: t.base, routes: mt }),
		i = new _t({ Root: et, layout: pt, target: e, session: r, host: s });
	o && (await i.start(o)), n && a.init(i), dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Et as start };
