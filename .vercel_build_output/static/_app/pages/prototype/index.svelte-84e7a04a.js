import {
	S as e,
	i as t,
	s as a,
	e as n,
	t as r,
	c as s,
	a as o,
	b as $,
	d as i,
	o as l,
	f as c,
	g as m,
	h as p,
	n as f,
	B as d,
	p as u,
	j as g,
	q as h,
	l as v,
	r as b,
	w as x,
	x as y,
	y as w
} from '../../chunks/index-d91e1ed8.js';
import { c as E, B as j } from '../../chunks/Grid.svelte-8e9d6b69.js';
import { T as S, t as k } from '../../chunks/Tabs-13be91e6.js';
import { S as D, H as I } from '../../chunks/Header-8a27feeb.js';
import { G as C } from '../../chunks/Grid-c3d7f00f.js';
import { L as _, a as H } from '../../chunks/ListItem-d0f4c833.js';
import '../../chunks/Img-f6fb9871.js';
/* empty css                               */ /* empty css                                   */ const P = [
	{
		language: 'scss',
		text:
			'\n// _variables.scss\n$h2: 1.618rem; $h1: 1rem; $h0: 0.618rem; $h-1: 0.382rem;\n// _fonts.scss\n$size-scales: ( -2: $h-1, -1: $h0, 0: $h1, 1: $h2 );\n\n@function font-scale( $level ) {\n    @return map-get( $size-scales, $level );\n}\n\n@mixin type-setting( $level: 0 ) {\n    font-size: font-scale( $level );\n}\n// index.svelte\nh1 {\n    @include type-setting(1);\n}\n'
	},
	{
		language: 'javascript',
		text:
			'\n// Componente hijo\n<script>\n    export let tipo = 0; export let variante = 0;\n    const modificador = [ "Header_0", "Header_1", "..." ]\n</script>\n<style>\n    .Header_0 { background-color: $grey_2; }\n</style>\n{#if tipo === 0}\n    <h1 class={modificador[variante]}><slot /></h1>\n{/if}\n\n// Componente padre\n<script> import Header from \'$lib/Header.svelte\'; </script>\n<Header tipo={0} variante={1}\n        title={coverData[4].title}\n        subtitle={coverData[4].subtitle} />\n'
	},
	{
		language: 'markup',
		text:
			"\n\x3c!-- Con la orden 'git push' nuestro prototipo\nviaja mágicamente por la red hasta su repositorio \ny también se despliega en producción. --\x3e\n> git push\n\n\x3c!-- Hot reloading, preprocesado, todo lo que\nun entorno moderno de desarrollo necesita --\x3e\n> npm i\n> npm run dev\n> npm run build\n"
	}
];
function q(e) {
	let t, a, d, u;
	return {
		c() {
			(t = n('pre')), (a = n('code')), (d = r(e[1])), this.h();
		},
		l(n) {
			t = s(n, 'PRE', { class: !0 });
			var r = o(t);
			a = s(r, 'CODE', { class: !0 });
			var l = o(a);
			(d = $(l, e[1])), l.forEach(i), r.forEach(i), this.h();
		},
		h() {
			l(a, 'class', (u = 'language-' + e[0] + ' svelte-1otfplt')), l(t, 'class', 'svelte-1otfplt');
		},
		m(e, n) {
			c(e, t, n), m(t, a), m(a, d);
		},
		p(e, [t]) {
			2 & t && p(d, e[1]),
				1 & t && u !== (u = 'language-' + e[0] + ' svelte-1otfplt') && l(a, 'class', u);
		},
		i: f,
		o: f,
		d(e) {
			e && i(t);
		}
	};
}
function z(e, t, a) {
	let { language: n } = t,
		{ code: r } = t;
	return (
		d(() => {
			let e = document.createElement('script');
			(e.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'),
				document.head.append(e),
				(e.onload = function () {
					let e,
						t,
						a = !1;
					switch (n) {
						case 'json':
							(t = 'https://prismjs.com/components/prism-json.js'), (a = !0);
							break;
						case 'python':
							(t = 'https://prismjs.com/components/prism-python.js'), (a = !0);
							break;
						case 'r':
							(t = 'https://prismjs.com/components/prism-r.js'), (a = !0);
					}
					1 == a
						? ((e = document.createElement('script')),
						  (e.src = t),
						  (e.async = !0),
						  document.head.append(e),
						  (e.onload = () => {
								Prism.highlightAll();
						  }))
						: Prism.highlightAll();
				});
		}),
		(e.$$set = (e) => {
			'language' in e && a(0, (n = e.language)), 'code' in e && a(1, (r = e.code));
		}),
		[n, r]
	);
}
class G extends e {
	constructor(e) {
		super(), t(this, e, z, q, a, { language: 0, code: 1 });
	}
}
function L(e) {
	let t, a;
	return (
		(t = new I({ props: { tipo: 2, variante: 1, title: E[4].title, subtitle: E[4].subtitle } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: f,
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function V(e) {
	let t, a;
	return (
		(t = new G({ props: { language: P[1].language, code: P[1].text } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: f,
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function T(e) {
	let t, a, r;
	return (
		(a = new I({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'Svelte Kit',
				subtitle: 'El mejor hábitat para CSS, HTML y JS'
			}
		})),
		{
			c() {
				(t = n('div')), u(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), (r = !0);
			},
			p: f,
			i(e) {
				r || (x(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && i(t), w(a);
			}
		}
	);
}
function A(e) {
	let t, a, p, f, d, u, h, b, x;
	return {
		c() {
			(t = n('div')),
				(a = n('p')),
				(p = r(
					'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
				(f = g()),
				(d = n('p')),
				(u = r('Su simplicidad y belleza saltan a la vista. ')),
				(h = n('strong')),
				(b = r('Encapsulamiento holístico:')),
				(x = r(
					' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
				)),
				this.h();
		},
		l(e) {
			t = s(e, 'DIV', { slot: !0 });
			var n = o(t);
			a = s(n, 'P', {});
			var r = o(a);
			(p = $(
				r,
				'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
			)),
				r.forEach(i),
				(f = v(n)),
				(d = s(n, 'P', {}));
			var l = o(d);
			(u = $(l, 'Su simplicidad y belleza saltan a la vista. ')), (h = s(l, 'STRONG', {}));
			var c = o(h);
			(b = $(c, 'Encapsulamiento holístico:')),
				c.forEach(i),
				(x = $(
					l,
					' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
				)),
				l.forEach(i),
				n.forEach(i),
				this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, n) {
			c(e, t, n), m(t, a), m(a, p), m(t, f), m(t, d), m(d, u), m(d, h), m(h, b), m(d, x);
		},
		d(e) {
			e && i(t);
		}
	};
}
function R(e) {
	let t, a;
	return (
		(t = new C({
			props: {
				variante: 2,
				$$slots: { subarea2: [A], subarea1: [T], default: [V] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
			},
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function U(e) {
	let t, a;
	return (
		(t = new G({ props: { language: P[0].language, code: P[0].text } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: f,
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function B(e) {
	let t, a, r;
	return (
		(a = new I({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'SCSS',
				subtitle: 'Diseño y prototipado al más bajo nivel'
			}
		})),
		{
			c() {
				(t = n('div')), u(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), (r = !0);
			},
			p: f,
			i(e) {
				r || (x(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && i(t), w(a);
			}
		}
	);
}
function M(e) {
	let t, a, p, f, d, u;
	return {
		c() {
			(t = n('div')),
				(a = n('p')),
				(p = r(
					'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
				)),
				(f = g()),
				(d = n('p')),
				(u = r(
					'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
				)),
				this.h();
		},
		l(e) {
			t = s(e, 'DIV', { slot: !0 });
			var n = o(t);
			a = s(n, 'P', {});
			var r = o(a);
			(p = $(
				r,
				'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
			)),
				r.forEach(i),
				(f = v(n)),
				(d = s(n, 'P', {}));
			var l = o(d);
			(u = $(
				l,
				'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
			)),
				l.forEach(i),
				n.forEach(i),
				this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, n) {
			c(e, t, n), m(t, a), m(a, p), m(t, f), m(t, d), m(d, u);
		},
		d(e) {
			e && i(t);
		}
	};
}
function N(e) {
	let t, a;
	return (
		(t = new C({
			props: {
				variante: 0,
				$$slots: { subarea2: [M], subarea1: [B], default: [U] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
			},
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function O(e) {
	let t, a;
	return (
		(t = new G({ props: { language: P[2].language, code: P[2].text } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: f,
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function J(e) {
	let t, a, l, p, f;
	return {
		c() {
			(t = n('dt')),
				(a = r('Control de versiones')),
				(l = g()),
				(p = n('dd')),
				(f = r(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = s(e, 'DT', {});
			var n = o(t);
			(a = $(n, 'Control de versiones')), n.forEach(i), (l = v(e)), (p = s(e, 'DD', {}));
			var r = o(p);
			(f = $(
				r,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
			)),
				r.forEach(i);
		},
		m(e, n) {
			c(e, t, n), m(t, a), c(e, l, n), c(e, p, n), m(p, f);
		},
		d(e) {
			e && i(t), e && i(l), e && i(p);
		}
	};
}
function K(e) {
	let t, a, r;
	return (
		(a = new _({
			props: { tipo: 2, variante: 0, $$slots: { default: [J] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = n('div')), u(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), (r = !0);
			},
			p(e, t) {
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
			},
			i(e) {
				r || (x(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && i(t), w(a);
			}
		}
	);
}
function F(e) {
	let t;
	return {
		c() {
			(t = n('div')), this.h();
		},
		l(e) {
			(t = s(e, 'DIV', { slot: !0 })), o(t).forEach(i), this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function Q(e) {
	let t, a;
	return (
		(t = new C({
			props: {
				variante: 1,
				$$slots: { subarea2: [F], subarea1: [K], default: [O] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
			},
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function W(e) {
	let t, a;
	return {
		c() {
			(t = n('img')), this.h();
		},
		l(e) {
			(t = s(e, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			t.src !== (a = './img/grafico-11.svg') && l(t, 'src', './img/grafico-11.svg'),
				l(t, 'alt', '');
		},
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function X(e) {
	let t;
	return {
		c() {
			t = r('Simple, ligero, limpio y claro.');
		},
		l(e) {
			t = $(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function Y(e) {
	let t;
	return {
		c() {
			t = r('Completo, funcional, versátil y ordenado.');
		},
		l(e) {
			t = $(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function Z(e) {
	let t;
	return {
		c() {
			t = r('etc');
		},
		l(e) {
			t = $(e, 'etc');
		},
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && i(t);
		}
	};
}
function ee(e) {
	let t, a, n, r, s, o;
	return (
		(t = new H({
			props: { tipo: 0, variante: 6, $$slots: { default: [X] }, $$scope: { ctx: e } }
		})),
		(n = new H({
			props: { tipo: 0, variante: 6, $$slots: { default: [Y] }, $$scope: { ctx: e } }
		})),
		(s = new H({
			props: { tipo: 0, variante: 6, $$slots: { default: [Z] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				u(t.$$.fragment), (a = g()), u(n.$$.fragment), (r = g()), u(s.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e), (a = v(e)), h(n.$$.fragment, e), (r = v(e)), h(s.$$.fragment, e);
			},
			m(e, $) {
				b(t, e, $), c(e, a, $), b(n, e, $), c(e, r, $), b(s, e, $), (o = !0);
			},
			p(e, a) {
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), t.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), n.$set(o);
				const $ = {};
				1 & a && ($.$$scope = { dirty: a, ctx: e }), s.$set($);
			},
			i(e) {
				o || (x(t.$$.fragment, e), x(n.$$.fragment, e), x(s.$$.fragment, e), (o = !0));
			},
			o(e) {
				y(t.$$.fragment, e), y(n.$$.fragment, e), y(s.$$.fragment, e), (o = !1);
			},
			d(e) {
				w(t, e), e && i(a), w(n, e), e && i(r), w(s, e);
			}
		}
	);
}
function te(e) {
	let t, a, r, $, p;
	return (
		(a = new I({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		($ = new _({
			props: {
				tipo: 0,
				variante: 0,
				marker: './img/marker.svg',
				$$slots: { default: [ee] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				(t = n('div')), u(a.$$.fragment), (r = g()), u($.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), (r = v(n)), h($.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), m(t, r), b($, t, null), (p = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), $.$set(a);
			},
			i(e) {
				p || (x(a.$$.fragment, e), x($.$$.fragment, e), (p = !0));
			},
			o(e) {
				y(a.$$.fragment, e), y($.$$.fragment, e), (p = !1);
			},
			d(e) {
				e && i(t), w(a), w($);
			}
		}
	);
}
function ae(e) {
	let t, a;
	return (
		(t = new j({ props: { variante: 3, text: 'Repositorio en Github' } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: f,
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function ne(e) {
	let t, a;
	return (
		(t = new H({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [ae] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
			},
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function re(e) {
	let t, a, r;
	return (
		(a = new _({
			props: { tipo: 3, variante: 0, $$slots: { default: [ne] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = n('div')), u(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach(i), this.h();
			},
			h() {
				l(t, 'slot', 'subarea2');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), (r = !0);
			},
			p(e, t) {
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
			},
			i(e) {
				r || (x(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && i(t), w(a);
			}
		}
	);
}
function se(e) {
	let t, a;
	return (
		(t = new C({
			props: {
				variante: 2,
				$$slots: { subarea2: [re], subarea1: [te], default: [W] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
			},
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function oe(e) {
	let t, a;
	return (
		(t = new S({ props: { tabHeaders: k } })),
		{
			c() {
				u(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: f,
			i(e) {
				a || (x(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function $e(e) {
	let t, a, n, r, s, o, $, l, m, p, f, d, E, j;
	return (
		(t = new D({
			props: { id: 'cover', variante: 3, $$slots: { default: [L] }, $$scope: { ctx: e } }
		})),
		(n = new D({
			props: { variante: 0, bg_color: 'bgc_0', $$slots: { default: [R] }, $$scope: { ctx: e } }
		})),
		(s = new D({ props: { variante: 0, $$slots: { default: [N] }, $$scope: { ctx: e } } })),
		($ = new D({
			props: { variante: 0, bg_color: 'bgc_0', $$slots: { default: [Q] }, $$scope: { ctx: e } }
		})),
		(m = new D({
			props: { variante: 4, bg_color: 'bgwhite', $$slots: { default: [se] }, $$scope: { ctx: e } }
		})),
		(f = new I({ props: { tipo: 1, variante: 3, title: 'Notas acerca de esta web' } })),
		(E = new D({
			props: {
				id: 'UIPrototype',
				variante: 7,
				bg_color: 'bgc_0',
				$$slots: { default: [oe] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				u(t.$$.fragment),
					(a = g()),
					u(n.$$.fragment),
					(r = g()),
					u(s.$$.fragment),
					(o = g()),
					u($.$$.fragment),
					(l = g()),
					u(m.$$.fragment),
					(p = g()),
					u(f.$$.fragment),
					(d = g()),
					u(E.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e),
					(a = v(e)),
					h(n.$$.fragment, e),
					(r = v(e)),
					h(s.$$.fragment, e),
					(o = v(e)),
					h($.$$.fragment, e),
					(l = v(e)),
					h(m.$$.fragment, e),
					(p = v(e)),
					h(f.$$.fragment, e),
					(d = v(e)),
					h(E.$$.fragment, e);
			},
			m(e, i) {
				b(t, e, i),
					c(e, a, i),
					b(n, e, i),
					c(e, r, i),
					b(s, e, i),
					c(e, o, i),
					b($, e, i),
					c(e, l, i),
					b(m, e, i),
					c(e, p, i),
					b(f, e, i),
					c(e, d, i),
					b(E, e, i),
					(j = !0);
			},
			p(e, [a]) {
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), t.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), n.$set(o);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: e }), s.$set(i);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: e }), $.$set(l);
				const c = {};
				1 & a && (c.$$scope = { dirty: a, ctx: e }), m.$set(c);
				const p = {};
				1 & a && (p.$$scope = { dirty: a, ctx: e }), E.$set(p);
			},
			i(e) {
				j ||
					(x(t.$$.fragment, e),
					x(n.$$.fragment, e),
					x(s.$$.fragment, e),
					x($.$$.fragment, e),
					x(m.$$.fragment, e),
					x(f.$$.fragment, e),
					x(E.$$.fragment, e),
					(j = !0));
			},
			o(e) {
				y(t.$$.fragment, e),
					y(n.$$.fragment, e),
					y(s.$$.fragment, e),
					y($.$$.fragment, e),
					y(m.$$.fragment, e),
					y(f.$$.fragment, e),
					y(E.$$.fragment, e),
					(j = !1);
			},
			d(e) {
				w(t, e),
					e && i(a),
					w(n, e),
					e && i(r),
					w(s, e),
					e && i(o),
					w($, e),
					e && i(l),
					w(m, e),
					e && i(p),
					w(f, e),
					e && i(d),
					w(E, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, $e, a, {});
	}
}
