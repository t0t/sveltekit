import {
	S as e,
	i as a,
	s as o,
	e as s,
	t as n,
	c as t,
	a as i,
	b as l,
	d as r,
	o as c,
	U as d,
	f as u,
	g as m,
	G as p,
	W as f,
	h as g,
	k as b,
	j as h,
	l as v,
	n as q,
	K as $,
	p as y,
	q as E,
	r as j,
	w as C,
	x as z,
	y as x
} from '../../chunks/index-83f33906.js';
import { S as L } from '../../chunks/Section-1b31e13c.js';
function T(e, a, o) {
	const s = e.slice();
	return (s[3] = a[o]), s;
}
function A(e, a, o) {
	const s = e.slice();
	return (s[3] = a[o]), s;
}
function S(e) {
	let a,
		o,
		b,
		h,
		v,
		q = e[3].title + '';
	return {
		c() {
			(a = s('button')), (o = n(q)), this.h();
		},
		l(e) {
			a = t(e, 'BUTTON', { class: !0 });
			var s = i(a);
			(o = l(s, q)), s.forEach(r), this.h();
		},
		h() {
			c(a, 'class', (b = d(e[0] === e[3].id ? 'active' : '') + ' svelte-29p0c6'));
		},
		m(s, n) {
			u(s, a, n),
				m(a, o),
				h ||
					((v = p(a, 'click', function () {
						f(e[2](e[3].id)) && e[2](e[3].id).apply(this, arguments);
					})),
					(h = !0));
		},
		p(s, n) {
			(e = s),
				2 & n && q !== (q = e[3].title + '') && g(o, q),
				3 & n &&
					b !== (b = d(e[0] === e[3].id ? 'active' : '') + ' svelte-29p0c6') &&
					c(a, 'class', b);
		},
		d(e) {
			e && r(a), (h = !1), v();
		}
	};
}
function N(e) {
	let a,
		o,
		d,
		p,
		f,
		b,
		q,
		$,
		y,
		E = e[3].title + '',
		j = e[3].subtitle + '',
		C = e[3].content + '';
	return {
		c() {
			(a = s('article')),
				(o = s('h2')),
				(d = n(E)),
				(p = h()),
				(f = s('span')),
				(b = n(j)),
				(q = h()),
				($ = s('p')),
				(y = h()),
				this.h();
		},
		l(e) {
			a = t(e, 'ARTICLE', { class: !0 });
			var s = i(a);
			o = t(s, 'H2', { class: !0 });
			var n = i(o);
			(d = l(n, E)), (p = v(n)), (f = t(n, 'SPAN', { class: !0 }));
			var c = i(f);
			(b = l(c, j)),
				c.forEach(r),
				n.forEach(r),
				(q = v(s)),
				($ = t(s, 'P', { class: !0 })),
				i($).forEach(r),
				(y = v(s)),
				s.forEach(r),
				this.h();
		},
		h() {
			c(f, 'class', 'svelte-29p0c6'),
				c(o, 'class', 'svelte-29p0c6'),
				c($, 'class', 'svelte-29p0c6'),
				c(a, 'class', 'svelte-29p0c6');
		},
		m(e, s) {
			u(e, a, s),
				m(a, o),
				m(o, d),
				m(o, p),
				m(o, f),
				m(f, b),
				m(a, q),
				m(a, $),
				($.innerHTML = C),
				m(a, y);
		},
		p(e, a) {
			2 & a && E !== (E = e[3].title + '') && g(d, E),
				2 & a && j !== (j = e[3].subtitle + '') && g(b, j),
				2 & a && C !== (C = e[3].content + '') && ($.innerHTML = C);
		},
		d(e) {
			e && r(a);
		}
	};
}
function R(e) {
	let a,
		o = e[0] == e[3].id && N(e);
	return {
		c() {
			o && o.c(), (a = b());
		},
		l(e) {
			o && o.l(e), (a = b());
		},
		m(e, s) {
			o && o.m(e, s), u(e, a, s);
		},
		p(e, s) {
			e[0] == e[3].id
				? o
					? o.p(e, s)
					: ((o = N(e)), o.c(), o.m(a.parentNode, a))
				: o && (o.d(1), (o = null));
		},
		d(e) {
			o && o.d(e), e && r(a);
		}
	};
}
function U(e) {
	let a,
		o,
		n,
		l = e[1],
		d = [];
	for (let s = 0; s < l.length; s += 1) d[s] = S(A(e, l, s));
	let m = e[1],
		p = [];
	for (let s = 0; s < m.length; s += 1) p[s] = R(T(e, m, s));
	return {
		c() {
			a = s('nav');
			for (let e = 0; e < d.length; e += 1) d[e].c();
			o = h();
			for (let e = 0; e < p.length; e += 1) p[e].c();
			(n = b()), this.h();
		},
		l(e) {
			a = t(e, 'NAV', { class: !0 });
			var s = i(a);
			for (let a = 0; a < d.length; a += 1) d[a].l(s);
			s.forEach(r), (o = v(e));
			for (let a = 0; a < p.length; a += 1) p[a].l(e);
			(n = b()), this.h();
		},
		h() {
			c(a, 'class', 'svelte-29p0c6');
		},
		m(e, s) {
			u(e, a, s);
			for (let o = 0; o < d.length; o += 1) d[o].m(a, null);
			u(e, o, s);
			for (let a = 0; a < p.length; a += 1) p[a].m(e, s);
			u(e, n, s);
		},
		p(e, [o]) {
			if (7 & o) {
				let s;
				for (l = e[1], s = 0; s < l.length; s += 1) {
					const n = A(e, l, s);
					d[s] ? d[s].p(n, o) : ((d[s] = S(n)), d[s].c(), d[s].m(a, null));
				}
				for (; s < d.length; s += 1) d[s].d(1);
				d.length = l.length;
			}
			if (3 & o) {
				let a;
				for (m = e[1], a = 0; a < m.length; a += 1) {
					const s = T(e, m, a);
					p[a] ? p[a].p(s, o) : ((p[a] = R(s)), p[a].c(), p[a].m(n.parentNode, n));
				}
				for (; a < p.length; a += 1) p[a].d(1);
				p.length = m.length;
			}
		},
		i: q,
		o: q,
		d(e) {
			e && r(a), $(d, e), e && r(o), $(p, e), e && r(n);
		}
	};
}
function P(e, a, o) {
	let { tabsContent: s = [] } = a,
		{ activeTabValue: n = 1 } = a;
	return (
		(e.$$set = (e) => {
			'tabsContent' in e && o(1, (s = e.tabsContent)),
				'activeTabValue' in e && o(0, (n = e.activeTabValue));
		}),
		[n, s, (e) => () => o(0, (n = e))]
	);
}
class V extends e {
	constructor(e) {
		super(), a(this, e, P, U, o, { tabsContent: 1, activeTabValue: 0 });
	}
}
const k = [
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
function w(e) {
	let a, o;
	return (
		(a = new V({ props: { tabsContent: k } })),
		{
			c() {
				y(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, s) {
				j(a, e, s), (o = !0);
			},
			p: q,
			i(e) {
				o || (C(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				z(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
class M extends e {
	constructor(e) {
		super(), a(this, e, null, w, o, {});
	}
}
function H(e) {
	let a, o;
	return (
		(a = new M({})),
		{
			c() {
				y(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, s) {
				j(a, e, s), (o = !0);
			},
			i(e) {
				o || (C(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				z(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
function G(e) {
	let a, o;
	return (
		(a = new L({
			props: { id: 'tabheaders', variante: 1, $$slots: { default: [H] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, s) {
				j(a, e, s), (o = !0);
			},
			p(e, [o]) {
				const s = {};
				1 & o && (s.$$scope = { dirty: o, ctx: e }), a.$set(s);
			},
			i(e) {
				o || (C(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				z(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, G, o, {});
	}
}
