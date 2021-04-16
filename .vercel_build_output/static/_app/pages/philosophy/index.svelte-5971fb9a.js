import {
	S as e,
	i as a,
	s as t,
	e as r,
	t as s,
	c as o,
	a as n,
	b as i,
	d as l,
	o as c,
	I as d,
	f as u,
	g as m,
	H as f,
	X as p,
	h,
	k as g,
	j as $,
	l as b,
	n as v,
	J as y,
	p as E,
	q as x,
	r as q,
	w as C,
	x as j,
	y as z,
	E as L
} from '../../chunks/index-d91e1ed8.js';
import { C as A, c as H } from '../../chunks/Cover-15f98305.js';
import { G as T } from '../../chunks/GridBase-57efd4c1.js';
import { S as k } from '../../chunks/Section-f5afcac2.js';
function w(e, a, t) {
	const r = e.slice();
	return (r[3] = a[t]), r;
}
function S(e, a, t) {
	const r = e.slice();
	return (r[3] = a[t]), r;
}
function N(e) {
	let a,
		t,
		g,
		$,
		b,
		v = e[3].title + '';
	return {
		c() {
			(a = r('button')), (t = s(v)), this.h();
		},
		l(e) {
			a = o(e, 'BUTTON', { class: !0 });
			var r = n(a);
			(t = i(r, v)), r.forEach(l), this.h();
		},
		h() {
			c(a, 'class', (g = d(e[0] === e[3].id ? 'active' : '') + ' svelte-1b8yd3s'));
		},
		m(r, s) {
			u(r, a, s),
				m(a, t),
				$ ||
					((b = f(a, 'click', function () {
						p(e[2](e[3].id)) && e[2](e[3].id).apply(this, arguments);
					})),
					($ = !0));
		},
		p(r, s) {
			(e = r),
				2 & s && v !== (v = e[3].title + '') && h(t, v),
				3 & s &&
					g !== (g = d(e[0] === e[3].id ? 'active' : '') + ' svelte-1b8yd3s') &&
					c(a, 'class', g);
		},
		d(e) {
			e && l(a), ($ = !1), b();
		}
	};
}
function R(e) {
	let a,
		t,
		d,
		f,
		p,
		g,
		v,
		y,
		E,
		x = e[3].title + '',
		q = e[3].subtitle + '',
		C = e[3].content + '';
	return {
		c() {
			(a = r('article')),
				(t = r('h2')),
				(d = s(x)),
				(f = $()),
				(p = r('span')),
				(g = s(q)),
				(v = $()),
				(y = r('p')),
				(E = $()),
				this.h();
		},
		l(e) {
			a = o(e, 'ARTICLE', { class: !0 });
			var r = n(a);
			t = o(r, 'H2', { class: !0 });
			var s = n(t);
			(d = i(s, x)), (f = b(s)), (p = o(s, 'SPAN', { class: !0 }));
			var c = n(p);
			(g = i(c, q)),
				c.forEach(l),
				s.forEach(l),
				(v = b(r)),
				(y = o(r, 'P', { class: !0 })),
				n(y).forEach(l),
				(E = b(r)),
				r.forEach(l),
				this.h();
		},
		h() {
			c(p, 'class', 'svelte-1b8yd3s'),
				c(t, 'class', 'svelte-1b8yd3s'),
				c(y, 'class', 'svelte-1b8yd3s'),
				c(a, 'class', 'svelte-1b8yd3s');
		},
		m(e, r) {
			u(e, a, r),
				m(a, t),
				m(t, d),
				m(t, f),
				m(t, p),
				m(p, g),
				m(a, v),
				m(a, y),
				(y.innerHTML = C),
				m(a, E);
		},
		p(e, a) {
			2 & a && x !== (x = e[3].title + '') && h(d, x),
				2 & a && q !== (q = e[3].subtitle + '') && h(g, q),
				2 & a && C !== (C = e[3].content + '') && (y.innerHTML = C);
		},
		d(e) {
			e && l(a);
		}
	};
}
function V(e) {
	let a,
		t = e[0] == e[3].id && R(e);
	return {
		c() {
			t && t.c(), (a = g());
		},
		l(e) {
			t && t.l(e), (a = g());
		},
		m(e, r) {
			t && t.m(e, r), u(e, a, r);
		},
		p(e, r) {
			e[0] == e[3].id
				? t
					? t.p(e, r)
					: ((t = R(e)), t.c(), t.m(a.parentNode, a))
				: t && (t.d(1), (t = null));
		},
		d(e) {
			t && t.d(e), e && l(a);
		}
	};
}
function P(e) {
	let a,
		t,
		s,
		i = e[1],
		d = [];
	for (let r = 0; r < i.length; r += 1) d[r] = N(S(e, i, r));
	let m = e[1],
		f = [];
	for (let r = 0; r < m.length; r += 1) f[r] = V(w(e, m, r));
	return {
		c() {
			a = r('nav');
			for (let e = 0; e < d.length; e += 1) d[e].c();
			t = $();
			for (let e = 0; e < f.length; e += 1) f[e].c();
			(s = g()), this.h();
		},
		l(e) {
			a = o(e, 'NAV', { class: !0 });
			var r = n(a);
			for (let a = 0; a < d.length; a += 1) d[a].l(r);
			r.forEach(l), (t = b(e));
			for (let a = 0; a < f.length; a += 1) f[a].l(e);
			(s = g()), this.h();
		},
		h() {
			c(a, 'class', 'svelte-1b8yd3s');
		},
		m(e, r) {
			u(e, a, r);
			for (let t = 0; t < d.length; t += 1) d[t].m(a, null);
			u(e, t, r);
			for (let a = 0; a < f.length; a += 1) f[a].m(e, r);
			u(e, s, r);
		},
		p(e, [t]) {
			if (7 & t) {
				let r;
				for (i = e[1], r = 0; r < i.length; r += 1) {
					const s = S(e, i, r);
					d[r] ? d[r].p(s, t) : ((d[r] = N(s)), d[r].c(), d[r].m(a, null));
				}
				for (; r < d.length; r += 1) d[r].d(1);
				d.length = i.length;
			}
			if (3 & t) {
				let a;
				for (m = e[1], a = 0; a < m.length; a += 1) {
					const r = w(e, m, a);
					f[a] ? f[a].p(r, t) : ((f[a] = V(r)), f[a].c(), f[a].m(s.parentNode, s));
				}
				for (; a < f.length; a += 1) f[a].d(1);
				f.length = m.length;
			}
		},
		i: v,
		o: v,
		d(e) {
			e && l(a), y(d, e), e && l(t), y(f, e), e && l(s);
		}
	};
}
function U(e, a, t) {
	let { tabsContent: r = [] } = a,
		{ activeTabValue: s = 1 } = a;
	return (
		(e.$$set = (e) => {
			'tabsContent' in e && t(1, (r = e.tabsContent)),
				'activeTabValue' in e && t(0, (s = e.activeTabValue));
		}),
		[s, r, (e) => () => t(0, (s = e))]
	);
}
class M extends e {
	constructor(e) {
		super(), a(this, e, U, P, t, { tabsContent: 1, activeTabValue: 0 });
	}
}
const G = [
	{
		id: 0,
		title: '0',
		subtitle: 'Cifra',
		content:
			"Cifra viene del árabe hispánico ṣífr que significa 'cero' (eventualmente cualquier dígito) y también viene de safara, o del sánscrito hindú sunya que significan 'estar vacío'. En la mística judía la sefirá tiene que ver con vasija, contenedor o recipiente. Es el infinito incognoscible que se encapsula y se preña a sí mismo para dejar espacio en su interior a la finitud. <br>Cero es lo sagrado oculto en lo profano. Todo se 'auto cifra' como Nada. La infinitud está en lo finito pero sólo puede caber desde su ocultamiento o auto retirada. La cifra (0) y el arjé (1) son la esencia mínima y máxima de la existencia juntas. Comprender este concepto es comprender la disolución que permite que exista toda coagulación. Cifra (0) es la posibilidad de que el ser de algo (1) ocurra (4)."
	},
	{
		id: 1,
		title: '1',
		subtitle: 'Arjé',
		content:
			"Arjé proviene de la Antigua Grecia y significa principio, razón primordial, originaria, el comienzo del universo o el primer elemento de todas las cosas. Es la matriz o el molde inicial. El arjé es el 'plano' o 'blueprint' de la Creación que subyace o 'está antes' de lo creado. Término 'mimetizado' (2) como Adam Kadmón según la mística judía. Todo lo que sucederá en el futuro ya tiene su raíz en el acto inicial de la creación. <br> Del arjé deriva todo, es el ser nuclear de las cosas, su centro. El Arjé es el deseo, la voluntad, irradiación, consciencia, luz, foco, un punto sin dimensión, es la coordenada en el espacio, el logos, prototipo, arquetipo... La Unidad primera emanada de la nada que se mantiene inalterable. La semilla, la gota seminal que contiene ya todo aquello que Es."
	},
	{
		id: 2,
		title: '2',
		subtitle: 'Mímesis',
		content:
			"En Cabalá, Reshimó refiere al aroma de algo original que queda y se mantiene en el tiempo y el espacio. Un recuerdo, referencia, memoria, eco esencial de algo anterior. Un registro de información previo a lo revelado que se percibe como 'otra vez ello'. <br> La mimesis según Aristóteles no es copia o reproducción de algo, sino transposición de la cosa misma nuevamente. Es la separación ilusoria entre lo mismo en las cosas. Por la naturaleza líquida del Conocimiento éste no se puede poseer, sólo puede ser 'emulado' desde su experiencia. El pensador cree 'inventar' y poseer un concepto dentro de un nombre o un término, pero es ilusorio porque el 'pensador' tan solo recibe esos pensamientos, no los crea. Por tanto, aunque usemos distintos términos para poder contextualizar temas, son ficticios y su aglomeración gratuita solo crea más ruído y confusión."
	},
	{
		id: 3,
		title: '3',
		subtitle: 'Símbolo',
		content:
			"Se lo define como la representación perceptible de una idea. Símbolo viene de symballein, symbolon que en el relato griego es la tessera hospitalis o 'tablilla del recuerdo' que correspondía al objeto que, habiendo sido dividido, podía ser reunido, congregado, reencontrado. El símbolo es la relación de lo aparentemente diferente; no es simplemente objetivo ni puramente subjetivo, sino que es constitutivamente La relación. El símbolo es símbolo cuando simboliza, cuando se le reconoce en cuanto tal. Un símbolo que no hable directamente a quien lo percibe deja de ser símbolo. Es lo que amalgama, la mediación. Meditar es percibir lo simbólico. Lo real es símbolo. Todo se vela y revela como símbolo, no sólo a través de él sino en él. Si algo trasciende está siendo simbólico, ya que es el lenguaje de la Creación. "
	},
	{
		id: 4,
		title: '4',
		subtitle: 'Ritmo',
		content:
			'Ritmo proviene del griego Rithmos y del sánscrito Rta significando Periodicidad en la sucesión de una serie de cosas. <br> La Creación surge de un deseo por conocerse (01) y se manifiesta y cristaliza en el acto de olvidarse (10). El 0 se ritma colocándose tras el 1, de modo que lo coagula a través de un proceso. Es el movimiento el que estructura al sistema. 10 es el movimiento de 1+2+3+4. El ritmo es la metaestructura dinámica que sostiene el despliegue de lo que Es, la pauta que lo cierra, la manera en que la finitud puede perpetuarse y sostenerse. La materia es luz que se agota al transcurrir. Luz que se termina y empieza cíclicamente el mundo, el cuerpo, la vida. El sostén físico de la metafísico. Completud, cúlmen, demostración y prueba de todo.'
	}
];
function B(e) {
	let a, t;
	return (
		(a = new M({ props: { tabsContent: G } })),
		{
			c() {
				E(a.$$.fragment);
			},
			l(e) {
				x(a.$$.fragment, e);
			},
			m(e, r) {
				q(a, e, r), (t = !0);
			},
			p: v,
			i(e) {
				t || (C(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				j(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				z(a, e);
			}
		}
	);
}
class _ extends e {
	constructor(e) {
		super(), a(this, e, null, B, t, {});
	}
}
function D(e) {
	let a, t;
	return (
		(a = new A({
			props: { variante: 2, title: H[3].title, subtitle: H[3].subtitle, text: H[3].text }
		})),
		{
			c() {
				E(a.$$.fragment);
			},
			l(e) {
				x(a.$$.fragment, e);
			},
			m(e, r) {
				q(a, e, r), (t = !0);
			},
			p: v,
			i(e) {
				t || (C(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				j(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				z(a, e);
			}
		}
	);
}
function I(e) {
	let a, t, r, s, i, d, f, p, h, g, $, b;
	return {
		c() {
			(a = L('svg')),
				(t = L('path')),
				(r = L('circle')),
				(s = L('circle')),
				(i = L('circle')),
				(d = L('circle')),
				(f = L('circle')),
				(p = L('circle')),
				(h = L('circle')),
				(g = L('circle')),
				($ = L('circle')),
				(b = L('circle')),
				this.h();
		},
		l(e) {
			a = o(e, 'svg', { 'fill-rule': !0, 'clip-rule': !0, viewBox: !0 }, 1);
			var c = n(a);
			(t = o(c, 'path', { fill: !0, stroke: !0, 'stroke-width': !0, d: !0 }, 1)),
				n(t).forEach(l),
				(r = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(r).forEach(l),
				(s = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(s).forEach(l),
				(i = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(i).forEach(l),
				(d = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(d).forEach(l),
				(f = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(f).forEach(l),
				(p = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(p).forEach(l),
				(h = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(h).forEach(l),
				(g = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(g).forEach(l),
				($ = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n($).forEach(l),
				(b = o(c, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
				n(b).forEach(l),
				c.forEach(l),
				this.h();
		},
		h() {
			c(t, 'fill', 'none'),
				c(t, 'stroke', '#000'),
				c(t, 'stroke-width', '.7'),
				c(
					t,
					'd',
					'M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30 53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z'
				),
				c(r, 'cx', '168.3'),
				c(r, 'cy', '18.1'),
				c(r, 'r', '6'),
				c(r, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(s, 'cx', '214.1'),
				c(s, 'cy', '98.5'),
				c(s, 'r', '6'),
				c(s, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(i, 'cx', '259.9'),
				c(i, 'cy', '178.2'),
				c(i, 'r', '6'),
				c(i, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(d, 'cx', '305.7'),
				c(d, 'cy', '257.8'),
				c(d, 'r', '6'),
				c(d, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(f, 'cx', '214.1'),
				c(f, 'cy', '257.8'),
				c(f, 'r', '6'),
				c(f, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(p, 'cx', '123.2'),
				c(p, 'cy', '257.8'),
				c(p, 'r', '6'),
				c(p, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(h, 'cx', '30.8'),
				c(h, 'cy', '257.8'),
				c(h, 'r', '6'),
				c(h, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(g, 'cx', '76.9'),
				c(g, 'cy', '178.2'),
				c(g, 'r', '6'),
				c(g, 'transform', 'translate(-17 -8) scale(.67024)'),
				c($, 'cx', '168.3'),
				c($, 'cy', '178.2'),
				c($, 'r', '6'),
				c($, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(b, 'cx', '123.2'),
				c(b, 'cy', '98.5'),
				c(b, 'r', '6'),
				c(b, 'transform', 'translate(-17 -8) scale(.67024)'),
				c(a, 'fill-rule', 'evenodd'),
				c(a, 'clip-rule', 'evenodd'),
				c(a, 'viewBox', '0 0 193 169');
		},
		m(e, o) {
			u(e, a, o),
				m(a, t),
				m(a, r),
				m(a, s),
				m(a, i),
				m(a, d),
				m(a, f),
				m(a, p),
				m(a, h),
				m(a, g),
				m(a, $),
				m(a, b);
		},
		d(e) {
			e && l(a);
		}
	};
}
function J(e) {
	let a, t, d, f, p, h, g, v, y;
	return {
		c() {
			(a = r('hgroup')),
				(t = r('h2')),
				(d = s('+0+1234')),
				(f = $()),
				(p = r('h3')),
				(h = s('Hacia el encuentro con todo lo que Es')),
				(g = $()),
				(v = r('h4')),
				(y = s(
					'+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo.'
				)),
				this.h();
		},
		l(e) {
			a = o(e, 'HGROUP', { slot: !0 });
			var r = n(a);
			t = o(r, 'H2', {});
			var s = n(t);
			(d = i(s, '+0+1234')), s.forEach(l), (f = b(r)), (p = o(r, 'H3', {}));
			var c = n(p);
			(h = i(c, 'Hacia el encuentro con todo lo que Es')),
				c.forEach(l),
				(g = b(r)),
				(v = o(r, 'H4', {}));
			var u = n(v);
			(y = i(
				u,
				'+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo.'
			)),
				u.forEach(l),
				r.forEach(l),
				this.h();
		},
		h() {
			c(a, 'slot', 'subarea1');
		},
		m(e, r) {
			u(e, a, r), m(a, t), m(t, d), m(a, f), m(a, p), m(p, h), m(a, g), m(a, v), m(v, y);
		},
		d(e) {
			e && l(a);
		}
	};
}
function O(e) {
	let a, t, d, f, p, h;
	return {
		c() {
			(a = r('nav')),
				(t = r('a')),
				(d = s('Slides')),
				(f = $()),
				(p = r('a')),
				(h = s('Libro')),
				this.h();
		},
		l(e) {
			a = o(e, 'NAV', { slot: !0 });
			var r = n(a);
			t = o(r, 'A', { href: !0, target: !0 });
			var s = n(t);
			(d = i(s, 'Slides')), s.forEach(l), (f = b(r)), (p = o(r, 'A', { href: !0, target: !0 }));
			var c = n(p);
			(h = i(c, 'Libro')), c.forEach(l), r.forEach(l), this.h();
		},
		h() {
			c(t, 'href', 'https://slides.com/sergiofores/'),
				c(t, 'target', '_blank'),
				c(
					p,
					'href',
					'https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing'
				),
				c(p, 'target', '_blank'),
				c(a, 'slot', 'subarea2');
		},
		m(e, r) {
			u(e, a, r), m(a, t), m(t, d), m(a, f), m(a, p), m(p, h);
		},
		d(e) {
			e && l(a);
		}
	};
}
function Q(e) {
	let a, t;
	return (
		(a = new T({
			props: {
				variante: 1,
				$$slots: { subarea2: [O], subarea1: [J], default: [I] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				E(a.$$.fragment);
			},
			l(e) {
				x(a.$$.fragment, e);
			},
			m(e, r) {
				q(a, e, r), (t = !0);
			},
			p(e, t) {
				const r = {};
				1 & t && (r.$$scope = { dirty: t, ctx: e }), a.$set(r);
			},
			i(e) {
				t || (C(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				j(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				z(a, e);
			}
		}
	);
}
function F(e) {
	let a, t;
	return (
		(a = new _({})),
		{
			c() {
				E(a.$$.fragment);
			},
			l(e) {
				x(a.$$.fragment, e);
			},
			m(e, r) {
				q(a, e, r), (t = !0);
			},
			i(e) {
				t || (C(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				j(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				z(a, e);
			}
		}
	);
}
function K(e) {
	let a, t, r, s, o, n;
	return (
		(a = new k({
			props: { id: 'philosophy', variante: 3, $$slots: { default: [D] }, $$scope: { ctx: e } }
		})),
		(r = new k({ props: { variante: 4, $$slots: { default: [Q] }, $$scope: { ctx: e } } })),
		(o = new k({
			props: { id: 'tabheaders', variante: 1, $$slots: { default: [F] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				E(a.$$.fragment), (t = $()), E(r.$$.fragment), (s = $()), E(o.$$.fragment);
			},
			l(e) {
				x(a.$$.fragment, e), (t = b(e)), x(r.$$.fragment, e), (s = b(e)), x(o.$$.fragment, e);
			},
			m(e, i) {
				q(a, e, i), u(e, t, i), q(r, e, i), u(e, s, i), q(o, e, i), (n = !0);
			},
			p(e, [t]) {
				const s = {};
				1 & t && (s.$$scope = { dirty: t, ctx: e }), a.$set(s);
				const n = {};
				1 & t && (n.$$scope = { dirty: t, ctx: e }), r.$set(n);
				const i = {};
				1 & t && (i.$$scope = { dirty: t, ctx: e }), o.$set(i);
			},
			i(e) {
				n || (C(a.$$.fragment, e), C(r.$$.fragment, e), C(o.$$.fragment, e), (n = !0));
			},
			o(e) {
				j(a.$$.fragment, e), j(r.$$.fragment, e), j(o.$$.fragment, e), (n = !1);
			},
			d(e) {
				z(a, e), e && l(t), z(r, e), e && l(s), z(o, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, K, t, {});
	}
}
