import {
	S as e,
	i as t,
	s as a,
	e as s,
	t as n,
	c as r,
	a as o,
	b as i,
	d as c,
	o as l,
	f as $,
	g as m,
	h as p,
	n as d,
	B as g,
	p as f,
	j as u,
	q as h,
	l as v,
	r as _,
	w as b,
	x,
	y as E
} from '../../chunks/index-d91e1ed8.js';
import { c as y, B as j } from '../../chunks/Grid.svelte-1b56dd60.js';
import { t as w } from '../../chunks/tabsContent-d9de8955.js';
import { H as D } from '../../chunks/Header-bbb40db3.js';
/* empty css                                     */ import { I as k } from '../../chunks/Img-1aaa5537.js';
import { S as I } from '../../chunks/Section-18758c52.js';
import { L as S, a as V } from '../../chunks/ListItem-13a8e652.js';
import { T as C } from '../../chunks/Tabs-b9f98100.js';
const H = [
	{
		language: 'scss',
		text:
			'\n// Gaps horizontales\n// .cg_2 {\n//     column-gap: 2.618rem;\n// }\n@for $i from 1 through 5 {\n    .cg_#{$i} {\n        column-gap: sizes($i);\n    }\n}\n@include media(s2) {\n    @for $i from 1 through 5 {\n        .cg_s2_#{$i} {\n            column-gap: sizes($i);\n        }\n    }\n}\n'
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
	let t, a, g, f;
	return {
		c() {
			(t = s('pre')), (a = s('code')), (g = n(e[1])), this.h();
		},
		l(s) {
			t = r(s, 'PRE', { class: !0 });
			var n = o(t);
			a = r(n, 'CODE', { class: !0 });
			var l = o(a);
			(g = i(l, e[1])), l.forEach(c), n.forEach(c), this.h();
		},
		h() {
			l(a, 'class', (f = 'language-' + e[0] + ' svelte-105llix')), l(t, 'class', 'svelte-105llix');
		},
		m(e, s) {
			$(e, t, s), m(t, a), m(a, g);
		},
		p(e, [t]) {
			2 & t && p(g, e[1]),
				1 & t && f !== (f = 'language-' + e[0] + ' svelte-105llix') && l(a, 'class', f);
		},
		i: d,
		o: d,
		d(e) {
			e && c(t);
		}
	};
}
function G(e, t, a) {
	let { language: s } = t,
		{ code: n } = t;
	return (
		g(() => {
			let e = document.createElement('script');
			(e.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'),
				document.head.append(e),
				(e.onload = function () {
					let e,
						t,
						a = !1;
					switch (s) {
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
			'language' in e && a(0, (s = e.language)), 'code' in e && a(1, (n = e.code));
		}),
		[s, n]
	);
}
class P extends e {
	constructor(e) {
		super(), t(this, e, G, z, a, { language: 0, code: 1 });
	}
}
function q(e) {
	let t, a, n, i;
	return (
		(n = new D({
			props: {
				tipo: 2,
				variante: 0,
				img: './img/grafico-1.svg',
				title: y[4].title,
				subtitle: y[4].subtitle
			}
		})),
		{
			c() {
				(t = s('div')), (a = s('div')), f(n.$$.fragment), this.h();
			},
			l(e) {
				t = r(e, 'DIV', { class: !0 });
				var s = o(t);
				a = r(s, 'DIV', { class: !0 });
				var i = o(a);
				h(n.$$.fragment, i), i.forEach(c), s.forEach(c), this.h();
			},
			h() {
				l(a, 'class', 'col_13 mh_3 tac bgc_3 c_white'), l(t, 'class', 'dg mh_5');
			},
			m(e, s) {
				$(e, t, s), m(t, a), _(n, a, null), (i = !0);
			},
			p: d,
			i(e) {
				i || (b(n.$$.fragment, e), (i = !0));
			},
			o(e) {
				x(n.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && c(t), E(n);
			}
		}
	);
}
function T(e) {
	let t, a, l, p, d;
	return {
		c() {
			(t = s('dt')),
				(a = n('Control de versiones')),
				(l = u()),
				(p = s('dd')),
				(d = n(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\t\tprototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = r(e, 'DT', {});
			var s = o(t);
			(a = i(s, 'Control de versiones')), s.forEach(c), (l = v(e)), (p = r(e, 'DD', {}));
			var n = o(p);
			(d = i(
				n,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\t\tprototipo vive en diferentes universos "paralelos"'
			)),
				n.forEach(c);
		},
		m(e, s) {
			$(e, t, s), m(t, a), $(e, l, s), $(e, p, s), m(p, d);
		},
		d(e) {
			e && c(t), e && c(l), e && c(p);
		}
	};
}
function L(e) {
	let t;
	return {
		c() {
			t = n('Simple, ligero, limpio y claro.');
		},
		l(e) {
			t = i(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, a) {
			$(e, t, a);
		},
		d(e) {
			e && c(t);
		}
	};
}
function R(e) {
	let t;
	return {
		c() {
			t = n('Completo, funcional, versátil y ordenado.');
		},
		l(e) {
			t = i(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, a) {
			$(e, t, a);
		},
		d(e) {
			e && c(t);
		}
	};
}
function A(e) {
	let t;
	return {
		c() {
			t = n('etc');
		},
		l(e) {
			t = i(e, 'etc');
		},
		m(e, a) {
			$(e, t, a);
		},
		d(e) {
			e && c(t);
		}
	};
}
function B(e) {
	let t, a, s, n, r, o;
	return (
		(t = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [L] }, $$scope: { ctx: e } }
		})),
		(s = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [R] }, $$scope: { ctx: e } }
		})),
		(r = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [A] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				f(t.$$.fragment), (a = u()), f(s.$$.fragment), (n = u()), f(r.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e), (a = v(e)), h(s.$$.fragment, e), (n = v(e)), h(r.$$.fragment, e);
			},
			m(e, i) {
				_(t, e, i), $(e, a, i), _(s, e, i), $(e, n, i), _(r, e, i), (o = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), s.$set(o);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: e }), r.$set(i);
			},
			i(e) {
				o || (b(t.$$.fragment, e), b(s.$$.fragment, e), b(r.$$.fragment, e), (o = !0));
			},
			o(e) {
				x(t.$$.fragment, e), x(s.$$.fragment, e), x(r.$$.fragment, e), (o = !1);
			},
			d(e) {
				E(t, e), e && c(a), E(s, e), e && c(n), E(r, e);
			}
		}
	);
}
function N(e) {
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
			m(e, s) {
				_(t, e, s), (a = !0);
			},
			p: d,
			i(e) {
				a || (b(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				x(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function O(e) {
	let t, a;
	return (
		(t = new C({ props: { tabHeaders: w } })),
		{
			c() {
				f(t.$$.fragment);
			},
			l(e) {
				h(t.$$.fragment, e);
			},
			m(e, s) {
				_(t, e, s), (a = !0);
			},
			p: d,
			i(e) {
				a || (b(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				x(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				E(t, e);
			}
		}
	);
}
function U(e) {
	let t,
		a,
		p,
		d,
		g,
		y,
		j,
		w,
		C,
		z,
		G,
		L,
		R,
		A,
		U,
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
		te,
		ae,
		se,
		ne,
		re,
		oe,
		ie,
		ce,
		le,
		$e,
		me,
		pe,
		de,
		ge,
		fe,
		ue,
		he,
		ve,
		_e,
		be,
		xe,
		Ee,
		ye,
		je,
		we,
		De;
	return (
		(t = new I({
			props: { id: 'cover', variante: 1, $$slots: { default: [q] }, $$scope: { ctx: e } }
		})),
		(g = new P({ props: { language: H[1].language, code: H[1].text } })),
		(w = new D({
			props: {
				tipo: 3,
				variante: 6,
				textalign: 'align-left',
				title: 'Svelte Kit',
				subtitle: 'Simbiosis perfecta entre CSS, HTML y JS'
			}
		})),
		(te = new P({ props: { language: H[0].language, code: H[0].text } })),
		(re = new P({ props: { language: H[2].language, code: H[2].text } })),
		(ce = new S({
			props: { tipo: 2, variante: 0, $$slots: { default: [T] }, $$scope: { ctx: e } }
		})),
		(pe = new k({ props: { src: './img/grafico-11.svg', alt: '' } })),
		(fe = new D({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		(he = new S({
			props: {
				tipo: 0,
				variante: 0,
				marker: './img/marker.svg',
				$$slots: { default: [B] },
				$$scope: { ctx: e }
			}
		})),
		(_e = new V({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [N] },
				$$scope: { ctx: e }
			}
		})),
		(ye = new D({ props: { tipo: 1, variante: 1, title: 'Notas acerca de esta web' } })),
		(we = new I({
			props: { id: 'UIPrototype', variante: 7, $$slots: { default: [O] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				f(t.$$.fragment),
					(a = u()),
					(p = s('div')),
					(d = s('div')),
					f(g.$$.fragment),
					(y = u()),
					(j = s('div')),
					f(w.$$.fragment),
					(C = u()),
					(z = s('p')),
					(G = n(
						'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al\n\t\t\tinstante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
					)),
					(L = u()),
					(R = s('div')),
					(A = s('div')),
					(U = s('p')),
					(J = s('strong')),
					(K = n('Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					(M = u()),
					(F = s('p')),
					(Q = n('Su simplicidad y belleza saltan a la vista.\n\t\t\t')),
					(W = s('strong')),
					(X = n('Encapsulamiento holístico:')),
					(Y = n(
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					(Z = u()),
					(ee = s('div')),
					f(te.$$.fragment),
					(ae = u()),
					(se = s('div')),
					(ne = s('div')),
					f(re.$$.fragment),
					(oe = u()),
					(ie = s('div')),
					f(ce.$$.fragment),
					(le = u()),
					($e = s('div')),
					(me = s('div')),
					f(pe.$$.fragment),
					(de = u()),
					(ge = s('div')),
					f(fe.$$.fragment),
					(ue = u()),
					f(he.$$.fragment),
					(ve = u()),
					f(_e.$$.fragment),
					(be = u()),
					(xe = s('div')),
					(Ee = s('div')),
					f(ye.$$.fragment),
					(je = u()),
					f(we.$$.fragment),
					this.h();
			},
			l(e) {
				h(t.$$.fragment, e), (a = v(e)), (p = r(e, 'DIV', { class: !0 }));
				var s = o(p);
				d = r(s, 'DIV', { class: !0 });
				var n = o(d);
				h(g.$$.fragment, n), n.forEach(c), (y = v(s)), (j = r(s, 'DIV', { class: !0 }));
				var l = o(j);
				h(w.$$.fragment, l), (C = v(l)), (z = r(l, 'P', {}));
				var $ = o(z);
				(G = i(
					$,
					'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al\n\t\t\tinstante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
					$.forEach(c),
					l.forEach(c),
					s.forEach(c),
					(L = v(e)),
					(R = r(e, 'DIV', { class: !0 }));
				var m = o(R);
				A = r(m, 'DIV', { class: !0 });
				var f = o(A);
				U = r(f, 'P', {});
				var u = o(U);
				J = r(u, 'STRONG', {});
				var _ = o(J);
				(K = i(_, 'Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					_.forEach(c),
					u.forEach(c),
					(M = v(f)),
					(F = r(f, 'P', {}));
				var b = o(F);
				(Q = i(b, 'Su simplicidad y belleza saltan a la vista.\n\t\t\t')), (W = r(b, 'STRONG', {}));
				var x = o(W);
				(X = i(x, 'Encapsulamiento holístico:')),
					x.forEach(c),
					(Y = i(
						b,
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					b.forEach(c),
					f.forEach(c),
					(Z = v(m)),
					(ee = r(m, 'DIV', { class: !0 }));
				var E = o(ee);
				h(te.$$.fragment, E),
					E.forEach(c),
					m.forEach(c),
					(ae = v(e)),
					(se = r(e, 'DIV', { class: !0 }));
				var D = o(se);
				ne = r(D, 'DIV', { class: !0 });
				var k = o(ne);
				h(re.$$.fragment, k), k.forEach(c), (oe = v(D)), (ie = r(D, 'DIV', { class: !0 }));
				var I = o(ie);
				h(ce.$$.fragment, I),
					I.forEach(c),
					D.forEach(c),
					(le = v(e)),
					($e = r(e, 'DIV', { class: !0 }));
				var S = o($e);
				me = r(S, 'DIV', { class: !0 });
				var V = o(me);
				h(pe.$$.fragment, V), V.forEach(c), (de = v(S)), (ge = r(S, 'DIV', { class: !0 }));
				var H = o(ge);
				h(fe.$$.fragment, H),
					(ue = v(H)),
					h(he.$$.fragment, H),
					(ve = v(H)),
					h(_e.$$.fragment, H),
					H.forEach(c),
					S.forEach(c),
					(be = v(e)),
					(xe = r(e, 'DIV', { class: !0 }));
				var P = o(xe);
				Ee = r(P, 'DIV', { class: !0 });
				var q = o(Ee);
				h(ye.$$.fragment, q),
					q.forEach(c),
					P.forEach(c),
					(je = v(e)),
					h(we.$$.fragment, e),
					this.h();
			},
			h() {
				l(d, 'class', 'col_13 col_s2_8 mt_-4'),
					l(j, 'class', 'col_13 col_s2_5 dg_0 pcc'),
					l(p, 'class', 'dg bgc_0 c_4 pl_3 pr_3 rg_1 cg_s2_2 pb_0'),
					l(A, 'class', 'col_13 col_s2_5'),
					l(ee, 'class', 'col_13 col_s2_8'),
					l(R, 'class', 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0'),
					l(ne, 'class', 'col_13 col_s2_8'),
					l(ie, 'class', 'col_13 col_s2_5'),
					l(se, 'class', 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2'),
					l(me, 'class', 'col_13 col_s2_8'),
					l(ge, 'class', 'col_13 col_s2_5 dg_0 pcc c_4 p_3'),
					l($e, 'class', 'dg rg_1 bgc_1 mh_10 mh_s2_5'),
					l(Ee, 'class', 'col_13'),
					l(xe, 'class', 'dg pt_3 pb_3 tac bgc_4');
			},
			m(e, s) {
				_(t, e, s),
					$(e, a, s),
					$(e, p, s),
					m(p, d),
					_(g, d, null),
					m(p, y),
					m(p, j),
					_(w, j, null),
					m(j, C),
					m(j, z),
					m(z, G),
					$(e, L, s),
					$(e, R, s),
					m(R, A),
					m(A, U),
					m(U, J),
					m(J, K),
					m(A, M),
					m(A, F),
					m(F, Q),
					m(F, W),
					m(W, X),
					m(F, Y),
					m(R, Z),
					m(R, ee),
					_(te, ee, null),
					$(e, ae, s),
					$(e, se, s),
					m(se, ne),
					_(re, ne, null),
					m(se, oe),
					m(se, ie),
					_(ce, ie, null),
					$(e, le, s),
					$(e, $e, s),
					m($e, me),
					_(pe, me, null),
					m($e, de),
					m($e, ge),
					_(fe, ge, null),
					m(ge, ue),
					_(he, ge, null),
					m(ge, ve),
					_(_e, ge, null),
					$(e, be, s),
					$(e, xe, s),
					m(xe, Ee),
					_(ye, Ee, null),
					$(e, je, s),
					_(we, e, s),
					(De = !0);
			},
			p(e, [a]) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: e }), t.$set(s);
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), ce.$set(n);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), he.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), _e.$set(o);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: e }), we.$set(i);
			},
			i(e) {
				De ||
					(b(t.$$.fragment, e),
					b(g.$$.fragment, e),
					b(w.$$.fragment, e),
					b(te.$$.fragment, e),
					b(re.$$.fragment, e),
					b(ce.$$.fragment, e),
					b(pe.$$.fragment, e),
					b(fe.$$.fragment, e),
					b(he.$$.fragment, e),
					b(_e.$$.fragment, e),
					b(ye.$$.fragment, e),
					b(we.$$.fragment, e),
					(De = !0));
			},
			o(e) {
				x(t.$$.fragment, e),
					x(g.$$.fragment, e),
					x(w.$$.fragment, e),
					x(te.$$.fragment, e),
					x(re.$$.fragment, e),
					x(ce.$$.fragment, e),
					x(pe.$$.fragment, e),
					x(fe.$$.fragment, e),
					x(he.$$.fragment, e),
					x(_e.$$.fragment, e),
					x(ye.$$.fragment, e),
					x(we.$$.fragment, e),
					(De = !1);
			},
			d(e) {
				E(t, e),
					e && c(a),
					e && c(p),
					E(g),
					E(w),
					e && c(L),
					e && c(R),
					E(te),
					e && c(ae),
					e && c(se),
					E(re),
					E(ce),
					e && c(le),
					e && c($e),
					E(pe),
					E(fe),
					E(he),
					E(_e),
					e && c(be),
					e && c(xe),
					E(ye),
					e && c(je),
					E(we, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, U, a, {});
	}
}
