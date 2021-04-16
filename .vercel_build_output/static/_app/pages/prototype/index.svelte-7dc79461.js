import {
	S as e,
	i as a,
	s,
	e as t,
	t as n,
	c as o,
	a as r,
	b as c,
	d as i,
	o as l,
	I as $,
	f as m,
	g,
	h as p,
	n as d,
	B as f,
	j as u,
	l as h,
	G as _,
	P as v,
	p as b,
	q as E,
	r as w,
	w as x,
	x as y,
	y as D
} from '../../chunks/index-d91e1ed8.js';
import { B as I, c as k } from '../../chunks/Grid.svelte-f6369e02.js';
import { H as V } from '../../chunks/Header-33a8b362.js';
/* empty css                                     */ import { I as C } from '../../chunks/Img-4bbf7ce3.js';
import { S as j } from '../../chunks/Section-ebe14856.js';
import { L as z, a as S } from '../../chunks/ListItem-50336afd.js';
import { T as q } from '../../chunks/Tabs-ea9ec3d7.js';
const P = [
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
	H = [
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
function B(e) {
	let a, s, f, u, h, _;
	return {
		c() {
			(a = t('div')), (s = t('pre')), (f = t('code')), (u = n(e[1])), this.h();
		},
		l(t) {
			a = o(t, 'DIV', { class: !0 });
			var n = r(a);
			s = o(n, 'PRE', { class: !0 });
			var l = r(s);
			f = o(l, 'CODE', { class: !0 });
			var $ = r(f);
			(u = c($, e[1])), $.forEach(i), l.forEach(i), n.forEach(i), this.h();
		},
		h() {
			l(f, 'class', (h = 'language-' + e[0] + ' svelte-1j09h8q')),
				l(s, 'class', 'svelte-1j09h8q'),
				l(a, 'class', (_ = $(e[2]) + ' svelte-1j09h8q'));
		},
		m(e, t) {
			m(e, a, t), g(a, s), g(s, f), g(f, u);
		},
		p(e, [s]) {
			2 & s && p(u, e[1]),
				1 & s && h !== (h = 'language-' + e[0] + ' svelte-1j09h8q') && l(f, 'class', h),
				4 & s && _ !== (_ = $(e[2]) + ' svelte-1j09h8q') && l(a, 'class', _);
		},
		i: d,
		o: d,
		d(e) {
			e && i(a);
		}
	};
}
function L(e, a, s) {
	let { language: t } = a,
		{ code: n } = a,
		{ clases: o = '' } = a;
	return (
		f(() => {
			let e = document.createElement('script');
			(e.src = 'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js'),
				document.head.append(e),
				(e.onload = function () {
					let e,
						a,
						s = !1;
					switch (t) {
						case 'json':
							(a = 'https://prismjs.com/components/prism-json.js'), (s = !0);
							break;
						case 'python':
							(a = 'https://prismjs.com/components/prism-python.js'), (s = !0);
							break;
						case 'r':
							(a = 'https://prismjs.com/components/prism-r.js'), (s = !0);
					}
					1 == s
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
			'language' in e && s(0, (t = e.language)),
				'code' in e && s(1, (n = e.code)),
				'clases' in e && s(2, (o = e.clases));
		}),
		[t, n, o]
	);
}
class G extends e {
	constructor(e) {
		super(), a(this, e, L, B, s, { language: 0, code: 1, clases: 2 });
	}
}
const O = [
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
function A(e) {
	let a, s, $, f, b, E, w, x, y;
	return {
		c() {
			(a = t('div')),
				(s = t('h2')),
				($ = n(e[0])),
				(f = u()),
				(b = t('code')),
				(E = n(e[1])),
				(w = u()),
				(x = t('div')),
				(y = t('div')),
				this.h();
		},
		l(t) {
			a = o(t, 'DIV', { class: !0 });
			var n = r(a);
			s = o(n, 'H2', {});
			var l = r(s);
			($ = c(l, e[0])), l.forEach(i), (f = h(n)), (b = o(n, 'CODE', { class: !0 }));
			var m = r(b);
			(E = c(m, e[1])), m.forEach(i), n.forEach(i), (w = h(t)), (x = o(t, 'DIV', { class: !0 }));
			var g = r(x);
			(y = o(g, 'DIV', { class: !0, style: !0 })), r(y).forEach(i), g.forEach(i), this.h();
		},
		h() {
			l(b, 'class', 'code language- svelte-135p8ti'),
				l(a, 'class', 'col_5 backFlipBox svelte-135p8ti'),
				_(a, 'NoRebelesTxt', e[3]),
				l(y, 'class', 'image svelte-135p8ti'),
				v(y, 'background-image', 'url(' + e[2] + ')'),
				l(x, 'class', 'col_8 frontFlipBox svelte-135p8ti');
		},
		m(e, t) {
			m(e, a, t), g(a, s), g(s, $), g(a, f), g(a, b), g(b, E), m(e, w, t), m(e, x, t), g(x, y);
		},
		p(e, [s]) {
			1 & s && p($, e[0]),
				2 & s && p(E, e[1]),
				8 & s && _(a, 'NoRebelesTxt', e[3]),
				4 & s && v(y, 'background-image', 'url(' + e[2] + ')');
		},
		i: d,
		o: d,
		d(e) {
			e && i(a), e && i(w), e && i(x);
		}
	};
}
function N(e, a, s) {
	let { back_txt: t } = a,
		{ code: n } = a,
		{ foto: o } = a,
		{ showCarBack: r } = a;
	return (
		(e.$$set = (e) => {
			'back_txt' in e && s(0, (t = e.back_txt)),
				'code' in e && s(1, (n = e.code)),
				'foto' in e && s(2, (o = e.foto)),
				'showCarBack' in e && s(3, (r = e.showCarBack));
		}),
		[t, n, o, r]
	);
}
class T extends e {
	constructor(e) {
		super(), a(this, e, N, A, s, { back_txt: 0, code: 1, foto: 2, showCarBack: 3 });
	}
}
function R(e) {
	let a, s, n, c, $, p, d, f, v, k, V;
	return (
		(n = new I({ props: { variante: 5, text: '↜' } })),
		n.$on('click', e[5]),
		($ = new I({ props: { variante: 5, text: e[0] ? '⤿' : '⤾' } })),
		$.$on('click', e[4]),
		(d = new I({ props: { variante: 5, text: '⤳' } })),
		d.$on('click', e[6]),
		(k = new T({ props: { showCarBack: e[0], code: e[1], foto: e[2], back_txt: e[3] } })),
		{
			c() {
				(a = t('div')),
					(s = t('div')),
					b(n.$$.fragment),
					(c = u()),
					b($.$$.fragment),
					(p = u()),
					b(d.$$.fragment),
					(f = u()),
					(v = t('div')),
					b(k.$$.fragment),
					this.h();
			},
			l(e) {
				a = o(e, 'DIV', { class: !0 });
				var t = r(a);
				s = o(t, 'DIV', { class: !0 });
				var l = r(s);
				E(n.$$.fragment, l),
					(c = h(l)),
					E($.$$.fragment, l),
					(p = h(l)),
					E(d.$$.fragment, l),
					l.forEach(i),
					(f = h(t)),
					(v = o(t, 'DIV', { class: !0 }));
				var m = r(v);
				E(k.$$.fragment, m), m.forEach(i), t.forEach(i), this.h();
			},
			h() {
				l(s, 'class', 'ButtonControls svelte-1czsbv0'),
					l(v, 'class', 'dg flip-box-inner svelte-1czsbv0'),
					_(v, 'flip-it', e[0]),
					l(a, 'class', 'flip-box svelte-1czsbv0');
			},
			m(e, t) {
				m(e, a, t),
					g(a, s),
					w(n, s, null),
					g(s, c),
					w($, s, null),
					g(s, p),
					w(d, s, null),
					g(a, f),
					g(a, v),
					w(k, v, null),
					(V = !0);
			},
			p(e, [a]) {
				const s = {};
				1 & a && (s.text = e[0] ? '⤿' : '⤾'), $.$set(s);
				const t = {};
				1 & a && (t.showCarBack = e[0]),
					2 & a && (t.code = e[1]),
					4 & a && (t.foto = e[2]),
					8 & a && (t.back_txt = e[3]),
					k.$set(t),
					1 & a && _(v, 'flip-it', e[0]);
			},
			i(e) {
				V ||
					(x(n.$$.fragment, e),
					x($.$$.fragment, e),
					x(d.$$.fragment, e),
					x(k.$$.fragment, e),
					(V = !0));
			},
			o(e) {
				y(n.$$.fragment, e),
					y($.$$.fragment, e),
					y(d.$$.fragment, e),
					y(k.$$.fragment, e),
					(V = !1);
			},
			d(e) {
				e && i(a), D(n), D($), D(d), D(k);
			}
		}
	);
}
function U(e, a, s) {
	let t, n, o;
	let r = !1,
		c = 0;
	return (
		(e.$$.update = () => {
			128 & e.$$.dirty && s(1, (t = O[c].code)),
				128 & e.$$.dirty && s(2, (n = O[c].image)),
				128 & e.$$.dirty && s(3, (o = O[c].word));
		}),
		[
			r,
			t,
			n,
			o,
			() => s(0, (r = !r)),
			() => {
				s(0, (r = !1)), s(7, 0 === c ? (c = O.length - 1) : (c -= 1));
			},
			() => {
				s(0, (r = !1)), s(7, c === O.length - 1 ? (c = 0) : (c += 1));
			},
			c
		]
	);
}
class F extends e {
	constructor(e) {
		super(), a(this, e, U, R, s, {});
	}
}
function J(e) {
	let a, s, $, p, f, _, v, I, k, C, j, z, S;
	return (
		(s = new G({ props: { language: P[1].language, code: P[1].text } })),
		(f = new V({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Svelte Kit',
				subtitle: 'Simbiosis perfecta entre CSS, HTML y JS'
			}
		})),
		{
			c() {
				(a = t('div')),
					b(s.$$.fragment),
					($ = u()),
					(p = t('div')),
					b(f.$$.fragment),
					(_ = u()),
					(v = t('p')),
					(I = n(
						'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
					)),
					(k = u()),
					(C = t('p')),
					(j = t('code')),
					(z = n('.mw_*')),
					this.h();
			},
			l(e) {
				a = o(e, 'DIV', { class: !0 });
				var t = r(a);
				E(s.$$.fragment, t), t.forEach(i), ($ = h(e)), (p = o(e, 'DIV', { class: !0 }));
				var n = r(p);
				E(f.$$.fragment, n), (_ = h(n)), (v = o(n, 'P', {}));
				var l = r(v);
				(I = c(
					l,
					'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
					l.forEach(i),
					(k = h(n)),
					(C = o(n, 'P', {}));
				var m = r(C);
				j = o(m, 'CODE', { class: !0 });
				var g = r(j);
				(z = c(g, '.mw_*')), g.forEach(i), m.forEach(i), n.forEach(i), this.h();
			},
			h() {
				l(a, 'class', 'col_13 col_s2_8 mt_-4'),
					l(j, 'class', 'language-scss'),
					l(p, 'class', 'col_13 col_s2_5 dg_0 pcc');
			},
			m(e, t) {
				m(e, a, t),
					w(s, a, null),
					m(e, $, t),
					m(e, p, t),
					w(f, p, null),
					g(p, _),
					g(p, v),
					g(v, I),
					g(p, k),
					g(p, C),
					g(C, j),
					g(j, z),
					(S = !0);
			},
			p: d,
			i(e) {
				S || (x(s.$$.fragment, e), x(f.$$.fragment, e), (S = !0));
			},
			o(e) {
				y(s.$$.fragment, e), y(f.$$.fragment, e), (S = !1);
			},
			d(e) {
				e && i(a), D(s), e && i($), e && i(p), D(f);
			}
		}
	);
}
function M(e) {
	let a, s, $, p, f, _, v, I, k, V, C, j, z, S;
	return (
		(z = new G({ props: { language: P[0].language, code: P[0].text } })),
		{
			c() {
				(a = t('div')),
					(s = t('p')),
					($ = t('strong')),
					(p = n('Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					(f = u()),
					(_ = t('p')),
					(v = n('Su simplicidad y belleza saltan a la vista.\n\t\t\t')),
					(I = t('strong')),
					(k = n('Encapsulamiento holístico:')),
					(V = n(
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					(C = u()),
					(j = t('div')),
					b(z.$$.fragment),
					this.h();
			},
			l(e) {
				a = o(e, 'DIV', { class: !0 });
				var t = r(a);
				s = o(t, 'P', {});
				var n = r(s);
				$ = o(n, 'STRONG', {});
				var l = r($);
				(p = c(l, 'Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					l.forEach(i),
					n.forEach(i),
					(f = h(t)),
					(_ = o(t, 'P', {}));
				var m = r(_);
				(v = c(m, 'Su simplicidad y belleza saltan a la vista.\n\t\t\t')), (I = o(m, 'STRONG', {}));
				var g = r(I);
				(k = c(g, 'Encapsulamiento holístico:')),
					g.forEach(i),
					(V = c(
						m,
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					m.forEach(i),
					t.forEach(i),
					(C = h(e)),
					(j = o(e, 'DIV', { class: !0 }));
				var d = r(j);
				E(z.$$.fragment, d), d.forEach(i), this.h();
			},
			h() {
				l(a, 'class', 'col_13 col_s2_5'), l(j, 'class', 'col_13 col_s2_8');
			},
			m(e, t) {
				m(e, a, t),
					g(a, s),
					g(s, $),
					g($, p),
					g(a, f),
					g(a, _),
					g(_, v),
					g(_, I),
					g(I, k),
					g(_, V),
					m(e, C, t),
					m(e, j, t),
					w(z, j, null),
					(S = !0);
			},
			p: d,
			i(e) {
				S || (x(z.$$.fragment, e), (S = !0));
			},
			o(e) {
				y(z.$$.fragment, e), (S = !1);
			},
			d(e) {
				e && i(a), e && i(C), e && i(j), D(z);
			}
		}
	);
}
function W(e) {
	let a, s, l, $, p;
	return {
		c() {
			(a = t('dt')),
				(s = n('Control de versiones')),
				(l = u()),
				($ = t('dd')),
				(p = n(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\tprototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			a = o(e, 'DT', {});
			var t = r(a);
			(s = c(t, 'Control de versiones')), t.forEach(i), (l = h(e)), ($ = o(e, 'DD', {}));
			var n = r($);
			(p = c(
				n,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\tprototipo vive en diferentes universos "paralelos"'
			)),
				n.forEach(i);
		},
		m(e, t) {
			m(e, a, t), g(a, s), m(e, l, t), m(e, $, t), g($, p);
		},
		d(e) {
			e && i(a), e && i(l), e && i($);
		}
	};
}
function K(e) {
	let a, s, t, n;
	return (
		(a = new G({ props: { clases: 'col_13 col_s2_8', language: P[2].language, code: P[2].text } })),
		(t = new z({
			props: {
				clases: 'col_13 col_s2_5',
				tipo: 2,
				variante: 0,
				$$slots: { default: [W] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				b(a.$$.fragment), (s = u()), b(t.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e), (s = h(e)), E(t.$$.fragment, e);
			},
			m(e, o) {
				w(a, e, o), m(e, s, o), w(t, e, o), (n = !0);
			},
			p(e, a) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: e }), t.$set(s);
			},
			i(e) {
				n || (x(a.$$.fragment, e), x(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				y(a.$$.fragment, e), y(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				D(a, e), e && i(s), D(t, e);
			}
		}
	);
}
function Y(e) {
	let a,
		s,
		$,
		p,
		f,
		_,
		v,
		I,
		k,
		C,
		j,
		z,
		S,
		q,
		P,
		H,
		B,
		L,
		O,
		A,
		N,
		T,
		R,
		U,
		J,
		M,
		W,
		K,
		Y,
		Q,
		X,
		Z,
		ee,
		ae,
		se,
		te,
		ne,
		oe,
		re,
		ce,
		ie,
		le,
		$e,
		me,
		ge,
		pe,
		de,
		fe,
		ue,
		he,
		_e,
		ve,
		be,
		Ee,
		we,
		xe,
		ye,
		De,
		Ie,
		ke,
		Ve,
		Ce,
		je,
		ze;
	return (
		(a = new V({ props: { clases: 'col_12 tac c_3', title: 'Nomenclatura CSS' } })),
		(p = new G({
			props: {
				language: 'markup',
				code:
					"\n\x3c!-- let fruits = ['apple','banana'] --\x3e\n<div class='dg_12 rg_1 p_3'>\n\t<div class='col_12'>\n\t\t<Header/>\n\t</div>\n\t\x3c!-- Code.svelte --\x3e\n(each fruits as fruit,i)\n\t<div class=\"col_6\"> (fruit) </div>\n(/each)\n<div/>"
			}
		})),
		(v = new F({})),
		{
			c() {
				b(a.$$.fragment),
					(s = u()),
					($ = t('div')),
					b(p.$$.fragment),
					(f = u()),
					(_ = t('div')),
					b(v.$$.fragment),
					(I = u()),
					(k = t('div')),
					(C = t('code')),
					(j = n('.mh_*')),
					(z = u()),
					(S = t('p')),
					(q = n('min-height: / 1,2,3,4,5,6,7')),
					(P = u()),
					(H = t('div')),
					(B = t('code')),
					(L = n('.mw_*')),
					(O = u()),
					(A = t('p')),
					(N = n('max-width: / 1,2,3,4,5,6,7')),
					(T = u()),
					(R = t('div')),
					(U = t('code')),
					(J = n('.gr_*')),
					(M = u()),
					(W = t('p')),
					(K = n('gap-row: / 1,2,3,4,5,6,7')),
					(Y = u()),
					(Q = t('div')),
					(X = t('code')),
					(Z = n('.dg')),
					(ee = u()),
					(ae = t('p')),
					(se = n('display-grid: / Default Grid (13 columns)')),
					(te = u()),
					(ne = t('div')),
					(oe = t('code')),
					(re = n('.p_3')),
					(ce = u()),
					(ie = t('p')),
					(le = n('padding: 1rem')),
					($e = u()),
					(me = t('div')),
					(ge = t('code')),
					(pe = n('.col_s2_*')),
					(de = u()),
					(fe = t('p')),
					(ue = n('grid-column: span / 1...13')),
					(he = u()),
					(_e = t('div')),
					(ve = t('code')),
					(be = n('.dg_12')),
					(Ee = u()),
					(we = t('p')),
					(xe = n('display-grid: / (12 columns)')),
					(ye = u()),
					(De = t('div')),
					(Ie = t('code')),
					(ke = n('.col_s2_*')),
					(Ve = u()),
					(Ce = t('p')),
					(je = n('grid-column: span / 1...13')),
					this.h();
			},
			l(e) {
				E(a.$$.fragment, e), (s = h(e)), ($ = o(e, 'DIV', { class: !0 }));
				var t = r($);
				E(p.$$.fragment, t), t.forEach(i), (f = h(e)), (_ = o(e, 'DIV', { class: !0 }));
				var n = r(_);
				E(v.$$.fragment, n), n.forEach(i), (I = h(e)), (k = o(e, 'DIV', { class: !0 }));
				var l = r(k);
				C = o(l, 'CODE', { class: !0 });
				var m = r(C);
				(j = c(m, '.mh_*')), m.forEach(i), (z = h(l)), (S = o(l, 'P', {}));
				var g = r(S);
				(q = c(g, 'min-height: / 1,2,3,4,5,6,7')),
					g.forEach(i),
					l.forEach(i),
					(P = h(e)),
					(H = o(e, 'DIV', { class: !0 }));
				var d = r(H);
				B = o(d, 'CODE', { class: !0 });
				var u = r(B);
				(L = c(u, '.mw_*')), u.forEach(i), (O = h(d)), (A = o(d, 'P', {}));
				var b = r(A);
				(N = c(b, 'max-width: / 1,2,3,4,5,6,7')),
					b.forEach(i),
					d.forEach(i),
					(T = h(e)),
					(R = o(e, 'DIV', { class: !0 }));
				var w = r(R);
				U = o(w, 'CODE', { class: !0 });
				var x = r(U);
				(J = c(x, '.gr_*')), x.forEach(i), (M = h(w)), (W = o(w, 'P', {}));
				var y = r(W);
				(K = c(y, 'gap-row: / 1,2,3,4,5,6,7')),
					y.forEach(i),
					w.forEach(i),
					(Y = h(e)),
					(Q = o(e, 'DIV', { class: !0 }));
				var D = r(Q);
				X = o(D, 'CODE', { class: !0 });
				var V = r(X);
				(Z = c(V, '.dg')), V.forEach(i), (ee = h(D)), (ae = o(D, 'P', {}));
				var G = r(ae);
				(se = c(G, 'display-grid: / Default Grid (13 columns)')),
					G.forEach(i),
					D.forEach(i),
					(te = h(e)),
					(ne = o(e, 'DIV', { class: !0 }));
				var F = r(ne);
				oe = o(F, 'CODE', { class: !0 });
				var ze = r(oe);
				(re = c(ze, '.p_3')), ze.forEach(i), (ce = h(F)), (ie = o(F, 'P', {}));
				var Se = r(ie);
				(le = c(Se, 'padding: 1rem')),
					Se.forEach(i),
					F.forEach(i),
					($e = h(e)),
					(me = o(e, 'DIV', { class: !0 }));
				var qe = r(me);
				ge = o(qe, 'CODE', { class: !0 });
				var Pe = r(ge);
				(pe = c(Pe, '.col_s2_*')), Pe.forEach(i), (de = h(qe)), (fe = o(qe, 'P', {}));
				var He = r(fe);
				(ue = c(He, 'grid-column: span / 1...13')),
					He.forEach(i),
					qe.forEach(i),
					(he = h(e)),
					(_e = o(e, 'DIV', { class: !0 }));
				var Be = r(_e);
				ve = o(Be, 'CODE', { class: !0 });
				var Le = r(ve);
				(be = c(Le, '.dg_12')), Le.forEach(i), (Ee = h(Be)), (we = o(Be, 'P', {}));
				var Ge = r(we);
				(xe = c(Ge, 'display-grid: / (12 columns)')),
					Ge.forEach(i),
					Be.forEach(i),
					(ye = h(e)),
					(De = o(e, 'DIV', { class: !0 }));
				var Oe = r(De);
				Ie = o(Oe, 'CODE', { class: !0 });
				var Ae = r(Ie);
				(ke = c(Ae, '.col_s2_*')), Ae.forEach(i), (Ve = h(Oe)), (Ce = o(Oe, 'P', {}));
				var Ne = r(Ce);
				(je = c(Ne, 'grid-column: span / 1...13')), Ne.forEach(i), Oe.forEach(i), this.h();
			},
			h() {
				l($, 'class', 'col_12 col_s2_6'),
					l(_, 'class', 'col_12 col_s2_6'),
					l(C, 'class', 'language-scss'),
					l(k, 'class', 'col_6 col_s2_3'),
					l(B, 'class', 'language-scss'),
					l(H, 'class', 'col_6 col_s2_3'),
					l(U, 'class', 'language-scss'),
					l(R, 'class', 'col_6 col_s2_3'),
					l(X, 'class', 'language-scss'),
					l(Q, 'class', 'col_6 col_s2_3'),
					l(oe, 'class', 'language-scss'),
					l(ne, 'class', 'col_6 col_s2_3'),
					l(ge, 'class', 'language-scss'),
					l(me, 'class', 'col_6 col_s2_3'),
					l(ve, 'class', 'language-scss'),
					l(_e, 'class', 'col_6 col_s2_3'),
					l(Ie, 'class', 'language-scss'),
					l(De, 'class', 'col_6 col_s2_3');
			},
			m(e, t) {
				w(a, e, t),
					m(e, s, t),
					m(e, $, t),
					w(p, $, null),
					m(e, f, t),
					m(e, _, t),
					w(v, _, null),
					m(e, I, t),
					m(e, k, t),
					g(k, C),
					g(C, j),
					g(k, z),
					g(k, S),
					g(S, q),
					m(e, P, t),
					m(e, H, t),
					g(H, B),
					g(B, L),
					g(H, O),
					g(H, A),
					g(A, N),
					m(e, T, t),
					m(e, R, t),
					g(R, U),
					g(U, J),
					g(R, M),
					g(R, W),
					g(W, K),
					m(e, Y, t),
					m(e, Q, t),
					g(Q, X),
					g(X, Z),
					g(Q, ee),
					g(Q, ae),
					g(ae, se),
					m(e, te, t),
					m(e, ne, t),
					g(ne, oe),
					g(oe, re),
					g(ne, ce),
					g(ne, ie),
					g(ie, le),
					m(e, $e, t),
					m(e, me, t),
					g(me, ge),
					g(ge, pe),
					g(me, de),
					g(me, fe),
					g(fe, ue),
					m(e, he, t),
					m(e, _e, t),
					g(_e, ve),
					g(ve, be),
					g(_e, Ee),
					g(_e, we),
					g(we, xe),
					m(e, ye, t),
					m(e, De, t),
					g(De, Ie),
					g(Ie, ke),
					g(De, Ve),
					g(De, Ce),
					g(Ce, je),
					(ze = !0);
			},
			p: d,
			i(e) {
				ze || (x(a.$$.fragment, e), x(p.$$.fragment, e), x(v.$$.fragment, e), (ze = !0));
			},
			o(e) {
				y(a.$$.fragment, e), y(p.$$.fragment, e), y(v.$$.fragment, e), (ze = !1);
			},
			d(e) {
				D(a, e),
					e && i(s),
					e && i($),
					D(p),
					e && i(f),
					e && i(_),
					D(v),
					e && i(I),
					e && i(k),
					e && i(P),
					e && i(H),
					e && i(T),
					e && i(R),
					e && i(Y),
					e && i(Q),
					e && i(te),
					e && i(ne),
					e && i($e),
					e && i(me),
					e && i(he),
					e && i(_e),
					e && i(ye),
					e && i(De);
			}
		}
	);
}
function Q(e) {
	let a,
		s,
		n,
		c,
		$,
		g,
		p,
		f,
		_,
		v,
		I,
		k,
		C,
		j,
		z,
		S,
		q,
		P,
		H,
		B,
		L,
		O,
		A,
		N,
		T,
		R,
		U,
		F,
		J,
		M,
		W,
		K,
		Y,
		Q,
		X,
		Z,
		ee,
		ae;
	return (
		(a = new V({
			props: { tipo: 4, clases: 'col_12 tac pt_2 pb_1', title: 'Componentes Html y parámetros' }
		})),
		(c = new G({ props: { language: 'markup', code: '<Alert />' } })),
		(p = new G({ props: { language: 'markup', code: "<Button variante='n'/>" } })),
		(v = new G({ props: { language: 'markup', code: "<Section variante='n'/>" } })),
		(C = new G({
			props: { language: 'markup', code: "<Header variante='n' title='' subtitle=''/>" }
		})),
		(S = new G({ props: { language: 'markup', code: "<List tipo='' variante='n'/>" } })),
		(H = new G({ props: { language: 'markup', code: "<ListItem tipo='' />" } })),
		(O = new G({ props: { language: 'markup', code: "<Nav tipo='' />" } })),
		(T = new G({ props: { language: 'markup', code: "<Img tipo='' />" } })),
		(F = new G({ props: { language: 'markup', code: "<Input tipo='' />" } })),
		(W = new G({ props: { language: 'markup', code: "<Nav tipo='' />" } })),
		(Q = new G({ props: { language: 'markup', code: "<Img tipo='' />" } })),
		(ee = new G({ props: { language: 'markup', code: "<Blockquote tipo='' />" } })),
		{
			c() {
				b(a.$$.fragment),
					(s = u()),
					(n = t('div')),
					b(c.$$.fragment),
					($ = u()),
					(g = t('div')),
					b(p.$$.fragment),
					(f = u()),
					(_ = t('div')),
					b(v.$$.fragment),
					(I = u()),
					(k = t('div')),
					b(C.$$.fragment),
					(j = u()),
					(z = t('div')),
					b(S.$$.fragment),
					(q = u()),
					(P = t('div')),
					b(H.$$.fragment),
					(B = u()),
					(L = t('div')),
					b(O.$$.fragment),
					(A = u()),
					(N = t('div')),
					b(T.$$.fragment),
					(R = u()),
					(U = t('div')),
					b(F.$$.fragment),
					(J = u()),
					(M = t('div')),
					b(W.$$.fragment),
					(K = u()),
					(Y = t('div')),
					b(Q.$$.fragment),
					(X = u()),
					(Z = t('div')),
					b(ee.$$.fragment),
					this.h();
			},
			l(e) {
				E(a.$$.fragment, e), (s = h(e)), (n = o(e, 'DIV', { class: !0 }));
				var t = r(n);
				E(c.$$.fragment, t), t.forEach(i), ($ = h(e)), (g = o(e, 'DIV', { class: !0 }));
				var l = r(g);
				E(p.$$.fragment, l), l.forEach(i), (f = h(e)), (_ = o(e, 'DIV', { class: !0 }));
				var m = r(_);
				E(v.$$.fragment, m), m.forEach(i), (I = h(e)), (k = o(e, 'DIV', { class: !0 }));
				var d = r(k);
				E(C.$$.fragment, d), d.forEach(i), (j = h(e)), (z = o(e, 'DIV', { class: !0 }));
				var u = r(z);
				E(S.$$.fragment, u), u.forEach(i), (q = h(e)), (P = o(e, 'DIV', { class: !0 }));
				var b = r(P);
				E(H.$$.fragment, b), b.forEach(i), (B = h(e)), (L = o(e, 'DIV', { class: !0 }));
				var w = r(L);
				E(O.$$.fragment, w), w.forEach(i), (A = h(e)), (N = o(e, 'DIV', { class: !0 }));
				var x = r(N);
				E(T.$$.fragment, x), x.forEach(i), (R = h(e)), (U = o(e, 'DIV', { class: !0 }));
				var y = r(U);
				E(F.$$.fragment, y), y.forEach(i), (J = h(e)), (M = o(e, 'DIV', { class: !0 }));
				var D = r(M);
				E(W.$$.fragment, D), D.forEach(i), (K = h(e)), (Y = o(e, 'DIV', { class: !0 }));
				var V = r(Y);
				E(Q.$$.fragment, V), V.forEach(i), (X = h(e)), (Z = o(e, 'DIV', { class: !0 }));
				var G = r(Z);
				E(ee.$$.fragment, G), G.forEach(i), this.h();
			},
			h() {
				l(n, 'class', 'col_6 col_s2_3'),
					l(g, 'class', 'col_6 col_s2_3'),
					l(_, 'class', 'col_6 col_s2_3'),
					l(k, 'class', 'col_6 col_s2_3'),
					l(z, 'class', 'col_6 col_s2_3'),
					l(P, 'class', 'col_6 col_s2_3'),
					l(L, 'class', 'col_6 col_s2_3'),
					l(N, 'class', 'col_6 col_s2_3'),
					l(U, 'class', 'col_6 col_s2_3'),
					l(M, 'class', 'col_6 col_s2_3'),
					l(Y, 'class', 'col_6 col_s2_3'),
					l(Z, 'class', 'col_6 col_s2_3');
			},
			m(e, t) {
				w(a, e, t),
					m(e, s, t),
					m(e, n, t),
					w(c, n, null),
					m(e, $, t),
					m(e, g, t),
					w(p, g, null),
					m(e, f, t),
					m(e, _, t),
					w(v, _, null),
					m(e, I, t),
					m(e, k, t),
					w(C, k, null),
					m(e, j, t),
					m(e, z, t),
					w(S, z, null),
					m(e, q, t),
					m(e, P, t),
					w(H, P, null),
					m(e, B, t),
					m(e, L, t),
					w(O, L, null),
					m(e, A, t),
					m(e, N, t),
					w(T, N, null),
					m(e, R, t),
					m(e, U, t),
					w(F, U, null),
					m(e, J, t),
					m(e, M, t),
					w(W, M, null),
					m(e, K, t),
					m(e, Y, t),
					w(Q, Y, null),
					m(e, X, t),
					m(e, Z, t),
					w(ee, Z, null),
					(ae = !0);
			},
			p: d,
			i(e) {
				ae ||
					(x(a.$$.fragment, e),
					x(c.$$.fragment, e),
					x(p.$$.fragment, e),
					x(v.$$.fragment, e),
					x(C.$$.fragment, e),
					x(S.$$.fragment, e),
					x(H.$$.fragment, e),
					x(O.$$.fragment, e),
					x(T.$$.fragment, e),
					x(F.$$.fragment, e),
					x(W.$$.fragment, e),
					x(Q.$$.fragment, e),
					x(ee.$$.fragment, e),
					(ae = !0));
			},
			o(e) {
				y(a.$$.fragment, e),
					y(c.$$.fragment, e),
					y(p.$$.fragment, e),
					y(v.$$.fragment, e),
					y(C.$$.fragment, e),
					y(S.$$.fragment, e),
					y(H.$$.fragment, e),
					y(O.$$.fragment, e),
					y(T.$$.fragment, e),
					y(F.$$.fragment, e),
					y(W.$$.fragment, e),
					y(Q.$$.fragment, e),
					y(ee.$$.fragment, e),
					(ae = !1);
			},
			d(e) {
				D(a, e),
					e && i(s),
					e && i(n),
					D(c),
					e && i($),
					e && i(g),
					D(p),
					e && i(f),
					e && i(_),
					D(v),
					e && i(I),
					e && i(k),
					D(C),
					e && i(j),
					e && i(z),
					D(S),
					e && i(q),
					e && i(P),
					D(H),
					e && i(B),
					e && i(L),
					D(O),
					e && i(A),
					e && i(N),
					D(T),
					e && i(R),
					e && i(U),
					D(F),
					e && i(J),
					e && i(M),
					D(W),
					e && i(K),
					e && i(Y),
					D(Q),
					e && i(X),
					e && i(Z),
					D(ee);
			}
		}
	);
}
function X(e) {
	let a, s, $, p, f, _, v, I, k, C, j, z, S, q, P;
	return (
		(a = new V({ props: { tipo: 4, clases: 'tac pt_2 pb_1', title: 'Sistema Grid' } })),
		{
			c() {
				b(a.$$.fragment),
					(s = u()),
					($ = t('div')),
					(p = t('div')),
					(f = n('col_5')),
					(_ = u()),
					(v = t('div')),
					(I = n('col_8')),
					(k = u()),
					(C = t('div')),
					(j = n('col_8')),
					(z = u()),
					(S = t('div')),
					(q = n('col_5')),
					this.h();
			},
			l(e) {
				E(a.$$.fragment, e), (s = h(e)), ($ = o(e, 'DIV', { class: !0 }));
				var t = r($);
				p = o(t, 'DIV', { class: !0 });
				var n = r(p);
				(f = c(n, 'col_5')), n.forEach(i), (_ = h(t)), (v = o(t, 'DIV', { class: !0 }));
				var l = r(v);
				(I = c(l, 'col_8')), l.forEach(i), (k = h(t)), (C = o(t, 'DIV', { class: !0 }));
				var m = r(C);
				(j = c(m, 'col_8')), m.forEach(i), (z = h(t)), (S = o(t, 'DIV', { class: !0 }));
				var g = r(S);
				(q = c(g, 'col_5')), g.forEach(i), t.forEach(i), this.h();
			},
			h() {
				l(p, 'class', 'col_5 bgc_5 p_1'),
					l(v, 'class', 'col_8 bgc_5 p_1'),
					l(C, 'class', 'col_8 bgc_5 p_1'),
					l(S, 'class', 'col_5 bgc_5 p_1'),
					l($, 'class', 'dg  mh_5 gap_1 p_1 c_0');
			},
			m(e, t) {
				w(a, e, t),
					m(e, s, t),
					m(e, $, t),
					g($, p),
					g(p, f),
					g($, _),
					g($, v),
					g(v, I),
					g($, k),
					g($, C),
					g(C, j),
					g($, z),
					g($, S),
					g(S, q),
					(P = !0);
			},
			p: d,
			i(e) {
				P || (x(a.$$.fragment, e), (P = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (P = !1);
			},
			d(e) {
				D(a, e), e && i(s), e && i($);
			}
		}
	);
}
function Z(e) {
	let a;
	return {
		c() {
			a = n('Simple, ligero, limpio y claro.');
		},
		l(e) {
			a = c(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, s) {
			m(e, a, s);
		},
		d(e) {
			e && i(a);
		}
	};
}
function ee(e) {
	let a;
	return {
		c() {
			a = n('Completo, funcional, versátil y ordenado.');
		},
		l(e) {
			a = c(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, s) {
			m(e, a, s);
		},
		d(e) {
			e && i(a);
		}
	};
}
function ae(e) {
	let a;
	return {
		c() {
			a = n('Work in progress...');
		},
		l(e) {
			a = c(e, 'Work in progress...');
		},
		m(e, s) {
			m(e, a, s);
		},
		d(e) {
			e && i(a);
		}
	};
}
function se(e) {
	let a, s, t, n, o, r;
	return (
		(a = new S({
			props: { tipo: 0, variante: 6, $$slots: { default: [Z] }, $$scope: { ctx: e } }
		})),
		(t = new S({
			props: { tipo: 0, variante: 6, $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		(o = new S({
			props: { tipo: 0, variante: 6, $$slots: { default: [ae] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				b(a.$$.fragment), (s = u()), b(t.$$.fragment), (n = u()), b(o.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e), (s = h(e)), E(t.$$.fragment, e), (n = h(e)), E(o.$$.fragment, e);
			},
			m(e, c) {
				w(a, e, c), m(e, s, c), w(t, e, c), m(e, n, c), w(o, e, c), (r = !0);
			},
			p(e, s) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: e }), a.$set(n);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), o.$set(c);
			},
			i(e) {
				r || (x(a.$$.fragment, e), x(t.$$.fragment, e), x(o.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(a.$$.fragment, e), y(t.$$.fragment, e), y(o.$$.fragment, e), (r = !1);
			},
			d(e) {
				D(a, e), e && i(s), D(t, e), e && i(n), D(o, e);
			}
		}
	);
}
function te(e) {
	let a, s;
	return (
		(a = new I({ props: { variante: 3, text: 'Repositorio en Github' } })),
		{
			c() {
				b(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, t) {
				w(a, e, t), (s = !0);
			},
			p: d,
			i(e) {
				s || (x(a.$$.fragment, e), (s = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (s = !1);
			},
			d(e) {
				D(a, e);
			}
		}
	);
}
function ne(e) {
	let a, s;
	return (
		(a = new q({ props: { tabHeaders: H } })),
		{
			c() {
				b(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, t) {
				w(a, e, t), (s = !0);
			},
			p: d,
			i(e) {
				s || (x(a.$$.fragment, e), (s = !0));
			},
			o(e) {
				y(a.$$.fragment, e), (s = !1);
			},
			d(e) {
				D(a, e);
			}
		}
	);
}
function oe(e) {
	let a,
		s,
		n,
		c,
		$,
		p,
		d,
		f,
		_,
		v,
		I,
		q,
		P,
		H,
		B,
		L,
		G,
		O,
		A,
		N,
		T,
		R,
		U,
		F,
		W,
		Z,
		ee,
		ae,
		oe,
		re,
		ce;
	return (
		(a = new V({
			props: {
				clases: 'mh_5 tac',
				tipo: 2,
				variante: 0,
				img: './img/bg5.png',
				title: k[4].title,
				subtitle: k[4].subtitle
			}
		})),
		(n = new j({
			props: {
				clases: 'c_4 bgc_0 rg_1 bgwhite p_3 pt_0 cg_s2_1 dg',
				$$slots: { default: [J] },
				$$scope: { ctx: e }
			}
		})),
		($ = new j({
			props: {
				clases: 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0',
				$$slots: { default: [M] },
				$$scope: { ctx: e }
			}
		})),
		(d = new j({
			props: {
				clases: 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2',
				$$slots: { default: [K] },
				$$scope: { ctx: e }
			}
		})),
		(_ = new j({
			props: {
				id: 'Nomenclatura',
				clases: 'c_4 bgc_0 dg_12 rg_1 bgwhite p_3 cg_s2_1',
				$$slots: { default: [Y] },
				$$scope: { ctx: e }
			}
		})),
		(I = new j({
			props: {
				id: 'Componentes',
				clases: 'c_4 bgc_0 dg_12 rg_1 bgwhite p_3 cg_s2_1',
				$$slots: { default: [Q] },
				$$scope: { ctx: e }
			}
		})),
		(P = new j({
			props: {
				id: 'Clases',
				clases: 'bgc_primary c_4 bgc_primary',
				$$slots: { default: [X] },
				$$scope: { ctx: e }
			}
		})),
		(G = new C({ props: { src: './img/grafico-11.svg', alt: '' } })),
		(N = new V({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		(R = new z({
			props: {
				tipo: 0,
				variante: 0,
				marker: './img/marker.svg',
				$$slots: { default: [se] },
				$$scope: { ctx: e }
			}
		})),
		(F = new S({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [te] },
				$$scope: { ctx: e }
			}
		})),
		(ae = new V({ props: { tipo: 1, variante: 1, title: 'Notas acerca de esta web' } })),
		(re = new j({
			props: { id: 'UIPrototype', variante: 7, $$slots: { default: [ne] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				b(a.$$.fragment),
					(s = u()),
					b(n.$$.fragment),
					(c = u()),
					b($.$$.fragment),
					(p = u()),
					b(d.$$.fragment),
					(f = u()),
					b(_.$$.fragment),
					(v = u()),
					b(I.$$.fragment),
					(q = u()),
					b(P.$$.fragment),
					(H = u()),
					(B = t('div')),
					(L = t('div')),
					b(G.$$.fragment),
					(O = u()),
					(A = t('div')),
					b(N.$$.fragment),
					(T = u()),
					b(R.$$.fragment),
					(U = u()),
					b(F.$$.fragment),
					(W = u()),
					(Z = t('div')),
					(ee = t('div')),
					b(ae.$$.fragment),
					(oe = u()),
					b(re.$$.fragment),
					this.h();
			},
			l(e) {
				E(a.$$.fragment, e),
					(s = h(e)),
					E(n.$$.fragment, e),
					(c = h(e)),
					E($.$$.fragment, e),
					(p = h(e)),
					E(d.$$.fragment, e),
					(f = h(e)),
					E(_.$$.fragment, e),
					(v = h(e)),
					E(I.$$.fragment, e),
					(q = h(e)),
					E(P.$$.fragment, e),
					(H = h(e)),
					(B = o(e, 'DIV', { class: !0 }));
				var t = r(B);
				L = o(t, 'DIV', { class: !0 });
				var l = r(L);
				E(G.$$.fragment, l), l.forEach(i), (O = h(t)), (A = o(t, 'DIV', { class: !0 }));
				var m = r(A);
				E(N.$$.fragment, m),
					(T = h(m)),
					E(R.$$.fragment, m),
					(U = h(m)),
					E(F.$$.fragment, m),
					m.forEach(i),
					t.forEach(i),
					(W = h(e)),
					(Z = o(e, 'DIV', { class: !0 }));
				var g = r(Z);
				ee = o(g, 'DIV', { class: !0 });
				var u = r(ee);
				E(ae.$$.fragment, u),
					u.forEach(i),
					g.forEach(i),
					(oe = h(e)),
					E(re.$$.fragment, e),
					this.h();
			},
			h() {
				l(L, 'class', 'col_13 col_s2_8'),
					l(A, 'class', 'col_13 col_s2_5 dg_0 pcc c_4 p_3'),
					l(B, 'class', 'dg rg_1 bgc_1 mh_10 mh_s2_5'),
					l(ee, 'class', 'col_13'),
					l(Z, 'class', 'dg pt_3 pb_3 tac bgc_4');
			},
			m(e, t) {
				w(a, e, t),
					m(e, s, t),
					w(n, e, t),
					m(e, c, t),
					w($, e, t),
					m(e, p, t),
					w(d, e, t),
					m(e, f, t),
					w(_, e, t),
					m(e, v, t),
					w(I, e, t),
					m(e, q, t),
					w(P, e, t),
					m(e, H, t),
					m(e, B, t),
					g(B, L),
					w(G, L, null),
					g(B, O),
					g(B, A),
					w(N, A, null),
					g(A, T),
					w(R, A, null),
					g(A, U),
					w(F, A, null),
					m(e, W, t),
					m(e, Z, t),
					g(Z, ee),
					w(ae, ee, null),
					m(e, oe, t),
					w(re, e, t),
					(ce = !0);
			},
			p(e, [a]) {
				const s = {};
				1 & a && (s.$$scope = { dirty: a, ctx: e }), n.$set(s);
				const t = {};
				1 & a && (t.$$scope = { dirty: a, ctx: e }), $.$set(t);
				const o = {};
				1 & a && (o.$$scope = { dirty: a, ctx: e }), d.$set(o);
				const r = {};
				1 & a && (r.$$scope = { dirty: a, ctx: e }), _.$set(r);
				const c = {};
				1 & a && (c.$$scope = { dirty: a, ctx: e }), I.$set(c);
				const i = {};
				1 & a && (i.$$scope = { dirty: a, ctx: e }), P.$set(i);
				const l = {};
				1 & a && (l.$$scope = { dirty: a, ctx: e }), R.$set(l);
				const m = {};
				1 & a && (m.$$scope = { dirty: a, ctx: e }), F.$set(m);
				const g = {};
				1 & a && (g.$$scope = { dirty: a, ctx: e }), re.$set(g);
			},
			i(e) {
				ce ||
					(x(a.$$.fragment, e),
					x(n.$$.fragment, e),
					x($.$$.fragment, e),
					x(d.$$.fragment, e),
					x(_.$$.fragment, e),
					x(I.$$.fragment, e),
					x(P.$$.fragment, e),
					x(G.$$.fragment, e),
					x(N.$$.fragment, e),
					x(R.$$.fragment, e),
					x(F.$$.fragment, e),
					x(ae.$$.fragment, e),
					x(re.$$.fragment, e),
					(ce = !0));
			},
			o(e) {
				y(a.$$.fragment, e),
					y(n.$$.fragment, e),
					y($.$$.fragment, e),
					y(d.$$.fragment, e),
					y(_.$$.fragment, e),
					y(I.$$.fragment, e),
					y(P.$$.fragment, e),
					y(G.$$.fragment, e),
					y(N.$$.fragment, e),
					y(R.$$.fragment, e),
					y(F.$$.fragment, e),
					y(ae.$$.fragment, e),
					y(re.$$.fragment, e),
					(ce = !1);
			},
			d(e) {
				D(a, e),
					e && i(s),
					D(n, e),
					e && i(c),
					D($, e),
					e && i(p),
					D(d, e),
					e && i(f),
					D(_, e),
					e && i(v),
					D(I, e),
					e && i(q),
					D(P, e),
					e && i(H),
					e && i(B),
					D(G),
					D(N),
					D(R),
					D(F),
					e && i(W),
					e && i(Z),
					D(ae),
					e && i(oe),
					D(re, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, oe, s, {});
	}
}
