import {
	S as e,
	i as t,
	s as a,
	e as s,
	t as n,
	c as r,
	a as o,
	b as c,
	d as i,
	o as l,
	f as $,
	g as m,
	h as p,
	n as g,
	B as d,
	p as f,
	j as u,
	q as h,
	l as v,
	r as _,
	w as b,
	x,
	y as E
} from '../../chunks/index-d91e1ed8.js';
import { c as y, B as j } from '../../chunks/Grid.svelte-ab8cbe1f.js';
import { t as w } from '../../chunks/tabsContent-d9de8955.js';
import { H as D } from '../../chunks/Header-bff7bbb7.js';
/* empty css                                     */ import { I as k } from '../../chunks/Img-76e74fb8.js';
import { S as I } from '../../chunks/Section-b98eefba.js';
import { L as S, a as V } from '../../chunks/ListItem-dc89416a.js';
import { T as C } from '../../chunks/Tabs-3fc136cf.js';
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
	let t, a, d, f;
	return {
		c() {
			(t = s('pre')), (a = s('code')), (d = n(e[1])), this.h();
		},
		l(s) {
			t = r(s, 'PRE', { class: !0 });
			var n = o(t);
			a = r(n, 'CODE', { class: !0 });
			var l = o(a);
			(d = c(l, e[1])), l.forEach(i), n.forEach(i), this.h();
		},
		h() {
			l(a, 'class', (f = 'language-' + e[0] + ' svelte-pngfje')), l(t, 'class', 'svelte-pngfje');
		},
		m(e, s) {
			$(e, t, s), m(t, a), m(a, d);
		},
		p(e, [t]) {
			2 & t && p(d, e[1]),
				1 & t && f !== (f = 'language-' + e[0] + ' svelte-pngfje') && l(a, 'class', f);
		},
		i: g,
		o: g,
		d(e) {
			e && i(t);
		}
	};
}
function G(e, t, a) {
	let { language: s } = t,
		{ code: n } = t;
	return (
		d(() => {
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
	let t, a, n, c;
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
				var c = o(a);
				h(n.$$.fragment, c), c.forEach(i), s.forEach(i), this.h();
			},
			h() {
				l(a, 'class', 'col_13 mh_3 tac bgc_3 c_white'), l(t, 'class', 'dg mh_5');
			},
			m(e, s) {
				$(e, t, s), m(t, a), _(n, a, null), (c = !0);
			},
			p: g,
			i(e) {
				c || (b(n.$$.fragment, e), (c = !0));
			},
			o(e) {
				x(n.$$.fragment, e), (c = !1);
			},
			d(e) {
				e && i(t), E(n);
			}
		}
	);
}
function T(e) {
	let t, a, l, p, g;
	return {
		c() {
			(t = s('dt')),
				(a = n('Control de versiones')),
				(l = u()),
				(p = s('dd')),
				(g = n(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\t\tprototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = r(e, 'DT', {});
			var s = o(t);
			(a = c(s, 'Control de versiones')), s.forEach(i), (l = v(e)), (p = r(e, 'DD', {}));
			var n = o(p);
			(g = c(
				n,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\t\tprototipo vive en diferentes universos "paralelos"'
			)),
				n.forEach(i);
		},
		m(e, s) {
			$(e, t, s), m(t, a), $(e, l, s), $(e, p, s), m(p, g);
		},
		d(e) {
			e && i(t), e && i(l), e && i(p);
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
			t = c(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, a) {
			$(e, t, a);
		},
		d(e) {
			e && i(t);
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
			t = c(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, a) {
			$(e, t, a);
		},
		d(e) {
			e && i(t);
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
			t = c(e, 'etc');
		},
		m(e, a) {
			$(e, t, a);
		},
		d(e) {
			e && i(t);
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
			m(e, c) {
				_(t, e, c), $(e, a, c), _(s, e, c), $(e, n, c), _(r, e, c), (o = !0);
			},
			p(e, a) {
				const n = {};
				1 & a && (n.$$scope = { dirty: a, ctx: e }), t.$set(n);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), s.$set(o);
				const c = {};
				1 & a && (c.$$scope = { dirty: a, ctx: e }), r.$set(c);
			},
			i(e) {
				o || (b(t.$$.fragment, e), b(s.$$.fragment, e), b(r.$$.fragment, e), (o = !0));
			},
			o(e) {
				x(t.$$.fragment, e), x(s.$$.fragment, e), x(r.$$.fragment, e), (o = !1);
			},
			d(e) {
				E(t, e), e && i(a), E(s, e), e && i(n), E(r, e);
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
			p: g,
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
			p: g,
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
		g,
		d,
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
		ce,
		ie,
		le,
		$e,
		me,
		pe,
		ge,
		de,
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
		(d = new P({ props: { language: H[1].language, code: H[1].text } })),
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
		(ie = new S({
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
					(g = s('div')),
					f(d.$$.fragment),
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
					(ce = s('div')),
					f(ie.$$.fragment),
					(le = u()),
					($e = s('div')),
					(me = s('div')),
					f(pe.$$.fragment),
					(ge = u()),
					(de = s('div')),
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
				g = r(s, 'DIV', { class: !0 });
				var n = o(g);
				h(d.$$.fragment, n), n.forEach(i), (y = v(s)), (j = r(s, 'DIV', { class: !0 }));
				var l = o(j);
				h(w.$$.fragment, l), (C = v(l)), (z = r(l, 'P', {}));
				var $ = o(z);
				(G = c(
					$,
					'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al\n\t\t\tinstante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
					$.forEach(i),
					l.forEach(i),
					s.forEach(i),
					(L = v(e)),
					(R = r(e, 'DIV', { class: !0 }));
				var m = o(R);
				A = r(m, 'DIV', { class: !0 });
				var f = o(A);
				U = r(f, 'P', {});
				var u = o(U);
				J = r(u, 'STRONG', {});
				var _ = o(J);
				(K = c(_, 'Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					_.forEach(i),
					u.forEach(i),
					(M = v(f)),
					(F = r(f, 'P', {}));
				var b = o(F);
				(Q = c(b, 'Su simplicidad y belleza saltan a la vista.\n\t\t\t')), (W = r(b, 'STRONG', {}));
				var x = o(W);
				(X = c(x, 'Encapsulamiento holístico:')),
					x.forEach(i),
					(Y = c(
						b,
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					b.forEach(i),
					f.forEach(i),
					(Z = v(m)),
					(ee = r(m, 'DIV', { class: !0 }));
				var E = o(ee);
				h(te.$$.fragment, E),
					E.forEach(i),
					m.forEach(i),
					(ae = v(e)),
					(se = r(e, 'DIV', { class: !0 }));
				var D = o(se);
				ne = r(D, 'DIV', { class: !0 });
				var k = o(ne);
				h(re.$$.fragment, k), k.forEach(i), (oe = v(D)), (ce = r(D, 'DIV', { class: !0 }));
				var I = o(ce);
				h(ie.$$.fragment, I),
					I.forEach(i),
					D.forEach(i),
					(le = v(e)),
					($e = r(e, 'DIV', { class: !0 }));
				var S = o($e);
				me = r(S, 'DIV', { class: !0 });
				var V = o(me);
				h(pe.$$.fragment, V), V.forEach(i), (ge = v(S)), (de = r(S, 'DIV', { class: !0 }));
				var H = o(de);
				h(fe.$$.fragment, H),
					(ue = v(H)),
					h(he.$$.fragment, H),
					(ve = v(H)),
					h(_e.$$.fragment, H),
					H.forEach(i),
					S.forEach(i),
					(be = v(e)),
					(xe = r(e, 'DIV', { class: !0 }));
				var P = o(xe);
				Ee = r(P, 'DIV', { class: !0 });
				var q = o(Ee);
				h(ye.$$.fragment, q),
					q.forEach(i),
					P.forEach(i),
					(je = v(e)),
					h(we.$$.fragment, e),
					this.h();
			},
			h() {
				l(g, 'class', 'col_13 col_s2_8 mt_-4'),
					l(j, 'class', 'col_13 col_s2_5 dg_0 pcc'),
					l(p, 'class', 'dg bgc_0 c_4 pl_3 pr_3 rg_1 cg_s2_2 pb_0'),
					l(A, 'class', 'col_13 col_s2_5'),
					l(ee, 'class', 'col_13 col_s2_8'),
					l(R, 'class', 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0'),
					l(ne, 'class', 'col_13 col_s2_8'),
					l(ce, 'class', 'col_13 col_s2_5'),
					l(se, 'class', 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2'),
					l(me, 'class', 'col_13 col_s2_8'),
					l(de, 'class', 'col_13 col_s2_5 dg_0 pcc c_4'),
					l($e, 'class', 'dg rg_1 cg_s2_2 p_3 bgc_1 mh_10 mh_s2_5'),
					l(Ee, 'class', 'col_13'),
					l(xe, 'class', 'dg pt_3 pb_3 tac bgc_4');
			},
			m(e, s) {
				_(t, e, s),
					$(e, a, s),
					$(e, p, s),
					m(p, g),
					_(d, g, null),
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
					m(se, ce),
					_(ie, ce, null),
					$(e, le, s),
					$(e, $e, s),
					m($e, me),
					_(pe, me, null),
					m($e, ge),
					m($e, de),
					_(fe, de, null),
					m(de, ue),
					_(he, de, null),
					m(de, ve),
					_(_e, de, null),
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
				1 & a && (n.$$scope = { dirty: a, ctx: e }), ie.$set(n);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), he.$set(r);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), _e.$set(o);
				const c = {};
				1 & a && (c.$$scope = { dirty: a, ctx: e }), we.$set(c);
			},
			i(e) {
				De ||
					(b(t.$$.fragment, e),
					b(d.$$.fragment, e),
					b(w.$$.fragment, e),
					b(te.$$.fragment, e),
					b(re.$$.fragment, e),
					b(ie.$$.fragment, e),
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
					x(d.$$.fragment, e),
					x(w.$$.fragment, e),
					x(te.$$.fragment, e),
					x(re.$$.fragment, e),
					x(ie.$$.fragment, e),
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
					e && i(a),
					e && i(p),
					E(d),
					E(w),
					e && i(L),
					e && i(R),
					E(te),
					e && i(ae),
					e && i(se),
					E(re),
					E(ie),
					e && i(le),
					e && i($e),
					E(pe),
					E(fe),
					E(he),
					E(_e),
					e && i(be),
					e && i(xe),
					E(ye),
					e && i(je),
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
