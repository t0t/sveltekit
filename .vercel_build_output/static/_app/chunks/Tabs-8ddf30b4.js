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
	o as x,
	t as y,
	b as q,
	g as E,
	h as j,
	X as w,
	I as C
} from './index-d91e1ed8.js';
import { G as I, B as L } from './Grid-86dcf0b4.js';
import { L as S, a as z } from './ListItem-800c4c59.js';
/* empty css                    */ const A = [
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
function P(e, t, a) {
	const o = e.slice();
	return (o[3] = t[a]), o;
}
function N(e, t, a) {
	const o = e.slice();
	return (o[6] = t[a]), o;
}
function T(e, t, a) {
	const o = e.slice();
	return (o[3] = t[a]), o;
}
function H(e) {
	let t, a, o, m, p;
	return (
		(a = new L({ props: { variante: 8, text: e[3].title } })),
		a.$on('click', function () {
			w(e[2](e[3].id)) && e[2](e[3].id).apply(this, arguments);
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
				x(t, 'class', (o = C(e[1] === e[3].id ? 'active' : '') + ' svelte-157mplp'));
			},
			m(e, o) {
				n(e, t, o), l(a, t, null), n(e, m, o), (p = !0);
			},
			p(n, s) {
				e = n;
				const i = {};
				1 & s && (i.text = e[3].title),
					a.$set(i),
					(!p || (3 & s && o !== (o = C(e[1] === e[3].id ? 'active' : '') + ' svelte-157mplp'))) &&
						x(t, 'class', o);
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
function G(e) {
	let t, a;
	return (
		(t = new z({ props: { tipo: 1, $$slots: { default: [H] }, $$scope: { ctx: e } } })),
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
				2051 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
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
function B(e) {
	let t,
		a,
		i = e[0],
		r = [];
	for (let o = 0; o < i.length; o += 1) r[o] = G(T(e, i, o));
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
					const n = T(e, i, o);
					r[o]
						? (r[o].p(n, a), s(r[o], 1))
						: ((r[o] = G(n)), r[o].c(), s(r[o], 1), r[o].m(t.parentNode, t));
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
function M(e) {
	let t, a;
	return (
		(t = new S({
			props: { tipo: 5, variante: 7, $$slots: { default: [U] }, $$scope: { ctx: e } }
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
				2049 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
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
function V(e) {
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
			x(t, 'class', 'svelte-157mplp');
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
function k(e) {
	let t,
		a,
		o,
		s,
		i,
		r,
		l,
		c = e[3].subtitle + '';
	return {
		c() {
			(t = h('figure')), (a = h('img')), (i = f()), (r = h('figcaption')), (l = y(c)), this.h();
		},
		l(e) {
			t = v(e, 'FIGURE', { slot: !0, class: !0 });
			var o = b(t);
			(a = v(o, 'IMG', { src: !0, alt: !0, class: !0 })),
				(i = g(o)),
				(r = v(o, 'FIGCAPTION', { class: !0 }));
			var n = b(r);
			(l = q(n, c)), n.forEach(u), o.forEach(u), this.h();
		},
		h() {
			a.src !== (o = e[3].img) && x(a, 'src', o),
				x(a, 'alt', (s = e[3].subtitle)),
				x(a, 'class', 'svelte-157mplp'),
				x(r, 'class', 'svelte-157mplp'),
				x(t, 'slot', 'subarea1'),
				x(t, 'class', 'svelte-157mplp');
		},
		m(e, o) {
			n(e, t, o), E(t, a), E(t, i), E(t, r), E(r, l);
		},
		p(e, t) {
			1 & t && a.src !== (o = e[3].img) && x(a, 'src', o),
				1 & t && s !== (s = e[3].subtitle) && x(a, 'alt', s),
				1 & t && c !== (c = e[3].subtitle + '') && j(l, c);
		},
		d(e) {
			e && u(t);
		}
	};
}
function D(e) {
	let t,
		a,
		o = e[6] + '';
	return {
		c() {
			(t = y(o)), (a = f());
		},
		l(e) {
			(t = q(e, o)), (a = g(e));
		},
		m(e, o) {
			n(e, t, o), n(e, a, o);
		},
		p(e, a) {
			1 & a && o !== (o = e[6] + '') && j(t, o);
		},
		d(e) {
			e && u(t), e && u(a);
		}
	};
}
function F(e) {
	let t, a;
	return (
		(t = new z({
			props: { tipo: 0, variante: 2, $$slots: { default: [D] }, $$scope: { ctx: e } }
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
				2049 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
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
function J(e) {
	let t,
		a,
		i = e[3].tags,
		r = [];
	for (let o = 0; o < i.length; o += 1) r[o] = F(N(e, i, o));
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
			if (1 & a) {
				let o;
				for (i = e[3].tags, o = 0; o < i.length; o += 1) {
					const n = N(e, i, o);
					r[o]
						? (r[o].p(n, a), s(r[o], 1))
						: ((r[o] = F(n)), r[o].c(), s(r[o], 1), r[o].m(t.parentNode, t));
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
function R(e) {
	let t, a, o;
	return (
		(a = new S({
			props: { tipo: 0, variante: 1, $$slots: { default: [J] }, $$scope: { ctx: e } }
		})),
		{
			c() {
				(t = h('div')), i(a.$$.fragment), this.h();
			},
			l(e) {
				t = v(e, 'DIV', { slot: !0, class: !0 });
				var o = b(t);
				r(a.$$.fragment, o), o.forEach(u), this.h();
			},
			h() {
				x(t, 'slot', 'subarea2'), x(t, 'class', 'svelte-157mplp');
			},
			m(e, s) {
				n(e, t, s), l(a, t, null), (o = !0);
			},
			p(e, t) {
				const o = {};
				2049 & t && (o.$$scope = { dirty: t, ctx: e }), a.$set(o);
			},
			i(e) {
				o || (s(a.$$.fragment, e), (o = !0));
			},
			o(e) {
				c(a.$$.fragment, e), (o = !1);
			},
			d(e) {
				e && u(t), d(a);
			}
		}
	);
}
function U(e) {
	let t, a, o;
	return (
		(t = new I({
			props: {
				variante: 3,
				$$slots: { subarea2: [R], subarea1: [k], default: [V] },
				$$scope: { ctx: e }
			}
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
				2049 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o);
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
function O(e) {
	let t,
		a,
		i = e[1] == e[3].id && M(e);
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
					: ((i = M(e)), i.c(), s(i, 1), i.m(t.parentNode, t))
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
function K(e) {
	let t, a, h, v;
	t = new S({ props: { tipo: 3, variante: 3, $$slots: { default: [B] }, $$scope: { ctx: e } } });
	let b = e[0],
		x = [];
	for (let o = 0; o < b.length; o += 1) x[o] = O(P(e, b, o));
	const y = (e) =>
		c(x[e], 1, 1, () => {
			x[e] = null;
		});
	return {
		c() {
			i(t.$$.fragment), (a = f());
			for (let e = 0; e < x.length; e += 1) x[e].c();
			h = o();
		},
		l(e) {
			r(t.$$.fragment, e), (a = g(e));
			for (let t = 0; t < x.length; t += 1) x[t].l(e);
			h = o();
		},
		m(e, o) {
			l(t, e, o), n(e, a, o);
			for (let t = 0; t < x.length; t += 1) x[t].m(e, o);
			n(e, h, o), (v = !0);
		},
		p(e, [a]) {
			const o = {};
			if ((2051 & a && (o.$$scope = { dirty: a, ctx: e }), t.$set(o), 3 & a)) {
				let t;
				for (b = e[0], t = 0; t < b.length; t += 1) {
					const o = P(e, b, t);
					x[t]
						? (x[t].p(o, a), s(x[t], 1))
						: ((x[t] = O(o)), x[t].c(), s(x[t], 1), x[t].m(h.parentNode, h));
				}
				for (m(), t = b.length; t < x.length; t += 1) y(t);
				p();
			}
		},
		i(e) {
			if (!v) {
				s(t.$$.fragment, e);
				for (let e = 0; e < b.length; e += 1) s(x[e]);
				v = !0;
			}
		},
		o(e) {
			c(t.$$.fragment, e), (x = x.filter(Boolean));
			for (let t = 0; t < x.length; t += 1) c(x[t]);
			v = !1;
		},
		d(e) {
			d(t, e), e && u(a), $(x, e), e && u(h);
		}
	};
}
function W(e, t, a) {
	let { tabHeaders: o = [] } = t,
		n = 1;
	return (
		(e.$$set = (e) => {
			'tabHeaders' in e && a(0, (o = e.tabHeaders));
		}),
		[o, n, (e) => () => a(1, (n = e))]
	);
}
class X extends e {
	constructor(e) {
		super(), t(this, e, W, K, a, { tabHeaders: 0 });
	}
}
export { X as T, A as t };
