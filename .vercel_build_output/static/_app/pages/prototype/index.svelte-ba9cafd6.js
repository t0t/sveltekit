import {
	S as e,
	i as t,
	s as n,
	e as a,
	t as r,
	c as s,
	a as o,
	b as i,
	d as $,
	o as l,
	f as c,
	g as m,
	h as p,
	n as d,
	B as u,
	p as f,
	j as g,
	q as h,
	l as v,
	r as x,
	w as b,
	x as y,
	y as w
} from '../../chunks/index-d91e1ed8.js';
import { c as E } from '../../chunks/coverData-76b1c622.js';
import { S as j, H as S } from '../../chunks/Header-e756daf8.js';
import { G as k, L as D, B as C } from '../../chunks/ListItem-7b7dc3dc.js';
import { L as I } from '../../chunks/List-340c877d.js';
import { t as H } from '../../chunks/tabsContent-d0ddc54a.js';
import { T as P } from '../../chunks/Tabs-f3d38449.js';
const q = [
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
function z(e) {
	let t, n, u, f;
	return {
		c() {
			(t = a('pre')), (n = a('code')), (u = r(e[1])), this.h();
		},
		l(a) {
			t = s(a, 'PRE', { class: !0 });
			var r = o(t);
			n = s(r, 'CODE', { class: !0 });
			var l = o(n);
			(u = i(l, e[1])), l.forEach($), r.forEach($), this.h();
		},
		h() {
			l(n, 'class', (f = 'language-' + e[0] + ' svelte-1uixilt')), l(t, 'class', 'svelte-1uixilt');
		},
		m(e, a) {
			c(e, t, a), m(t, n), m(n, u);
		},
		p(e, [t]) {
			2 & t && p(u, e[1]),
				1 & t && f !== (f = 'language-' + e[0] + ' svelte-1uixilt') && l(n, 'class', f);
		},
		i: d,
		o: d,
		d(e) {
			e && $(t);
		}
	};
}
function L(e, t, n) {
	let { language: a } = t,
		{ code: r } = t;
	return (
		u(() => {
			let e = document.createElement('script');
			(e.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'),
				document.head.append(e),
				(e.onload = function () {
					let e,
						t,
						n = !1;
					switch (a) {
						case 'json':
							(t = 'https://prismjs.com/components/prism-json.js'), (n = !0);
							break;
						case 'python':
							(t = 'https://prismjs.com/components/prism-python.js'), (n = !0);
							break;
						case 'r':
							(t = 'https://prismjs.com/components/prism-r.js'), (n = !0);
					}
					1 == n
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
			'language' in e && n(0, (a = e.language)), 'code' in e && n(1, (r = e.code));
		}),
		[a, r]
	);
}
class G extends e {
	constructor(e) {
		super(), t(this, e, L, z, n, { language: 0, code: 1 });
	}
}
function V(e) {
	let t, n;
	return (
		(t = new S({
			props: { tipo: 2, variante: 1, title: E[4].title, subtitle: E[4].subtitle, text: E[4].text }
		})),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p: d,
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function _(e) {
	let t, n;
	return (
		(t = new G({ props: { language: q[1].language, code: q[1].text } })),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p: d,
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function U(e) {
	let t, n, r;
	return (
		(n = new S({
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
				(t = a('div')), f(n.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var a = o(t);
				h(n.$$.fragment, a), a.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, a) {
				c(e, t, a), x(n, t, null), (r = !0);
			},
			p: d,
			i(e) {
				r || (b(n.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && $(t), w(n);
			}
		}
	);
}
function A(e) {
	let t, n, p, d, u, f, h, x, b;
	return {
		c() {
			(t = a('div')),
				(n = a('p')),
				(p = r(
					'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
				(d = g()),
				(u = a('p')),
				(f = r('Su simplicidad y belleza saltan a la vista. ')),
				(h = a('strong')),
				(x = r('Encapsulamiento holístico:')),
				(b = r(
					' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
				)),
				this.h();
		},
		l(e) {
			t = s(e, 'DIV', { slot: !0 });
			var a = o(t);
			n = s(a, 'P', {});
			var r = o(n);
			(p = i(
				r,
				'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
			)),
				r.forEach($),
				(d = v(a)),
				(u = s(a, 'P', {}));
			var l = o(u);
			(f = i(l, 'Su simplicidad y belleza saltan a la vista. ')), (h = s(l, 'STRONG', {}));
			var c = o(h);
			(x = i(c, 'Encapsulamiento holístico:')),
				c.forEach($),
				(b = i(
					l,
					' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
				)),
				l.forEach($),
				a.forEach($),
				this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, a) {
			c(e, t, a), m(t, n), m(n, p), m(t, d), m(t, u), m(u, f), m(u, h), m(h, x), m(u, b);
		},
		d(e) {
			e && $(t);
		}
	};
}
function R(e) {
	let t, n;
	return (
		(t = new k({
			props: {
				variante: 2,
				$$slots: { subarea2: [A], subarea1: [U], default: [_] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function T(e) {
	let t, n;
	return (
		(t = new G({ props: { language: q[0].language, code: q[0].text } })),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p: d,
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function B(e) {
	let t, n, r;
	return (
		(n = new S({
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
				(t = a('div')), f(n.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var a = o(t);
				h(n.$$.fragment, a), a.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, a) {
				c(e, t, a), x(n, t, null), (r = !0);
			},
			p: d,
			i(e) {
				r || (b(n.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && $(t), w(n);
			}
		}
	);
}
function M(e) {
	let t, n, p, d, u, f;
	return {
		c() {
			(t = a('div')),
				(n = a('p')),
				(p = r(
					'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
				)),
				(d = g()),
				(u = a('p')),
				(f = r(
					'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
				)),
				this.h();
		},
		l(e) {
			t = s(e, 'DIV', { slot: !0 });
			var a = o(t);
			n = s(a, 'P', {});
			var r = o(n);
			(p = i(
				r,
				'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
			)),
				r.forEach($),
				(d = v(a)),
				(u = s(a, 'P', {}));
			var l = o(u);
			(f = i(
				l,
				'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
			)),
				l.forEach($),
				a.forEach($),
				this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, a) {
			c(e, t, a), m(t, n), m(n, p), m(t, d), m(t, u), m(u, f);
		},
		d(e) {
			e && $(t);
		}
	};
}
function O(e) {
	let t, n;
	return (
		(t = new k({
			props: {
				variante: 0,
				$$slots: { subarea2: [M], subarea1: [B], default: [T] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function J(e) {
	let t, n;
	return (
		(t = new G({ props: { language: q[2].language, code: q[2].text } })),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p: d,
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function K(e) {
	let t, n, l, p, d;
	return {
		c() {
			(t = a('dt')),
				(n = r('Control de versiones')),
				(l = g()),
				(p = a('dd')),
				(d = r(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = s(e, 'DT', {});
			var a = o(t);
			(n = i(a, 'Control de versiones')), a.forEach($), (l = v(e)), (p = s(e, 'DD', {}));
			var r = o(p);
			(d = i(
				r,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
			)),
				r.forEach($);
		},
		m(e, a) {
			c(e, t, a), m(t, n), c(e, l, a), c(e, p, a), m(p, d);
		},
		d(e) {
			e && $(t), e && $(l), e && $(p);
		}
	};
}
function N(e) {
	let t, n, r;
	return (
		(n = new I({
			props: { tipo: 2, variante: 0, $$slots: { default: [K] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = a('div')), f(n.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var a = o(t);
				h(n.$$.fragment, a), a.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, a) {
				c(e, t, a), x(n, t, null), (r = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), n.$set(a);
			},
			i(e) {
				r || (b(n.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && $(t), w(n);
			}
		}
	);
}
function F(e) {
	let t;
	return {
		c() {
			(t = a('div')), this.h();
		},
		l(e) {
			(t = s(e, 'DIV', { slot: !0 })), o(t).forEach($), this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, n) {
			c(e, t, n);
		},
		d(e) {
			e && $(t);
		}
	};
}
function Q(e) {
	let t, n;
	return (
		(t = new k({
			props: {
				variante: 1,
				$$slots: { subarea2: [F], subarea1: [N], default: [J] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function W(e) {
	let t, n;
	return {
		c() {
			(t = a('img')), this.h();
		},
		l(e) {
			(t = s(e, 'IMG', { src: !0, alt: !0 })), this.h();
		},
		h() {
			t.src !== (n = './img/grafico-11.svg') && l(t, 'src', './img/grafico-11.svg'),
				l(t, 'alt', '');
		},
		m(e, n) {
			c(e, t, n);
		},
		d(e) {
			e && $(t);
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
			t = i(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, n) {
			c(e, t, n);
		},
		d(e) {
			e && $(t);
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
			t = i(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, n) {
			c(e, t, n);
		},
		d(e) {
			e && $(t);
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
			t = i(e, 'etc');
		},
		m(e, n) {
			c(e, t, n);
		},
		d(e) {
			e && $(t);
		}
	};
}
function ee(e) {
	let t, n, a, r, s, o;
	return (
		(t = new D({
			props: { tipo: 0, variante: 6, $$slots: { default: [X] }, $$scope: { ctx: e } }
		})),
		(a = new D({
			props: { tipo: 0, variante: 6, $$slots: { default: [Y] }, $$scope: { ctx: e } }
		})),
		(s = new D({
			props: { tipo: 0, variante: 6, $$slots: { default: [Z] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				f(t.$$.fragment), (n = g()), f(a.$$.fragment), (r = g()), f(s.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e), (n = v(e)), h(a.$$.fragment, e), (r = v(e)), h(s.$$.fragment, e);
			},
			m(e, i) {
				x(t, e, i), c(e, n, i), x(a, e, i), c(e, r, i), x(s, e, i), (o = !0);
			},
			p(e, n) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r);
				const o = {};
				1 & n && (o.$$scope = { dirty: n, ctx: e }), a.$set(o);
				const i = {};
				1 & n && (i.$$scope = { dirty: n, ctx: e }), s.$set(i);
			},
			i(e) {
				o || (b(t.$$.fragment, e), b(a.$$.fragment, e), b(s.$$.fragment, e), (o = !0));
			},
			o(e) {
				y(t.$$.fragment, e), y(a.$$.fragment, e), y(s.$$.fragment, e), (o = !1);
			},
			d(e) {
				w(t, e), e && $(n), w(a, e), e && $(r), w(s, e);
			}
		}
	);
}
function te(e) {
	let t, n, r, i, p;
	return (
		(n = new S({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		(i = new I({
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
				(t = a('div')), f(n.$$.fragment), (r = g()), f(i.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var a = o(t);
				h(n.$$.fragment, a), (r = v(a)), h(i.$$.fragment, a), a.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, a) {
				c(e, t, a), x(n, t, null), m(t, r), x(i, t, null), (p = !0);
			},
			p(e, t) {
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), i.$set(n);
			},
			i(e) {
				p || (b(n.$$.fragment, e), b(i.$$.fragment, e), (p = !0));
			},
			o(e) {
				y(n.$$.fragment, e), y(i.$$.fragment, e), (p = !1);
			},
			d(e) {
				e && $(t), w(n), w(i);
			}
		}
	);
}
function ne(e) {
	let t, n;
	return (
		(t = new C({ props: { variante: 3, text: 'Repositorio en Github' } })),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p: d,
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function ae(e) {
	let t, n;
	return (
		(t = new D({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [ne] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function re(e) {
	let t, n, r;
	return (
		(n = new I({
			props: { tipo: 3, variante: 0, $$slots: { default: [ae] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = a('div')), f(n.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var a = o(t);
				h(n.$$.fragment, a), a.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea2');
			},
			m(e, a) {
				c(e, t, a), x(n, t, null), (r = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), n.$set(a);
			},
			i(e) {
				r || (b(n.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && $(t), w(n);
			}
		}
	);
}
function se(e) {
	let t, n;
	return (
		(t = new k({
			props: {
				variante: 2,
				$$slots: { subarea2: [re], subarea1: [te], default: [W] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				1 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function oe(e) {
	let t, n;
	return (
		(t = new P({ props: { tabHeaders: H } })),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, a) {
				x(t, e, a), (n = !0);
			},
			p: d,
			i(e) {
				n || (b(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				w(t, e);
			}
		}
	);
}
function ie(e) {
	let t, n, a, r, s, o, i, l, m, p, d, u, E, k;
	return (
		(t = new j({
			props: { id: 'cover', variante: 3, $$slots: { default: [V] }, $$scope: { ctx: e } }
		})),
		(a = new j({ props: { variante: 0, $$slots: { default: [R] }, $$scope: { ctx: e } } })),
		(s = new j({ props: { variante: 0, $$slots: { default: [O] }, $$scope: { ctx: e } } })),
		(i = new j({ props: { variante: 0, $$slots: { default: [Q] }, $$scope: { ctx: e } } })),
		(m = new j({
			props: { variante: 4, bg_color: 1, $$slots: { default: [se] }, $$scope: { ctx: e } }
		})),
		(d = new S({ props: { tipo: 1, variante: 1, title: 'Ceros y Unos.', subtitle: '' } })),
		(E = new j({
			props: { id: 'UIPrototype', variante: 7, $$slots: { default: [oe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				f(t.$$.fragment),
					(n = g()),
					f(a.$$.fragment),
					(r = g()),
					f(s.$$.fragment),
					(o = g()),
					f(i.$$.fragment),
					(l = g()),
					f(m.$$.fragment),
					(p = g()),
					f(d.$$.fragment),
					(u = g()),
					f(E.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e),
					(n = v(e)),
					h(a.$$.fragment, e),
					(r = v(e)),
					h(s.$$.fragment, e),
					(o = v(e)),
					h(i.$$.fragment, e),
					(l = v(e)),
					h(m.$$.fragment, e),
					(p = v(e)),
					h(d.$$.fragment, e),
					(u = v(e)),
					h(E.$$.fragment, e);
			},
			m(e, $) {
				x(t, e, $),
					c(e, n, $),
					x(a, e, $),
					c(e, r, $),
					x(s, e, $),
					c(e, o, $),
					x(i, e, $),
					c(e, l, $),
					x(m, e, $),
					c(e, p, $),
					x(d, e, $),
					c(e, u, $),
					x(E, e, $),
					(k = !0);
			},
			p(e, [n]) {
				const r = {};
				1 & n && (r.$$scope = { dirty: n, ctx: e }), t.$set(r);
				const o = {};
				1 & n && (o.$$scope = { dirty: n, ctx: e }), a.$set(o);
				const $ = {};
				1 & n && ($.$$scope = { dirty: n, ctx: e }), s.$set($);
				const l = {};
				1 & n && (l.$$scope = { dirty: n, ctx: e }), i.$set(l);
				const c = {};
				1 & n && (c.$$scope = { dirty: n, ctx: e }), m.$set(c);
				const p = {};
				1 & n && (p.$$scope = { dirty: n, ctx: e }), E.$set(p);
			},
			i(e) {
				k ||
					(b(t.$$.fragment, e),
					b(a.$$.fragment, e),
					b(s.$$.fragment, e),
					b(i.$$.fragment, e),
					b(m.$$.fragment, e),
					b(d.$$.fragment, e),
					b(E.$$.fragment, e),
					(k = !0));
			},
			o(e) {
				y(t.$$.fragment, e),
					y(a.$$.fragment, e),
					y(s.$$.fragment, e),
					y(i.$$.fragment, e),
					y(m.$$.fragment, e),
					y(d.$$.fragment, e),
					y(E.$$.fragment, e),
					(k = !1);
			},
			d(e) {
				w(t, e),
					e && $(n),
					w(a, e),
					e && $(r),
					w(s, e),
					e && $(o),
					w(i, e),
					e && $(l),
					w(m, e),
					e && $(p),
					w(d, e),
					e && $(u),
					w(E, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ie, n, {});
	}
}
