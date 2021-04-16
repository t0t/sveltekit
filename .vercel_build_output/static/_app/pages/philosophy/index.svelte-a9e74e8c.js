import {
	S as a,
	i as e,
	s as r,
	p as s,
	j as t,
	e as o,
	E as n,
	t as c,
	q as l,
	l as i,
	c as m,
	a as f,
	d,
	b as $,
	o as u,
	r as g,
	f as p,
	g as v,
	w as h,
	x as _,
	y as E,
	n as x
} from '../../chunks/index-d91e1ed8.js';
import { c as b, B as y } from '../../chunks/Grid.svelte-dc7715e6.js';
import { t as q } from '../../chunks/tabsContent-d9de8955.js';
import { H as j } from '../../chunks/Header-eac1ad0e.js';
import { S as I } from '../../chunks/Section-75880cda.js';
import { T as w } from '../../chunks/Tabs-29bbf108.js';
import { I as D } from '../../chunks/Img-374bd0d7.js';
import { L as H, a as V } from '../../chunks/ListItem-1d115590.js';
function k(a) {
	let e, r, t, n;
	return (
		(t = new j({ props: { tipo: 1, variante: 3, title: b[3].title, subtitle: b[3].subtitle } })),
		{
			c() {
				(e = o('div')), (r = o('div')), s(t.$$.fragment), this.h();
			},
			l(a) {
				e = m(a, 'DIV', { class: !0 });
				var s = f(e);
				r = m(s, 'DIV', { class: !0 });
				var o = f(r);
				l(t.$$.fragment, o), o.forEach(d), s.forEach(d), this.h();
			},
			h() {
				u(r, 'class', 'col_13 c_5 bgc_0 tac p_1'), u(e, 'class', 'dg');
			},
			m(a, s) {
				p(a, e, s), v(e, r), g(t, r, null), (n = !0);
			},
			p: x,
			i(a) {
				n || (h(t.$$.fragment, a), (n = !0));
			},
			o(a) {
				_(t.$$.fragment, a), (n = !1);
			},
			d(a) {
				a && d(e), E(t);
			}
		}
	);
}
function z(a) {
	let e, r;
	return (
		(e = new y({ props: { variante: 3, text: 'Slides' } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(a) {
				l(e.$$.fragment, a);
			},
			m(a, s) {
				g(e, a, s), (r = !0);
			},
			p: x,
			i(a) {
				r || (h(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				_(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				E(e, a);
			}
		}
	);
}
function P(a) {
	let e, r;
	return (
		(e = new y({ props: { variante: 3, text: 'Libro' } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(a) {
				l(e.$$.fragment, a);
			},
			m(a, s) {
				g(e, a, s), (r = !0);
			},
			p: x,
			i(a) {
				r || (h(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				_(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				E(e, a);
			}
		}
	);
}
function C(a) {
	let e, r, o, n;
	return (
		(e = new V({
			props: {
				tipo: 2,
				variante: 0,
				href: 'https://slides.com/sergiofores/',
				alt: '',
				target: '_blank',
				$$slots: { default: [z] },
				$$scope: { ctx: a }
			}
		})),
		(o = new V({
			props: {
				tipo: 2,
				variante: 0,
				href:
					'https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing',
				alt: '',
				target: '_blank',
				$$slots: { default: [P] },
				$$scope: { ctx: a }
			}
		})),
		{
			c() {
				s(e.$$.fragment), (r = t()), s(o.$$.fragment);
			},
			l(a) {
				l(e.$$.fragment, a), (r = i(a)), l(o.$$.fragment, a);
			},
			m(a, s) {
				g(e, a, s), p(a, r, s), g(o, a, s), (n = !0);
			},
			p(a, r) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: a }), e.$set(s);
				const t = {};
				1 & r && (t.$$scope = { dirty: r, ctx: a }), o.$set(t);
			},
			i(a) {
				n || (h(e.$$.fragment, a), h(o.$$.fragment, a), (n = !0));
			},
			o(a) {
				_(e.$$.fragment, a), _(o.$$.fragment, a), (n = !1);
			},
			d(a) {
				E(e, a), a && d(r), E(o, a);
			}
		}
	);
}
function L(a) {
	let e, r;
	return (
		(e = new w({ props: { tabHeaders: q } })),
		{
			c() {
				s(e.$$.fragment);
			},
			l(a) {
				l(e.$$.fragment, a);
			},
			m(a, s) {
				g(e, a, s), (r = !0);
			},
			p: x,
			i(a) {
				r || (h(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				_(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				E(e, a);
			}
		}
	);
}
function T(a) {
	let e,
		r,
		x,
		b,
		y,
		q,
		w,
		V,
		z,
		P,
		T,
		A,
		S,
		F,
		G,
		Y,
		B,
		M,
		N,
		O,
		Q,
		R,
		U,
		J,
		K,
		W,
		X,
		Z,
		aa,
		ea,
		ra,
		sa,
		ta,
		oa,
		na,
		ca,
		la,
		ia,
		ma,
		fa,
		da,
		$a,
		ua,
		ga,
		pa,
		va,
		ha,
		_a,
		Ea,
		xa,
		ba,
		ya,
		qa,
		ja,
		Ia,
		wa,
		Da,
		Ha,
		Va,
		ka,
		za,
		Pa,
		Ca,
		La,
		Ta,
		Aa,
		Sa,
		Fa,
		Ga,
		Ya,
		Ba,
		Ma,
		Na,
		Oa,
		Qa,
		Ra,
		Ua;
	return (
		(e = new I({
			props: { id: 'philosophy', variante: 1, $$slots: { default: [k] }, $$scope: { ctx: a } }
		})),
		(Q = new j({ props: { tipo: 2, variante: 7, title: 'Tetractys' } })),
		(ea = new H({
			props: { tipo: 3, variante: 2, $$slots: { default: [C] }, $$scope: { ctx: a } }
		})),
		(oa = new D({ props: { src: './img/logo.svg', alt: '' } })),
		(la = new j({
			props: { tipo: 2, variante: 7, title: 'Hay una verdad que puede ser conocida…' }
		})),
		(va = new j({ props: { tipo: 1, variante: 1, title: 'Sentir Orden Forma Conexión' } })),
		(Ca = new D({ props: { src: './img/grafico-8.svg', alt: '' } })),
		(Oa = new j({
			props: { tipo: 1, variante: 3, title: 'Los 5 Principios Universales', subtitle: '' }
		})),
		(Ra = new I({
			props: {
				id: 'principios',
				variante: 7,
				bg_color: 'bgc_0',
				$$slots: { default: [L] },
				$$scope: { ctx: a }
			}
		})),
		{
			c() {
				s(e.$$.fragment),
					(r = t()),
					(x = o('div')),
					(b = o('div')),
					(y = n('svg')),
					(q = n('path')),
					(w = n('circle')),
					(V = n('circle')),
					(z = n('circle')),
					(P = n('circle')),
					(T = n('circle')),
					(A = n('circle')),
					(S = n('circle')),
					(F = n('circle')),
					(G = n('circle')),
					(Y = n('circle')),
					(B = t()),
					(M = o('div')),
					(N = o('div')),
					(O = o('div')),
					s(Q.$$.fragment),
					(R = t()),
					(U = o('div')),
					(J = o('h3')),
					(K = c('Hacia el encuentro con todo lo que Es')),
					(W = t()),
					(X = o('h4')),
					(Z = c(
						'+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus\n\t\t\t\tprincipios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo'
					)),
					(aa = t()),
					s(ea.$$.fragment),
					(ra = t()),
					(sa = o('div')),
					(ta = o('div')),
					s(oa.$$.fragment),
					(na = t()),
					(ca = o('div')),
					s(la.$$.fragment),
					(ia = t()),
					(ma = o('p')),
					(fa = c(
						'¿Percibes 2 ese orden 1 atravesándote 0 en la forma 4 del encuentro 3? Es lo inefable\n\t\t\tconociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas\n\t\t\tque yo he visto, a dónde me llevan las corrientes de todas las formas..'
					)),
					(da = t()),
					($a = o('p')),
					(ua = c(
						'A medida que uno va averiguando cosas se va dando cuenta de que las cosas que uno puede llegar\n\t\t\ta saber quieren ser conocidas. Están ocultas y a la vez no lo están. Hay un juego ahí entre lo\n\t\t\tvelado y lo revelado, como si lo uno no tuviera sentido sin lo otro.'
					)),
					(ga = t()),
					(pa = o('div')),
					s(va.$$.fragment),
					(ha = t()),
					(_a = o('p')),
					(Ea = c(
						'Percibes cualquier cosa como lo que és; un símbolo. Funciona como un Tetris; el objetivo no es amontonar piezas sino disolverlas, ¡que desaparezcan!'
					)),
					(xa = t()),
					(ba = o('p')),
					(ya = c('Los 5 arjés. Estructura dinámica sobre la que se asienta toda la Creación.')),
					(qa = t()),
					(ja = o('p')),
					(Ia = o('strong')),
					(wa = c('Y cuanto más perceptible es su inexistencia más presente está.')),
					(Da = t()),
					(Ha = o('div')),
					(Va = o('img')),
					(za = t()),
					(Pa = o('div')),
					s(Ca.$$.fragment),
					(La = t()),
					(Ta = o('div')),
					(Aa = o('p')),
					(Sa = c(
						'En ocasiones ni siquiera necesitas no estar viendo algo para estar viendo algo. Si vamos a\n\t\t\tdescifrar la Creación vamos a tener que acostumbrarnos a las paradojas.'
					)),
					(Fa = t()),
					(Ga = o('p')),
					(Ya = c(
						'Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La\n\t\t\tHermenéutica nace como "el arte o la técnica de explicar, descifrar o interpretar". Así que\n\t\t\tpara explicar o descifrar algo, luego veremos el qué, primeramente yo tengo que hacer una\n\t\t\thermenéutica de ese "algo", averiguar algo que vendrá recogido en alguna otra parte.'
					)),
					(Ba = t()),
					(Ma = o('div')),
					(Na = o('div')),
					s(Oa.$$.fragment),
					(Qa = t()),
					s(Ra.$$.fragment),
					this.h();
			},
			l(a) {
				l(e.$$.fragment, a), (r = i(a)), (x = m(a, 'DIV', { class: !0 }));
				var s = f(x);
				b = m(s, 'DIV', { class: !0 });
				var t = f(b);
				y = m(t, 'svg', { 'fill-rule': !0, 'clip-rule': !0, viewBox: !0 }, 1);
				var o = f(y);
				(q = m(o, 'path', { fill: !0, stroke: !0, 'stroke-width': !0, d: !0 }, 1)),
					f(q).forEach(d),
					(w = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(w).forEach(d),
					(V = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(V).forEach(d),
					(z = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(z).forEach(d),
					(P = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(P).forEach(d),
					(T = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(T).forEach(d),
					(A = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(A).forEach(d),
					(S = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(S).forEach(d),
					(F = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(F).forEach(d),
					(G = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(G).forEach(d),
					(Y = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(Y).forEach(d),
					o.forEach(d),
					t.forEach(d),
					(B = i(s)),
					(M = m(s, 'DIV', { class: !0 }));
				var n = f(M);
				N = m(n, 'DIV', { class: !0 });
				var c = f(N);
				O = m(c, 'DIV', { class: !0 });
				var u = f(O);
				l(Q.$$.fragment, u), u.forEach(d), (R = i(c)), (U = m(c, 'DIV', { class: !0 }));
				var g = f(U);
				J = m(g, 'H3', {});
				var p = f(J);
				(K = $(p, 'Hacia el encuentro con todo lo que Es')),
					p.forEach(d),
					(W = i(g)),
					(X = m(g, 'H4', {}));
				var v = f(X);
				(Z = $(
					v,
					'+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus\n\t\t\t\tprincipios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo'
				)),
					v.forEach(d),
					g.forEach(d),
					(aa = i(c)),
					l(ea.$$.fragment, c),
					c.forEach(d),
					n.forEach(d),
					s.forEach(d),
					(ra = i(a)),
					(sa = m(a, 'DIV', { class: !0 }));
				var h = f(sa);
				ta = m(h, 'DIV', { class: !0 });
				var _ = f(ta);
				l(oa.$$.fragment, _), _.forEach(d), (na = i(h)), (ca = m(h, 'DIV', { class: !0 }));
				var E = f(ca);
				l(la.$$.fragment, E), (ia = i(E)), (ma = m(E, 'P', {}));
				var j = f(ma);
				(fa = $(
					j,
					'¿Percibes 2 ese orden 1 atravesándote 0 en la forma 4 del encuentro 3? Es lo inefable\n\t\t\tconociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas\n\t\t\tque yo he visto, a dónde me llevan las corrientes de todas las formas..'
				)),
					j.forEach(d),
					(da = i(E)),
					($a = m(E, 'P', {}));
				var I = f($a);
				(ua = $(
					I,
					'A medida que uno va averiguando cosas se va dando cuenta de que las cosas que uno puede llegar\n\t\t\ta saber quieren ser conocidas. Están ocultas y a la vez no lo están. Hay un juego ahí entre lo\n\t\t\tvelado y lo revelado, como si lo uno no tuviera sentido sin lo otro.'
				)),
					I.forEach(d),
					E.forEach(d),
					(ga = i(h)),
					(pa = m(h, 'DIV', { class: !0 }));
				var D = f(pa);
				l(va.$$.fragment, D), (ha = i(D)), (_a = m(D, 'P', {}));
				var H = f(_a);
				(Ea = $(
					H,
					'Percibes cualquier cosa como lo que és; un símbolo. Funciona como un Tetris; el objetivo no es amontonar piezas sino disolverlas, ¡que desaparezcan!'
				)),
					H.forEach(d),
					(xa = i(D)),
					(ba = m(D, 'P', {}));
				var k = f(ba);
				(ya = $(k, 'Los 5 arjés. Estructura dinámica sobre la que se asienta toda la Creación.')),
					k.forEach(d),
					(qa = i(D)),
					(ja = m(D, 'P', {}));
				var C = f(ja);
				Ia = m(C, 'STRONG', {});
				var L = f(Ia);
				(wa = $(L, 'Y cuanto más perceptible es su inexistencia más presente está.')),
					L.forEach(d),
					C.forEach(d),
					D.forEach(d),
					(Da = i(h)),
					(Ha = m(h, 'DIV', { class: !0 }));
				var ka = f(Ha);
				(Va = m(ka, 'IMG', { src: !0, alt: !0 })),
					ka.forEach(d),
					(za = i(h)),
					(Pa = m(h, 'DIV', { class: !0 }));
				var Ua = f(Pa);
				l(Ca.$$.fragment, Ua), Ua.forEach(d), (La = i(h)), (Ta = m(h, 'DIV', { class: !0 }));
				var Ja = f(Ta);
				Aa = m(Ja, 'P', {});
				var Ka = f(Aa);
				(Sa = $(
					Ka,
					'En ocasiones ni siquiera necesitas no estar viendo algo para estar viendo algo. Si vamos a\n\t\t\tdescifrar la Creación vamos a tener que acostumbrarnos a las paradojas.'
				)),
					Ka.forEach(d),
					(Fa = i(Ja)),
					(Ga = m(Ja, 'P', {}));
				var Wa = f(Ga);
				(Ya = $(
					Wa,
					'Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La\n\t\t\tHermenéutica nace como "el arte o la técnica de explicar, descifrar o interpretar". Así que\n\t\t\tpara explicar o descifrar algo, luego veremos el qué, primeramente yo tengo que hacer una\n\t\t\thermenéutica de ese "algo", averiguar algo que vendrá recogido en alguna otra parte.'
				)),
					Wa.forEach(d),
					Ja.forEach(d),
					h.forEach(d),
					(Ba = i(a)),
					(Ma = m(a, 'DIV', { class: !0 }));
				var Xa = f(Ma);
				Na = m(Xa, 'DIV', { class: !0 });
				var Za = f(Na);
				l(Oa.$$.fragment, Za),
					Za.forEach(d),
					Xa.forEach(d),
					(Qa = i(a)),
					l(Ra.$$.fragment, a),
					this.h();
			},
			h() {
				u(q, 'fill', 'none'),
					u(q, 'stroke', '#000'),
					u(q, 'stroke-width', '.7'),
					u(
						q,
						'd',
						'M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30\n\t\t\t\t53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z'
					),
					u(w, 'cx', '168.3'),
					u(w, 'cy', '18.1'),
					u(w, 'r', '6'),
					u(w, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(V, 'cx', '214.1'),
					u(V, 'cy', '98.5'),
					u(V, 'r', '6'),
					u(V, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(z, 'cx', '259.9'),
					u(z, 'cy', '178.2'),
					u(z, 'r', '6'),
					u(z, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(P, 'cx', '305.7'),
					u(P, 'cy', '257.8'),
					u(P, 'r', '6'),
					u(P, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(T, 'cx', '214.1'),
					u(T, 'cy', '257.8'),
					u(T, 'r', '6'),
					u(T, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(A, 'cx', '123.2'),
					u(A, 'cy', '257.8'),
					u(A, 'r', '6'),
					u(A, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(S, 'cx', '30.8'),
					u(S, 'cy', '257.8'),
					u(S, 'r', '6'),
					u(S, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(F, 'cx', '76.9'),
					u(F, 'cy', '178.2'),
					u(F, 'r', '6'),
					u(F, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(G, 'cx', '168.3'),
					u(G, 'cy', '178.2'),
					u(G, 'r', '6'),
					u(G, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(Y, 'cx', '123.2'),
					u(Y, 'cy', '98.5'),
					u(Y, 'r', '6'),
					u(Y, 'transform', 'translate(-17 -8) scale(.67024)'),
					u(y, 'fill-rule', 'evenodd'),
					u(y, 'clip-rule', 'evenodd'),
					u(y, 'viewBox', '0 0 193 169'),
					u(b, 'class', 'col_13 col_s2_5'),
					u(O, 'class', 'col_13'),
					u(U, 'class', 'col_13'),
					u(N, 'class', 'dg'),
					u(M, 'class', 'col_13 col_s2_8'),
					u(x, 'class', 'dg rg_1 cg_s2_1 p_3 bgc_primary c_4'),
					u(ta, 'class', 'col_13 col_s2_8'),
					u(ca, 'class', 'col_13 col_s2_5 dg_0 gap_1'),
					u(pa, 'class', 'col_13 col_s2_5 dg_0 rg_1'),
					Va.src !== (ka = './img/01234_bn.svg') && u(Va, 'src', './img/01234_bn.svg'),
					u(Va, 'alt', ''),
					u(Ha, 'class', 'col_13 col_s2_8'),
					u(Pa, 'class', 'col_13'),
					u(Ta, 'class', 'col_13'),
					u(sa, 'class', 'dg p_3 bgc_0 c_4 rg_1 cg_s2_1'),
					u(Na, 'class', 'col_13 tac p_3'),
					u(Ma, 'class', 'dg');
			},
			m(a, s) {
				g(e, a, s),
					p(a, r, s),
					p(a, x, s),
					v(x, b),
					v(b, y),
					v(y, q),
					v(y, w),
					v(y, V),
					v(y, z),
					v(y, P),
					v(y, T),
					v(y, A),
					v(y, S),
					v(y, F),
					v(y, G),
					v(y, Y),
					v(x, B),
					v(x, M),
					v(M, N),
					v(N, O),
					g(Q, O, null),
					v(N, R),
					v(N, U),
					v(U, J),
					v(J, K),
					v(U, W),
					v(U, X),
					v(X, Z),
					v(N, aa),
					g(ea, N, null),
					p(a, ra, s),
					p(a, sa, s),
					v(sa, ta),
					g(oa, ta, null),
					v(sa, na),
					v(sa, ca),
					g(la, ca, null),
					v(ca, ia),
					v(ca, ma),
					v(ma, fa),
					v(ca, da),
					v(ca, $a),
					v($a, ua),
					v(sa, ga),
					v(sa, pa),
					g(va, pa, null),
					v(pa, ha),
					v(pa, _a),
					v(_a, Ea),
					v(pa, xa),
					v(pa, ba),
					v(ba, ya),
					v(pa, qa),
					v(pa, ja),
					v(ja, Ia),
					v(Ia, wa),
					v(sa, Da),
					v(sa, Ha),
					v(Ha, Va),
					v(sa, za),
					v(sa, Pa),
					g(Ca, Pa, null),
					v(sa, La),
					v(sa, Ta),
					v(Ta, Aa),
					v(Aa, Sa),
					v(Ta, Fa),
					v(Ta, Ga),
					v(Ga, Ya),
					p(a, Ba, s),
					p(a, Ma, s),
					v(Ma, Na),
					g(Oa, Na, null),
					p(a, Qa, s),
					g(Ra, a, s),
					(Ua = !0);
			},
			p(a, [r]) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: a }), e.$set(s);
				const t = {};
				1 & r && (t.$$scope = { dirty: r, ctx: a }), ea.$set(t);
				const o = {};
				1 & r && (o.$$scope = { dirty: r, ctx: a }), Ra.$set(o);
			},
			i(a) {
				Ua ||
					(h(e.$$.fragment, a),
					h(Q.$$.fragment, a),
					h(ea.$$.fragment, a),
					h(oa.$$.fragment, a),
					h(la.$$.fragment, a),
					h(va.$$.fragment, a),
					h(Ca.$$.fragment, a),
					h(Oa.$$.fragment, a),
					h(Ra.$$.fragment, a),
					(Ua = !0));
			},
			o(a) {
				_(e.$$.fragment, a),
					_(Q.$$.fragment, a),
					_(ea.$$.fragment, a),
					_(oa.$$.fragment, a),
					_(la.$$.fragment, a),
					_(va.$$.fragment, a),
					_(Ca.$$.fragment, a),
					_(Oa.$$.fragment, a),
					_(Ra.$$.fragment, a),
					(Ua = !1);
			},
			d(a) {
				E(e, a),
					a && d(r),
					a && d(x),
					E(Q),
					E(ea),
					a && d(ra),
					a && d(sa),
					E(oa),
					E(la),
					E(va),
					E(Ca),
					a && d(Ba),
					a && d(Ma),
					E(Oa),
					a && d(Qa),
					E(Ra, a);
			}
		}
	);
}
export default class extends a {
	constructor(a) {
		super(), e(this, a, null, T, r, {});
	}
}
