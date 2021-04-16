import {
	S as e,
	i as t,
	s,
	M as a,
	e as c,
	c as n,
	a as o,
	d as r,
	o as $,
	f as l,
	O as i,
	w as g,
	x as m,
	t as p,
	b as f,
	g as d,
	h as _,
	n as u,
	B as h,
	j as v,
	l as x,
	G as b,
	P as w,
	p as y,
	q as E,
	r as L,
	y as S
} from '../../chunks/index-d91e1ed8.js';
import { B as k, c as A } from '../../chunks/Grid.svelte-1020bc4e.js';
import { H as D } from '../../chunks/Header-6d172df2.js';
/* empty css                                     */ import { I } from '../../chunks/Img-4f632789.js';
import { S as M } from '../../chunks/Section-ebe14856.js';
import { L as V, a as C } from '../../chunks/ListItem-9aa7bd94.js';
import { T as j } from '../../chunks/Tabs-59db9e00.js';
const q = [
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
	],
	z = [
		{
			id: 0,
			title: 'Historia',
			subtitle: 'La esencia',
			img: './icons/diamond.svg',
			tags: [
				'Infinitud',
				'Potencial',
				'Lo Incognoscible',
				'Ein Sof',
				'Mar de Nun',
				'Vacío',
				'Infinitud',
				'Océano Primordial'
			],
			content:
				'Aún recuerdo la emoción que sentí en 1995 cuando vinculé dos páginas por primera vez. Fué con el procesador de textos Word, el mundillo del desarrollo web ha cambiado radicalmente desde entonces pero todavía me estimula el aroma mágico y la sencillez de las primeras páginas web estáticas. Este sitio usa tecnologías modernas pero impregnadas de ese espíritu artesanal clásico. <br> '
		},
		{
			id: 1,
			title: 'Proceso',
			subtitle: 'El Arjé',
			img: './icons/cryptography.svg',
			tags: [
				'ser',
				'Principio Solar',
				'Núcleo',
				'Voluntad',
				'Inicio',
				'Unidad',
				'Centro',
				'Espíritu',
				'Luz'
			],
			content:
				'Como una araña que teje laboriosa y pacientemente su red de conexiones, así elaboro cada tapiz web. La idea es conseguir la máxima velocidad contínua. De la máxima borrosidad a la máxima nitidez, sin detenerse. Por ejemplo; ¿porqué perder tiempo prediseñando en Sketch o inVision cuando podemos validar directamente en el navegador? Por más tiempo que se invierta en prototipos offline de alta definición nunca será ni se comportará 100% igual en un navegador. El diseño front-end en mi opinión debe ser real y estar vivo.'
		},
		{
			id: 2,
			title: 'Keep it simple',
			subtitle: 'Todo ya existe y funciona',
			img: './icons/nodes.svg',
			tags: [
				'Alma',
				'Agua',
				'Dualidad',
				'Reshimó',
				'Identidad',
				'Separación',
				'Caída',
				'Memoria',
				'Campo Sensible'
			],
			content:
				'La complejidad del mundo del desarrollo web es vasta e insondable. Uno nunca tiene la sensación de saber mucho de nada. Precisamente por eso es tan importante centrarse en los estándares (JS, CSS, Html), tratar de evitar complejos frameworks para cada cosa y proveerse de buenas prácticas. Con Svelte solucionas facilmente toda la parte de gestión de tareas, motor de templates y componentización.'
		},
		{
			id: 3,
			title: 'Pasión',
			subtitle: 'Belleza',
			img: './icons/shape-circle.svg',
			tags: [
				'Símbolo',
				'Lenguaje',
				'Aire',
				'Encuentro',
				'Trasciende',
				'Conexión',
				'Insight',
				'Neshamá'
			],
			content:
				"Aunque el placer que me produce hacer esta web es también, a veces, inversamente proporcional a los motivos de displacer. Creo que he conseguido mantener tantos años el interés por el diseño frontend porque está relacionado con todo lo demás. La percepción holística que he desarrollado con +0+1234 revivifica y estimula mi interés por lo analógico y también por lo digital. Conceptualmente no soy capaz de distinguir entre un 'div' y una sephira cabalistica. Al final todo son vasijas que reciben luz. El espacio, las proporciones en el diseño están intimamente unidas a las proporciones de la naturaleza. Y no se me ocurre cosa más poética que una función Javascript, por ejemplo, porque a un nivel muy profundo las acciones que suceden, los comportamientos, los símbolos, las estructuras y los ciclos que intervienen en los ecosistemas web son análogos a lo que nos ha transmitido la tradición del pensamiento filosófico más antiguo."
		},
		{
			id: 4,
			title: 'Testing contínuo',
			subtitle: 'El Ritmo',
			img: './icons/code-tree.svg',
			tags: [
				'Tierra',
				'Límites',
				'Estructura',
				'Cuaternario',
				'Herramientas',
				'Acción',
				'Experiencia',
				'Tiempo'
			],
			content:
				'Nos interesa desplegar en cero coma para validar cuanto antes, por eso Git y Vercel son nuestros mejores aliados. Cada cambio, retoque, corrección, ajuste se actualiza en tiempo real con una demora de pocos segundos. Éste es mi concepto de Agilidad, el mío propio, y me parece el más efectivo.'
		}
	];
function P(e) {
	let t, s;
	const p = e[2].default,
		f = a(p, e, e[1], null);
	return {
		c() {
			(t = c('code')), f && f.c(), this.h();
		},
		l(e) {
			t = n(e, 'CODE', { class: !0 });
			var s = o(t);
			f && f.l(s), s.forEach(r), this.h();
		},
		h() {
			$(t, 'class', e[0]);
		},
		m(e, a) {
			l(e, t, a), f && f.m(t, null), (s = !0);
		},
		p(e, [a]) {
			f && f.p && 2 & a && i(f, p, e, e[1], a, null, null), (!s || 1 & a) && $(t, 'class', e[0]);
		},
		i(e) {
			s || (g(f, e), (s = !0));
		},
		o(e) {
			m(f, e), (s = !1);
		},
		d(e) {
			e && r(t), f && f.d(e);
		}
	};
}
function H(e, t, s) {
	let { $$slots: a = {}, $$scope: c } = t,
		{ clases: n = '' } = t;
	return (
		(e.$$set = (e) => {
			'clases' in e && s(0, (n = e.clases)), '$$scope' in e && s(1, (c = e.$$scope));
		}),
		[n, c, a]
	);
}
class B extends e {
	constructor(e) {
		super(), t(this, e, H, P, s, { clases: 0 });
	}
}
function G(e) {
	let t, s, a, i, g;
	return {
		c() {
			(t = c('div')), (s = c('pre')), (a = c('code')), (i = p(e[1])), this.h();
		},
		l(c) {
			t = n(c, 'DIV', { class: !0 });
			var $ = o(t);
			s = n($, 'PRE', {});
			var l = o(s);
			a = n(l, 'CODE', { class: !0 });
			var g = o(a);
			(i = f(g, e[1])), g.forEach(r), l.forEach(r), $.forEach(r), this.h();
		},
		h() {
			$(a, 'class', (g = 'language-' + e[0])), $(t, 'class', e[2]);
		},
		m(e, c) {
			l(e, t, c), d(t, s), d(s, a), d(a, i);
		},
		p(e, [s]) {
			2 & s && _(i, e[1]),
				1 & s && g !== (g = 'language-' + e[0]) && $(a, 'class', g),
				4 & s && $(t, 'class', e[2]);
		},
		i: u,
		o: u,
		d(e) {
			e && r(t);
		}
	};
}
function T(e, t, s) {
	let { language: a } = t,
		{ code: c } = t,
		{ clases: n = '' } = t;
	return (
		h(() => {
			let e = document.createElement('script');
			(e.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'),
				document.head.append(e),
				(e.onload = function () {
					let e,
						t,
						s = !1;
					switch (a) {
						case 'json':
							(t = 'https://prismjs.com/components/prism-json.js'), (s = !0);
							break;
						case 'python':
							(t = 'https://prismjs.com/components/prism-python.js'), (s = !0);
							break;
						case 'r':
							(t = 'https://prismjs.com/components/prism-r.js'), (s = !0);
					}
					1 == s
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
			'language' in e && s(0, (a = e.language)),
				'code' in e && s(1, (c = e.code)),
				'clases' in e && s(2, (n = e.clases));
		}),
		[a, c, n]
	);
}
class N extends e {
	constructor(e) {
		super(), t(this, e, T, G, s, { language: 0, code: 1, clases: 2 });
	}
}
const R = [
	{
		word: 'Velociraptor',
		image: '/icons/code-css.svg',
		code: '\n1 @for $i from 1 through 5 {\n\t.cg_#{$i} {\n\t\tcolumn-gap: sizes($i);\n\t}\n}\n'
	},
	{
		word: 'Raptor Delta',
		image: '/icons/touch-id.svg',
		code:
			'\n// 1\n// .cg_2 {\n//     column-gap: 2.618rem;\n// }\n@for $i from 1 through 5 {\n\t.cg_#{$i} {\n\t\tcolumn-gap: sizes($i);\n\t}\n}\n'
	},
	{
		word: 'vesica piscis',
		image: '/icons/barcode-qr.svg',
		code:
			'\n// 2\n@for $i from 1 through 5 {\n\t.cg_#{$i} {\n\t\tcolumn-gap: sizes($i);\n\t}\n}\n@include media(s2) {\n\t@for $i from 1 through 5 {\n\t\t.cg_s2_#{$i} {\n\t\t\tcolumn-gap: sizes($i);\n\t\t}\n\t}\n}\n'
	},
	{
		word: 'vesica piscis',
		image: '/icons/cryptography.svg',
		code:
			'\n// 3\n// .cg_2 {\n//     column-gap: 2.618rem;\n// }\n@for $i from 1 through 5 {\n\t.cg_#{$i} {\n\t\tcolumn-gap: sizes($i);\n\t}\n}\n@include media(s2) {\n\t@for $i from 1 through 5 {\n\t\t.cg_s2_#{$i} {\n\t\t\tcolumn-gap: sizes($i);\n\t\t}\n\t}\n}\n'
	},
	{
		word: 'vesica piscis',
		image: '/icons/code-html2.svg',
		code:
			'\n// 3\n// .cg_2 {\n//     column-gap: 2.618rem;\n// }\n@for $i from 1 through 5 {\n\t.cg_#{$i} {\n\t\tcolumn-gap: sizes($i);\n\t}\n}\n@include media(s2) {\n\t@for $i from 1 through 5 {\n\t\t.cg_s2_#{$i} {\n\t\t\tcolumn-gap: sizes($i);\n\t\t}\n\t}\n}\n'
	}
];
function O(e) {
	let t, s, a, i, g, m, h, y, E;
	return {
		c() {
			(t = c('div')),
				(s = c('h2')),
				(a = p(e[0])),
				(i = v()),
				(g = c('code')),
				(m = p(e[1])),
				(h = v()),
				(y = c('div')),
				(E = c('div')),
				this.h();
		},
		l(c) {
			t = n(c, 'DIV', { class: !0 });
			var $ = o(t);
			s = n($, 'H2', {});
			var l = o(s);
			(a = f(l, e[0])), l.forEach(r), (i = x($)), (g = n($, 'CODE', { class: !0 }));
			var p = o(g);
			(m = f(p, e[1])), p.forEach(r), $.forEach(r), (h = x(c)), (y = n(c, 'DIV', { class: !0 }));
			var d = o(y);
			(E = n(d, 'DIV', { class: !0, style: !0 })), o(E).forEach(r), d.forEach(r), this.h();
		},
		h() {
			$(g, 'class', 'code language- svelte-135p8ti'),
				$(t, 'class', 'col_5 backFlipBox svelte-135p8ti'),
				b(t, 'NoRebelesTxt', e[3]),
				$(E, 'class', 'image svelte-135p8ti'),
				w(E, 'background-image', 'url(' + e[2] + ')'),
				$(y, 'class', 'col_8 frontFlipBox svelte-135p8ti');
		},
		m(e, c) {
			l(e, t, c), d(t, s), d(s, a), d(t, i), d(t, g), d(g, m), l(e, h, c), l(e, y, c), d(y, E);
		},
		p(e, [s]) {
			1 & s && _(a, e[0]),
				2 & s && _(m, e[1]),
				8 & s && b(t, 'NoRebelesTxt', e[3]),
				4 & s && w(E, 'background-image', 'url(' + e[2] + ')');
		},
		i: u,
		o: u,
		d(e) {
			e && r(t), e && r(h), e && r(y);
		}
	};
}
function U(e, t, s) {
	let { back_txt: a } = t,
		{ code: c } = t,
		{ foto: n } = t,
		{ showCarBack: o } = t;
	return (
		(e.$$set = (e) => {
			'back_txt' in e && s(0, (a = e.back_txt)),
				'code' in e && s(1, (c = e.code)),
				'foto' in e && s(2, (n = e.foto)),
				'showCarBack' in e && s(3, (o = e.showCarBack));
		}),
		[a, c, n, o]
	);
}
class F extends e {
	constructor(e) {
		super(), t(this, e, U, O, s, { back_txt: 0, code: 1, foto: 2, showCarBack: 3 });
	}
}
function J(e) {
	let t, s, a, i, p, f, _, u, h, w, A, D;
	return (
		(a = new k({ props: { variante: 5, text: '↜' } })),
		a.$on('click', e[6]),
		(p = new k({ props: { variante: 5, text: e[1] ? '⤿' : '⤾' } })),
		p.$on('click', e[5]),
		(_ = new k({ props: { variante: 5, text: '⤳' } })),
		_.$on('click', e[7]),
		(w = new F({ props: { showCarBack: e[1], code: e[2], foto: e[3], back_txt: e[4] } })),
		{
			c() {
				(t = c('div')),
					(s = c('div')),
					y(a.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(f = v()),
					y(_.$$.fragment),
					(u = v()),
					(h = c('div')),
					y(w.$$.fragment),
					this.h();
			},
			l(e) {
				t = n(e, 'DIV', { class: !0 });
				var c = o(t);
				s = n(c, 'DIV', { class: !0 });
				var $ = o(s);
				E(a.$$.fragment, $),
					(i = x($)),
					E(p.$$.fragment, $),
					(f = x($)),
					E(_.$$.fragment, $),
					$.forEach(r),
					(u = x(c)),
					(h = n(c, 'DIV', { class: !0 }));
				var l = o(h);
				E(w.$$.fragment, l), l.forEach(r), c.forEach(r), this.h();
			},
			h() {
				$(s, 'class', 'ButtonControls svelte-pfqgmp'),
					$(h, 'class', 'dg_0 flip-box-inner svelte-pfqgmp'),
					b(h, 'flip-it', e[1]),
					$(t, 'class', (A = 'flip-box ' + e[0] + ' svelte-pfqgmp'));
			},
			m(e, c) {
				l(e, t, c),
					d(t, s),
					L(a, s, null),
					d(s, i),
					L(p, s, null),
					d(s, f),
					L(_, s, null),
					d(t, u),
					d(t, h),
					L(w, h, null),
					(D = !0);
			},
			p(e, [s]) {
				const a = {};
				2 & s && (a.text = e[1] ? '⤿' : '⤾'), p.$set(a);
				const c = {};
				2 & s && (c.showCarBack = e[1]),
					4 & s && (c.code = e[2]),
					8 & s && (c.foto = e[3]),
					16 & s && (c.back_txt = e[4]),
					w.$set(c),
					2 & s && b(h, 'flip-it', e[1]),
					(!D || (1 & s && A !== (A = 'flip-box ' + e[0] + ' svelte-pfqgmp'))) && $(t, 'class', A);
			},
			i(e) {
				D ||
					(g(a.$$.fragment, e),
					g(p.$$.fragment, e),
					g(_.$$.fragment, e),
					g(w.$$.fragment, e),
					(D = !0));
			},
			o(e) {
				m(a.$$.fragment, e),
					m(p.$$.fragment, e),
					m(_.$$.fragment, e),
					m(w.$$.fragment, e),
					(D = !1);
			},
			d(e) {
				e && r(t), S(a), S(p), S(_), S(w);
			}
		}
	);
}
function W(e, t, s) {
	let a,
		c,
		n,
		{ clases: o = '' } = t;
	let r = !1,
		$ = 0;
	return (
		(e.$$set = (e) => {
			'clases' in e && s(0, (o = e.clases));
		}),
		(e.$$.update = () => {
			256 & e.$$.dirty && s(2, (a = R[$].code)),
				256 & e.$$.dirty && s(3, (c = R[$].image)),
				256 & e.$$.dirty && s(4, (n = R[$].word));
		}),
		[
			o,
			r,
			a,
			c,
			n,
			() => s(1, (r = !r)),
			() => {
				s(1, (r = !1)), s(8, 0 === $ ? ($ = R.length - 1) : ($ -= 1));
			},
			() => {
				s(1, (r = !1)), s(8, $ === R.length - 1 ? ($ = 0) : ($ += 1));
			},
			$
		]
	);
}
class K extends e {
	constructor(e) {
		super(), t(this, e, W, J, s, { clases: 0 });
	}
}
function Y(e) {
	let t, s, a, i, _, h, b, w, k, A, I, M;
	return (
		(t = new N({
			props: { clases: 'col_13 col_s2_8 mt_-4', language: q[1].language, code: q[1].text }
		})),
		(i = new D({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Svelte Kit',
				subtitle: 'Simbiosis perfecta entre CSS, HTML y JS'
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					(a = c('div')),
					y(i.$$.fragment),
					(_ = v()),
					(h = c('p')),
					(b = p(
						'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
					)),
					(w = v()),
					(k = c('p')),
					(A = c('code')),
					(I = p('.mw_*')),
					this.h();
			},
			l(e) {
				E(t.$$.fragment, e), (s = x(e)), (a = n(e, 'DIV', { class: !0 }));
				var c = o(a);
				E(i.$$.fragment, c), (_ = x(c)), (h = n(c, 'P', {}));
				var $ = o(h);
				(b = f(
					$,
					'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
					$.forEach(r),
					(w = x(c)),
					(k = n(c, 'P', {}));
				var l = o(k);
				A = n(l, 'CODE', { class: !0 });
				var g = o(A);
				(I = f(g, '.mw_*')), g.forEach(r), l.forEach(r), c.forEach(r), this.h();
			},
			h() {
				$(A, 'class', 'language-scss'), $(a, 'class', 'col_13 col_s2_5 dg_0 pcc');
			},
			m(e, c) {
				L(t, e, c),
					l(e, s, c),
					l(e, a, c),
					L(i, a, null),
					d(a, _),
					d(a, h),
					d(h, b),
					d(a, w),
					d(a, k),
					d(k, A),
					d(A, I),
					(M = !0);
			},
			p: u,
			i(e) {
				M || (g(t.$$.fragment, e), g(i.$$.fragment, e), (M = !0));
			},
			o(e) {
				m(t.$$.fragment, e), m(i.$$.fragment, e), (M = !1);
			},
			d(e) {
				S(t, e), e && r(s), e && r(a), S(i);
			}
		}
	);
}
function Q(e) {
	let t, s, a, i, _, h, b, w, k, A, D, I, M;
	return (
		(I = new N({ props: { clases: 'col_13 col_s2_8', language: q[0].language, code: q[0].text } })),
		{
			c() {
				(t = c('div')),
					(s = c('p')),
					(a = c('strong')),
					(i = p('Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					(_ = v()),
					(h = c('p')),
					(b = p('Su simplicidad y belleza saltan a la vista.\n\t\t\t')),
					(w = c('strong')),
					(k = p('Encapsulamiento holístico:')),
					(A = p(
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					(D = v()),
					y(I.$$.fragment),
					this.h();
			},
			l(e) {
				t = n(e, 'DIV', { class: !0 });
				var c = o(t);
				s = n(c, 'P', {});
				var $ = o(s);
				a = n($, 'STRONG', {});
				var l = o(a);
				(i = f(l, 'Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					l.forEach(r),
					$.forEach(r),
					(_ = x(c)),
					(h = n(c, 'P', {}));
				var g = o(h);
				(b = f(g, 'Su simplicidad y belleza saltan a la vista.\n\t\t\t')), (w = n(g, 'STRONG', {}));
				var m = o(w);
				(k = f(m, 'Encapsulamiento holístico:')),
					m.forEach(r),
					(A = f(
						g,
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					g.forEach(r),
					c.forEach(r),
					(D = x(e)),
					E(I.$$.fragment, e),
					this.h();
			},
			h() {
				$(t, 'class', 'col_13 col_s2_5');
			},
			m(e, c) {
				l(e, t, c),
					d(t, s),
					d(s, a),
					d(a, i),
					d(t, _),
					d(t, h),
					d(h, b),
					d(h, w),
					d(w, k),
					d(h, A),
					l(e, D, c),
					L(I, e, c),
					(M = !0);
			},
			p: u,
			i(e) {
				M || (g(I.$$.fragment, e), (M = !0));
			},
			o(e) {
				m(I.$$.fragment, e), (M = !1);
			},
			d(e) {
				e && r(t), e && r(D), S(I, e);
			}
		}
	);
}
function X(e) {
	let t, s, a, $, i;
	return {
		c() {
			(t = c('dt')),
				(s = p('Control de versiones')),
				(a = v()),
				($ = c('dd')),
				(i = p(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\tprototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = n(e, 'DT', {});
			var c = o(t);
			(s = f(c, 'Control de versiones')), c.forEach(r), (a = x(e)), ($ = n(e, 'DD', {}));
			var l = o($);
			(i = f(
				l,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\tprototipo vive en diferentes universos "paralelos"'
			)),
				l.forEach(r);
		},
		m(e, c) {
			l(e, t, c), d(t, s), l(e, a, c), l(e, $, c), d($, i);
		},
		d(e) {
			e && r(t), e && r(a), e && r($);
		}
	};
}
function Z(e) {
	let t, s, a, c;
	return (
		(t = new N({ props: { clases: 'col_13 col_s2_8', language: q[2].language, code: q[2].text } })),
		(a = new V({
			props: {
				clases: 'col_13 col_s2_5',
				tipo: 2,
				variante: 0,
				$$slots: { default: [X] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment), (s = v()), y(a.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e), (s = x(e)), E(a.$$.fragment, e);
			},
			m(e, n) {
				L(t, e, n), l(e, s, n), L(a, e, n), (c = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
			},
			i(e) {
				c || (g(t.$$.fragment, e), g(a.$$.fragment, e), (c = !0));
			},
			o(e) {
				m(t.$$.fragment, e), m(a.$$.fragment, e), (c = !1);
			},
			d(e) {
				S(t, e), e && r(s), S(a, e);
			}
		}
	);
}
function ee(e) {
	let t;
	return {
		c() {
			t = p('.mh_(*)');
		},
		l(e) {
			t = f(e, '.mh_(*)');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function te(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('min-height: (*)vh;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'min-height: (*)vh;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function se(e) {
	let t;
	return {
		c() {
			t = p('.mw_*');
		},
		l(e) {
			t = f(e, '.mw_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ae(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [se] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('min-width: (*)vw;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'min-width: (*)vw;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function ce(e) {
	let t;
	return {
		c() {
			t = p('.gr_*');
		},
		l(e) {
			t = f(e, '.gr_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ne(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [ce] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('row-gap: span (*);')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'row-gap: span (*);')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function oe(e) {
	let t;
	return {
		c() {
			t = p('.dg');
		},
		l(e) {
			t = f(e, '.dg');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function re(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [oe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('display: grid;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'display: grid;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function $e(e) {
	let t;
	return {
		c() {
			t = p('.p_3');
		},
		l(e) {
			t = f(e, '.p_3');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function le(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [$e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('padding: 1.62rem;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'padding: 1.62rem;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function ie(e) {
	let t;
	return {
		c() {
			t = p('.col_s2_*');
		},
		l(e) {
			t = f(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ge(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [ie] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('css')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'css')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function me(e) {
	let t;
	return {
		c() {
			t = p('.dg_12');
		},
		l(e) {
			t = f(e, '.dg_12');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function pe(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [me] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('css')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'css')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function fe(e) {
	let t;
	return {
		c() {
			t = p('.col_s2_*');
		},
		l(e) {
			t = f(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function de(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [fe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('css')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'css')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function _e(e) {
	let t;
	return {
		c() {
			t = p('.dg');
		},
		l(e) {
			t = f(e, '.dg');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ue(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [_e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('display: grid;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'display: grid;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function he(e) {
	let t;
	return {
		c() {
			t = p('.pt_*');
		},
		l(e) {
			t = f(e, '.pt_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ve(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [he] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('padding-top: *rem;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'padding-top: *rem;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function xe(e) {
	let t;
	return {
		c() {
			t = p('.pb_*');
		},
		l(e) {
			t = f(e, '.pb_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function be(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [xe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('padding-bottom: 1.62*;')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'padding-bottom: 1.62*;')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function we(e) {
	let t;
	return {
		c() {
			t = p('.dg_12');
		},
		l(e) {
			t = f(e, '.dg_12');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ye(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [we] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('css')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'css')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function Ee(e) {
	let t;
	return {
		c() {
			t = p('.col_s2_*');
		},
		l(e) {
			t = f(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Le(e) {
	let t, s, a, $, i;
	return (
		($ = new B({
			props: { clases: 'language-scss', $$slots: { default: [Ee] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = c('small')), (s = p('css')), (a = v()), y($.$$.fragment);
			},
			l(e) {
				t = n(e, 'SMALL', {});
				var c = o(t);
				(s = f(c, 'css')), c.forEach(r), (a = x(e)), E($.$$.fragment, e);
			},
			m(e, c) {
				l(e, t, c), d(t, s), l(e, a, c), L($, e, c), (i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i || (g($.$$.fragment, e), (i = !0));
			},
			o(e) {
				m($.$$.fragment, e), (i = !1);
			},
			d(e) {
				e && r(t), e && r(a), S($, e);
			}
		}
	);
}
function Se(e) {
	let t, s, a, c, n, o, $, i, p, f, d, _, u, h, b, w, k, A, D, I, M, V, j, q, z, P;
	return (
		(t = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [te] },
				$$scope: { ctx: e }
			}
		})),
		(a = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ae] },
				$$scope: { ctx: e }
			}
		})),
		(n = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ne] },
				$$scope: { ctx: e }
			}
		})),
		($ = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [re] },
				$$scope: { ctx: e }
			}
		})),
		(p = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [le] },
				$$scope: { ctx: e }
			}
		})),
		(d = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ge] },
				$$scope: { ctx: e }
			}
		})),
		(u = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [pe] },
				$$scope: { ctx: e }
			}
		})),
		(b = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [de] },
				$$scope: { ctx: e }
			}
		})),
		(k = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ue] },
				$$scope: { ctx: e }
			}
		})),
		(D = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ve] },
				$$scope: { ctx: e }
			}
		})),
		(M = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [be] },
				$$scope: { ctx: e }
			}
		})),
		(j = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ye] },
				$$scope: { ctx: e }
			}
		})),
		(z = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [Le] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(c = v()),
					y(n.$$.fragment),
					(o = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(f = v()),
					y(d.$$.fragment),
					(_ = v()),
					y(u.$$.fragment),
					(h = v()),
					y(b.$$.fragment),
					(w = v()),
					y(k.$$.fragment),
					(A = v()),
					y(D.$$.fragment),
					(I = v()),
					y(M.$$.fragment),
					(V = v()),
					y(j.$$.fragment),
					(q = v()),
					y(z.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e),
					(s = x(e)),
					E(a.$$.fragment, e),
					(c = x(e)),
					E(n.$$.fragment, e),
					(o = x(e)),
					E($.$$.fragment, e),
					(i = x(e)),
					E(p.$$.fragment, e),
					(f = x(e)),
					E(d.$$.fragment, e),
					(_ = x(e)),
					E(u.$$.fragment, e),
					(h = x(e)),
					E(b.$$.fragment, e),
					(w = x(e)),
					E(k.$$.fragment, e),
					(A = x(e)),
					E(D.$$.fragment, e),
					(I = x(e)),
					E(M.$$.fragment, e),
					(V = x(e)),
					E(j.$$.fragment, e),
					(q = x(e)),
					E(z.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r),
					l(e, s, r),
					L(a, e, r),
					l(e, c, r),
					L(n, e, r),
					l(e, o, r),
					L($, e, r),
					l(e, i, r),
					L(p, e, r),
					l(e, f, r),
					L(d, e, r),
					l(e, _, r),
					L(u, e, r),
					l(e, h, r),
					L(b, e, r),
					l(e, w, r),
					L(k, e, r),
					l(e, A, r),
					L(D, e, r),
					l(e, I, r),
					L(M, e, r),
					l(e, V, r),
					L(j, e, r),
					l(e, q, r),
					L(z, e, r),
					(P = !0);
			},
			p(e, s) {
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), t.$set(c);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: e }), a.$set(o);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), n.$set(r);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), $.$set(l);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), p.$set(i);
				const g = {};
				1 & s && (g.$$scope = { dirty: s, ctx: e }), d.$set(g);
				const m = {};
				1 & s && (m.$$scope = { dirty: s, ctx: e }), u.$set(m);
				const f = {};
				1 & s && (f.$$scope = { dirty: s, ctx: e }), b.$set(f);
				const _ = {};
				1 & s && (_.$$scope = { dirty: s, ctx: e }), k.$set(_);
				const h = {};
				1 & s && (h.$$scope = { dirty: s, ctx: e }), D.$set(h);
				const v = {};
				1 & s && (v.$$scope = { dirty: s, ctx: e }), M.$set(v);
				const x = {};
				1 & s && (x.$$scope = { dirty: s, ctx: e }), j.$set(x);
				const w = {};
				1 & s && (w.$$scope = { dirty: s, ctx: e }), z.$set(w);
			},
			i(e) {
				P ||
					(g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(n.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(d.$$.fragment, e),
					g(u.$$.fragment, e),
					g(b.$$.fragment, e),
					g(k.$$.fragment, e),
					g(D.$$.fragment, e),
					g(M.$$.fragment, e),
					g(j.$$.fragment, e),
					g(z.$$.fragment, e),
					(P = !0));
			},
			o(e) {
				m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(n.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(d.$$.fragment, e),
					m(u.$$.fragment, e),
					m(b.$$.fragment, e),
					m(k.$$.fragment, e),
					m(D.$$.fragment, e),
					m(M.$$.fragment, e),
					m(j.$$.fragment, e),
					m(z.$$.fragment, e),
					(P = !1);
			},
			d(e) {
				S(t, e),
					e && r(s),
					S(a, e),
					e && r(c),
					S(n, e),
					e && r(o),
					S($, e),
					e && r(i),
					S(p, e),
					e && r(f),
					S(d, e),
					e && r(_),
					S(u, e),
					e && r(h),
					S(b, e),
					e && r(w),
					S(k, e),
					e && r(A),
					S(D, e),
					e && r(I),
					S(M, e),
					e && r(V),
					S(j, e),
					e && r(q),
					S(z, e);
			}
		}
	);
}
function ke(e) {
	let t;
	return {
		c() {
			t = p('$grey_0');
		},
		l(e) {
			t = f(e, '$grey_0');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Ae(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [ke] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function De(e) {
	let t;
	return {
		c() {
			t = p('$grey_1');
		},
		l(e) {
			t = f(e, '$grey_1');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Ie(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [De] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Me(e) {
	let t;
	return {
		c() {
			t = p('$grey_2');
		},
		l(e) {
			t = f(e, '$grey_2');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Ve(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Me] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Ce(e) {
	let t;
	return {
		c() {
			t = p('$grey_3');
		},
		l(e) {
			t = f(e, '$grey_3');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function je(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Ce] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function qe(e) {
	let t;
	return {
		c() {
			t = p('$grey_4');
		},
		l(e) {
			t = f(e, '$grey_4');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ze(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [qe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Pe(e) {
	let t;
	return {
		c() {
			t = p('$grey_5');
		},
		l(e) {
			t = f(e, '$grey_5');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function He(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Pe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Be(e) {
	let t;
	return {
		c() {
			t = p('$white');
		},
		l(e) {
			t = f(e, '$white');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Ge(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Be] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Te(e) {
	let t;
	return {
		c() {
			t = p('$black');
		},
		l(e) {
			t = f(e, '$black');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Ne(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Te] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Re(e) {
	let t;
	return {
		c() {
			t = p('$primary');
		},
		l(e) {
			t = f(e, '$primary');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Oe(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Re] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Ue(e) {
	let t;
	return {
		c() {
			t = p('$seconday');
		},
		l(e) {
			t = f(e, '$seconday');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Fe(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Ue] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Je(e) {
	let t;
	return {
		c() {
			t = p('$tertiary');
		},
		l(e) {
			t = f(e, '$tertiary');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function We(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Je] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Ke(e) {
	let t;
	return {
		c() {
			t = p('$quaternary');
		},
		l(e) {
			t = f(e, '$quaternary');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function Ye(e) {
	let t, s;
	return (
		(t = new B({
			props: { clases: 'language-scss', $$slots: { default: [Ke] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p(e, s) {
				const a = {};
				1 & s && (a.$$scope = { dirty: s, ctx: e }), t.$set(a);
			},
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function Qe(e) {
	let t, s, a, c, n, o, $, i, p, f, d, _, u, h, b, w, k, A, D, I, M, V, j, q;
	return (
		(t = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_0 pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Ae] },
				$$scope: { ctx: e }
			}
		})),
		(a = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_1 pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Ie] },
				$$scope: { ctx: e }
			}
		})),
		(n = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_2 pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Ve] },
				$$scope: { ctx: e }
			}
		})),
		($ = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_3 pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [je] },
				$$scope: { ctx: e }
			}
		})),
		(p = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_4 pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [ze] },
				$$scope: { ctx: e }
			}
		})),
		(d = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_5 pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [He] },
				$$scope: { ctx: e }
			}
		})),
		(u = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_white pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Ge] },
				$$scope: { ctx: e }
			}
		})),
		(b = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_black pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Ne] },
				$$scope: { ctx: e }
			}
		})),
		(k = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_primary pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Oe] },
				$$scope: { ctx: e }
			}
		})),
		(D = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_secondary pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Fe] },
				$$scope: { ctx: e }
			}
		})),
		(M = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_tertiary pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [We] },
				$$scope: { ctx: e }
			}
		})),
		(j = new C({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1 bgc_quaternary pt_3 pr_1 pl_1 pb_1',
				$$slots: { default: [Ye] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(c = v()),
					y(n.$$.fragment),
					(o = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(f = v()),
					y(d.$$.fragment),
					(_ = v()),
					y(u.$$.fragment),
					(h = v()),
					y(b.$$.fragment),
					(w = v()),
					y(k.$$.fragment),
					(A = v()),
					y(D.$$.fragment),
					(I = v()),
					y(M.$$.fragment),
					(V = v()),
					y(j.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e),
					(s = x(e)),
					E(a.$$.fragment, e),
					(c = x(e)),
					E(n.$$.fragment, e),
					(o = x(e)),
					E($.$$.fragment, e),
					(i = x(e)),
					E(p.$$.fragment, e),
					(f = x(e)),
					E(d.$$.fragment, e),
					(_ = x(e)),
					E(u.$$.fragment, e),
					(h = x(e)),
					E(b.$$.fragment, e),
					(w = x(e)),
					E(k.$$.fragment, e),
					(A = x(e)),
					E(D.$$.fragment, e),
					(I = x(e)),
					E(M.$$.fragment, e),
					(V = x(e)),
					E(j.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r),
					l(e, s, r),
					L(a, e, r),
					l(e, c, r),
					L(n, e, r),
					l(e, o, r),
					L($, e, r),
					l(e, i, r),
					L(p, e, r),
					l(e, f, r),
					L(d, e, r),
					l(e, _, r),
					L(u, e, r),
					l(e, h, r),
					L(b, e, r),
					l(e, w, r),
					L(k, e, r),
					l(e, A, r),
					L(D, e, r),
					l(e, I, r),
					L(M, e, r),
					l(e, V, r),
					L(j, e, r),
					(q = !0);
			},
			p(e, s) {
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), t.$set(c);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: e }), a.$set(o);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), n.$set(r);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), $.$set(l);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), p.$set(i);
				const g = {};
				1 & s && (g.$$scope = { dirty: s, ctx: e }), d.$set(g);
				const m = {};
				1 & s && (m.$$scope = { dirty: s, ctx: e }), u.$set(m);
				const f = {};
				1 & s && (f.$$scope = { dirty: s, ctx: e }), b.$set(f);
				const _ = {};
				1 & s && (_.$$scope = { dirty: s, ctx: e }), k.$set(_);
				const h = {};
				1 & s && (h.$$scope = { dirty: s, ctx: e }), D.$set(h);
				const v = {};
				1 & s && (v.$$scope = { dirty: s, ctx: e }), M.$set(v);
				const x = {};
				1 & s && (x.$$scope = { dirty: s, ctx: e }), j.$set(x);
			},
			i(e) {
				q ||
					(g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(n.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(d.$$.fragment, e),
					g(u.$$.fragment, e),
					g(b.$$.fragment, e),
					g(k.$$.fragment, e),
					g(D.$$.fragment, e),
					g(M.$$.fragment, e),
					g(j.$$.fragment, e),
					(q = !0));
			},
			o(e) {
				m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(n.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(d.$$.fragment, e),
					m(u.$$.fragment, e),
					m(b.$$.fragment, e),
					m(k.$$.fragment, e),
					m(D.$$.fragment, e),
					m(M.$$.fragment, e),
					m(j.$$.fragment, e),
					(q = !1);
			},
			d(e) {
				S(t, e),
					e && r(s),
					S(a, e),
					e && r(c),
					S(n, e),
					e && r(o),
					S($, e),
					e && r(i),
					S(p, e),
					e && r(f),
					S(d, e),
					e && r(_),
					S(u, e),
					e && r(h),
					S(b, e),
					e && r(w),
					S(k, e),
					e && r(A),
					S(D, e),
					e && r(I),
					S(M, e),
					e && r(V),
					S(j, e);
			}
		}
	);
}
function Xe(e) {
	let t, s, a, c, n, o, $, i, p, f, d, _, u, h;
	return (
		(t = new D({ props: { clases: 'col_12 tac c_3', title: 'Guía de estilos' } })),
		(a = new N({
			props: {
				clases: 'col_12 col_s2_6',
				language: 'markup',
				code:
					"\n\x3c!-- let fruits = ['apple','banana'] --\x3e\n<div class='dg_12 rg_1 p_3'>\n\t<div class='col_12'>\n\t\t<Header/>\n\t</div>\n\t\x3c!-- Code.svelte --\x3e\n(each fruits as fruit,i)\n\t<div class=\"col_6\"> (fruit) </div>\n(/each)\n<div/>"
			}
		})),
		(n = new K({ props: { clases: 'col_12 col_s2_6' } })),
		($ = new D({ props: { tipo: 4, clases: 'col_12 tac c_4', title: 'Clases' } })),
		(p = new V({
			props: {
				tipo: 1,
				clases: 'col_12 gap_1 dg_12 c_1',
				$$slots: { default: [Se] },
				$$scope: { ctx: e }
			}
		})),
		(d = new D({ props: { tipo: 4, clases: 'col_12 tac c_4', title: 'Colores' } })),
		(u = new V({
			props: {
				tipo: 1,
				clases: 'col_12 dg_12 c_1',
				$$slots: { default: [Qe] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(c = v()),
					y(n.$$.fragment),
					(o = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(f = v()),
					y(d.$$.fragment),
					(_ = v()),
					y(u.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e),
					(s = x(e)),
					E(a.$$.fragment, e),
					(c = x(e)),
					E(n.$$.fragment, e),
					(o = x(e)),
					E($.$$.fragment, e),
					(i = x(e)),
					E(p.$$.fragment, e),
					(f = x(e)),
					E(d.$$.fragment, e),
					(_ = x(e)),
					E(u.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r),
					l(e, s, r),
					L(a, e, r),
					l(e, c, r),
					L(n, e, r),
					l(e, o, r),
					L($, e, r),
					l(e, i, r),
					L(p, e, r),
					l(e, f, r),
					L(d, e, r),
					l(e, _, r),
					L(u, e, r),
					(h = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), p.$set(s);
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), u.$set(a);
			},
			i(e) {
				h ||
					(g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(n.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(d.$$.fragment, e),
					g(u.$$.fragment, e),
					(h = !0));
			},
			o(e) {
				m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(n.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(d.$$.fragment, e),
					m(u.$$.fragment, e),
					(h = !1);
			},
			d(e) {
				S(t, e),
					e && r(s),
					S(a, e),
					e && r(c),
					S(n, e),
					e && r(o),
					S($, e),
					e && r(i),
					S(p, e),
					e && r(f),
					S(d, e),
					e && r(_),
					S(u, e);
			}
		}
	);
}
function Ze(e) {
	let t, s, a, c, n, o, $, i, p, f, d, _, h, b, w, k, A, I, M, V, C, j, q, z, P, H;
	return (
		(t = new D({ props: { tipo: 4, clases: 'col_12 tac c_4', title: 'Componentes' } })),
		(a = new N({ props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: '<Alert />' } })),
		(n = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Button variante='n'/>" }
		})),
		($ = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Section variante='n'/>" }
		})),
		(p = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Header clases='dg p_1'/>" }
		})),
		(d = new N({
			props: {
				clases: 'col_6 col_s2_3 oh',
				language: 'markup',
				code: "<List tipo='' variante='n'/>"
			}
		})),
		(h = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<ListItem tipo='' />" }
		})),
		(w = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Nav tipo='' />" }
		})),
		(A = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Img tipo='' />" }
		})),
		(M = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Input tipo='' />" }
		})),
		(C = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Nav tipo='' />" }
		})),
		(q = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Code clases='' />" }
		})),
		(P = new N({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Blockquote tipo='' />" }
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(c = v()),
					y(n.$$.fragment),
					(o = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(f = v()),
					y(d.$$.fragment),
					(_ = v()),
					y(h.$$.fragment),
					(b = v()),
					y(w.$$.fragment),
					(k = v()),
					y(A.$$.fragment),
					(I = v()),
					y(M.$$.fragment),
					(V = v()),
					y(C.$$.fragment),
					(j = v()),
					y(q.$$.fragment),
					(z = v()),
					y(P.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e),
					(s = x(e)),
					E(a.$$.fragment, e),
					(c = x(e)),
					E(n.$$.fragment, e),
					(o = x(e)),
					E($.$$.fragment, e),
					(i = x(e)),
					E(p.$$.fragment, e),
					(f = x(e)),
					E(d.$$.fragment, e),
					(_ = x(e)),
					E(h.$$.fragment, e),
					(b = x(e)),
					E(w.$$.fragment, e),
					(k = x(e)),
					E(A.$$.fragment, e),
					(I = x(e)),
					E(M.$$.fragment, e),
					(V = x(e)),
					E(C.$$.fragment, e),
					(j = x(e)),
					E(q.$$.fragment, e),
					(z = x(e)),
					E(P.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r),
					l(e, s, r),
					L(a, e, r),
					l(e, c, r),
					L(n, e, r),
					l(e, o, r),
					L($, e, r),
					l(e, i, r),
					L(p, e, r),
					l(e, f, r),
					L(d, e, r),
					l(e, _, r),
					L(h, e, r),
					l(e, b, r),
					L(w, e, r),
					l(e, k, r),
					L(A, e, r),
					l(e, I, r),
					L(M, e, r),
					l(e, V, r),
					L(C, e, r),
					l(e, j, r),
					L(q, e, r),
					l(e, z, r),
					L(P, e, r),
					(H = !0);
			},
			p: u,
			i(e) {
				H ||
					(g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(n.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(d.$$.fragment, e),
					g(h.$$.fragment, e),
					g(w.$$.fragment, e),
					g(A.$$.fragment, e),
					g(M.$$.fragment, e),
					g(C.$$.fragment, e),
					g(q.$$.fragment, e),
					g(P.$$.fragment, e),
					(H = !0));
			},
			o(e) {
				m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(n.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(d.$$.fragment, e),
					m(h.$$.fragment, e),
					m(w.$$.fragment, e),
					m(A.$$.fragment, e),
					m(M.$$.fragment, e),
					m(C.$$.fragment, e),
					m(q.$$.fragment, e),
					m(P.$$.fragment, e),
					(H = !1);
			},
			d(e) {
				S(t, e),
					e && r(s),
					S(a, e),
					e && r(c),
					S(n, e),
					e && r(o),
					S($, e),
					e && r(i),
					S(p, e),
					e && r(f),
					S(d, e),
					e && r(_),
					S(h, e),
					e && r(b),
					S(w, e),
					e && r(k),
					S(A, e),
					e && r(I),
					S(M, e),
					e && r(V),
					S(C, e),
					e && r(j),
					S(q, e),
					e && r(z),
					S(P, e);
			}
		}
	);
}
function et(e) {
	let t,
		s,
		a,
		i,
		_,
		h,
		b,
		w,
		k,
		A,
		I,
		M,
		V,
		C,
		j,
		q,
		z,
		P,
		H,
		B,
		G,
		T,
		N,
		R,
		O,
		U,
		F,
		J,
		W,
		K,
		Y,
		Q,
		X,
		Z,
		ee,
		te,
		se,
		ae,
		ce,
		ne,
		oe,
		re,
		$e,
		le,
		ie,
		ge,
		me,
		pe,
		fe,
		de,
		_e,
		ue,
		he,
		ve,
		xe,
		be,
		we,
		ye,
		Ee,
		Le,
		Se,
		ke,
		Ae,
		De,
		Ie,
		Me,
		Ve,
		Ce,
		je,
		qe,
		ze,
		Pe,
		He,
		Be,
		Ge,
		Te,
		Ne,
		Re,
		Oe,
		Ue,
		Fe,
		Je,
		We,
		Ke,
		Ye,
		Qe,
		Xe,
		Ze,
		et,
		tt,
		st,
		at,
		ct,
		nt,
		ot,
		rt,
		$t,
		lt;
	return (
		(t = new D({ props: { tipo: 4, clases: 'tac c_4 pb_2', title: 'Grid 13' } })),
		(le = new D({ props: { tipo: 4, clases: 'tac c_4 pb_2 pt_2', title: 'Grid 12' } })),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					(a = c('div')),
					(i = c('div')),
					(_ = c('small')),
					(h = p('.col_8')),
					(b = v()),
					(w = c('div')),
					(k = c('small')),
					(A = p('.col_5')),
					(I = v()),
					(M = c('div')),
					(V = c('small')),
					(C = p('.col_5')),
					(j = v()),
					(q = c('div')),
					(z = c('small')),
					(P = p('.col_8')),
					(H = v()),
					(B = c('div')),
					(G = c('small')),
					(T = p('.col_1')),
					(N = v()),
					(R = c('div')),
					(O = c('small')),
					(U = p('.col_1')),
					(F = v()),
					(J = c('div')),
					(W = c('small')),
					(K = p('.col_3')),
					(Y = v()),
					(Q = c('div')),
					(X = c('small')),
					(Z = p('.col_5')),
					(ee = v()),
					(te = c('div')),
					(se = c('small')),
					(ae = p('.col_3')),
					(ce = v()),
					(ne = c('div')),
					(oe = c('small')),
					(re = p('.col_13')),
					($e = v()),
					y(le.$$.fragment),
					(ie = v()),
					(ge = c('div')),
					(me = c('div')),
					(pe = c('small')),
					(fe = p('.col_1')),
					(de = v()),
					(_e = c('div')),
					(ue = c('small')),
					(he = p('.col_11')),
					(ve = v()),
					(xe = c('div')),
					(be = c('small')),
					(we = p('.col_2')),
					(ye = v()),
					(Ee = c('div')),
					(Le = c('small')),
					(Se = p('.col_10')),
					(ke = v()),
					(Ae = c('div')),
					(De = c('small')),
					(Ie = p('.col_3')),
					(Me = v()),
					(Ve = c('div')),
					(Ce = c('small')),
					(je = p('.col_9')),
					(qe = v()),
					(ze = c('div')),
					(Pe = c('small')),
					(He = p('.col_4')),
					(Be = v()),
					(Ge = c('div')),
					(Te = c('small')),
					(Ne = p('.col_8')),
					(Re = v()),
					(Oe = c('div')),
					(Ue = c('small')),
					(Fe = p('.col_5')),
					(Je = v()),
					(We = c('div')),
					(Ke = c('small')),
					(Ye = p('.col_7')),
					(Qe = v()),
					(Xe = c('div')),
					(Ze = c('small')),
					(et = p('.col_6')),
					(tt = v()),
					(st = c('div')),
					(at = c('small')),
					(ct = p('.col_6')),
					(nt = v()),
					(ot = c('div')),
					(rt = c('small')),
					($t = p('.col_12')),
					this.h();
			},
			l(e) {
				E(t.$$.fragment, e), (s = x(e)), (a = n(e, 'DIV', { class: !0 }));
				var c = o(a);
				i = n(c, 'DIV', { class: !0 });
				var $ = o(i);
				_ = n($, 'SMALL', { class: !0 });
				var l = o(_);
				(h = f(l, '.col_8')),
					l.forEach(r),
					$.forEach(r),
					(b = x(c)),
					(w = n(c, 'DIV', { class: !0 }));
				var g = o(w);
				k = n(g, 'SMALL', { class: !0 });
				var m = o(k);
				(A = f(m, '.col_5')),
					m.forEach(r),
					g.forEach(r),
					(I = x(c)),
					(M = n(c, 'DIV', { class: !0 }));
				var p = o(M);
				V = n(p, 'SMALL', { class: !0 });
				var d = o(V);
				(C = f(d, '.col_5')),
					d.forEach(r),
					p.forEach(r),
					(j = x(c)),
					(q = n(c, 'DIV', { class: !0 }));
				var u = o(q);
				z = n(u, 'SMALL', { class: !0 });
				var v = o(z);
				(P = f(v, '.col_8')),
					v.forEach(r),
					u.forEach(r),
					(H = x(c)),
					(B = n(c, 'DIV', { class: !0 }));
				var y = o(B);
				G = n(y, 'SMALL', { class: !0 });
				var L = o(G);
				(T = f(L, '.col_1')),
					L.forEach(r),
					y.forEach(r),
					(N = x(c)),
					(R = n(c, 'DIV', { class: !0 }));
				var S = o(R);
				O = n(S, 'SMALL', { class: !0 });
				var D = o(O);
				(U = f(D, '.col_1')),
					D.forEach(r),
					S.forEach(r),
					(F = x(c)),
					(J = n(c, 'DIV', { class: !0 }));
				var lt = o(J);
				W = n(lt, 'SMALL', { class: !0 });
				var it = o(W);
				(K = f(it, '.col_3')),
					it.forEach(r),
					lt.forEach(r),
					(Y = x(c)),
					(Q = n(c, 'DIV', { class: !0 }));
				var gt = o(Q);
				X = n(gt, 'SMALL', { class: !0 });
				var mt = o(X);
				(Z = f(mt, '.col_5')),
					mt.forEach(r),
					gt.forEach(r),
					(ee = x(c)),
					(te = n(c, 'DIV', { class: !0 }));
				var pt = o(te);
				se = n(pt, 'SMALL', { class: !0 });
				var ft = o(se);
				(ae = f(ft, '.col_3')),
					ft.forEach(r),
					pt.forEach(r),
					(ce = x(c)),
					(ne = n(c, 'DIV', { class: !0 }));
				var dt = o(ne);
				oe = n(dt, 'SMALL', { class: !0 });
				var _t = o(oe);
				(re = f(_t, '.col_13')),
					_t.forEach(r),
					dt.forEach(r),
					c.forEach(r),
					($e = x(e)),
					E(le.$$.fragment, e),
					(ie = x(e)),
					(ge = n(e, 'DIV', { class: !0 }));
				var ut = o(ge);
				me = n(ut, 'DIV', { class: !0 });
				var ht = o(me);
				pe = n(ht, 'SMALL', { class: !0 });
				var vt = o(pe);
				(fe = f(vt, '.col_1')),
					vt.forEach(r),
					ht.forEach(r),
					(de = x(ut)),
					(_e = n(ut, 'DIV', { class: !0 }));
				var xt = o(_e);
				ue = n(xt, 'SMALL', { class: !0 });
				var bt = o(ue);
				(he = f(bt, '.col_11')),
					bt.forEach(r),
					xt.forEach(r),
					(ve = x(ut)),
					(xe = n(ut, 'DIV', { class: !0 }));
				var wt = o(xe);
				be = n(wt, 'SMALL', { class: !0 });
				var yt = o(be);
				(we = f(yt, '.col_2')),
					yt.forEach(r),
					wt.forEach(r),
					(ye = x(ut)),
					(Ee = n(ut, 'DIV', { class: !0 }));
				var Et = o(Ee);
				Le = n(Et, 'SMALL', { class: !0 });
				var Lt = o(Le);
				(Se = f(Lt, '.col_10')),
					Lt.forEach(r),
					Et.forEach(r),
					(ke = x(ut)),
					(Ae = n(ut, 'DIV', { class: !0 }));
				var St = o(Ae);
				De = n(St, 'SMALL', { class: !0 });
				var kt = o(De);
				(Ie = f(kt, '.col_3')),
					kt.forEach(r),
					St.forEach(r),
					(Me = x(ut)),
					(Ve = n(ut, 'DIV', { class: !0 }));
				var At = o(Ve);
				Ce = n(At, 'SMALL', { class: !0 });
				var Dt = o(Ce);
				(je = f(Dt, '.col_9')),
					Dt.forEach(r),
					At.forEach(r),
					(qe = x(ut)),
					(ze = n(ut, 'DIV', { class: !0 }));
				var It = o(ze);
				Pe = n(It, 'SMALL', { class: !0 });
				var Mt = o(Pe);
				(He = f(Mt, '.col_4')),
					Mt.forEach(r),
					It.forEach(r),
					(Be = x(ut)),
					(Ge = n(ut, 'DIV', { class: !0 }));
				var Vt = o(Ge);
				Te = n(Vt, 'SMALL', { class: !0 });
				var Ct = o(Te);
				(Ne = f(Ct, '.col_8')),
					Ct.forEach(r),
					Vt.forEach(r),
					(Re = x(ut)),
					(Oe = n(ut, 'DIV', { class: !0 }));
				var jt = o(Oe);
				Ue = n(jt, 'SMALL', { class: !0 });
				var qt = o(Ue);
				(Fe = f(qt, '.col_5')),
					qt.forEach(r),
					jt.forEach(r),
					(Je = x(ut)),
					(We = n(ut, 'DIV', { class: !0 }));
				var zt = o(We);
				Ke = n(zt, 'SMALL', { class: !0 });
				var Pt = o(Ke);
				(Ye = f(Pt, '.col_7')),
					Pt.forEach(r),
					zt.forEach(r),
					(Qe = x(ut)),
					(Xe = n(ut, 'DIV', { class: !0 }));
				var Ht = o(Xe);
				Ze = n(Ht, 'SMALL', { class: !0 });
				var Bt = o(Ze);
				(et = f(Bt, '.col_6')),
					Bt.forEach(r),
					Ht.forEach(r),
					(tt = x(ut)),
					(st = n(ut, 'DIV', { class: !0 }));
				var Gt = o(st);
				at = n(Gt, 'SMALL', { class: !0 });
				var Tt = o(at);
				(ct = f(Tt, '.col_6')),
					Tt.forEach(r),
					Gt.forEach(r),
					(nt = x(ut)),
					(ot = n(ut, 'DIV', { class: !0 }));
				var Nt = o(ot);
				rt = n(Nt, 'SMALL', { class: !0 });
				var Rt = o(rt);
				($t = f(Rt, '.col_12')), Rt.forEach(r), Nt.forEach(r), ut.forEach(r), this.h();
			},
			h() {
				$(_, 'class', ''),
					$(i, 'class', 'col_8 bgc_2'),
					$(k, 'class', ''),
					$(w, 'class', 'col_5 bgc_5'),
					$(V, 'class', ''),
					$(M, 'class', 'col_5 bgc_5'),
					$(z, 'class', ''),
					$(q, 'class', 'col_8 bgc_2'),
					$(G, 'class', ' c_3'),
					$(B, 'class', 'col_1 bgc_0'),
					$(O, 'class', ''),
					$(R, 'class', 'col_1 bgc_1'),
					$(W, 'class', ''),
					$(J, 'class', 'col_3 bgc_3'),
					$(X, 'class', ''),
					$(Q, 'class', 'col_5 bgc_5'),
					$(se, 'class', ''),
					$(te, 'class', 'col_3 bgc_3'),
					$(oe, 'class', ''),
					$(ne, 'class', 'col_13 bgc_4'),
					$(a, 'class', 'gap_1 dg c_0 mh_5'),
					$(pe, 'class', ''),
					$(me, 'class', 'col_1 bgc_2'),
					$(ue, 'class', ''),
					$(_e, 'class', 'col_11 bgc_3'),
					$(be, 'class', ''),
					$(xe, 'class', 'col_2 bgc_5'),
					$(Le, 'class', ''),
					$(Ee, 'class', 'col_10 bgc_3'),
					$(De, 'class', ''),
					$(Ae, 'class', 'col_3 bgc_5'),
					$(Ce, 'class', ''),
					$(Ve, 'class', 'col_9 bgc_3'),
					$(Pe, 'class', ''),
					$(ze, 'class', 'col_4 bgc_2'),
					$(Te, 'class', ''),
					$(Ge, 'class', 'col_8 bgc_5'),
					$(Ue, 'class', 'c_3'),
					$(Oe, 'class', 'col_5 bgc_0'),
					$(Ke, 'class', ''),
					$(We, 'class', 'col_7 bgc_3'),
					$(Ze, 'class', ''),
					$(Xe, 'class', 'col_6 bgc_1'),
					$(at, 'class', ''),
					$(st, 'class', 'col_6 bgc_2'),
					$(rt, 'class', ''),
					$(ot, 'class', 'col_12 bgc_4'),
					$(ge, 'class', 'gap_1 dg_12 c_0 mh_5');
			},
			m(e, c) {
				L(t, e, c),
					l(e, s, c),
					l(e, a, c),
					d(a, i),
					d(i, _),
					d(_, h),
					d(a, b),
					d(a, w),
					d(w, k),
					d(k, A),
					d(a, I),
					d(a, M),
					d(M, V),
					d(V, C),
					d(a, j),
					d(a, q),
					d(q, z),
					d(z, P),
					d(a, H),
					d(a, B),
					d(B, G),
					d(G, T),
					d(a, N),
					d(a, R),
					d(R, O),
					d(O, U),
					d(a, F),
					d(a, J),
					d(J, W),
					d(W, K),
					d(a, Y),
					d(a, Q),
					d(Q, X),
					d(X, Z),
					d(a, ee),
					d(a, te),
					d(te, se),
					d(se, ae),
					d(a, ce),
					d(a, ne),
					d(ne, oe),
					d(oe, re),
					l(e, $e, c),
					L(le, e, c),
					l(e, ie, c),
					l(e, ge, c),
					d(ge, me),
					d(me, pe),
					d(pe, fe),
					d(ge, de),
					d(ge, _e),
					d(_e, ue),
					d(ue, he),
					d(ge, ve),
					d(ge, xe),
					d(xe, be),
					d(be, we),
					d(ge, ye),
					d(ge, Ee),
					d(Ee, Le),
					d(Le, Se),
					d(ge, ke),
					d(ge, Ae),
					d(Ae, De),
					d(De, Ie),
					d(ge, Me),
					d(ge, Ve),
					d(Ve, Ce),
					d(Ce, je),
					d(ge, qe),
					d(ge, ze),
					d(ze, Pe),
					d(Pe, He),
					d(ge, Be),
					d(ge, Ge),
					d(Ge, Te),
					d(Te, Ne),
					d(ge, Re),
					d(ge, Oe),
					d(Oe, Ue),
					d(Ue, Fe),
					d(ge, Je),
					d(ge, We),
					d(We, Ke),
					d(Ke, Ye),
					d(ge, Qe),
					d(ge, Xe),
					d(Xe, Ze),
					d(Ze, et),
					d(ge, tt),
					d(ge, st),
					d(st, at),
					d(at, ct),
					d(ge, nt),
					d(ge, ot),
					d(ot, rt),
					d(rt, $t),
					(lt = !0);
			},
			p: u,
			i(e) {
				lt || (g(t.$$.fragment, e), g(le.$$.fragment, e), (lt = !0));
			},
			o(e) {
				m(t.$$.fragment, e), m(le.$$.fragment, e), (lt = !1);
			},
			d(e) {
				S(t, e), e && r(s), e && r(a), e && r($e), S(le, e), e && r(ie), e && r(ge);
			}
		}
	);
}
function tt(e) {
	let t;
	return {
		c() {
			t = p('Simple, ligero, limpio y claro.');
		},
		l(e) {
			t = f(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function st(e) {
	let t;
	return {
		c() {
			t = p('Completo, funcional, versátil y ordenado.');
		},
		l(e) {
			t = f(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function at(e) {
	let t;
	return {
		c() {
			t = p('Work in progress...');
		},
		l(e) {
			t = f(e, 'Work in progress...');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && r(t);
		}
	};
}
function ct(e) {
	let t, s, a, c, n, o;
	return (
		(t = new C({
			props: { tipo: 0, variante: 6, $$slots: { default: [tt] }, $$scope: { ctx: e } }
		})),
		(a = new C({
			props: { tipo: 0, variante: 6, $$slots: { default: [st] }, $$scope: { ctx: e } }
		})),
		(n = new C({
			props: { tipo: 0, variante: 6, $$slots: { default: [at] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment), (s = v()), y(a.$$.fragment), (c = v()), y(n.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e), (s = x(e)), E(a.$$.fragment, e), (c = x(e)), E(n.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r), l(e, s, r), L(a, e, r), l(e, c, r), L(n, e, r), (o = !0);
			},
			p(e, s) {
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), t.$set(c);
				const o = {};
				1 & s && (o.$$scope = { dirty: s, ctx: e }), a.$set(o);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), n.$set(r);
			},
			i(e) {
				o || (g(t.$$.fragment, e), g(a.$$.fragment, e), g(n.$$.fragment, e), (o = !0));
			},
			o(e) {
				m(t.$$.fragment, e), m(a.$$.fragment, e), m(n.$$.fragment, e), (o = !1);
			},
			d(e) {
				S(t, e), e && r(s), S(a, e), e && r(c), S(n, e);
			}
		}
	);
}
function nt(e) {
	let t, s;
	return (
		(t = new k({ props: { variante: 3, text: 'Repositorio en Github' } })),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e);
			},
			m(e, a) {
				L(t, e, a), (s = !0);
			},
			p: u,
			i(e) {
				s || (g(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				m(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				S(t, e);
			}
		}
	);
}
function ot(e) {
	let t, s, a, i, p, f, _, u, h;
	return (
		(t = new I({ props: { clases: 'col_13 col_s2_8 p_1', src: './img/grafico-11.svg', alt: '' } })),
		(i = new D({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		(f = new V({
			props: {
				tipo: 0,
				variante: 0,
				marker: './img/marker.svg',
				$$slots: { default: [ct] },
				$$scope: { ctx: e }
			}
		})),
		(u = new C({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [nt] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					(a = c('div')),
					y(i.$$.fragment),
					(p = v()),
					y(f.$$.fragment),
					(_ = v()),
					y(u.$$.fragment),
					this.h();
			},
			l(e) {
				E(t.$$.fragment, e), (s = x(e)), (a = n(e, 'DIV', { class: !0 }));
				var c = o(a);
				E(i.$$.fragment, c),
					(p = x(c)),
					E(f.$$.fragment, c),
					(_ = x(c)),
					E(u.$$.fragment, c),
					c.forEach(r),
					this.h();
			},
			h() {
				$(a, 'class', 'col_13 col_s2_5 dg_0 pcc c_4 p_3');
			},
			m(e, c) {
				L(t, e, c),
					l(e, s, c),
					l(e, a, c),
					L(i, a, null),
					d(a, p),
					L(f, a, null),
					d(a, _),
					L(u, a, null),
					(h = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), f.$set(s);
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), u.$set(a);
			},
			i(e) {
				h ||
					(g(t.$$.fragment, e),
					g(i.$$.fragment, e),
					g(f.$$.fragment, e),
					g(u.$$.fragment, e),
					(h = !0));
			},
			o(e) {
				m(t.$$.fragment, e),
					m(i.$$.fragment, e),
					m(f.$$.fragment, e),
					m(u.$$.fragment, e),
					(h = !1);
			},
			d(e) {
				S(t, e), e && r(s), e && r(a), S(i), S(f), S(u);
			}
		}
	);
}
function rt(e) {
	let t, s, a, c;
	return (
		(t = new D({
			props: { clases: 'col_13 pb_3', tipo: 1, variante: 1, title: 'Notas acerca de esta web' }
		})),
		(a = new j({ props: { clases: 'col_13 pl_3 pr_3', tabHeaders: z } })),
		{
			c() {
				y(t.$$.fragment), (s = v()), y(a.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e), (s = x(e)), E(a.$$.fragment, e);
			},
			m(e, n) {
				L(t, e, n), l(e, s, n), L(a, e, n), (c = !0);
			},
			p: u,
			i(e) {
				c || (g(t.$$.fragment, e), g(a.$$.fragment, e), (c = !0));
			},
			o(e) {
				m(t.$$.fragment, e), m(a.$$.fragment, e), (c = !1);
			},
			d(e) {
				S(t, e), e && r(s), S(a, e);
			}
		}
	);
}
function $t(e) {
	let t, s, a, c, n, o, $, i, p, f, d, _, u, h, b, w, k, I;
	return (
		(t = new D({
			props: {
				clases: 'mh_5 tac c_white',
				tipo: 2,
				variante: 0,
				img: './img/bg5.png',
				title: A[4].title,
				subtitle: A[4].subtitle
			}
		})),
		(a = new M({
			props: {
				clases: 'c_4 bgc_0 rg_1 bgwhite p_3 pt_1 cg_s2_1 dg',
				$$slots: { default: [Y] },
				$$scope: { ctx: e }
			}
		})),
		(n = new M({
			props: {
				clases: 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0',
				$$slots: { default: [Q] },
				$$scope: { ctx: e }
			}
		})),
		($ = new M({
			props: {
				clases: 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2',
				$$slots: { default: [Z] },
				$$scope: { ctx: e }
			}
		})),
		(p = new M({
			props: {
				id: 'Nomenclatura',
				clases: 'c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1',
				$$slots: { default: [Xe] },
				$$scope: { ctx: e }
			}
		})),
		(d = new M({
			props: {
				id: 'Componentes',
				clases: 'c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1',
				$$slots: { default: [Ze] },
				$$scope: { ctx: e }
			}
		})),
		(u = new M({
			props: {
				id: 'Grid',
				clases: 'c_4 bgc_0 pl_3 pr_3 pb_3',
				$$slots: { default: [et] },
				$$scope: { ctx: e }
			}
		})),
		(b = new M({
			props: {
				clases: 'dg rg_1 bgc_1 mh_10 mh_s2_5',
				$$slots: { default: [ot] },
				$$scope: { ctx: e }
			}
		})),
		(k = new M({
			props: {
				id: 'UIPrototype',
				clases: 'dg pt_3 tac bgc_4',
				variante: 7,
				$$slots: { default: [rt] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(c = v()),
					y(n.$$.fragment),
					(o = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(f = v()),
					y(d.$$.fragment),
					(_ = v()),
					y(u.$$.fragment),
					(h = v()),
					y(b.$$.fragment),
					(w = v()),
					y(k.$$.fragment);
			},
			l(e) {
				E(t.$$.fragment, e),
					(s = x(e)),
					E(a.$$.fragment, e),
					(c = x(e)),
					E(n.$$.fragment, e),
					(o = x(e)),
					E($.$$.fragment, e),
					(i = x(e)),
					E(p.$$.fragment, e),
					(f = x(e)),
					E(d.$$.fragment, e),
					(_ = x(e)),
					E(u.$$.fragment, e),
					(h = x(e)),
					E(b.$$.fragment, e),
					(w = x(e)),
					E(k.$$.fragment, e);
			},
			m(e, r) {
				L(t, e, r),
					l(e, s, r),
					L(a, e, r),
					l(e, c, r),
					L(n, e, r),
					l(e, o, r),
					L($, e, r),
					l(e, i, r),
					L(p, e, r),
					l(e, f, r),
					L(d, e, r),
					l(e, _, r),
					L(u, e, r),
					l(e, h, r),
					L(b, e, r),
					l(e, w, r),
					L(k, e, r),
					(I = !0);
			},
			p(e, [t]) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
				const c = {};
				1 & t && (c.$$scope = { dirty: t, ctx: e }), n.$set(c);
				const o = {};
				1 & t && (o.$$scope = { dirty: t, ctx: e }), $.$set(o);
				const r = {};
				1 & t && (r.$$scope = { dirty: t, ctx: e }), p.$set(r);
				const l = {};
				1 & t && (l.$$scope = { dirty: t, ctx: e }), d.$set(l);
				const i = {};
				1 & t && (i.$$scope = { dirty: t, ctx: e }), u.$set(i);
				const g = {};
				1 & t && (g.$$scope = { dirty: t, ctx: e }), b.$set(g);
				const m = {};
				1 & t && (m.$$scope = { dirty: t, ctx: e }), k.$set(m);
			},
			i(e) {
				I ||
					(g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(n.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(d.$$.fragment, e),
					g(u.$$.fragment, e),
					g(b.$$.fragment, e),
					g(k.$$.fragment, e),
					(I = !0));
			},
			o(e) {
				m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(n.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(d.$$.fragment, e),
					m(u.$$.fragment, e),
					m(b.$$.fragment, e),
					m(k.$$.fragment, e),
					(I = !1);
			},
			d(e) {
				S(t, e),
					e && r(s),
					S(a, e),
					e && r(c),
					S(n, e),
					e && r(o),
					S($, e),
					e && r(i),
					S(p, e),
					e && r(f),
					S(d, e),
					e && r(_),
					S(u, e),
					e && r(h),
					S(b, e),
					e && r(w),
					S(k, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, $t, s, {});
	}
}
