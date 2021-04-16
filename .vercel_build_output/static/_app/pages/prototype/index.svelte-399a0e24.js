import {
	S as e,
	i as t,
	s,
	M as a,
	e as n,
	c as o,
	a as r,
	d as c,
	o as $,
	f as l,
	O as i,
	w as m,
	x as g,
	t as p,
	b as d,
	g as f,
	h as u,
	n as _,
	B as h,
	j as v,
	l as x,
	G as w,
	P as b,
	p as y,
	q as k,
	r as E,
	y as C
} from '../../chunks/index-d91e1ed8.js';
import { B as j, c as z } from '../../chunks/Grid.svelte-60585820.js';
import { H as S } from '../../chunks/Header-251278fe.js';
/* empty css                                     */ import { I } from '../../chunks/Img-674f19a2.js';
import { S as D } from '../../chunks/Section-ebe14856.js';
import { L as q, a as V } from '../../chunks/ListItem-196d07d7.js';
import { T as H } from '../../chunks/Tabs-a8f99065.js';
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
	B = [
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
function L(e) {
	let t, s;
	const p = e[2].default,
		d = a(p, e, e[1], null);
	return {
		c() {
			(t = n('code')), d && d.c(), this.h();
		},
		l(e) {
			t = o(e, 'CODE', { class: !0 });
			var s = r(t);
			d && d.l(s), s.forEach(c), this.h();
		},
		h() {
			$(t, 'class', e[0]);
		},
		m(e, a) {
			l(e, t, a), d && d.m(t, null), (s = !0);
		},
		p(e, [a]) {
			d && d.p && 2 & a && i(d, p, e, e[1], a, null, null), (!s || 1 & a) && $(t, 'class', e[0]);
		},
		i(e) {
			s || (m(d, e), (s = !0));
		},
		o(e) {
			g(d, e), (s = !1);
		},
		d(e) {
			e && c(t), d && d.d(e);
		}
	};
}
function A(e, t, s) {
	let { $$slots: a = {}, $$scope: n } = t,
		{ clases: o = '' } = t;
	return (
		(e.$$set = (e) => {
			'clases' in e && s(0, (o = e.clases)), '$$scope' in e && s(1, (n = e.$$scope));
		}),
		[o, n, a]
	);
}
class N extends e {
	constructor(e) {
		super(), t(this, e, A, L, s, { clases: 0 });
	}
}
function T(e) {
	let t, s, a, i, m;
	return {
		c() {
			(t = n('div')), (s = n('pre')), (a = n('code')), (i = p(e[1])), this.h();
		},
		l(n) {
			t = o(n, 'DIV', { class: !0 });
			var $ = r(t);
			s = o($, 'PRE', {});
			var l = r(s);
			a = o(l, 'CODE', { class: !0 });
			var m = r(a);
			(i = d(m, e[1])), m.forEach(c), l.forEach(c), $.forEach(c), this.h();
		},
		h() {
			$(a, 'class', (m = 'language-' + e[0])), $(t, 'class', e[2]);
		},
		m(e, n) {
			l(e, t, n), f(t, s), f(s, a), f(a, i);
		},
		p(e, [s]) {
			2 & s && u(i, e[1]),
				1 & s && m !== (m = 'language-' + e[0]) && $(a, 'class', m),
				4 & s && $(t, 'class', e[2]);
		},
		i: _,
		o: _,
		d(e) {
			e && c(t);
		}
	};
}
function G(e, t, s) {
	let { language: a } = t,
		{ code: n } = t,
		{ clases: o = '' } = t;
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
				'code' in e && s(1, (n = e.code)),
				'clases' in e && s(2, (o = e.clases));
		}),
		[a, n, o]
	);
}
class R extends e {
	constructor(e) {
		super(), t(this, e, G, T, s, { language: 0, code: 1, clases: 2 });
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
function U(e) {
	let t, s, a, i, m, g, h, y, k;
	return {
		c() {
			(t = n('div')),
				(s = n('h2')),
				(a = p(e[0])),
				(i = v()),
				(m = n('code')),
				(g = p(e[1])),
				(h = v()),
				(y = n('div')),
				(k = n('div')),
				this.h();
		},
		l(n) {
			t = o(n, 'DIV', { class: !0 });
			var $ = r(t);
			s = o($, 'H2', {});
			var l = r(s);
			(a = d(l, e[0])), l.forEach(c), (i = x($)), (m = o($, 'CODE', { class: !0 }));
			var p = r(m);
			(g = d(p, e[1])), p.forEach(c), $.forEach(c), (h = x(n)), (y = o(n, 'DIV', { class: !0 }));
			var f = r(y);
			(k = o(f, 'DIV', { class: !0, style: !0 })), r(k).forEach(c), f.forEach(c), this.h();
		},
		h() {
			$(m, 'class', 'code language- svelte-135p8ti'),
				$(t, 'class', 'col_5 backFlipBox svelte-135p8ti'),
				w(t, 'NoRebelesTxt', e[3]),
				$(k, 'class', 'image svelte-135p8ti'),
				b(k, 'background-image', 'url(' + e[2] + ')'),
				$(y, 'class', 'col_8 frontFlipBox svelte-135p8ti');
		},
		m(e, n) {
			l(e, t, n), f(t, s), f(s, a), f(t, i), f(t, m), f(m, g), l(e, h, n), l(e, y, n), f(y, k);
		},
		p(e, [s]) {
			1 & s && u(a, e[0]),
				2 & s && u(g, e[1]),
				8 & s && w(t, 'NoRebelesTxt', e[3]),
				4 & s && b(k, 'background-image', 'url(' + e[2] + ')');
		},
		i: _,
		o: _,
		d(e) {
			e && c(t), e && c(h), e && c(y);
		}
	};
}
function M(e, t, s) {
	let { back_txt: a } = t,
		{ code: n } = t,
		{ foto: o } = t,
		{ showCarBack: r } = t;
	return (
		(e.$$set = (e) => {
			'back_txt' in e && s(0, (a = e.back_txt)),
				'code' in e && s(1, (n = e.code)),
				'foto' in e && s(2, (o = e.foto)),
				'showCarBack' in e && s(3, (r = e.showCarBack));
		}),
		[a, n, o, r]
	);
}
class F extends e {
	constructor(e) {
		super(), t(this, e, M, U, s, { back_txt: 0, code: 1, foto: 2, showCarBack: 3 });
	}
}
function J(e) {
	let t, s, a, i, p, d, u, _, h, b, z, S;
	return (
		(a = new j({ props: { variante: 5, text: '↜' } })),
		a.$on('click', e[6]),
		(p = new j({ props: { variante: 5, text: e[1] ? '⤿' : '⤾' } })),
		p.$on('click', e[5]),
		(u = new j({ props: { variante: 5, text: '⤳' } })),
		u.$on('click', e[7]),
		(b = new F({ props: { showCarBack: e[1], code: e[2], foto: e[3], back_txt: e[4] } })),
		{
			c() {
				(t = n('div')),
					(s = n('div')),
					y(a.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(d = v()),
					y(u.$$.fragment),
					(_ = v()),
					(h = n('div')),
					y(b.$$.fragment),
					this.h();
			},
			l(e) {
				t = o(e, 'DIV', { class: !0 });
				var n = r(t);
				s = o(n, 'DIV', { class: !0 });
				var $ = r(s);
				k(a.$$.fragment, $),
					(i = x($)),
					k(p.$$.fragment, $),
					(d = x($)),
					k(u.$$.fragment, $),
					$.forEach(c),
					(_ = x(n)),
					(h = o(n, 'DIV', { class: !0 }));
				var l = r(h);
				k(b.$$.fragment, l), l.forEach(c), n.forEach(c), this.h();
			},
			h() {
				$(s, 'class', 'ButtonControls svelte-1lw5zxr'),
					$(h, 'class', 'dg_0 flip-box-inner svelte-1lw5zxr'),
					w(h, 'flip-it', e[1]),
					$(t, 'class', (z = 'flip-box ' + e[0] + ' svelte-1lw5zxr'));
			},
			m(e, n) {
				l(e, t, n),
					f(t, s),
					E(a, s, null),
					f(s, i),
					E(p, s, null),
					f(s, d),
					E(u, s, null),
					f(t, _),
					f(t, h),
					E(b, h, null),
					(S = !0);
			},
			p(e, [s]) {
				const a = {};
				2 & s && (a.text = e[1] ? '⤿' : '⤾'), p.$set(a);
				const n = {};
				2 & s && (n.showCarBack = e[1]),
					4 & s && (n.code = e[2]),
					8 & s && (n.foto = e[3]),
					16 & s && (n.back_txt = e[4]),
					b.$set(n),
					2 & s && w(h, 'flip-it', e[1]),
					(!S || (1 & s && z !== (z = 'flip-box ' + e[0] + ' svelte-1lw5zxr'))) && $(t, 'class', z);
			},
			i(e) {
				S ||
					(m(a.$$.fragment, e),
					m(p.$$.fragment, e),
					m(u.$$.fragment, e),
					m(b.$$.fragment, e),
					(S = !0));
			},
			o(e) {
				g(a.$$.fragment, e),
					g(p.$$.fragment, e),
					g(u.$$.fragment, e),
					g(b.$$.fragment, e),
					(S = !1);
			},
			d(e) {
				e && c(t), C(a), C(p), C(u), C(b);
			}
		}
	);
}
function W(e, t, s) {
	let a,
		n,
		o,
		{ clases: r = '' } = t;
	let c = !1,
		$ = 0;
	return (
		(e.$$set = (e) => {
			'clases' in e && s(0, (r = e.clases));
		}),
		(e.$$.update = () => {
			256 & e.$$.dirty && s(2, (a = O[$].code)),
				256 & e.$$.dirty && s(3, (n = O[$].image)),
				256 & e.$$.dirty && s(4, (o = O[$].word));
		}),
		[
			r,
			c,
			a,
			n,
			o,
			() => s(1, (c = !c)),
			() => {
				s(1, (c = !1)), s(8, 0 === $ ? ($ = O.length - 1) : ($ -= 1));
			},
			() => {
				s(1, (c = !1)), s(8, $ === O.length - 1 ? ($ = 0) : ($ += 1));
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
	let t, s, a, i, u, h, w, b, j, z, I, D;
	return (
		(t = new R({
			props: { clases: 'col_13 col_s2_8 mt_-4', language: P[1].language, code: P[1].text }
		})),
		(i = new S({
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
					(a = n('div')),
					y(i.$$.fragment),
					(u = v()),
					(h = n('p')),
					(w = p(
						'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
					)),
					(b = v()),
					(j = n('p')),
					(z = n('code')),
					(I = p('.mw_*')),
					this.h();
			},
			l(e) {
				k(t.$$.fragment, e), (s = x(e)), (a = o(e, 'DIV', { class: !0 }));
				var n = r(a);
				k(i.$$.fragment, n), (u = x(n)), (h = o(n, 'P', {}));
				var $ = r(h);
				(w = d(
					$,
					'En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.'
				)),
					$.forEach(c),
					(b = x(n)),
					(j = o(n, 'P', {}));
				var l = r(j);
				z = o(l, 'CODE', { class: !0 });
				var m = r(z);
				(I = d(m, '.mw_*')), m.forEach(c), l.forEach(c), n.forEach(c), this.h();
			},
			h() {
				$(z, 'class', 'language-scss'), $(a, 'class', 'col_13 col_s2_5 dg_0 pcc');
			},
			m(e, n) {
				E(t, e, n),
					l(e, s, n),
					l(e, a, n),
					E(i, a, null),
					f(a, u),
					f(a, h),
					f(h, w),
					f(a, b),
					f(a, j),
					f(j, z),
					f(z, I),
					(D = !0);
			},
			p: _,
			i(e) {
				D || (m(t.$$.fragment, e), m(i.$$.fragment, e), (D = !0));
			},
			o(e) {
				g(t.$$.fragment, e), g(i.$$.fragment, e), (D = !1);
			},
			d(e) {
				C(t, e), e && c(s), e && c(a), C(i);
			}
		}
	);
}
function Q(e) {
	let t, s, a, i, u, h, w, b, j, z, S, I, D;
	return (
		(I = new R({ props: { clases: 'col_13 col_s2_8', language: P[0].language, code: P[0].text } })),
		{
			c() {
				(t = n('div')),
					(s = n('p')),
					(a = n('strong')),
					(i = p('Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					(u = v()),
					(h = n('p')),
					(w = p('Su simplicidad y belleza saltan a la vista.\n\t\t\t')),
					(b = n('strong')),
					(j = p('Encapsulamiento holístico:')),
					(z = p(
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					(S = v()),
					y(I.$$.fragment),
					this.h();
			},
			l(e) {
				t = o(e, 'DIV', { class: !0 });
				var n = r(t);
				s = o(n, 'P', {});
				var $ = r(s);
				a = o($, 'STRONG', {});
				var l = r(a);
				(i = d(l, 'Un sistema de diseño basado en Sass con sintaxis minimalista.')),
					l.forEach(c),
					$.forEach(c),
					(u = x(n)),
					(h = o(n, 'P', {}));
				var m = r(h);
				(w = d(m, 'Su simplicidad y belleza saltan a la vista.\n\t\t\t')), (b = o(m, 'STRONG', {}));
				var g = r(b);
				(j = d(g, 'Encapsulamiento holístico:')),
					g.forEach(c),
					(z = d(
						m,
						'\n\t\t\tEstoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se\n\t\t\ttrata de economizar recursos al igual que sucede en la naturaleza.'
					)),
					m.forEach(c),
					n.forEach(c),
					(S = x(e)),
					k(I.$$.fragment, e),
					this.h();
			},
			h() {
				$(t, 'class', 'col_13 col_s2_5');
			},
			m(e, n) {
				l(e, t, n),
					f(t, s),
					f(s, a),
					f(a, i),
					f(t, u),
					f(t, h),
					f(h, w),
					f(h, b),
					f(b, j),
					f(h, z),
					l(e, S, n),
					E(I, e, n),
					(D = !0);
			},
			p: _,
			i(e) {
				D || (m(I.$$.fragment, e), (D = !0));
			},
			o(e) {
				g(I.$$.fragment, e), (D = !1);
			},
			d(e) {
				e && c(t), e && c(S), C(I, e);
			}
		}
	);
}
function X(e) {
	let t, s, a, $, i;
	return {
		c() {
			(t = n('dt')),
				(s = p('Control de versiones')),
				(a = v()),
				($ = n('dd')),
				(i = p(
					'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\tprototipo vive en diferentes universos "paralelos"'
				));
		},
		l(e) {
			t = o(e, 'DT', {});
			var n = r(t);
			(s = d(n, 'Control de versiones')), n.forEach(c), (a = x(e)), ($ = o(e, 'DD', {}));
			var l = r($);
			(i = d(
				l,
				'Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro\n\t\t\tprototipo vive en diferentes universos "paralelos"'
			)),
				l.forEach(c);
		},
		m(e, n) {
			l(e, t, n), f(t, s), l(e, a, n), l(e, $, n), f($, i);
		},
		d(e) {
			e && c(t), e && c(a), e && c($);
		}
	};
}
function Z(e) {
	let t, s, a, n;
	return (
		(t = new R({ props: { clases: 'col_13 col_s2_8', language: P[2].language, code: P[2].text } })),
		(a = new q({
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
				k(t.$$.fragment, e), (s = x(e)), k(a.$$.fragment, e);
			},
			m(e, o) {
				E(t, e, o), l(e, s, o), E(a, e, o), (n = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
			},
			i(e) {
				n || (m(t.$$.fragment, e), m(a.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(t.$$.fragment, e), g(a.$$.fragment, e), (n = !1);
			},
			d(e) {
				C(t, e), e && c(s), C(a, e);
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
			t = d(e, '.mh_(*)');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function te(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [ee] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('min-height: (*)vh; ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'min-height: (*)vh; ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
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
			t = d(e, '.mw_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ae(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [se] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('min-width: (*)vw; ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'min-width: (*)vw; ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function ne(e) {
	let t;
	return {
		c() {
			t = p('.gr_*');
		},
		l(e) {
			t = d(e, '.gr_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function oe(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [ne] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('row-gap: span (*);')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'row-gap: span (*);')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function re(e) {
	let t;
	return {
		c() {
			t = p('.dg');
		},
		l(e) {
			t = d(e, '.dg');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ce(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [re] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('display: grid; ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'display: grid; ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
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
			t = d(e, '.p_3');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function le(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [$e] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('padding: 1.62rem; ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'padding: 1.62rem; ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
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
			t = d(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function me(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [ie] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('css ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'css ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function ge(e) {
	let t;
	return {
		c() {
			t = p('.dg_12');
		},
		l(e) {
			t = d(e, '.dg_12');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function pe(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [ge] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('css ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'css ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function de(e) {
	let t;
	return {
		c() {
			t = p('.col_s2_*');
		},
		l(e) {
			t = d(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function fe(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [de] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('css ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'css ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function ue(e) {
	let t;
	return {
		c() {
			t = p('.dg');
		},
		l(e) {
			t = d(e, '.dg');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function _e(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [ue] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('display: grid; ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'display: grid; ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function he(e) {
	let t;
	return {
		c() {
			t = p('.p_3');
		},
		l(e) {
			t = d(e, '.p_3');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ve(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [he] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('padding: 1.62rem; ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'padding: 1.62rem; ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function xe(e) {
	let t;
	return {
		c() {
			t = p('.col_s2_*');
		},
		l(e) {
			t = d(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function we(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [xe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('css ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'css ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function be(e) {
	let t;
	return {
		c() {
			t = p('.dg_12');
		},
		l(e) {
			t = d(e, '.dg_12');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function ye(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [be] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('css ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'css ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function ke(e) {
	let t;
	return {
		c() {
			t = p('.col_s2_*');
		},
		l(e) {
			t = d(e, '.col_s2_*');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Ee(e) {
	let t, s, a;
	return (
		(s = new N({
			props: { clases: 'language-scss', $$slots: { default: [ke] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = p('css ')), y(s.$$.fragment);
			},
			l(e) {
				(t = d(e, 'css ')), k(s.$$.fragment, e);
			},
			m(e, n) {
				l(e, t, n), E(s, e, n), (a = !0);
			},
			p(e, t) {
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), s.$set(a);
			},
			i(e) {
				a || (m(s.$$.fragment, e), (a = !0));
			},
			o(e) {
				g(s.$$.fragment, e), (a = !1);
			},
			d(e) {
				e && c(t), C(s, e);
			}
		}
	);
}
function Ce(e) {
	let t, s, a, n, o, r, $, i, p, d, f, u, _, h, w, b, j, z, S, I, D, q, H, P, B, L;
	return (
		(t = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [te] },
				$$scope: { ctx: e }
			}
		})),
		(a = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ae] },
				$$scope: { ctx: e }
			}
		})),
		(o = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [oe] },
				$$scope: { ctx: e }
			}
		})),
		($ = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ce] },
				$$scope: { ctx: e }
			}
		})),
		(p = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [le] },
				$$scope: { ctx: e }
			}
		})),
		(f = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [me] },
				$$scope: { ctx: e }
			}
		})),
		(_ = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [pe] },
				$$scope: { ctx: e }
			}
		})),
		(w = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [fe] },
				$$scope: { ctx: e }
			}
		})),
		(j = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [_e] },
				$$scope: { ctx: e }
			}
		})),
		(S = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ve] },
				$$scope: { ctx: e }
			}
		})),
		(D = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [we] },
				$$scope: { ctx: e }
			}
		})),
		(H = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [ye] },
				$$scope: { ctx: e }
			}
		})),
		(B = new V({
			props: {
				tipo: 4,
				clases: 'col_6 col_s2_3 dg_0 rg_-1',
				$$slots: { default: [Ee] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(n = v()),
					y(o.$$.fragment),
					(r = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(d = v()),
					y(f.$$.fragment),
					(u = v()),
					y(_.$$.fragment),
					(h = v()),
					y(w.$$.fragment),
					(b = v()),
					y(j.$$.fragment),
					(z = v()),
					y(S.$$.fragment),
					(I = v()),
					y(D.$$.fragment),
					(q = v()),
					y(H.$$.fragment),
					(P = v()),
					y(B.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e),
					(s = x(e)),
					k(a.$$.fragment, e),
					(n = x(e)),
					k(o.$$.fragment, e),
					(r = x(e)),
					k($.$$.fragment, e),
					(i = x(e)),
					k(p.$$.fragment, e),
					(d = x(e)),
					k(f.$$.fragment, e),
					(u = x(e)),
					k(_.$$.fragment, e),
					(h = x(e)),
					k(w.$$.fragment, e),
					(b = x(e)),
					k(j.$$.fragment, e),
					(z = x(e)),
					k(S.$$.fragment, e),
					(I = x(e)),
					k(D.$$.fragment, e),
					(q = x(e)),
					k(H.$$.fragment, e),
					(P = x(e)),
					k(B.$$.fragment, e);
			},
			m(e, c) {
				E(t, e, c),
					l(e, s, c),
					E(a, e, c),
					l(e, n, c),
					E(o, e, c),
					l(e, r, c),
					E($, e, c),
					l(e, i, c),
					E(p, e, c),
					l(e, d, c),
					E(f, e, c),
					l(e, u, c),
					E(_, e, c),
					l(e, h, c),
					E(w, e, c),
					l(e, b, c),
					E(j, e, c),
					l(e, z, c),
					E(S, e, c),
					l(e, I, c),
					E(D, e, c),
					l(e, q, c),
					E(H, e, c),
					l(e, P, c),
					E(B, e, c),
					(L = !0);
			},
			p(e, s) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), a.$set(r);
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), o.$set(c);
				const l = {};
				1 & s && (l.$$scope = { dirty: s, ctx: e }), $.$set(l);
				const i = {};
				1 & s && (i.$$scope = { dirty: s, ctx: e }), p.$set(i);
				const m = {};
				1 & s && (m.$$scope = { dirty: s, ctx: e }), f.$set(m);
				const g = {};
				1 & s && (g.$$scope = { dirty: s, ctx: e }), _.$set(g);
				const d = {};
				1 & s && (d.$$scope = { dirty: s, ctx: e }), w.$set(d);
				const u = {};
				1 & s && (u.$$scope = { dirty: s, ctx: e }), j.$set(u);
				const h = {};
				1 & s && (h.$$scope = { dirty: s, ctx: e }), S.$set(h);
				const v = {};
				1 & s && (v.$$scope = { dirty: s, ctx: e }), D.$set(v);
				const x = {};
				1 & s && (x.$$scope = { dirty: s, ctx: e }), H.$set(x);
				const b = {};
				1 & s && (b.$$scope = { dirty: s, ctx: e }), B.$set(b);
			},
			i(e) {
				L ||
					(m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(o.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(f.$$.fragment, e),
					m(_.$$.fragment, e),
					m(w.$$.fragment, e),
					m(j.$$.fragment, e),
					m(S.$$.fragment, e),
					m(D.$$.fragment, e),
					m(H.$$.fragment, e),
					m(B.$$.fragment, e),
					(L = !0));
			},
			o(e) {
				g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(o.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(f.$$.fragment, e),
					g(_.$$.fragment, e),
					g(w.$$.fragment, e),
					g(j.$$.fragment, e),
					g(S.$$.fragment, e),
					g(D.$$.fragment, e),
					g(H.$$.fragment, e),
					g(B.$$.fragment, e),
					(L = !1);
			},
			d(e) {
				C(t, e),
					e && c(s),
					C(a, e),
					e && c(n),
					C(o, e),
					e && c(r),
					C($, e),
					e && c(i),
					C(p, e),
					e && c(d),
					C(f, e),
					e && c(u),
					C(_, e),
					e && c(h),
					C(w, e),
					e && c(b),
					C(j, e),
					e && c(z),
					C(S, e),
					e && c(I),
					C(D, e),
					e && c(q),
					C(H, e),
					e && c(P),
					C(B, e);
			}
		}
	);
}
function je(e) {
	let t, s, a, n, o, r, $, i;
	return (
		(t = new S({ props: { clases: 'col_12 tac c_3', title: 'Nomenclatura CSS' } })),
		(a = new R({
			props: {
				clases: 'col_12 col_s2_6',
				language: 'markup',
				code:
					"\n\x3c!-- let fruits = ['apple','banana'] --\x3e\n<div class='dg_12 rg_1 p_3'>\n\t<div class='col_12'>\n\t\t<Header/>\n\t</div>\n\t\x3c!-- Code.svelte --\x3e\n(each fruits as fruit,i)\n\t<div class=\"col_6\"> (fruit) </div>\n(/each)\n<div/>"
			}
		})),
		(o = new K({ props: { clases: 'col_12 col_s2_6' } })),
		($ = new q({
			props: {
				tipo: 1,
				class: 'col_12 gap_1 dg_12 c_1',
				$$slots: { default: [Ce] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(n = v()),
					y(o.$$.fragment),
					(r = v()),
					y($.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e),
					(s = x(e)),
					k(a.$$.fragment, e),
					(n = x(e)),
					k(o.$$.fragment, e),
					(r = x(e)),
					k($.$$.fragment, e);
			},
			m(e, c) {
				E(t, e, c),
					l(e, s, c),
					E(a, e, c),
					l(e, n, c),
					E(o, e, c),
					l(e, r, c),
					E($, e, c),
					(i = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), $.$set(s);
			},
			i(e) {
				i ||
					(m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(o.$$.fragment, e),
					m($.$$.fragment, e),
					(i = !0));
			},
			o(e) {
				g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(o.$$.fragment, e),
					g($.$$.fragment, e),
					(i = !1);
			},
			d(e) {
				C(t, e), e && c(s), C(a, e), e && c(n), C(o, e), e && c(r), C($, e);
			}
		}
	);
}
function ze(e) {
	let t, s, a, n, o, r, $, i, p, d, f, u, h, w, b, j, z, I, D, q, V, H, P, B, L, A;
	return (
		(t = new S({
			props: { tipo: 4, clases: 'col_12 tac c_4', title: 'Componentes Html y parámetros' }
		})),
		(a = new R({ props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: '<Alert />' } })),
		(o = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Button variante='n'/>" }
		})),
		($ = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Section variante='n'/>" }
		})),
		(p = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Header clases='dg p_1'/>" }
		})),
		(f = new R({
			props: {
				clases: 'col_6 col_s2_3 oh',
				language: 'markup',
				code: "<List tipo='' variante='n'/>"
			}
		})),
		(h = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<ListItem tipo='' />" }
		})),
		(b = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Nav tipo='' />" }
		})),
		(z = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Img tipo='' />" }
		})),
		(D = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Input tipo='' />" }
		})),
		(V = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Nav tipo='' />" }
		})),
		(P = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Img tipo='' />" }
		})),
		(L = new R({
			props: { clases: 'col_6 col_s2_3 oh', language: 'markup', code: "<Blockquote tipo='' />" }
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(n = v()),
					y(o.$$.fragment),
					(r = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(d = v()),
					y(f.$$.fragment),
					(u = v()),
					y(h.$$.fragment),
					(w = v()),
					y(b.$$.fragment),
					(j = v()),
					y(z.$$.fragment),
					(I = v()),
					y(D.$$.fragment),
					(q = v()),
					y(V.$$.fragment),
					(H = v()),
					y(P.$$.fragment),
					(B = v()),
					y(L.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e),
					(s = x(e)),
					k(a.$$.fragment, e),
					(n = x(e)),
					k(o.$$.fragment, e),
					(r = x(e)),
					k($.$$.fragment, e),
					(i = x(e)),
					k(p.$$.fragment, e),
					(d = x(e)),
					k(f.$$.fragment, e),
					(u = x(e)),
					k(h.$$.fragment, e),
					(w = x(e)),
					k(b.$$.fragment, e),
					(j = x(e)),
					k(z.$$.fragment, e),
					(I = x(e)),
					k(D.$$.fragment, e),
					(q = x(e)),
					k(V.$$.fragment, e),
					(H = x(e)),
					k(P.$$.fragment, e),
					(B = x(e)),
					k(L.$$.fragment, e);
			},
			m(e, c) {
				E(t, e, c),
					l(e, s, c),
					E(a, e, c),
					l(e, n, c),
					E(o, e, c),
					l(e, r, c),
					E($, e, c),
					l(e, i, c),
					E(p, e, c),
					l(e, d, c),
					E(f, e, c),
					l(e, u, c),
					E(h, e, c),
					l(e, w, c),
					E(b, e, c),
					l(e, j, c),
					E(z, e, c),
					l(e, I, c),
					E(D, e, c),
					l(e, q, c),
					E(V, e, c),
					l(e, H, c),
					E(P, e, c),
					l(e, B, c),
					E(L, e, c),
					(A = !0);
			},
			p: _,
			i(e) {
				A ||
					(m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(o.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(f.$$.fragment, e),
					m(h.$$.fragment, e),
					m(b.$$.fragment, e),
					m(z.$$.fragment, e),
					m(D.$$.fragment, e),
					m(V.$$.fragment, e),
					m(P.$$.fragment, e),
					m(L.$$.fragment, e),
					(A = !0));
			},
			o(e) {
				g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(o.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(f.$$.fragment, e),
					g(h.$$.fragment, e),
					g(b.$$.fragment, e),
					g(z.$$.fragment, e),
					g(D.$$.fragment, e),
					g(V.$$.fragment, e),
					g(P.$$.fragment, e),
					g(L.$$.fragment, e),
					(A = !1);
			},
			d(e) {
				C(t, e),
					e && c(s),
					C(a, e),
					e && c(n),
					C(o, e),
					e && c(r),
					C($, e),
					e && c(i),
					C(p, e),
					e && c(d),
					C(f, e),
					e && c(u),
					C(h, e),
					e && c(w),
					C(b, e),
					e && c(j),
					C(z, e),
					e && c(I),
					C(D, e),
					e && c(q),
					C(V, e),
					e && c(H),
					C(P, e),
					e && c(B),
					C(L, e);
			}
		}
	);
}
function Se(e) {
	let t, s, a, i, u, h, w, b, j, z, I, D, q, V, H;
	return (
		(t = new S({ props: { tipo: 4, clases: 'tac pt_2 c_4', title: 'Sistema Grid' } })),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					(a = n('div')),
					(i = n('div')),
					(u = p('col_5')),
					(h = v()),
					(w = n('div')),
					(b = p('col_8')),
					(j = v()),
					(z = n('div')),
					(I = p('col_8')),
					(D = v()),
					(q = n('div')),
					(V = p('col_5')),
					this.h();
			},
			l(e) {
				k(t.$$.fragment, e), (s = x(e)), (a = o(e, 'DIV', { class: !0 }));
				var n = r(a);
				i = o(n, 'DIV', { class: !0 });
				var $ = r(i);
				(u = d($, 'col_5')), $.forEach(c), (h = x(n)), (w = o(n, 'DIV', { class: !0 }));
				var l = r(w);
				(b = d(l, 'col_8')), l.forEach(c), (j = x(n)), (z = o(n, 'DIV', { class: !0 }));
				var m = r(z);
				(I = d(m, 'col_8')), m.forEach(c), (D = x(n)), (q = o(n, 'DIV', { class: !0 }));
				var g = r(q);
				(V = d(g, 'col_5')), g.forEach(c), n.forEach(c), this.h();
			},
			h() {
				$(i, 'class', 'col_5 bgc_5 p_1'),
					$(w, 'class', 'col_8 bgc_5 p_1'),
					$(z, 'class', 'col_8 bgc_5 p_1'),
					$(q, 'class', 'col_5 bgc_5 p_1'),
					$(a, 'class', 'dg  mh_5 gap_1 p_1 c_0');
			},
			m(e, n) {
				E(t, e, n),
					l(e, s, n),
					l(e, a, n),
					f(a, i),
					f(i, u),
					f(a, h),
					f(a, w),
					f(w, b),
					f(a, j),
					f(a, z),
					f(z, I),
					f(a, D),
					f(a, q),
					f(q, V),
					(H = !0);
			},
			p: _,
			i(e) {
				H || (m(t.$$.fragment, e), (H = !0));
			},
			o(e) {
				g(t.$$.fragment, e), (H = !1);
			},
			d(e) {
				C(t, e), e && c(s), e && c(a);
			}
		}
	);
}
function Ie(e) {
	let t;
	return {
		c() {
			t = p('Simple, ligero, limpio y claro.');
		},
		l(e) {
			t = d(e, 'Simple, ligero, limpio y claro.');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function De(e) {
	let t;
	return {
		c() {
			t = p('Completo, funcional, versátil y ordenado.');
		},
		l(e) {
			t = d(e, 'Completo, funcional, versátil y ordenado.');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function qe(e) {
	let t;
	return {
		c() {
			t = p('Work in progress...');
		},
		l(e) {
			t = d(e, 'Work in progress...');
		},
		m(e, s) {
			l(e, t, s);
		},
		d(e) {
			e && c(t);
		}
	};
}
function Ve(e) {
	let t, s, a, n, o, r;
	return (
		(t = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [Ie] }, $$scope: { ctx: e } }
		})),
		(a = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [De] }, $$scope: { ctx: e } }
		})),
		(o = new V({
			props: { tipo: 0, variante: 6, $$slots: { default: [qe] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(t.$$.fragment), (s = v()), y(a.$$.fragment), (n = v()), y(o.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e), (s = x(e)), k(a.$$.fragment, e), (n = x(e)), k(o.$$.fragment, e);
			},
			m(e, c) {
				E(t, e, c), l(e, s, c), E(a, e, c), l(e, n, c), E(o, e, c), (r = !0);
			},
			p(e, s) {
				const n = {};
				1 & s && (n.$$scope = { dirty: s, ctx: e }), t.$set(n);
				const r = {};
				1 & s && (r.$$scope = { dirty: s, ctx: e }), a.$set(r);
				const c = {};
				1 & s && (c.$$scope = { dirty: s, ctx: e }), o.$set(c);
			},
			i(e) {
				r || (m(t.$$.fragment, e), m(a.$$.fragment, e), m(o.$$.fragment, e), (r = !0));
			},
			o(e) {
				g(t.$$.fragment, e), g(a.$$.fragment, e), g(o.$$.fragment, e), (r = !1);
			},
			d(e) {
				C(t, e), e && c(s), C(a, e), e && c(n), C(o, e);
			}
		}
	);
}
function He(e) {
	let t, s;
	return (
		(t = new j({ props: { variante: 3, text: 'Repositorio en Github' } })),
		{
			c() {
				y(t.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e);
			},
			m(e, a) {
				E(t, e, a), (s = !0);
			},
			p: _,
			i(e) {
				s || (m(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				g(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				C(t, e);
			}
		}
	);
}
function Pe(e) {
	let t, s, a, i, p, d, u, _, h;
	return (
		(t = new I({ props: { clases: 'col_13 col_s2_8 p_1', src: './img/grafico-11.svg', alt: '' } })),
		(i = new S({
			props: {
				tipo: 3,
				variante: 6,
				title: 'Download',
				subtitle: 'Actualización y mejora contínua'
			}
		})),
		(d = new q({
			props: {
				tipo: 0,
				variante: 0,
				marker: './img/marker.svg',
				$$slots: { default: [Ve] },
				$$scope: { ctx: e }
			}
		})),
		(_ = new V({
			props: {
				tipo: 2,
				variante: 4,
				href: 'https://github.com/t0t/sveltekit',
				alt: '',
				target: '_blank',
				$$slots: { default: [He] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					(a = n('div')),
					y(i.$$.fragment),
					(p = v()),
					y(d.$$.fragment),
					(u = v()),
					y(_.$$.fragment),
					this.h();
			},
			l(e) {
				k(t.$$.fragment, e), (s = x(e)), (a = o(e, 'DIV', { class: !0 }));
				var n = r(a);
				k(i.$$.fragment, n),
					(p = x(n)),
					k(d.$$.fragment, n),
					(u = x(n)),
					k(_.$$.fragment, n),
					n.forEach(c),
					this.h();
			},
			h() {
				$(a, 'class', 'col_13 col_s2_5 dg_0 pcc c_4 p_3');
			},
			m(e, n) {
				E(t, e, n),
					l(e, s, n),
					l(e, a, n),
					E(i, a, null),
					f(a, p),
					E(d, a, null),
					f(a, u),
					E(_, a, null),
					(h = !0);
			},
			p(e, t) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), d.$set(s);
				const a = {};
				1 & t && (a.$$scope = { dirty: t, ctx: e }), _.$set(a);
			},
			i(e) {
				h ||
					(m(t.$$.fragment, e),
					m(i.$$.fragment, e),
					m(d.$$.fragment, e),
					m(_.$$.fragment, e),
					(h = !0));
			},
			o(e) {
				g(t.$$.fragment, e),
					g(i.$$.fragment, e),
					g(d.$$.fragment, e),
					g(_.$$.fragment, e),
					(h = !1);
			},
			d(e) {
				C(t, e), e && c(s), e && c(a), C(i), C(d), C(_);
			}
		}
	);
}
function Be(e) {
	let t, s, a, n;
	return (
		(t = new S({
			props: { clases: 'col_13 pb_3', tipo: 1, variante: 1, title: 'Notas acerca de esta web' }
		})),
		(a = new H({ props: { clases: 'col_13 pl_3 pr_3', tabHeaders: B } })),
		{
			c() {
				y(t.$$.fragment), (s = v()), y(a.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e), (s = x(e)), k(a.$$.fragment, e);
			},
			m(e, o) {
				E(t, e, o), l(e, s, o), E(a, e, o), (n = !0);
			},
			p: _,
			i(e) {
				n || (m(t.$$.fragment, e), m(a.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(t.$$.fragment, e), g(a.$$.fragment, e), (n = !1);
			},
			d(e) {
				C(t, e), e && c(s), C(a, e);
			}
		}
	);
}
function Le(e) {
	let t, s, a, n, o, r, $, i, p, d, f, u, _, h, w, b, j, I;
	return (
		(t = new S({
			props: {
				clases: 'mh_5 tac c_white',
				tipo: 2,
				variante: 0,
				img: './img/bg5.png',
				title: z[4].title,
				subtitle: z[4].subtitle
			}
		})),
		(a = new D({
			props: {
				clases: 'c_4 bgc_0 rg_1 bgwhite p_3 pt_1 cg_s2_1 dg',
				$$slots: { default: [Y] },
				$$scope: { ctx: e }
			}
		})),
		(o = new D({
			props: {
				clases: 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0',
				$$slots: { default: [Q] },
				$$scope: { ctx: e }
			}
		})),
		($ = new D({
			props: {
				clases: 'dg bgc_0 c_4 p_3 rg_1 cg_s2_2',
				$$slots: { default: [Z] },
				$$scope: { ctx: e }
			}
		})),
		(p = new D({
			props: {
				id: 'Nomenclatura',
				clases: 'c_4 bgc_0 dg_12 rg_1 bgwhite p_3 cg_s2_1',
				$$slots: { default: [je] },
				$$scope: { ctx: e }
			}
		})),
		(f = new D({
			props: {
				id: 'Componentes',
				clases: 'c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1',
				$$slots: { default: [ze] },
				$$scope: { ctx: e }
			}
		})),
		(_ = new D({
			props: {
				id: 'Clases',
				clases: 'bgc_primary c_4 bgc_primary',
				$$slots: { default: [Se] },
				$$scope: { ctx: e }
			}
		})),
		(w = new D({
			props: {
				clases: 'dg rg_1 bgc_1 mh_10 mh_s2_5',
				$$slots: { default: [Pe] },
				$$scope: { ctx: e }
			}
		})),
		(j = new D({
			props: {
				id: 'UIPrototype',
				clases: 'dg pt_3 tac bgc_4',
				variante: 7,
				$$slots: { default: [Be] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				y(t.$$.fragment),
					(s = v()),
					y(a.$$.fragment),
					(n = v()),
					y(o.$$.fragment),
					(r = v()),
					y($.$$.fragment),
					(i = v()),
					y(p.$$.fragment),
					(d = v()),
					y(f.$$.fragment),
					(u = v()),
					y(_.$$.fragment),
					(h = v()),
					y(w.$$.fragment),
					(b = v()),
					y(j.$$.fragment);
			},
			l(e) {
				k(t.$$.fragment, e),
					(s = x(e)),
					k(a.$$.fragment, e),
					(n = x(e)),
					k(o.$$.fragment, e),
					(r = x(e)),
					k($.$$.fragment, e),
					(i = x(e)),
					k(p.$$.fragment, e),
					(d = x(e)),
					k(f.$$.fragment, e),
					(u = x(e)),
					k(_.$$.fragment, e),
					(h = x(e)),
					k(w.$$.fragment, e),
					(b = x(e)),
					k(j.$$.fragment, e);
			},
			m(e, c) {
				E(t, e, c),
					l(e, s, c),
					E(a, e, c),
					l(e, n, c),
					E(o, e, c),
					l(e, r, c),
					E($, e, c),
					l(e, i, c),
					E(p, e, c),
					l(e, d, c),
					E(f, e, c),
					l(e, u, c),
					E(_, e, c),
					l(e, h, c),
					E(w, e, c),
					l(e, b, c),
					E(j, e, c),
					(I = !0);
			},
			p(e, [t]) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
				const r = {};
				1 & t && (r.$$scope = { dirty: t, ctx: e }), $.$set(r);
				const c = {};
				1 & t && (c.$$scope = { dirty: t, ctx: e }), p.$set(c);
				const l = {};
				1 & t && (l.$$scope = { dirty: t, ctx: e }), f.$set(l);
				const i = {};
				1 & t && (i.$$scope = { dirty: t, ctx: e }), _.$set(i);
				const m = {};
				1 & t && (m.$$scope = { dirty: t, ctx: e }), w.$set(m);
				const g = {};
				1 & t && (g.$$scope = { dirty: t, ctx: e }), j.$set(g);
			},
			i(e) {
				I ||
					(m(t.$$.fragment, e),
					m(a.$$.fragment, e),
					m(o.$$.fragment, e),
					m($.$$.fragment, e),
					m(p.$$.fragment, e),
					m(f.$$.fragment, e),
					m(_.$$.fragment, e),
					m(w.$$.fragment, e),
					m(j.$$.fragment, e),
					(I = !0));
			},
			o(e) {
				g(t.$$.fragment, e),
					g(a.$$.fragment, e),
					g(o.$$.fragment, e),
					g($.$$.fragment, e),
					g(p.$$.fragment, e),
					g(f.$$.fragment, e),
					g(_.$$.fragment, e),
					g(w.$$.fragment, e),
					g(j.$$.fragment, e),
					(I = !1);
			},
			d(e) {
				C(t, e),
					e && c(s),
					C(a, e),
					e && c(n),
					C(o, e),
					e && c(r),
					C($, e),
					e && c(i),
					C(p, e),
					e && c(d),
					C(f, e),
					e && c(u),
					C(_, e),
					e && c(h),
					C(w, e),
					e && c(b),
					C(j, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, Le, s, {});
	}
}
