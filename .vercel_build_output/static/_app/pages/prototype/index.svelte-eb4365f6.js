import {
	S as t,
	i as e,
	s as r,
	k as s,
	f as i,
	C as a,
	x as o,
	D as n,
	w as c,
	d as l,
	M as u,
	e as m,
	c as d,
	a as $,
	o as p,
	I as f,
	O as h,
	p as g,
	j as v,
	q as x,
	l as b,
	r as E,
	y as q,
	n as y,
	E as L,
	g as w,
	t as V,
	b as D
} from '../../chunks/index-d91e1ed8.js';
import { C as j, c as I, G } from '../../chunks/Cover-12fb2afa.js';
import { S as k } from '../../chunks/Section-b530c020.js';
import { T as z } from '../../chunks/TabHeaders-cad36516.js';
function H(t) {
	let e, r, s;
	const a = t[4].default,
		n = u(a, t, t[3], null);
	return {
		c() {
			(e = m('ol')), n && n.c(), this.h();
		},
		l(t) {
			e = d(t, 'OL', { class: !0 });
			var r = $(e);
			n && n.l(r), r.forEach(l), this.h();
		},
		h() {
			p(e, 'class', (r = f(t[2][t[1]]) + ' svelte-j157ue'));
		},
		m(t, r) {
			i(t, e, r), n && n.m(e, null), (s = !0);
		},
		p(t, i) {
			n && n.p && 8 & i && h(n, a, t, t[3], i, null, null),
				(!s || (2 & i && r !== (r = f(t[2][t[1]]) + ' svelte-j157ue'))) && p(e, 'class', r);
		},
		i(t) {
			s || (c(n, t), (s = !0));
		},
		o(t) {
			o(n, t), (s = !1);
		},
		d(t) {
			t && l(e), n && n.d(t);
		}
	};
}
function S(t) {
	let e, r, s;
	const a = t[4].default,
		n = u(a, t, t[3], null);
	return {
		c() {
			(e = m('dl')), n && n.c(), this.h();
		},
		l(t) {
			e = d(t, 'DL', { class: !0 });
			var r = $(e);
			n && n.l(r), r.forEach(l), this.h();
		},
		h() {
			p(e, 'class', (r = f(t[2][t[1]]) + ' svelte-j157ue'));
		},
		m(t, r) {
			i(t, e, r), n && n.m(e, null), (s = !0);
		},
		p(t, i) {
			n && n.p && 8 & i && h(n, a, t, t[3], i, null, null),
				(!s || (2 & i && r !== (r = f(t[2][t[1]]) + ' svelte-j157ue'))) && p(e, 'class', r);
		},
		i(t) {
			s || (c(n, t), (s = !0));
		},
		o(t) {
			o(n, t), (s = !1);
		},
		d(t) {
			t && l(e), n && n.d(t);
		}
	};
}
function C(t) {
	let e, r, s;
	const a = t[4].default,
		n = u(a, t, t[3], null);
	return {
		c() {
			(e = m('ul')), n && n.c(), this.h();
		},
		l(t) {
			e = d(t, 'UL', { class: !0 });
			var r = $(e);
			n && n.l(r), r.forEach(l), this.h();
		},
		h() {
			p(e, 'class', (r = f(t[2][t[1]]) + ' svelte-j157ue'));
		},
		m(t, r) {
			i(t, e, r), n && n.m(e, null), (s = !0);
		},
		p(t, i) {
			n && n.p && 8 & i && h(n, a, t, t[3], i, null, null),
				(!s || (2 & i && r !== (r = f(t[2][t[1]]) + ' svelte-j157ue'))) && p(e, 'class', r);
		},
		i(t) {
			s || (c(n, t), (s = !0));
		},
		o(t) {
			o(n, t), (s = !1);
		},
		d(t) {
			t && l(e), n && n.d(t);
		}
	};
}
function P(t) {
	let e, r, u, m;
	const d = [C, S, H],
		$ = [];
	function p(t, e) {
		return 0 === t[0] ? 0 : 1 === t[0] ? 1 : 2;
	}
	return (
		(e = p(t)),
		(r = $[e] = d[e](t)),
		{
			c() {
				r.c(), (u = s());
			},
			l(t) {
				r.l(t), (u = s());
			},
			m(t, r) {
				$[e].m(t, r), i(t, u, r), (m = !0);
			},
			p(t, [s]) {
				let i = e;
				(e = p(t)),
					e === i
						? $[e].p(t, s)
						: (a(),
						  o($[i], 1, 1, () => {
								$[i] = null;
						  }),
						  n(),
						  (r = $[e]),
						  r ? r.p(t, s) : ((r = $[e] = d[e](t)), r.c()),
						  c(r, 1),
						  r.m(u.parentNode, u));
			},
			i(t) {
				m || (c(r), (m = !0));
			},
			o(t) {
				o(r), (m = !1);
			},
			d(t) {
				$[e].d(t), t && l(u);
			}
		}
	);
}
function M(t, e, r) {
	let { $$slots: s = {}, $$scope: i } = e,
		{ tipo: a = 'dl' } = e,
		{ variante: o = 0 } = e;
	return (
		(t.$$set = (t) => {
			'tipo' in t && r(0, (a = t.tipo)),
				'variante' in t && r(1, (o = t.variante)),
				'$$scope' in t && r(3, (i = t.$$scope));
		}),
		[a, o, ['List_0', 'List_1', 'List_2'], i, s]
	);
}
class _ extends t {
	constructor(t) {
		super(), e(this, t, M, P, r, { tipo: 0, variante: 1 });
	}
}
function T(t) {
	let e, r;
	return (
		(e = new j({
			props: { variante: 1, title: I[4].title, subtitle: I[4].subtitle, text: I[4].text }
		})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (r = !0);
			},
			p: y,
			i(t) {
				r || (c(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				o(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function O(t) {
	let e, r, s, a, o, n, c, u, m, f, h, g;
	return {
		c() {
			(e = L('svg')),
				(r = L('path')),
				(s = L('circle')),
				(a = L('circle')),
				(o = L('circle')),
				(n = L('circle')),
				(c = L('circle')),
				(u = L('circle')),
				(m = L('circle')),
				(f = L('circle')),
				(h = L('circle')),
				(g = L('circle')),
				this.h();
		},
		l(t) {
			e = d(t, 'svg', { 'fill-rule': !0, 'clip-rule': !0, viewBox: !0 }, 1);
			var i = $(e);
			(r = d(i, 'path', { fill: !0, stroke: !0, 'stroke-width': !0, d: !0 }, 1)),
				$(r).forEach(l),
				(s = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(s).forEach(l),
				(a = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(a).forEach(l),
				(o = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(o).forEach(l),
				(n = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(n).forEach(l),
				(c = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(c).forEach(l),
				(u = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(u).forEach(l),
				(m = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(m).forEach(l),
				(f = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(f).forEach(l),
				(h = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(h).forEach(l),
				(g = d(i, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				$(g).forEach(l),
				i.forEach(l),
				this.h();
		},
		h() {
			p(r, 'fill', 'none'),
				p(r, 'stroke', '#000'),
				p(r, 'stroke-width', '.7'),
				p(
					r,
					'd',
					'M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30 53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z'
				),
				p(s, 'cx', '168.3'),
				p(s, 'cy', '18.1'),
				p(s, 'r', '6'),
				p(s, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(a, 'cx', '214.1'),
				p(a, 'cy', '98.5'),
				p(a, 'r', '6'),
				p(a, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(o, 'cx', '259.9'),
				p(o, 'cy', '178.2'),
				p(o, 'r', '6'),
				p(o, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(n, 'cx', '305.7'),
				p(n, 'cy', '257.8'),
				p(n, 'r', '6'),
				p(n, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(c, 'cx', '214.1'),
				p(c, 'cy', '257.8'),
				p(c, 'r', '6'),
				p(c, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(u, 'cx', '123.2'),
				p(u, 'cy', '257.8'),
				p(u, 'r', '6'),
				p(u, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(m, 'cx', '30.8'),
				p(m, 'cy', '257.8'),
				p(m, 'r', '6'),
				p(m, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(f, 'cx', '76.9'),
				p(f, 'cy', '178.2'),
				p(f, 'r', '6'),
				p(f, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(h, 'cx', '168.3'),
				p(h, 'cy', '178.2'),
				p(h, 'r', '6'),
				p(h, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(g, 'cx', '123.2'),
				p(g, 'cy', '98.5'),
				p(g, 'r', '6'),
				p(g, 'transform', 'translate(-17 -8) scale(.67024)'),
				p(e, 'fill-rule', 'evenodd'),
				p(e, 'clip-rule', 'evenodd'),
				p(e, 'viewBox', '0 0 193 169');
		},
		m(t, l) {
			i(t, e, l),
				w(e, r),
				w(e, s),
				w(e, a),
				w(e, o),
				w(e, n),
				w(e, c),
				w(e, u),
				w(e, m),
				w(e, f),
				w(e, h),
				w(e, g);
		},
		d(t) {
			t && l(e);
		}
	};
}
function R(t) {
	let e, r, s, a, o, n, c, u;
	return {
		c() {
			(e = m('li')),
				(r = V('Simple, ligero, limpio y claro.')),
				(s = v()),
				(a = m('li')),
				(o = V('Completo, funcional, versátil y ordenado.')),
				(n = v()),
				(c = m('li')),
				(u = V('etc...'));
		},
		l(t) {
			e = d(t, 'LI', {});
			var i = $(e);
			(r = D(i, 'Simple, ligero, limpio y claro.')), i.forEach(l), (s = b(t)), (a = d(t, 'LI', {}));
			var m = $(a);
			(o = D(m, 'Completo, funcional, versátil y ordenado.')),
				m.forEach(l),
				(n = b(t)),
				(c = d(t, 'LI', {}));
			var p = $(c);
			(u = D(p, 'etc...')), p.forEach(l);
		},
		m(t, l) {
			i(t, e, l), w(e, r), i(t, s, l), i(t, a, l), w(a, o), i(t, n, l), i(t, c, l), w(c, u);
		},
		d(t) {
			t && l(e), t && l(s), t && l(a), t && l(n), t && l(c);
		}
	};
}
function N(t) {
	let e, r, s, a, n, u;
	return (
		(n = new _({
			props: { tipo: 0, variante: 0, $$slots: { default: [R] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = m('hgroup')),
					(r = m('h2')),
					(s = V('El prototipo de mis sueños')),
					(a = v()),
					g(n.$$.fragment),
					this.h();
			},
			l(t) {
				e = d(t, 'HGROUP', { slot: !0 });
				var i = $(e);
				r = d(i, 'H2', {});
				var o = $(r);
				(s = D(o, 'El prototipo de mis sueños')),
					o.forEach(l),
					(a = b(i)),
					x(n.$$.fragment, i),
					i.forEach(l),
					this.h();
			},
			h() {
				p(e, 'slot', 'subarea1');
			},
			m(t, o) {
				i(t, e, o), w(e, r), w(r, s), w(e, a), E(n, e, null), (u = !0);
			},
			p(t, e) {
				const r = {};
				1 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
			},
			i(t) {
				u || (c(n.$$.fragment, t), (u = !0));
			},
			o(t) {
				o(n.$$.fragment, t), (u = !1);
			},
			d(t) {
				t && l(e), q(n);
			}
		}
	);
}
function A(t) {
	let e, r, s;
	return {
		c() {
			(e = m('nav')), (r = m('a')), (s = V('Repositorio en Github')), this.h();
		},
		l(t) {
			e = d(t, 'NAV', { slot: !0 });
			var i = $(e);
			r = d(i, 'A', { href: !0, target: !0 });
			var a = $(r);
			(s = D(a, 'Repositorio en Github')), a.forEach(l), i.forEach(l), this.h();
		},
		h() {
			p(r, 'href', 'https://github.com/t0t/sveltekit'),
				p(r, 'target', '_blank'),
				p(e, 'slot', 'subarea2');
		},
		m(t, a) {
			i(t, e, a), w(e, r), w(r, s);
		},
		d(t) {
			t && l(e);
		}
	};
}
function B(t) {
	let e, r;
	return (
		(e = new G({
			props: {
				variante: 1,
				$$slots: { subarea2: [A], subarea1: [N], default: [O] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (r = !0);
			},
			p(t, r) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
			},
			i(t) {
				r || (c(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				o(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function U(t) {
	let e, r;
	return {
		c() {
			(e = m('img')), this.h();
		},
		l(t) {
			(e = d(t, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			e.src !== (r = './img/logo.svg') && p(e, 'src', './img/logo.svg'), p(e, 'alt', '');
		},
		m(t, r) {
			i(t, e, r);
		},
		d(t) {
			t && l(e);
		}
	};
}
function F(t) {
	let e, r, s, a, o, n, c, u, p, f, h, g, x, E;
	return {
		c() {
			(e = m('dt')),
				(r = V('Control de versiones')),
				(s = v()),
				(a = m('dd')),
				(o = V(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos.'
				)),
				(n = v()),
				(c = m('dd')),
				(u = V('sdfsd')),
				(p = v()),
				(f = m('dt')),
				(h = V('Encapsulamiento holístico')),
				(g = v()),
				(x = m('dd')),
				(E = V(
					'Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
				));
		},
		l(t) {
			e = d(t, 'DT', {});
			var i = $(e);
			(r = D(i, 'Control de versiones')), i.forEach(l), (s = b(t)), (a = d(t, 'DD', {}));
			var m = $(a);
			(o = D(
				m,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos.'
			)),
				m.forEach(l),
				(n = b(t)),
				(c = d(t, 'DD', {}));
			var v = $(c);
			(u = D(v, 'sdfsd')), v.forEach(l), (p = b(t)), (f = d(t, 'DT', {}));
			var q = $(f);
			(h = D(q, 'Encapsulamiento holístico')), q.forEach(l), (g = b(t)), (x = d(t, 'DD', {}));
			var y = $(x);
			(E = D(
				y,
				'Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
			)),
				y.forEach(l);
		},
		m(t, l) {
			i(t, e, l),
				w(e, r),
				i(t, s, l),
				i(t, a, l),
				w(a, o),
				i(t, n, l),
				i(t, c, l),
				w(c, u),
				i(t, p, l),
				i(t, f, l),
				w(f, h),
				i(t, g, l),
				i(t, x, l),
				w(x, E);
		},
		d(t) {
			t && l(e),
				t && l(s),
				t && l(a),
				t && l(n),
				t && l(c),
				t && l(p),
				t && l(f),
				t && l(g),
				t && l(x);
		}
	};
}
function J(t) {
	let e, r, s, a, n, u;
	return (
		(n = new _({
			props: { tipo: 1, variante: 0, $$slots: { default: [F] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				(e = m('div')), (r = m('h2')), (s = V('+0+124')), (a = v()), g(n.$$.fragment), this.h();
			},
			l(t) {
				e = d(t, 'DIV', { slot: !0 });
				var i = $(e);
				r = d(i, 'H2', {});
				var o = $(r);
				(s = D(o, '+0+124')), o.forEach(l), (a = b(i)), x(n.$$.fragment, i), i.forEach(l), this.h();
			},
			h() {
				p(e, 'slot', 'subarea1');
			},
			m(t, o) {
				i(t, e, o), w(e, r), w(r, s), w(e, a), E(n, e, null), (u = !0);
			},
			p(t, e) {
				const r = {};
				1 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
			},
			i(t) {
				u || (c(n.$$.fragment, t), (u = !0));
			},
			o(t) {
				o(n.$$.fragment, t), (u = !1);
			},
			d(t) {
				t && l(e), q(n);
			}
		}
	);
}
function K(t) {
	let e;
	return {
		c() {
			(e = m('div')), this.h();
		},
		l(t) {
			(e = d(t, 'DIV', { slot: !0 })), $(e).forEach(l), this.h();
		},
		h() {
			p(e, 'slot', 'subarea2');
		},
		m(t, r) {
			i(t, e, r);
		},
		d(t) {
			t && l(e);
		}
	};
}
function Q(t) {
	let e, r;
	return (
		(e = new G({
			props: {
				variante: 0,
				$$slots: { subarea2: [K], subarea1: [J], default: [U] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (r = !0);
			},
			p(t, r) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
			},
			i(t) {
				r || (c(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				o(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function W(t) {
	let e, r;
	return {
		c() {
			(e = m('img')), this.h();
		},
		l(t) {
			(e = d(t, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			e.src !== (r = './img/01234_bn.svg') && p(e, 'src', './img/01234_bn.svg'), p(e, 'alt', '');
		},
		m(t, r) {
			i(t, e, r);
		},
		d(t) {
			t && l(e);
		}
	};
}
function X(t) {
	let e, r, s;
	return {
		c() {
			(e = m('div')),
				(r = m('p')),
				(s = V(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { slot: !0 });
			var i = $(e);
			r = d(i, 'P', {});
			var a = $(r);
			(s = D(
				a,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				a.forEach(l),
				i.forEach(l),
				this.h();
		},
		h() {
			p(e, 'slot', 'subarea1');
		},
		m(t, a) {
			i(t, e, a), w(e, r), w(r, s);
		},
		d(t) {
			t && l(e);
		}
	};
}
function Y(t) {
	let e, r, s, a, o, n;
	return {
		c() {
			(e = m('div')),
				(r = m('p')),
				(s = V(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				(a = v()),
				(o = m('p')),
				(n = V(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { slot: !0 });
			var i = $(e);
			r = d(i, 'P', {});
			var c = $(r);
			(s = D(
				c,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				c.forEach(l),
				(a = b(i)),
				(o = d(i, 'P', {}));
			var u = $(o);
			(n = D(
				u,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				u.forEach(l),
				i.forEach(l),
				this.h();
		},
		h() {
			p(e, 'slot', 'subarea2');
		},
		m(t, c) {
			i(t, e, c), w(e, r), w(r, s), w(e, a), w(e, o), w(o, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function Z(t) {
	let e, r;
	return (
		(e = new G({
			props: {
				variante: 2,
				$$slots: { subarea2: [Y], subarea1: [X], default: [W] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (r = !0);
			},
			p(t, r) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
			},
			i(t) {
				r || (c(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				o(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function tt(t) {
	let e, r;
	return {
		c() {
			(e = m('img')), this.h();
		},
		l(t) {
			(e = d(t, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			e.src !== (r = './img/grafico-8.svg') && p(e, 'src', './img/grafico-8.svg'), p(e, 'alt', '');
		},
		m(t, r) {
			i(t, e, r);
		},
		d(t) {
			t && l(e);
		}
	};
}
function et(t) {
	let e, r, s, a;
	return {
		c() {
			(e = m('div')),
				(r = m('p')),
				(s = m('strong')),
				(a = V(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { slot: !0 });
			var i = $(e);
			r = d(i, 'P', {});
			var o = $(r);
			s = d(o, 'STRONG', {});
			var n = $(s);
			(a = D(
				n,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				n.forEach(l),
				o.forEach(l),
				i.forEach(l),
				this.h();
		},
		h() {
			p(e, 'slot', 'subarea1');
		},
		m(t, o) {
			i(t, e, o), w(e, r), w(r, s), w(s, a);
		},
		d(t) {
			t && l(e);
		}
	};
}
function rt(t) {
	let e, r, s, a, o, n;
	return {
		c() {
			(e = m('div')),
				(r = m('p')),
				(s = V(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				(a = v()),
				(o = m('p')),
				(n = V(
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
				)),
				this.h();
		},
		l(t) {
			e = d(t, 'DIV', { slot: !0 });
			var i = $(e);
			r = d(i, 'P', {});
			var c = $(r);
			(s = D(
				c,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				c.forEach(l),
				(a = b(i)),
				(o = d(i, 'P', {}));
			var u = $(o);
			(n = D(
				u,
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.'
			)),
				u.forEach(l),
				i.forEach(l),
				this.h();
		},
		h() {
			p(e, 'slot', 'subarea2');
		},
		m(t, c) {
			i(t, e, c), w(e, r), w(r, s), w(e, a), w(e, o), w(o, n);
		},
		d(t) {
			t && l(e);
		}
	};
}
function st(t) {
	let e, r;
	return (
		(e = new G({
			props: {
				variante: 2,
				$$slots: { subarea2: [rt], subarea1: [et], default: [tt] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (r = !0);
			},
			p(t, r) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
			},
			i(t) {
				r || (c(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				o(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function it(t) {
	let e, r;
	return (
		(e = new z({})),
		{
			c() {
				g(e.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t);
			},
			m(t, s) {
				E(e, t, s), (r = !0);
			},
			i(t) {
				r || (c(e.$$.fragment, t), (r = !0));
			},
			o(t) {
				o(e.$$.fragment, t), (r = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function at(t) {
	let e, r, s, a, n, u, m, d, $, p, f, h;
	return (
		(e = new k({
			props: { id: 'cover', variante: 3, $$slots: { default: [T] }, $$scope: { ctx: t } }
		})),
		(s = new k({ props: { variante: 0, $$slots: { default: [B] }, $$scope: { ctx: t } } })),
		(n = new k({ props: { variante: 0, $$slots: { default: [Q] }, $$scope: { ctx: t } } })),
		(m = new k({ props: { variante: 0, $$slots: { default: [Z] }, $$scope: { ctx: t } } })),
		($ = new k({ props: { variante: 4, $$slots: { default: [st] }, $$scope: { ctx: t } } })),
		(f = new k({
			props: { id: 'tabheaders', variante: 5, $$slots: { default: [it] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				g(e.$$.fragment),
					(r = v()),
					g(s.$$.fragment),
					(a = v()),
					g(n.$$.fragment),
					(u = v()),
					g(m.$$.fragment),
					(d = v()),
					g($.$$.fragment),
					(p = v()),
					g(f.$$.fragment);
			},
			l(t) {
				x(e.$$.fragment, t),
					(r = b(t)),
					x(s.$$.fragment, t),
					(a = b(t)),
					x(n.$$.fragment, t),
					(u = b(t)),
					x(m.$$.fragment, t),
					(d = b(t)),
					x($.$$.fragment, t),
					(p = b(t)),
					x(f.$$.fragment, t);
			},
			m(t, o) {
				E(e, t, o),
					i(t, r, o),
					E(s, t, o),
					i(t, a, o),
					E(n, t, o),
					i(t, u, o),
					E(m, t, o),
					i(t, d, o),
					E($, t, o),
					i(t, p, o),
					E(f, t, o),
					(h = !0);
			},
			p(t, [r]) {
				const i = {};
				1 & r && (i.$$scope = { dirty: r, ctx: t }), e.$set(i);
				const a = {};
				1 & r && (a.$$scope = { dirty: r, ctx: t }), s.$set(a);
				const o = {};
				1 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
				const c = {};
				1 & r && (c.$$scope = { dirty: r, ctx: t }), m.$set(c);
				const l = {};
				1 & r && (l.$$scope = { dirty: r, ctx: t }), $.$set(l);
				const u = {};
				1 & r && (u.$$scope = { dirty: r, ctx: t }), f.$set(u);
			},
			i(t) {
				h ||
					(c(e.$$.fragment, t),
					c(s.$$.fragment, t),
					c(n.$$.fragment, t),
					c(m.$$.fragment, t),
					c($.$$.fragment, t),
					c(f.$$.fragment, t),
					(h = !0));
			},
			o(t) {
				o(e.$$.fragment, t),
					o(s.$$.fragment, t),
					o(n.$$.fragment, t),
					o(m.$$.fragment, t),
					o($.$$.fragment, t),
					o(f.$$.fragment, t),
					(h = !1);
			},
			d(t) {
				q(e, t),
					t && l(r),
					q(s, t),
					t && l(a),
					q(n, t),
					t && l(u),
					q(m, t),
					t && l(d),
					q($, t),
					t && l(p),
					q(f, t);
			}
		}
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, null, at, r, {});
	}
}
