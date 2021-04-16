import {
	S as e,
	i as a,
	s as t,
	M as o,
	e as s,
	c as i,
	a as n,
	d as l,
	o as r,
	I as c,
	f as u,
	O as d,
	w as m,
	x as p,
	t as g,
	b as f,
	g as b,
	H as v,
	X as h,
	h as $,
	k as q,
	p as E,
	q as y,
	r as j,
	y as C,
	C as L,
	D as S,
	j as x,
	l as T,
	J as z,
	n as A
} from './index-d91e1ed8.js';
import { G as M } from './Cover-12fb2afa.js';
import './Section-b530c020.js';
function N(e) {
	let a, t, g;
	const f = e[4].default,
		b = o(f, e, e[3], null);
	return {
		c() {
			(a = s('section')), b && b.c(), this.h();
		},
		l(e) {
			a = i(e, 'SECTION', { id: !0, class: !0 });
			var t = n(a);
			b && b.l(t), t.forEach(l), this.h();
		},
		h() {
			r(a, 'id', e[1]), r(a, 'class', (t = c(e[2][e[0]]) + ' svelte-1evtbv4'));
		},
		m(e, t) {
			u(e, a, t), b && b.m(a, null), (g = !0);
		},
		p(e, [o]) {
			b && b.p && 8 & o && d(b, f, e, e[3], o, null, null),
				(!g || 2 & o) && r(a, 'id', e[1]),
				(!g || (1 & o && t !== (t = c(e[2][e[0]]) + ' svelte-1evtbv4'))) && r(a, 'class', t);
		},
		i(e) {
			g || (m(b, e), (g = !0));
		},
		o(e) {
			p(b, e), (g = !1);
		},
		d(e) {
			e && l(a), b && b.d(e);
		}
	};
}
function R(e, a, t) {
	let { $$slots: o = {}, $$scope: s } = a,
		{ variante: i = 0 } = a,
		{ id: n = '' } = a;
	return (
		(e.$$set = (e) => {
			'variante' in e && t(0, (i = e.variante)),
				'id' in e && t(1, (n = e.id)),
				'$$scope' in e && t(3, (s = e.$$scope));
		}),
		[
			i,
			n,
			['Section_0', 'Section_1', 'Section_2', 'Section_3', 'Section_4', 'Section_5', 'Section_6'],
			s,
			o
		]
	);
}
class _ extends e {
	constructor(e) {
		super(), a(this, e, R, N, t, { variante: 0, id: 1 });
	}
}
function I(e, a, t) {
	const o = e.slice();
	return (o[3] = a[t]), o;
}
function U(e, a, t) {
	const o = e.slice();
	return (o[3] = a[t]), o;
}
function G(e) {
	let a,
		t,
		o,
		d,
		m,
		p = e[3].title + '';
	return {
		c() {
			(a = s('button')), (t = g(p)), this.h();
		},
		l(e) {
			a = i(e, 'BUTTON', { class: !0 });
			var o = n(a);
			(t = f(o, p)), o.forEach(l), this.h();
		},
		h() {
			r(a, 'class', (o = c(e[0] === e[3].id ? 'active' : '') + ' svelte-m98opa'));
		},
		m(o, s) {
			u(o, a, s),
				b(a, t),
				d ||
					((m = v(a, 'click', function () {
						h(e[2](e[3].id)) && e[2](e[3].id).apply(this, arguments);
					})),
					(d = !0));
		},
		p(s, i) {
			(e = s),
				2 & i && p !== (p = e[3].title + '') && $(t, p),
				3 & i &&
					o !== (o = c(e[0] === e[3].id ? 'active' : '') + ' svelte-m98opa') &&
					r(a, 'class', o);
		},
		d(e) {
			e && l(a), (d = !1), m();
		}
	};
}
function P(e) {
	let a, t;
	return (
		(a = new _({ props: { variante: 6, $$slots: { default: [H] }, $$scope: { ctx: e } } })),
		{
			c() {
				E(a.$$.fragment);
			},
			l(e) {
				y(a.$$.fragment, e);
			},
			m(e, o) {
				j(a, e, o), (t = !0);
			},
			p(e, t) {
				const o = {};
				258 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
			},
			i(e) {
				t || (m(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				p(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				C(a, e);
			}
		}
	);
}
function V(e) {
	let a,
		t = e[3].content + '';
	return {
		c() {
			(a = s('p')), this.h();
		},
		l(e) {
			(a = i(e, 'P', { class: !0 })), n(a).forEach(l), this.h();
		},
		h() {
			r(a, 'class', 'svelte-m98opa');
		},
		m(e, o) {
			u(e, a, o), (a.innerHTML = t);
		},
		p(e, o) {
			2 & o && t !== (t = e[3].content + '') && (a.innerHTML = t);
		},
		d(e) {
			e && l(a);
		}
	};
}
function w(e) {
	let a,
		t,
		o,
		c,
		d,
		m,
		p,
		v = e[3].subtitle + '';
	return {
		c() {
			(a = s('figure')), (t = s('img')), (d = x()), (m = s('figcaption')), (p = g(v)), this.h();
		},
		l(e) {
			a = i(e, 'FIGURE', { slot: !0, class: !0 });
			var o = n(a);
			(t = i(o, 'IMG', { src: !0, alt: !0, class: !0 })),
				(d = T(o)),
				(m = i(o, 'FIGCAPTION', { class: !0 }));
			var s = n(m);
			(p = f(s, v)), s.forEach(l), o.forEach(l), this.h();
		},
		h() {
			t.src !== (o = e[3].img) && r(t, 'src', o),
				r(t, 'alt', (c = e[3].subtitle)),
				r(t, 'class', 'svelte-m98opa'),
				r(m, 'class', 'svelte-m98opa'),
				r(a, 'slot', 'subarea1'),
				r(a, 'class', 'svelte-m98opa');
		},
		m(e, o) {
			u(e, a, o), b(a, t), b(a, d), b(a, m), b(m, p);
		},
		p(e, a) {
			2 & a && t.src !== (o = e[3].img) && r(t, 'src', o),
				2 & a && c !== (c = e[3].subtitle) && r(t, 'alt', c),
				2 & a && v !== (v = e[3].subtitle + '') && $(p, v);
		},
		d(e) {
			e && l(a);
		}
	};
}
function O(e) {
	let a,
		t,
		o = e[3].tags + '';
	return {
		c() {
			(a = s('small')), (t = g(o)), this.h();
		},
		l(e) {
			a = i(e, 'SMALL', { slot: !0, class: !0 });
			var s = n(a);
			(t = f(s, o)), s.forEach(l), this.h();
		},
		h() {
			r(a, 'slot', 'subarea2'), r(a, 'class', 'svelte-m98opa');
		},
		m(e, o) {
			u(e, a, o), b(a, t);
		},
		p(e, a) {
			2 & a && o !== (o = e[3].tags + '') && $(t, o);
		},
		d(e) {
			e && l(a);
		}
	};
}
function H(e) {
	let a, t, o;
	return (
		(a = new M({
			props: {
				variante: 3,
				$$slots: { subarea2: [O], subarea1: [w], default: [V] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				E(a.$$.fragment), (t = x());
			},
			l(e) {
				y(a.$$.fragment, e), (t = T(e));
			},
			m(e, s) {
				j(a, e, s), u(e, t, s), (o = !0);
			},
			p(e, t) {
				const o = {};
				258 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
			},
			i(e) {
				o || (m(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				p(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				C(a, e), e && l(t);
			}
		}
	);
}
function k(e) {
	let a,
		t,
		o = e[0] == e[3].id && P(e);
	return {
		c() {
			o && o.c(), (a = q());
		},
		l(e) {
			o && o.l(e), (a = q());
		},
		m(e, s) {
			o && o.m(e, s), u(e, a, s), (t = !0);
		},
		p(e, t) {
			e[0] == e[3].id
				? o
					? (o.p(e, t), 3 & t && m(o, 1))
					: ((o = P(e)), o.c(), m(o, 1), o.m(a.parentNode, a))
				: o &&
				  (L(),
				  p(o, 1, 1, () => {
						o = null;
				  }),
				  S());
		},
		i(e) {
			t || (m(o), (t = !0));
		},
		o(e) {
			p(o), (t = !1);
		},
		d(e) {
			o && o.d(e), e && l(a);
		}
	};
}
function B(e) {
	let a,
		t,
		o,
		c,
		d = e[1],
		g = [];
	for (let s = 0; s < d.length; s += 1) g[s] = G(U(e, d, s));
	let f = e[1],
		b = [];
	for (let s = 0; s < f.length; s += 1) b[s] = k(I(e, f, s));
	const v = (e) =>
		p(b[e], 1, 1, () => {
			b[e] = null;
		});
	return {
		c() {
			a = s('nav');
			for (let e = 0; e < g.length; e += 1) g[e].c();
			t = x();
			for (let e = 0; e < b.length; e += 1) b[e].c();
			(o = q()), this.h();
		},
		l(e) {
			a = i(e, 'NAV', { class: !0 });
			var s = n(a);
			for (let a = 0; a < g.length; a += 1) g[a].l(s);
			s.forEach(l), (t = T(e));
			for (let a = 0; a < b.length; a += 1) b[a].l(e);
			(o = q()), this.h();
		},
		h() {
			r(a, 'class', 'svelte-m98opa');
		},
		m(e, s) {
			u(e, a, s);
			for (let t = 0; t < g.length; t += 1) g[t].m(a, null);
			u(e, t, s);
			for (let a = 0; a < b.length; a += 1) b[a].m(e, s);
			u(e, o, s), (c = !0);
		},
		p(e, [t]) {
			if (7 & t) {
				let o;
				for (d = e[1], o = 0; o < d.length; o += 1) {
					const s = U(e, d, o);
					g[o] ? g[o].p(s, t) : ((g[o] = G(s)), g[o].c(), g[o].m(a, null));
				}
				for (; o < g.length; o += 1) g[o].d(1);
				g.length = d.length;
			}
			if (3 & t) {
				let a;
				for (f = e[1], a = 0; a < f.length; a += 1) {
					const s = I(e, f, a);
					b[a]
						? (b[a].p(s, t), m(b[a], 1))
						: ((b[a] = k(s)), b[a].c(), m(b[a], 1), b[a].m(o.parentNode, o));
				}
				for (L(), a = f.length; a < b.length; a += 1) v(a);
				S();
			}
		},
		i(e) {
			if (!c) {
				for (let e = 0; e < f.length; e += 1) m(b[e]);
				c = !0;
			}
		},
		o(e) {
			b = b.filter(Boolean);
			for (let a = 0; a < b.length; a += 1) p(b[a]);
			c = !1;
		},
		d(e) {
			e && l(a), z(g, e), e && l(t), z(b, e), e && l(o);
		}
	};
}
function D(e, a, t) {
	let { tabsContent: o = [] } = a,
		{ activeTabValue: s = 1 } = a;
	return (
		(e.$$set = (e) => {
			'tabsContent' in e && t(1, (o = e.tabsContent)),
				'activeTabValue' in e && t(0, (s = e.activeTabValue));
		}),
		[s, o, (e) => () => t(0, (s = e))]
	);
}
class F extends e {
	constructor(e) {
		super(), a(this, e, D, B, t, { tabsContent: 1, activeTabValue: 0 });
	}
}
const J = [
	{
		id: 0,
		title: '0. Cifra',
		subtitle: 'La Cifra',
		img: './img/ceroo.svg',
		tags: 'tag1, tag2, tag3...',
		content:
			"Cifra viene del árabe hispánico ṣífr que significa 'cero' (eventualmente cualquier dígito) y también viene de safara, o del sánscrito hindú sunya que significan 'estar vacío'. En la mística judía la sefirá tiene que ver con vasija, contenedor o recipiente. Es el infinito incognoscible que se encapsula y se preña a sí mismo para dejar espacio en su interior a la finitud. <br>Cero es lo sagrado oculto en lo profano. Todo se 'auto cifra' como Nada. La infinitud está en lo finito pero sólo puede caber desde su ocultamiento o auto retirada. La cifra (0) y el arjé (1) son la esencia mínima y máxima de la existencia juntas. Comprender este concepto es comprender la disolución que permite que exista toda coagulación. Cifra (0) es la posibilidad de que el ser de algo (1) ocurra (4)."
	},
	{
		id: 1,
		title: '1. Arjé',
		subtitle: 'El Arjé',
		img: './img/uno.svg',
		tags: 'tag1, tag2, tag3...',
		content:
			"Arjé proviene de la Antigua Grecia y significa principio, razón primordial, originaria, el comienzo del universo o el primer elemento de todas las cosas. Es la matriz o el molde inicial. El arjé es el 'plano' o 'blueprint' de la Creación que subyace o 'está antes' de lo creado. Término 'mimetizado' (2) como Adam Kadmón según la mística judía. Todo lo que sucederá en el futuro ya tiene su raíz en el acto inicial de la creación. <br> Del arjé deriva todo, es el ser nuclear de las cosas, su centro. El Arjé es el deseo, la voluntad, irradiación, consciencia, luz, foco, un punto sin dimensión, es la coordenada en el espacio, el logos, prototipo, arquetipo... La Unidad primera emanada de la nada que se mantiene inalterable. La semilla, la gota seminal que contiene ya todo aquello que Es."
	},
	{
		id: 2,
		title: '2. Mímesis',
		subtitle: 'La Mímesis',
		img: './img/dos.svg',
		tags: 'tag1, tag2, tag3...',
		content:
			"En Cabalá, Reshimó refiere al aroma de algo original que queda y se mantiene en el tiempo y el espacio. Un recuerdo, referencia, memoria, eco esencial de algo anterior. Un registro de información previo a lo revelado que se percibe como 'otra vez ello'. <br> La mimesis según Aristóteles no es copia o reproducción de algo, sino transposición de la cosa misma nuevamente. Es la separación ilusoria entre lo mismo en las cosas. Por la naturaleza líquida del Conocimiento éste no se puede poseer, sólo puede ser 'emulado' desde su experiencia. El pensador cree 'inventar' y poseer un concepto dentro de un nombre o un término, pero es ilusorio porque el 'pensador' tan solo recibe esos pensamientos, no los crea. Por tanto, aunque usemos distintos términos para poder contextualizar temas, son ficticios y su aglomeración gratuita solo crea más ruído y confusión."
	},
	{
		id: 3,
		title: '3. Símbolo',
		subtitle: 'El Símbolo',
		img: './img/tres.svg',
		tags: 'tag1, tag2, tag3...',
		content:
			"Se lo define como la representación perceptible de una idea. Símbolo viene de symballein, symbolon que en el relato griego es la tessera hospitalis o 'tablilla del recuerdo' que correspondía al objeto que, habiendo sido dividido, podía ser reunido, congregado, reencontrado. El símbolo es la relación de lo aparentemente diferente; no es simplemente objetivo ni puramente subjetivo, sino que es constitutivamente La relación. El símbolo es símbolo cuando simboliza, cuando se le reconoce en cuanto tal. Un símbolo que no hable directamente a quien lo percibe deja de ser símbolo. Es lo que amalgama, la mediación. Meditar es percibir lo simbólico. Lo real es símbolo. Todo se vela y revela como símbolo, no sólo a través de él sino en él. Si algo trasciende está siendo simbólico, ya que es el lenguaje de la Creación. "
	},
	{
		id: 4,
		title: '4. Ritmo',
		subtitle: 'El Ritmo',
		img: './img/cuatro.svg',
		tags: 'tag1, tag2, tag3...',
		content:
			'Ritmo proviene del griego Rithmos y del sánscrito Rta significando Periodicidad en la sucesión de una serie de cosas. <br> La Creación surge de un deseo por conocerse (01) y se manifiesta y cristaliza en el acto de olvidarse (10). El 0 se ritma colocándose tras el 1, de modo que lo coagula a través de un proceso. Es el movimiento el que estructura al sistema. 10 es el movimiento de 1+2+3+4. El ritmo es la metaestructura dinámica que sostiene el despliegue de lo que Es, la pauta que lo cierra, la manera en que la finitud puede perpetuarse y sostenerse. La materia es luz que se agota al transcurrir. Luz que se termina y empieza cíclicamente el mundo, el cuerpo, la vida. El sostén físico de la metafísico. Completud, cúlmen, demostración y prueba de todo.'
	}
];
function K(e) {
	let a, t;
	return (
		(a = new F({ props: { tabsContent: J } })),
		{
			c() {
				E(a.$$.fragment);
			},
			l(e) {
				y(a.$$.fragment, e);
			},
			m(e, o) {
				j(a, e, o), (t = !0);
			},
			p: A,
			i(e) {
				t || (m(a.$$.fragment, e), (t = !0));
			},
			o(e) {
				p(a.$$.fragment, e), (t = !1);
			},
			d(e) {
				C(a, e);
			}
		}
	);
}
class X extends e {
	constructor(e) {
		super(), a(this, e, null, K, t, {});
	}
}
export { X as T };
