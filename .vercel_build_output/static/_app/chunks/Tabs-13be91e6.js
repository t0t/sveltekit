import {
	S as e,
	i as t,
	s as a,
	k as o,
	f as n,
	w as s,
	p as i,
	q as r,
	r as l,
	x as c,
	y as d,
	C as m,
	D as p,
	d as u,
	j as f,
	l as g,
	J as $,
	e as h,
	c as v,
	a as b,
	o as y,
	X as x,
	I as j
} from './index-d91e1ed8.js';
import { G as q } from './Grid-c3d7f00f.js';
import { L as w, a as C } from './ListItem-d0f4c833.js';
import { B as E } from './Grid.svelte-8e9d6b69.js';
import { I as L } from './Img-f6fb9871.js';
/* empty css                    */ const S = [
	{
		id: 0,
		title: 'Historia',
		subtitle: 'La esencia',
		img: './img/ceroo.svg',
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
		img: './img/uno.svg',
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
		img: './img/dos.svg',
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
		img: './img/grafico-4.svg',
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
		img: './img/cuatro.svg',
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
function z(e, t, a) {
	const o = e.slice();
	return (o[3] = t[a]), o;
}
function A(e, t, a) {
	const o = e.slice();
	return (o[3] = t[a]), o;
}
function I(e) {
	let t, a, o, m, p;
	return (
		(a = new E({ props: { variante: 8, text: e[3].title } })),
		a.$on('click', function () {
			x(e[2](e[3].id)) && e[2](e[3].id).apply(this, arguments);
		}),
		{
			c() {
				(t = h('span')), i(a.$$.fragment), (m = f()), this.h();
			},
			l(e) {
				t = v(e, 'SPAN', { class: !0 });
				var o = b(t);
				r(a.$$.fragment, o), o.forEach(u), (m = g(e)), this.h();
			},
			h() {
				y(t, 'class', (o = j(e[1] === e[3].id ? 'active' : '') + ' svelte-1y5l04m'));
			},
			m(e, o) {
				n(e, t, o), l(a, t, null), n(e, m, o), (p = !0);
			},
			p(n, s) {
				e = n;
				const i = {};
				1 & s && (i.text = e[3].title),
					a.$set(i),
					(!p || (3 & s && o !== (o = j(e[1] === e[3].id ? 'active' : '') + ' svelte-1y5l04m'))) &&
						y(t, 'class', o);
			},
			i(e) {
				p || (s(a.$$.fragment, e), (p = !0));
			},
			o(e) {
				c(a.$$.fragment, e), (p = !1);
			},
			d(e) {
				e && u(t), d(a), e && u(m);
			}
		}
	);
}
function P(e) {
	let t, a;
	return (
		(t = new C({ props: { tipo: 1, $$slots: { default: [I] }, $$scope: { ctx: e } } })),
		{
			c() {
				i(t.$$.fragment);
			},
			l(e) {
				r(t.$$.fragment, e);
			},
			m(e, o) {
				l(t, e, o), (a = !0);
			},
			p(e, a) {
				const o = {};
				259 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
			},
			i(e) {
				a || (s(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				c(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				d(t, e);
			}
		}
	);
}
function H(e) {
	let t,
		a,
		i = e[0],
		r = [];
	for (let o = 0; o < i.length; o += 1) r[o] = P(A(e, i, o));
	const l = (e) =>
		c(r[e], 1, 1, () => {
			r[e] = null;
		});
	return {
		c() {
			for (let e = 0; e < r.length; e += 1) r[e].c();
			t = o();
		},
		l(e) {
			for (let t = 0; t < r.length; t += 1) r[t].l(e);
			t = o();
		},
		m(e, o) {
			for (let t = 0; t < r.length; t += 1) r[t].m(e, o);
			n(e, t, o), (a = !0);
		},
		p(e, a) {
			if (7 & a) {
				let o;
				for (i = e[0], o = 0; o < i.length; o += 1) {
					const n = A(e, i, o);
					r[o]
						? (r[o].p(n, a), s(r[o], 1))
						: ((r[o] = P(n)), r[o].c(), s(r[o], 1), r[o].m(t.parentNode, t));
				}
				for (m(), o = i.length; o < r.length; o += 1) l(o);
				p();
			}
		},
		i(e) {
			if (!a) {
				for (let e = 0; e < i.length; e += 1) s(r[e]);
				a = !0;
			}
		},
		o(e) {
			r = r.filter(Boolean);
			for (let t = 0; t < r.length; t += 1) c(r[t]);
			a = !1;
		},
		d(e) {
			$(r, e), e && u(t);
		}
	};
}
function T(e) {
	let t, a;
	return (
		(t = new w({
			props: { tipo: 5, variante: 7, $$slots: { default: [B] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				i(t.$$.fragment);
			},
			l(e) {
				r(t.$$.fragment, e);
			},
			m(e, o) {
				l(t, e, o), (a = !0);
			},
			p(e, a) {
				const o = {};
				257 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
			},
			i(e) {
				a || (s(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				c(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				d(t, e);
			}
		}
	);
}
function N(e) {
	let t, a;
	return (
		(t = new L({ props: { variante: 5, src: e[3].img, alt: e[3].subtitle } })),
		{
			c() {
				i(t.$$.fragment);
			},
			l(e) {
				r(t.$$.fragment, e);
			},
			m(e, o) {
				l(t, e, o), (a = !0);
			},
			p(e, a) {
				const o = {};
				1 & a && (o.src = e[3].img), 1 & a && (o.alt = e[3].subtitle), t.$set(o);
			},
			i(e) {
				a || (s(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				c(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				d(t, e);
			}
		}
	);
}
function k(e) {
	let t,
		a = e[3].content + '';
	return {
		c() {
			(t = h('p')), this.h();
		},
		l(e) {
			(t = v(e, 'P', { class: !0 })), b(t).forEach(u), this.h();
		},
		h() {
			y(t, 'class', 'svelte-1y5l04m');
		},
		m(e, o) {
			n(e, t, o), (t.innerHTML = a);
		},
		p(e, o) {
			1 & o && a !== (a = e[3].content + '') && (t.innerHTML = a);
		},
		d(e) {
			e && u(t);
		}
	};
}
function B(e) {
	let t, a, o;
	return (
		(t = new q({
			props: { tipo: 2, variante: 9, $$slots: { slot_5: [k], slot_4: [N] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				i(t.$$.fragment), (a = f());
			},
			l(e) {
				r(t.$$.fragment, e), (a = g(e));
			},
			m(e, s) {
				l(t, e, s), n(e, a, s), (o = !0);
			},
			p(e, a) {
				const o = {};
				257 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
			},
			i(e) {
				o || (s(t.$$.fragment, e), (o = !0));
			},
			o(e) {
				c(t.$$.fragment, e), (o = !1);
			},
			d(e) {
				d(t, e), e && u(a);
			}
		}
	);
}
function G(e) {
	let t,
		a,
		i = e[1] == e[3].id && T(e);
	return {
		c() {
			i && i.c(), (t = o());
		},
		l(e) {
			i && i.l(e), (t = o());
		},
		m(e, o) {
			i && i.m(e, o), n(e, t, o), (a = !0);
		},
		p(e, a) {
			e[1] == e[3].id
				? i
					? (i.p(e, a), 3 & a && s(i, 1))
					: ((i = T(e)), i.c(), s(i, 1), i.m(t.parentNode, t))
				: i &&
				  (m(),
				  c(i, 1, 1, () => {
						i = null;
				  }),
				  p());
		},
		i(e) {
			a || (s(i), (a = !0));
		},
		o(e) {
			c(i), (a = !1);
		},
		d(e) {
			i && i.d(e), e && u(t);
		}
	};
}
function M(e) {
	let t, a, h, v;
	t = new w({ props: { tipo: 3, variante: 3, $$slots: { default: [H] }, $$scope: { ctx: e } } });
	let b = e[0],
		y = [];
	for (let o = 0; o < b.length; o += 1) y[o] = G(z(e, b, o));
	const x = (e) =>
		c(y[e], 1, 1, () => {
			y[e] = null;
		});
	return {
		c() {
			i(t.$$.fragment), (a = f());
			for (let e = 0; e < y.length; e += 1) y[e].c();
			h = o();
		},
		l(e) {
			r(t.$$.fragment, e), (a = g(e));
			for (let t = 0; t < y.length; t += 1) y[t].l(e);
			h = o();
		},
		m(e, o) {
			l(t, e, o), n(e, a, o);
			for (let t = 0; t < y.length; t += 1) y[t].m(e, o);
			n(e, h, o), (v = !0);
		},
		p(e, [a]) {
			const o = {};
			if ((259 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o), 3 & a)) {
				let t;
				for (b = e[0], t = 0; t < b.length; t += 1) {
					const o = z(e, b, t);
					y[t]
						? (y[t].p(o, a), s(y[t], 1))
						: ((y[t] = G(o)), y[t].c(), s(y[t], 1), y[t].m(h.parentNode, h));
				}
				for (m(), t = b.length; t < y.length; t += 1) x(t);
				p();
			}
		},
		i(e) {
			if (!v) {
				s(t.$$.fragment, e);
				for (let e = 0; e < b.length; e += 1) s(y[e]);
				v = !0;
			}
		},
		o(e) {
			c(t.$$.fragment, e), (y = y.filter(Boolean));
			for (let t = 0; t < y.length; t += 1) c(y[t]);
			v = !1;
		},
		d(e) {
			d(t, e), e && u(a), $(y, e), e && u(h);
		}
	};
}
function V(e, t, a) {
	let { tabHeaders: o = [] } = t,
		n = 1;
	return (
		(e.$$set = (e) => {
			'tabHeaders' in e && a(0, (o = e.tabHeaders));
		}),
		[o, n, (e) => () => a(1, (n = e))]
	);
}
class D extends e {
	constructor(e) {
		super(), t(this, e, V, M, a, { tabHeaders: 0 });
	}
}
export { D as T, S as t };
