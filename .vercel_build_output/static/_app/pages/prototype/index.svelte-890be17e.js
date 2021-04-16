import {
	S as e,
	i as t,
	s as a,
	e as n,
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
	r as b,
	w as x,
	x as y,
	y as w
} from '../../chunks/index-d91e1ed8.js';
import { c as E, B as j } from '../../chunks/Grid.svelte-81f2d089.js';
import { T as S, t as k } from '../../chunks/Tabs-8dc45483.js';
import { S as D, H as I } from '../../chunks/Header-3d35273a.js';
import { G as C } from '../../chunks/Grid-11b84c17.js';
import { L as _, a as H } from '../../chunks/ListItem-91cb1752.js';
import '../../chunks/Img-8391a33a.js';
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
	let t, a, u, f;
	return {
		c() {
			(t = n('pre')), (a = n('code')), (u = r(e[1])), this.h();
		},
		l(n) {
			t = s(n, 'PRE', { class: !0 });
			var r = o(t);
			a = s(r, 'CODE', { class: !0 });
			var l = o(a);
			(u = i(l, e[1])), l.forEach($), r.forEach($), this.h();
		},
		h() {
			l(a, 'class', (f = 'language-' + e[0] + ' svelte-8iu7pc')), l(t, 'class', 'svelte-8iu7pc');
		},
		m(e, n) {
			c(e, t, n), m(t, a), m(a, u);
		},
		p(e, [t]) {
			2 & t && p(u, e[1]),
				1 & t && f !== (f = 'language-' + e[0] + ' svelte-8iu7pc') && l(a, 'class', f);
		},
		i: d,
		o: d,
		d(e) {
			e && $(t);
		}
	};
}
function z(e, t, a) {
	let { language: n } = t,
		{ code: r } = t;
	return (
		u(() => {
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
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: d,
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
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: d,
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
				(t = n('div')), f(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), (r = !0);
			},
			p: d,
			i(e) {
				r || (x(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && $(t), w(a);
			}
		}
	);
}
function A(e) {
	let t, a, p, d, u, f, h, b, x;
	return {
		c() {
			(t = n('div')),
				(a = n('p')),
				(p = r(
					'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
				(d = g()),
				(u = n('p')),
				(f = r('Su simplicidad y belleza saltan a la vista. ')),
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
			(p = i(
				r,
				'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
			)),
				r.forEach($),
				(d = v(n)),
				(u = s(n, 'P', {}));
			var l = o(u);
			(f = i(l, 'Su simplicidad y belleza saltan a la vista. ')), (h = s(l, 'STRONG', {}));
			var c = o(h);
			(b = i(c, 'Encapsulamiento holístico:')),
				c.forEach($),
				(x = i(
					l,
					' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
				)),
				l.forEach($),
				n.forEach($),
				this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, n) {
			c(e, t, n), m(t, a), m(a, p), m(t, d), m(t, u), m(u, f), m(u, h), m(h, b), m(u, x);
		},
		d(e) {
			e && $(t);
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
				f(t.$$.fragment);
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
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: d,
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
				(t = n('div')), f(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), (r = !0);
			},
			p: d,
			i(e) {
				r || (x(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && $(t), w(a);
			}
		}
	);
}
function M(e) {
	let t, a, p, d, u, f;
	return {
		c() {
			(t = n('div')),
				(a = n('p')),
				(p = r(
					'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
				)),
				(d = g()),
				(u = n('p')),
				(f = r(
					'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
				)),
				this.h();
		},
		l(e) {
			t = s(e, 'DIV', { slot: !0 });
			var n = o(t);
			a = s(n, 'P', {});
			var r = o(a);
			(p = i(
				r,
				'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
			)),
				r.forEach($),
				(d = v(n)),
				(u = s(n, 'P', {}));
			var l = o(u);
			(f = i(
				l,
				'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
			)),
				l.forEach($),
				n.forEach($),
				this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, n) {
			c(e, t, n), m(t, a), m(a, p), m(t, d), m(t, u), m(u, f);
		},
		d(e) {
			e && $(t);
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
				f(t.$$.fragment);
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
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: d,
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
	let t, a, l, p, d;
	return {
		c() {
			(t = n('dt')),
				(a = r('Control de versiones')),
				(l = g()),
				(p = n('dd')),
				(d = r(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = s(e, 'DT', {});
			var n = o(t);
			(a = i(n, 'Control de versiones')), n.forEach($), (l = v(e)), (p = s(e, 'DD', {}));
			var r = o(p);
			(d = i(
				r,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
			)),
				r.forEach($);
		},
		m(e, n) {
			c(e, t, n), m(t, a), c(e, l, n), c(e, p, n), m(p, d);
		},
		d(e) {
			e && $(t), e && $(l), e && $(p);
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
				(t = n('div')), f(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach($), this.h();
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
				e && $(t), w(a);
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
			(t = s(e, 'DIV', { slot: !0 })), o(t).forEach($), this.h();
		},
		h() {
			l(t, 'slot', 'subarea2');
		},
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && $(t);
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
				f(t.$$.fragment);
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
		m(e, a) {
			c(e, t, a);
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
		m(e, a) {
			c(e, t, a);
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
		m(e, a) {
			c(e, t, a);
		},
		d(e) {
			e && $(t);
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
				f(t.$$.fragment), (a = g()), f(n.$$.fragment), (r = g()), f(s.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e), (a = v(e)), h(n.$$.fragment, e), (r = v(e)), h(s.$$.fragment, e);
			},
			m(e, i) {
				b(t, e, i), c(e, a, i), b(n, e, i), c(e, r, i), b(s, e, i), (o = !0);
			},
			p(e, a) {
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), t.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), n.$set(o);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: e }), s.$set(i);
			},
			i(e) {
				o || (x(t.$$.fragment, e), x(n.$$.fragment, e), x(s.$$.fragment, e), (o = !0));
			},
			o(e) {
				y(t.$$.fragment, e), y(n.$$.fragment, e), y(s.$$.fragment, e), (o = !1);
			},
			d(e) {
				w(t, e), e && $(a), w(n, e), e && $(r), w(s, e);
			}
		}
	);
}
function te(e) {
	let t, a, r, i, p;
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
		(i = new _({
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
				(t = n('div')), f(a.$$.fragment), (r = g()), f(i.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), (r = v(n)), h(i.$$.fragment, n), n.forEach($), this.h();
			},
			h() {
				l(t, 'slot', 'subarea1');
			},
			m(e, n) {
				c(e, t, n), b(a, t, null), m(t, r), b(i, t, null), (p = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), i.$set(a);
			},
			i(e) {
				p || (x(a.$$.fragment, e), x(i.$$.fragment, e), (p = !0));
			},
			o(e) {
				y(a.$$.fragment, e), y(i.$$.fragment, e), (p = !1);
			},
			d(e) {
				e && $(t), w(a), w(i);
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
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: d,
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
				f(t.$$.fragment);
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
				(t = n('div')), f(a.$$.fragment), this.h();
			},
			l(e) {
				t = s(e, 'DIV', { slot: !0 });
				var n = o(t);
				h(a.$$.fragment, n), n.forEach($), this.h();
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
				e && $(t), w(a);
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
				f(t.$$.fragment);
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
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, n) {
				b(t, e, n), (a = !0);
			},
			p: d,
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
function ie(e) {
	let t, a, n, r, s, o, i, l, m, p, d, u, E, j;
	return (
		(t = new D({
			props: { id: 'cover', variante: 3, $$slots: { default: [L] }, $$scope: { ctx: e } }
		})),
		(n = new D({
			props: { variante: 0, bg_color: 'bgc_0', $$slots: { default: [R] }, $$scope: { ctx: e } }
		})),
		(s = new D({ props: { variante: 0, $$slots: { default: [N] }, $$scope: { ctx: e } } })),
		(i = new D({
			props: { variante: 0, bg_color: 'bgc_0', $$slots: { default: [Q] }, $$scope: { ctx: e } }
		})),
		(m = new D({
			props: { variante: 4, bg_color: 'bgwhite', $$slots: { default: [se] }, $$scope: { ctx: e } }
		})),
		(d = new I({ props: { tipo: 1, variante: 3, title: 'Notas acerca de esta web' } })),
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
				f(t.$$.fragment),
					(a = g()),
					f(n.$$.fragment),
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
					(a = v(e)),
					h(n.$$.fragment, e),
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
				b(t, e, $),
					c(e, a, $),
					b(n, e, $),
					c(e, r, $),
					b(s, e, $),
					c(e, o, $),
					b(i, e, $),
					c(e, l, $),
					b(m, e, $),
					c(e, p, $),
					b(d, e, $),
					c(e, u, $),
					b(E, e, $),
					(j = !0);
			},
			p(e, [a]) {
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), t.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), n.$set(o);
				const $ = {};
				1 & a && ($.$$scope = { dirty: a, ctx: e }), s.$set($);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: e }), i.$set(l);
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
					x(i.$$.fragment, e),
					x(m.$$.fragment, e),
					x(d.$$.fragment, e),
					x(E.$$.fragment, e),
					(j = !0));
			},
			o(e) {
				y(t.$$.fragment, e),
					y(n.$$.fragment, e),
					y(s.$$.fragment, e),
					y(i.$$.fragment, e),
					y(m.$$.fragment, e),
					y(d.$$.fragment, e),
					y(E.$$.fragment, e),
					(j = !1);
			},
			d(e) {
				w(t, e),
					e && $(a),
					w(n, e),
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
		super(), t(this, e, null, ie, a, {});
	}
}
