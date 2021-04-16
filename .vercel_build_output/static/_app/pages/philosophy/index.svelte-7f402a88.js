import {
	S as e,
	i as a,
	s as o,
	e as t,
	t as s,
	c as n,
	a as i,
	b as l,
	d as r,
	o as c,
	I as d,
	f as u,
	g as m,
	H as p,
	X as f,
	h as g,
	k as b,
	j as h,
	l as $,
	n as v,
	J as q,
	p as y,
	q as E,
	r as j,
	w,
	x as C,
	y as x
} from '../../chunks/index-d91e1ed8.js';
import { C as z, c as L } from '../../chunks/Cover-4b9a87b3.js';
import { S as T } from '../../chunks/Section-62f6895b.js';
function A(e, a, o) {
	const t = e.slice();
	return (t[3] = a[o]), t;
}
function S(e, a, o) {
	const t = e.slice();
	return (t[3] = a[o]), t;
}
function N(e) {
	let a,
		o,
		b,
		h,
		$,
		v = e[3].title + '';
	return {
		c() {
			(a = t('button')), (o = s(v)), this.h();
		},
		l(e) {
			a = n(e, 'BUTTON', { class: !0 });
			var t = i(a);
			(o = l(t, v)), t.forEach(r), this.h();
		},
		h() {
			c(a, 'class', (b = d(e[0] === e[3].id ? 'active' : '') + ' svelte-hwdgfw'));
		},
		m(t, s) {
			u(t, a, s),
				m(a, o),
				h ||
					(($ = p(a, 'click', function () {
						f(e[2](e[3].id)) && e[2](e[3].id).apply(this, arguments);
					})),
					(h = !0));
		},
		p(t, s) {
			(e = t),
				2 & s && v !== (v = e[3].title + '') && g(o, v),
				3 & s &&
					b !== (b = d(e[0] === e[3].id ? 'active' : '') + ' svelte-hwdgfw') &&
					c(a, 'class', b);
		},
		d(e) {
			e && r(a), (h = !1), $();
		}
	};
}
function R(e) {
	let a,
		o,
		d,
		p,
		f,
		b,
		v,
		q,
		y,
		E = e[3].title + '',
		j = e[3].subtitle + '',
		w = e[3].content + '';
	return {
		c() {
			(a = t('article')),
				(o = t('h2')),
				(d = s(E)),
				(p = h()),
				(f = t('span')),
				(b = s(j)),
				(v = h()),
				(q = t('p')),
				(y = h()),
				this.h();
		},
		l(e) {
			a = n(e, 'ARTICLE', { class: !0 });
			var t = i(a);
			o = n(t, 'H2', { class: !0 });
			var s = i(o);
			(d = l(s, E)), (p = $(s)), (f = n(s, 'SPAN', { class: !0 }));
			var c = i(f);
			(b = l(c, j)),
				c.forEach(r),
				s.forEach(r),
				(v = $(t)),
				(q = n(t, 'P', { class: !0 })),
				i(q).forEach(r),
				(y = $(t)),
				t.forEach(r),
				this.h();
		},
		h() {
			c(f, 'class', 'svelte-hwdgfw'),
				c(o, 'class', 'svelte-hwdgfw'),
				c(q, 'class', 'svelte-hwdgfw'),
				c(a, 'class', 'svelte-hwdgfw');
		},
		m(e, t) {
			u(e, a, t),
				m(a, o),
				m(o, d),
				m(o, p),
				m(o, f),
				m(f, b),
				m(a, v),
				m(a, q),
				(q.innerHTML = w),
				m(a, y);
		},
		p(e, a) {
			2 & a && E !== (E = e[3].title + '') && g(d, E),
				2 & a && j !== (j = e[3].subtitle + '') && g(b, j),
				2 & a && w !== (w = e[3].content + '') && (q.innerHTML = w);
		},
		d(e) {
			e && r(a);
		}
	};
}
function k(e) {
	let a,
		o = e[0] == e[3].id && R(e);
	return {
		c() {
			o && o.c(), (a = b());
		},
		l(e) {
			o && o.l(e), (a = b());
		},
		m(e, t) {
			o && o.m(e, t), u(e, a, t);
		},
		p(e, t) {
			e[0] == e[3].id
				? o
					? o.p(e, t)
					: ((o = R(e)), o.c(), o.m(a.parentNode, a))
				: o && (o.d(1), (o = null));
		},
		d(e) {
			o && o.d(e), e && r(a);
		}
	};
}
function P(e) {
	let a,
		o,
		s,
		l = e[1],
		d = [];
	for (let t = 0; t < l.length; t += 1) d[t] = N(S(e, l, t));
	let m = e[1],
		p = [];
	for (let t = 0; t < m.length; t += 1) p[t] = k(A(e, m, t));
	return {
		c() {
			a = t('nav');
			for (let e = 0; e < d.length; e += 1) d[e].c();
			o = h();
			for (let e = 0; e < p.length; e += 1) p[e].c();
			(s = b()), this.h();
		},
		l(e) {
			a = n(e, 'NAV', { class: !0 });
			var t = i(a);
			for (let a = 0; a < d.length; a += 1) d[a].l(t);
			t.forEach(r), (o = $(e));
			for (let a = 0; a < p.length; a += 1) p[a].l(e);
			(s = b()), this.h();
		},
		h() {
			c(a, 'class', 'svelte-hwdgfw');
		},
		m(e, t) {
			u(e, a, t);
			for (let o = 0; o < d.length; o += 1) d[o].m(a, null);
			u(e, o, t);
			for (let a = 0; a < p.length; a += 1) p[a].m(e, t);
			u(e, s, t);
		},
		p(e, [o]) {
			if (7 & o) {
				let t;
				for (l = e[1], t = 0; t < l.length; t += 1) {
					const s = S(e, l, t);
					d[t] ? d[t].p(s, o) : ((d[t] = N(s)), d[t].c(), d[t].m(a, null));
				}
				for (; t < d.length; t += 1) d[t].d(1);
				d.length = l.length;
			}
			if (3 & o) {
				let a;
				for (m = e[1], a = 0; a < m.length; a += 1) {
					const t = A(e, m, a);
					p[a] ? p[a].p(t, o) : ((p[a] = k(t)), p[a].c(), p[a].m(s.parentNode, s));
				}
				for (; a < p.length; a += 1) p[a].d(1);
				p.length = m.length;
			}
		},
		i: v,
		o: v,
		d(e) {
			e && r(a), q(d, e), e && r(o), q(p, e), e && r(s);
		}
	};
}
function U(e, a, o) {
	let { tabsContent: t = [] } = a,
		{ activeTabValue: s = 1 } = a;
	return (
		(e.$$set = (e) => {
			'tabsContent' in e && o(1, (t = e.tabsContent)),
				'activeTabValue' in e && o(0, (s = e.activeTabValue));
		}),
		[s, t, (e) => () => o(0, (s = e))]
	);
}
class V extends e {
	constructor(e) {
		super(), a(this, e, U, P, o, { tabsContent: 1, activeTabValue: 0 });
	}
}
const H = [
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
function M(e) {
	let a, o;
	return (
		(a = new V({ props: { tabsContent: H } })),
		{
			c() {
				y(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, t) {
				j(a, e, t), (o = !0);
			},
			p: v,
			i(e) {
				o || (w(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				C(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
class I extends e {
	constructor(e) {
		super(), a(this, e, null, M, o, {});
	}
}
function B(e) {
	let a, o;
	return (
		(a = new z({
			props: { title: L[3].title, subtitle: L[3].subtitle, text: L[3].text, img: L[3].img }
		})),
		{
			c() {
				y(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, t) {
				j(a, e, t), (o = !0);
			},
			p: v,
			i(e) {
				o || (w(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				C(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
function D(e) {
	let a, o;
	return (
		(a = new I({})),
		{
			c() {
				y(a.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e);
			},
			m(e, t) {
				j(a, e, t), (o = !0);
			},
			i(e) {
				o || (w(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				C(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				x(a, e);
			}
		}
	);
}
function G(e) {
	let a, o, t, s;
	return (
		(a = new T({
			props: { id: 'cover', variante: 3, $$slots: { default: [B] }, $$scope: { ctx: e } }
		})),
		(t = new T({
			props: { id: 'tabheaders', variante: 1, $$slots: { default: [D] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				y(a.$$.fragment), (o = h()), y(t.$$.fragment);
			},
			l(e) {
				E(a.$$.fragment, e), (o = $(e)), E(t.$$.fragment, e);
			},
			m(e, n) {
				j(a, e, n), u(e, o, n), j(t, e, n), (s = !0);
			},
			p(e, [o]) {
				const s = {};
				1 & o && (s.$$scope = { dirty: o, ctx: e }), a.$set(s);
				const n = {};
				1 & o && (n.$$scope = { dirty: o, ctx: e }), t.$set(n);
			},
			i(e) {
				s || (w(a.$$.fragment, e), w(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				C(a.$$.fragment, e), C(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				x(a, e), e && r(o), x(t, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, G, o, {});
	}
}
