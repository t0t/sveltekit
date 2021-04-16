import {
	S as e,
	i as a,
	s as t,
	e as s,
	t as r,
	c as n,
	a as o,
	b as l,
	d as c,
	o as i,
	f as $,
	g as m,
	h as p,
	n as d,
	B as g,
	p as f,
	j as u,
	q as h,
	l as v,
	r as b,
	w as _,
	x as y,
	y as x
} from '../../chunks/index-d91e1ed8.js';
import { c as E, B as j } from '../../chunks/Grid.svelte-dc7715e6.js';
import { t as w } from '../../chunks/tabsContent-d9de8955.js';
import { H as D } from '../../chunks/Header-eac1ad0e.js';
import { I as S } from '../../chunks/Img-374bd0d7.js';
import { S as I } from '../../chunks/Section-75880cda.js';
import { L as k, a as V } from '../../chunks/ListItem-1d115590.js';
import { T as C } from '../../chunks/Tabs-29bbf108.js';
const H = [
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
function P(e) {
	let a, t, g, f;
	return {
		c() {
			(a = s('pre')), (t = s('code')), (g = r(e[1])), this.h();
		},
		l(s) {
			a = n(s, 'PRE', { class: !0 });
			var r = o(a);
			t = n(r, 'CODE', { class: !0 });
			var i = o(t);
			(g = l(i, e[1])), i.forEach(c), r.forEach(c), this.h();
		},
		h() {
			i(t, 'class', (f = 'language-' + e[0] + ' svelte-1e5hurd')), i(a, 'class', 'svelte-1e5hurd');
		},
		m(e, s) {
			$(e, a, s), m(a, t), m(t, g);
		},
		p(e, [a]) {
			2 & a && p(g, e[1]),
				1 & a && f !== (f = 'language-' + e[0] + ' svelte-1e5hurd') && i(t, 'class', f);
		},
		i: d,
		o: d,
		d(e) {
			e && c(a);
		}
	};
}
function q(e, a, t) {
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
		super(), a(this, e, q, P, t, { language: 0, code: 1 });
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
				h(r.$$.fragment, l), l.forEach(c), s.forEach(c), this.h();
			},
			h() {
				i(t, 'class', 'col_13 mh_0 bgc_primary c_4'), i(a, 'class', 'dg');
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
				e && c(a), x(r);
			}
		}
	);
}
function L(e) {
	let a, t, i, p, d;
	return {
		c() {
			(a = s('dt')),
				(t = r('Control de versiones')),
				(i = u()),
				(p = s('dd')),
				(d = r(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			a = n(e, 'DT', {});
			var s = o(a);
			(t = l(s, 'Control de versiones')), s.forEach(c), (i = v(e)), (p = n(e, 'DD', {}));
			var r = o(p);
			(d = l(
				r,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"'
			)),
				r.forEach(c);
		},
		m(e, s) {
			$(e, a, s), m(a, t), $(e, i, s), $(e, p, s), m(p, d);
		},
		d(e) {
			e && c(a), e && c(i), e && c(p);
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
			e && c(a);
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
			e && c(a);
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
			e && c(a);
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
				h(a.$$.fragment, e), (t = v(e)), h(s.$$.fragment, e), (r = v(e)), h(n.$$.fragment, e);
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
				x(a, e), e && c(t), x(s, e), e && c(r), x(n, e);
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
				h(a.$$.fragment, e);
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
				h(a.$$.fragment, e);
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
		P,
		q,
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
		ce,
		ie,
		$e,
		me,
		pe,
		de,
		ge,
		fe,
		ue,
		he,
		ve,
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
		He,
		Pe;
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
		(J = new z({ props: { language: H[1].language, code: H[1].text } })),
		(F = new D({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'Svelte Kit',
				subtitle: 'El mejor hábitat para CSS, HTML y JS'
			}
		})),
		(ce = new z({ props: { language: H[0].language, code: H[0].text } })),
		(pe = new z({ props: { language: H[2].language, code: H[2].text } })),
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
		(He = new I({
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
					(P = u()),
					(q = s('p')),
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
					f(ce.$$.fragment),
					(ie = u()),
					($e = s('div')),
					(me = s('div')),
					f(pe.$$.fragment),
					(de = u()),
					(ge = s('div')),
					f(fe.$$.fragment),
					(ue = u()),
					(he = s('div')),
					(ve = s('div')),
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
					f(He.$$.fragment),
					this.h();
			},
			l(e) {
				h(a.$$.fragment, e), (t = v(e)), (p = n(e, 'DIV', { class: !0 }));
				var s = o(p);
				d = n(s, 'DIV', { class: !0 });
				var r = o(d);
				h(g.$$.fragment, r), r.forEach(c), (E = v(s)), (j = n(s, 'DIV', { class: !0 }));
				var i = o(j);
				w = n(i, 'P', {});
				var $ = o(w);
				(C = l(
					$,
					'¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?'
				)),
					$.forEach(c),
					(P = v(i)),
					(q = n(i, 'P', {}));
				var m = o(q);
				(A = l(
					m,
					'Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.'
				)),
					m.forEach(c),
					i.forEach(c),
					s.forEach(c),
					(R = v(e)),
					(T = n(e, 'DIV', { class: !0 }));
				var f = o(T);
				O = n(f, 'DIV', { class: !0 });
				var u = o(O);
				h(J.$$.fragment, u), u.forEach(c), (K = v(f)), (M = n(f, 'DIV', { class: !0 }));
				var b = o(M);
				h(F.$$.fragment, b),
					b.forEach(c),
					f.forEach(c),
					(Q = v(e)),
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
					x.forEach(c),
					(ee = v(y)),
					(ae = n(y, 'P', {}));
				var D = o(ae);
				(te = l(D, 'Su simplicidad y belleza saltan a la vista. ')), (se = n(D, 'STRONG', {}));
				var S = o(se);
				(re = l(S, 'Encapsulamiento holístico:')),
					S.forEach(c),
					(ne = l(
						D,
						' Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					D.forEach(c),
					y.forEach(c),
					(oe = v(_)),
					(le = n(_, 'DIV', { class: !0 }));
				var I = o(le);
				h(ce.$$.fragment, I),
					I.forEach(c),
					_.forEach(c),
					(ie = v(e)),
					($e = n(e, 'DIV', { class: !0 }));
				var k = o($e);
				me = n(k, 'DIV', { class: !0 });
				var V = o(me);
				h(pe.$$.fragment, V), V.forEach(c), (de = v(k)), (ge = n(k, 'DIV', { class: !0 }));
				var H = o(ge);
				h(fe.$$.fragment, H),
					H.forEach(c),
					k.forEach(c),
					(ue = v(e)),
					(he = n(e, 'DIV', { class: !0 }));
				var z = o(he);
				ve = n(z, 'DIV', { class: !0 });
				var G = o(ve);
				h(be.$$.fragment, G), G.forEach(c), (_e = v(z)), (ye = n(z, 'DIV', { class: !0 }));
				var L = o(ye);
				h(xe.$$.fragment, L),
					(Ee = v(L)),
					h(je.$$.fragment, L),
					(we = v(L)),
					h(De.$$.fragment, L),
					L.forEach(c),
					z.forEach(c),
					(Se = v(e)),
					(Ie = n(e, 'DIV', { class: !0 }));
				var U = o(Ie);
				ke = n(U, 'DIV', { class: !0 });
				var B = o(ke);
				h(Ve.$$.fragment, B),
					B.forEach(c),
					U.forEach(c),
					(Ce = v(e)),
					h(He.$$.fragment, e),
					this.h();
			},
			h() {
				i(d, 'class', 'col_8'),
					i(j, 'class', 'col_5'),
					i(p, 'class', 'dg bgc_0 c_4 p_3'),
					i(O, 'class', 'col_8'),
					i(M, 'class', 'col_5'),
					i(T, 'class', 'dg bgc_0 c_4 p_3 gap_3'),
					i(X, 'class', 'col_5'),
					i(le, 'class', 'col_8'),
					i(W, 'class', 'dg bgc_0 c_4 p_3 gap_3'),
					i(me, 'class', 'col_8'),
					i(ge, 'class', 'col_5'),
					i($e, 'class', 'dg bgc_0 c_4 p_3 gap_3'),
					i(ve, 'class', 'col_8'),
					i(ye, 'class', 'col_5 dg_0 pcc c_4'),
					i(he, 'class', 'dg gap_3 pl_3 pr_3 bgc_1'),
					i(ke, 'class', 'col_13'),
					i(Ie, 'class', 'dg pt_3 pb_3 tac bgc_4');
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
					m(j, P),
					m(j, q),
					m(q, A),
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
					b(ce, le, null),
					$(e, ie, s),
					$(e, $e, s),
					m($e, me),
					b(pe, me, null),
					m($e, de),
					m($e, ge),
					b(fe, ge, null),
					$(e, ue, s),
					$(e, he, s),
					m(he, ve),
					b(be, ve, null),
					m(he, _e),
					m(he, ye),
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
					b(He, e, s),
					(Pe = !0);
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
				1 & t && (l.$$scope = { dirty: t, ctx: e }), He.$set(l);
			},
			i(e) {
				Pe ||
					(_(a.$$.fragment, e),
					_(g.$$.fragment, e),
					_(J.$$.fragment, e),
					_(F.$$.fragment, e),
					_(ce.$$.fragment, e),
					_(pe.$$.fragment, e),
					_(fe.$$.fragment, e),
					_(be.$$.fragment, e),
					_(xe.$$.fragment, e),
					_(je.$$.fragment, e),
					_(De.$$.fragment, e),
					_(Ve.$$.fragment, e),
					_(He.$$.fragment, e),
					(Pe = !0));
			},
			o(e) {
				y(a.$$.fragment, e),
					y(g.$$.fragment, e),
					y(J.$$.fragment, e),
					y(F.$$.fragment, e),
					y(ce.$$.fragment, e),
					y(pe.$$.fragment, e),
					y(fe.$$.fragment, e),
					y(be.$$.fragment, e),
					y(xe.$$.fragment, e),
					y(je.$$.fragment, e),
					y(De.$$.fragment, e),
					y(Ve.$$.fragment, e),
					y(He.$$.fragment, e),
					(Pe = !1);
			},
			d(e) {
				x(a, e),
					e && c(t),
					e && c(p),
					x(g),
					e && c(R),
					e && c(T),
					x(J),
					x(F),
					e && c(Q),
					e && c(W),
					x(ce),
					e && c(ie),
					e && c($e),
					x(pe),
					x(fe),
					e && c(ue),
					e && c(he),
					x(be),
					x(xe),
					x(je),
					x(De),
					e && c(Se),
					e && c(Ie),
					x(Ve),
					e && c(Ce),
					x(He, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, O, t, {});
	}
}
