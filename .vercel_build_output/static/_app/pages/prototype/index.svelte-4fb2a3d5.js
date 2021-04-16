import {
	S as e,
	i as a,
	s as t,
	e as s,
	t as r,
	c as n,
	a as o,
	b as l,
	d as i,
	o as c,
	f as $,
	g as m,
	h as p,
	n as d,
	B as g,
	p as f,
	j as u,
	q as v,
	l as h,
	r as b,
	w as _,
	x as y,
	y as x
} from '../../chunks/index-d91e1ed8.js';
import { c as E, B as j } from '../../chunks/Grid.svelte-393f5de7.js';
import { t as w } from '../../chunks/tabsContent-d9de8955.js';
import { H as D } from '../../chunks/Header-2dba8d98.js';
import { I as S } from '../../chunks/Img-01748947.js';
import { S as I } from '../../chunks/Section-2e905ef9.js';
import { L as k, a as V } from '../../chunks/ListItem-df6649ee.js';
import { T as C } from '../../chunks/Tabs-b19f8991.js';
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
function H(e) {
	let a, t, g, f;
	return {
		c() {
			(a = s('pre')), (t = s('code')), (g = r(e[1])), this.h();
		},
		l(s) {
			a = n(s, 'PRE', { class: !0 });
			var r = o(a);
			t = n(r, 'CODE', { class: !0 });
			var c = o(t);
			(g = l(c, e[1])), c.forEach(i), r.forEach(i), this.h();
		},
		h() {
			c(t, 'class', (f = 'language-' + e[0] + ' svelte-1bvm4qe')), c(a, 'class', 'svelte-1bvm4qe');
		},
		m(e, s) {
			$(e, a, s), m(a, t), m(t, g);
		},
		p(e, [a]) {
			2 & a && p(g, e[1]),
				1 & a && f !== (f = 'language-' + e[0] + ' svelte-1bvm4qe') && c(t, 'class', f);
		},
		i: d,
		o: d,
		d(e) {
			e && i(a);
		}
	};
}
function P(e, a, t) {
	let { language: s } = a,
		{ code: r } = a;
	return (
		g(() => {
			let e = document.createElement('script');
			(e.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'),
				document.head.append(e),
				(e.onload = function () {
					let e,
						a,
						t = !1;
					switch (s) {
						case 'json':
							(a = 'https://prismjs.com/components/prism-json.js'), (t = !0);
							break;
						case 'python':
							(a = 'https://prismjs.com/components/prism-python.js'), (t = !0);
							break;
						case 'r':
							(a = 'https://prismjs.com/components/prism-r.js'), (t = !0);
					}
					1 == t
						? ((e = document.createElement('script')),
						  (e.src = a),
						  (e.async = !0),
						  document.head.append(e),
						  (e.onload = () => {
								Prism.highlightAll();
						  }))
						: Prism.highlightAll();
				});
		}),
		(e.$$set = (e) => {
			'language' in e && t(0, (s = e.language)), 'code' in e && t(1, (r = e.code));
		}),
		[s, r]
	);
}
class z extends e {
	constructor(e) {
		super(), a(this, e, P, H, t, { language: 0, code: 1 });
	}
}
function G(e) {
	let a, t, r, l;
	return (
		(r = new D({ props: { tipo: 2, variante: 1, title: E[4].title, subtitle: E[4].subtitle } })),
		{
			c() {
				(a = s('div')), (t = s('div')), f(r.$$.fragment), this.h();
			},
			l(e) {
				a = n(e, 'DIV', { class: !0 });
				var s = o(a);
				t = n(s, 'DIV', { class: !0 });
				var l = o(t);
				v(r.$$.fragment, l), l.forEach(i), s.forEach(i), this.h();
			},
			h() {
				c(t, 'class', 'col_13 mh_0 bgc_primary c_4'), c(a, 'class', 'dg');
			},
			m(e, s) {
				$(e, a, s), m(a, t), b(r, t, null), (l = !0);
			},
			p: d,
			i(e) {
				l || (_(r.$$.fragment, e), (l = !0));
			},
			o(e) {
				y(r.$$.fragment, e), (l = !1);
			},
			d(e) {
				e && i(a), x(r);
			}
		}
	);
}
function L(e) {
	let a, t, c, p, d;
	return {
		c() {
			(a = s('dt')),
				(t = r('Control de versiones')),
				(c = u()),
				(p = s('dd')),
				(d = r(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			a = n(e, 'DT', {});
			var s = o(a);
			(t = l(s, 'Control de versiones')), s.forEach(i), (c = h(e)), (p = n(e, 'DD', {}));
			var r = o(p);
			(d = l(
				r,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
			)),
				r.forEach(i);
		},
		m(e, s) {
			$(e, a, s), m(a, t), $(e, c, s), $(e, p, s), m(p, d);
		},
		d(e) {
			e && i(a), e && i(c), e && i(p);
		}
	};
}
function A(e) {
	let a;
	return {
		c() {
			a = r('Simple, ligero, limpio y claro.');
		},
		l(e) {
			a = l(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, t) {
			$(e, a, t);
		},
		d(e) {
			e && i(a);
		}
	};
}
function R(e) {
	let a;
	return {
		c() {
			a = r('Completo, funcional, versátil y ordenado.');
		},
		l(e) {
			a = l(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, t) {
			$(e, a, t);
		},
		d(e) {
			e && i(a);
		}
	};
}
function T(e) {
	let a;
	return {
		c() {
			a = r('etc');
		},
		l(e) {
			a = l(e, 'etc');
		},
		m(e, t) {
			$(e, a, t);
		},
		d(e) {
			e && i(a);
		}
	};
}
function U(e) {
	let a, t, s, r, n, o;
	return (
		(a = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [A] }, $$scope: { ctx: e } }
		})),
		(s = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [R] }, $$scope: { ctx: e } }
		})),
		(n = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [T] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				f(a.$$.fragment), (t = u()), f(s.$$.fragment), (r = u()), f(n.$$.fragment);
			},
			l(e) {
				v(a.$$.fragment, e), (t = h(e)), v(s.$$.fragment, e), (r = h(e)), v(n.$$.fragment, e);
			},
			m(e, l) {
				b(a, e, l), $(e, t, l), b(s, e, l), $(e, r, l), b(n, e, l), (o = !0);
			},
			p(e, t) {
				const r = {};
				1 & t && (r.$$scope = { dirty: t, ctx: e }), a.$set(r);
				const o = {};
				1 & t && (o.$$scope = { dirty: t, ctx: e }), s.$set(o);
				const l = {};
				1 & t && (l.$$scope = { dirty: t, ctx: e }), n.$set(l);
			},
			i(e) {
				o || (_(a.$$.fragment, e), _(s.$$.fragment, e), _(n.$$.fragment, e), (o = !0));
			},
			o(e) {
				y(a.$$.fragment, e), y(s.$$.fragment, e), y(n.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e), e && i(t), x(s, e), e && i(r), x(n, e);
			}
		}
	);
}
function B(e) {
	let a, t;
	return (
		(a = new j({ props: { variante: 3, text: 'Repositorio en Github' } })),
		{
			c() {
				f(a.$$.fragment);
			},
			l(e) {
				v(a.$$.fragment, e);
			},
			m(e, s) {
				b(a, e, s), (t = !0);
			},
			p: d,
			i(e) {
				t || (_(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
function N(e) {
	let a, t;
	return (
		(a = new C({ props: { tabHeaders: w } })),
		{
			c() {
				f(a.$$.fragment);
			},
			l(e) {
				v(a.$$.fragment, e);
			},
			m(e, s) {
				b(a, e, s), (t = !0);
			},
			p: d,
			i(e) {
				t || (_(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
function O(e) {
	let a,
		t,
		p,
		d,
		g,
		E,
		j,
		w,
		C,
		H,
		P,
		A,
		R,
		T,
		O,
		J,
		K,
		M,
		F,
		Q,
		W,
		X,
		Y,
		Z,
		ee,
		ae,
		te,
		se,
		re,
		ne,
		oe,
		le,
		ie,
		ce,
		$e,
		me,
		pe,
		de,
		ge,
		fe,
		ue,
		ve,
		he,
		be,
		_e,
		ye,
		xe,
		Ee,
		je,
		we,
		De,
		Se,
		Ie,
		ke,
		Ve,
		Ce,
		qe,
		He;
	return (
		(a = new I({
			props: { id: 'cover', variante: 1, $$slots: { default: [G] }, $$scope: { ctx: e } }
		})),
		(g = new D({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'SCSS',
				subtitle: 'Diseño y prototipado al más bajo nivel'
			}
		})),
		(J = new z({ props: { language: q[1].language, code: q[1].text } })),
		(F = new D({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'Svelte Kit',
				subtitle: 'El mejor hábitat para CSS, HTML y JS'
			}
		})),
		(ie = new z({ props: { language: q[0].language, code: q[0].text } })),
		(pe = new z({ props: { language: q[2].language, code: q[2].text } })),
		(fe = new k({
			props: { tipo: 2, variante: 0, $$slots: { default: [L] }, $$scope: { ctx: e } }
		})),
		(be = new S({ props: { src: './img/grafico-11.svg', alt: '' } })),
		(xe = new D({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		(je = new k({
			props: {
				tipo: 0,
				variante: 0,
				marker: './img/marker.svg',
				$$slots: { default: [U] },
				$$scope: { ctx: e }
			}
		})),
		(De = new V({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [B] },
				$$scope: { ctx: e }
			}
		})),
		(Ve = new D({ props: { tipo: 1, variante: 1, title: 'Notas acerca de esta web' } })),
		(qe = new I({
			props: {
				id: 'UIPrototype',
				variante: 7,
				bg_color: 'bgc_0',
				$$slots: { default: [N] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				f(a.$$.fragment),
					(t = u()),
					(p = s('div')),
					(d = s('div')),
					f(g.$$.fragment),
					(E = u()),
					(j = s('div')),
					(w = s('p')),
					(C = r(
						'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
					)),
					(H = u()),
					(P = s('p')),
					(A = r(
						'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
					)),
					(R = u()),
					(T = s('div')),
					(O = s('div')),
					f(J.$$.fragment),
					(K = u()),
					(M = s('div')),
					f(F.$$.fragment),
					(Q = u()),
					(W = s('div')),
					(X = s('div')),
					(Y = s('p')),
					(Z = r(
						'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
					)),
					(ee = u()),
					(ae = s('p')),
					(te = r('Su simplicidad y belleza saltan a la vista. ')),
					(se = s('strong')),
					(re = r('Encapsulamiento holístico:')),
					(ne = r(
						' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					(oe = u()),
					(le = s('div')),
					f(ie.$$.fragment),
					(ce = u()),
					($e = s('div')),
					(me = s('div')),
					f(pe.$$.fragment),
					(de = u()),
					(ge = s('div')),
					f(fe.$$.fragment),
					(ue = u()),
					(ve = s('div')),
					(he = s('div')),
					f(be.$$.fragment),
					(_e = u()),
					(ye = s('div')),
					f(xe.$$.fragment),
					(Ee = u()),
					f(je.$$.fragment),
					(we = u()),
					f(De.$$.fragment),
					(Se = u()),
					(Ie = s('div')),
					(ke = s('div')),
					f(Ve.$$.fragment),
					(Ce = u()),
					f(qe.$$.fragment),
					this.h();
			},
			l(e) {
				v(a.$$.fragment, e), (t = h(e)), (p = n(e, 'DIV', { class: !0 }));
				var s = o(p);
				d = n(s, 'DIV', { class: !0 });
				var r = o(d);
				v(g.$$.fragment, r), r.forEach(i), (E = h(s)), (j = n(s, 'DIV', { class: !0 }));
				var c = o(j);
				w = n(c, 'P', {});
				var $ = o(w);
				(C = l(
					$,
					'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
				)),
					$.forEach(i),
					(H = h(c)),
					(P = n(c, 'P', {}));
				var m = o(P);
				(A = l(
					m,
					'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
				)),
					m.forEach(i),
					c.forEach(i),
					s.forEach(i),
					(R = h(e)),
					(T = n(e, 'DIV', { class: !0 }));
				var f = o(T);
				O = n(f, 'DIV', { class: !0 });
				var u = o(O);
				v(J.$$.fragment, u), u.forEach(i), (K = h(f)), (M = n(f, 'DIV', { class: !0 }));
				var b = o(M);
				v(F.$$.fragment, b),
					b.forEach(i),
					f.forEach(i),
					(Q = h(e)),
					(W = n(e, 'DIV', { class: !0 }));
				var _ = o(W);
				X = n(_, 'DIV', { class: !0 });
				var y = o(X);
				Y = n(y, 'P', {});
				var x = o(Y);
				(Z = l(
					x,
					'Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
					x.forEach(i),
					(ee = h(y)),
					(ae = n(y, 'P', {}));
				var D = o(ae);
				(te = l(D, 'Su simplicidad y belleza saltan a la vista. ')), (se = n(D, 'STRONG', {}));
				var S = o(se);
				(re = l(S, 'Encapsulamiento holístico:')),
					S.forEach(i),
					(ne = l(
						D,
						' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					D.forEach(i),
					y.forEach(i),
					(oe = h(_)),
					(le = n(_, 'DIV', { class: !0 }));
				var I = o(le);
				v(ie.$$.fragment, I),
					I.forEach(i),
					_.forEach(i),
					(ce = h(e)),
					($e = n(e, 'DIV', { class: !0 }));
				var k = o($e);
				me = n(k, 'DIV', { class: !0 });
				var V = o(me);
				v(pe.$$.fragment, V), V.forEach(i), (de = h(k)), (ge = n(k, 'DIV', { class: !0 }));
				var q = o(ge);
				v(fe.$$.fragment, q),
					q.forEach(i),
					k.forEach(i),
					(ue = h(e)),
					(ve = n(e, 'DIV', { class: !0 }));
				var z = o(ve);
				he = n(z, 'DIV', { class: !0 });
				var G = o(he);
				v(be.$$.fragment, G), G.forEach(i), (_e = h(z)), (ye = n(z, 'DIV', { class: !0 }));
				var L = o(ye);
				v(xe.$$.fragment, L),
					(Ee = h(L)),
					v(je.$$.fragment, L),
					(we = h(L)),
					v(De.$$.fragment, L),
					L.forEach(i),
					z.forEach(i),
					(Se = h(e)),
					(Ie = n(e, 'DIV', { class: !0 }));
				var U = o(Ie);
				ke = n(U, 'DIV', { class: !0 });
				var B = o(ke);
				v(Ve.$$.fragment, B),
					B.forEach(i),
					U.forEach(i),
					(Ce = h(e)),
					v(qe.$$.fragment, e),
					this.h();
			},
			h() {
				c(d, 'class', 'col_8'),
					c(j, 'class', 'col_5'),
					c(p, 'class', 'dg bgc_0 c_4 p_3'),
					c(O, 'class', 'col_8'),
					c(M, 'class', 'col_5'),
					c(T, 'class', 'dg bgc_0 c_4 p_3 gap_3'),
					c(X, 'class', 'col_5'),
					c(le, 'class', 'col_8'),
					c(W, 'class', 'dg bgc_0 c_4 p_3 gap_3'),
					c(me, 'class', 'col_8'),
					c(ge, 'class', 'col_5'),
					c($e, 'class', 'dg bgc_0 c_4 p_3 gap_3'),
					c(he, 'class', 'col_8'),
					c(ye, 'class', 'col_5 dg_0 pcc c_4'),
					c(ve, 'class', 'dg gap_3 pl_3 pr_3 bgc_1'),
					c(ke, 'class', 'col_13'),
					c(Ie, 'class', 'dg pt_3 pb_3 tac bgc_4');
			},
			m(e, s) {
				b(a, e, s),
					$(e, t, s),
					$(e, p, s),
					m(p, d),
					b(g, d, null),
					m(p, E),
					m(p, j),
					m(j, w),
					m(w, C),
					m(j, H),
					m(j, P),
					m(P, A),
					$(e, R, s),
					$(e, T, s),
					m(T, O),
					b(J, O, null),
					m(T, K),
					m(T, M),
					b(F, M, null),
					$(e, Q, s),
					$(e, W, s),
					m(W, X),
					m(X, Y),
					m(Y, Z),
					m(X, ee),
					m(X, ae),
					m(ae, te),
					m(ae, se),
					m(se, re),
					m(ae, ne),
					m(W, oe),
					m(W, le),
					b(ie, le, null),
					$(e, ce, s),
					$(e, $e, s),
					m($e, me),
					b(pe, me, null),
					m($e, de),
					m($e, ge),
					b(fe, ge, null),
					$(e, ue, s),
					$(e, ve, s),
					m(ve, he),
					b(be, he, null),
					m(ve, _e),
					m(ve, ye),
					b(xe, ye, null),
					m(ye, Ee),
					b(je, ye, null),
					m(ye, we),
					b(De, ye, null),
					$(e, Se, s),
					$(e, Ie, s),
					m(Ie, ke),
					b(Ve, ke, null),
					$(e, Ce, s),
					b(qe, e, s),
					(He = !0);
			},
			p(e, [t]) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
				const r = {};
				1 & t && (r.$$scope = { dirty: t, ctx: e }), fe.$set(r);
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), je.$set(n);
				const o = {};
				1 & t && (o.$$scope = { dirty: t, ctx: e }), De.$set(o);
				const l = {};
				1 & t && (l.$$scope = { dirty: t, ctx: e }), qe.$set(l);
			},
			i(e) {
				He ||
					(_(a.$$.fragment, e),
					_(g.$$.fragment, e),
					_(J.$$.fragment, e),
					_(F.$$.fragment, e),
					_(ie.$$.fragment, e),
					_(pe.$$.fragment, e),
					_(fe.$$.fragment, e),
					_(be.$$.fragment, e),
					_(xe.$$.fragment, e),
					_(je.$$.fragment, e),
					_(De.$$.fragment, e),
					_(Ve.$$.fragment, e),
					_(qe.$$.fragment, e),
					(He = !0));
			},
			o(e) {
				y(a.$$.fragment, e),
					y(g.$$.fragment, e),
					y(J.$$.fragment, e),
					y(F.$$.fragment, e),
					y(ie.$$.fragment, e),
					y(pe.$$.fragment, e),
					y(fe.$$.fragment, e),
					y(be.$$.fragment, e),
					y(xe.$$.fragment, e),
					y(je.$$.fragment, e),
					y(De.$$.fragment, e),
					y(Ve.$$.fragment, e),
					y(qe.$$.fragment, e),
					(He = !1);
			},
			d(e) {
				x(a, e),
					e && i(t),
					e && i(p),
					x(g),
					e && i(R),
					e && i(T),
					x(J),
					x(F),
					e && i(Q),
					e && i(W),
					x(ie),
					e && i(ce),
					e && i($e),
					x(pe),
					x(fe),
					e && i(ue),
					e && i(ve),
					x(be),
					x(xe),
					x(je),
					x(De),
					e && i(Se),
					e && i(Ie),
					x(Ve),
					e && i(Ce),
					x(qe, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, O, t, {});
	}
}
