import {
	S as e,
	i as a,
	s as r,
	p as s,
	j as t,
	e as o,
	E as c,
	t as n,
	q as l,
	l as i,
	c as m,
	a as f,
	d as $,
	b as d,
	o as u,
	r as g,
	f as p,
	g as v,
	w as h,
	x as _,
	y as E,
	n as b
} from '../../chunks/index-d91e1ed8.js';
import { c as x, B as y } from '../../chunks/Grid.svelte-ab8cbe1f.js';
import { t as q } from '../../chunks/tabsContent-d9de8955.js';
import { H as j } from '../../chunks/Header-bff7bbb7.js';
import { S as I } from '../../chunks/Section-b98eefba.js';
import { T as w } from '../../chunks/Tabs-3fc136cf.js';
import { I as D } from '../../chunks/Img-76e74fb8.js';
import { L as H, a as V } from '../../chunks/ListItem-dc89416a.js';
function k(e) {
	let a, r, t, c;
	return (
		(t = new j({ props: { tipo: 1, variante: 3, title: x[3].title, subtitle: x[3].subtitle } })),
		{
			c() {
				(a = o('div')), (r = o('div')), s(t.$$.fragment), this.h();
			},
			l(e) {
				a = m(e, 'DIV', { class: !0 });
				var s = f(a);
				r = m(s, 'DIV', { class: !0 });
				var o = f(r);
				l(t.$$.fragment, o), o.forEach($), s.forEach($), this.h();
			},
			h() {
				u(r, 'class', 'col_13 c_5 bgc_0 tac p_1'), u(a, 'class', 'dg');
			},
			m(e, s) {
				p(e, a, s), v(a, r), g(t, r, null), (c = !0);
			},
			p: b,
			i(e) {
				c || (h(t.$$.fragment, e), (c = !0));
			},
			o(e) {
				_(t.$$.fragment, e), (c = !1);
			},
			d(e) {
				e && $(a), E(t);
			}
		}
	);
}
function z(e) {
	let a, r;
	return (
		(a = new y({ props: { variante: 3, text: 'Slides' } })),
		{
			c() {
				s(a.$$.fragment);
			},
			l(e) {
				l(a.$$.fragment, e);
			},
			m(e, s) {
				g(a, e, s), (r = !0);
			},
			p: b,
			i(e) {
				r || (h(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				_(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				E(a, e);
			}
		}
	);
}
function P(e) {
	let a, r;
	return (
		(a = new y({ props: { variante: 3, text: 'Libro' } })),
		{
			c() {
				s(a.$$.fragment);
			},
			l(e) {
				l(a.$$.fragment, e);
			},
			m(e, s) {
				g(a, e, s), (r = !0);
			},
			p: b,
			i(e) {
				r || (h(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				_(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				E(a, e);
			}
		}
	);
}
function C(e) {
	let a, r, o, c;
	return (
		(a = new V({
			props: {
				tipo: 2,
				variante: 0,
				href: 'https://slides.com/sergiofores/',
				alt: '',
				target: '_blank',
				$$slots: { default: [z] },
				$$scope: { ctx: e }
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
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				s(a.$$.fragment), (r = t()), s(o.$$.fragment);
			},
			l(e) {
				l(a.$$.fragment, e), (r = i(e)), l(o.$$.fragment, e);
			},
			m(e, s) {
				g(a, e, s), p(e, r, s), g(o, e, s), (c = !0);
			},
			p(e, r) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: e }), a.$set(s);
				const t = {};
				1 & r && (t.$$scope = { dirty: r, ctx: e }), o.$set(t);
			},
			i(e) {
				c || (h(a.$$.fragment, e), h(o.$$.fragment, e), (c = !0));
			},
			o(e) {
				_(a.$$.fragment, e), _(o.$$.fragment, e), (c = !1);
			},
			d(e) {
				E(a, e), e && $(r), E(o, e);
			}
		}
	);
}
function L(e) {
	let a, r;
	return (
		(a = new w({ props: { tabHeaders: q } })),
		{
			c() {
				s(a.$$.fragment);
			},
			l(e) {
				l(a.$$.fragment, e);
			},
			m(e, s) {
				g(a, e, s), (r = !0);
			},
			p: b,
			i(e) {
				r || (h(a.$$.fragment, e), (r = !0));
			},
			o(e) {
				_(a.$$.fragment, e), (r = !1);
			},
			d(e) {
				E(a, e);
			}
		}
	);
}
function T(e) {
	let a,
		r,
		b,
		x,
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
		ee,
		ae,
		re,
		se,
		te,
		oe,
		ce,
		ne,
		le,
		ie,
		me,
		fe,
		$e,
		de,
		ue,
		ge,
		pe,
		ve,
		he,
		_e,
		Ee,
		be,
		xe,
		ye,
		qe,
		je,
		Ie,
		we,
		De,
		He,
		Ve,
		ke,
		ze,
		Pe,
		Ce,
		Le,
		Te,
		Ae,
		Se,
		Fe,
		Ge,
		Ye,
		Be,
		Me,
		Ne,
		Oe,
		Qe,
		Re,
		Ue;
	return (
		(a = new I({
			props: { id: 'philosophy', variante: 1, $$slots: { default: [k] }, $$scope: { ctx: e } }
		})),
		(Q = new j({ props: { tipo: 2, variante: 7, title: 'Tetractys' } })),
		(ae = new H({
			props: { tipo: 3, variante: 2, $$slots: { default: [C] }, $$scope: { ctx: e } }
		})),
		(oe = new D({ props: { src: './img/logo.svg', alt: '' } })),
		(le = new j({
			props: { tipo: 2, variante: 7, title: 'Hay una verdad que puede ser conocida…' }
		})),
		(ve = new j({ props: { tipo: 1, variante: 1, title: 'Sentir Orden Forma Conexión' } })),
		(Ce = new D({ props: { src: './img/grafico-8.svg', alt: '' } })),
		(Oe = new j({
			props: { tipo: 1, variante: 3, title: 'Los 5 Principios Universales', subtitle: '' }
		})),
		(Re = new I({
			props: {
				id: 'principios',
				variante: 7,
				bg_color: 'bgc_0',
				$$slots: { default: [L] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				s(a.$$.fragment),
					(r = t()),
					(b = o('div')),
					(x = o('div')),
					(y = c('svg')),
					(q = c('path')),
					(w = c('circle')),
					(V = c('circle')),
					(z = c('circle')),
					(P = c('circle')),
					(T = c('circle')),
					(A = c('circle')),
					(S = c('circle')),
					(F = c('circle')),
					(G = c('circle')),
					(Y = c('circle')),
					(B = t()),
					(M = o('div')),
					(N = o('div')),
					(O = o('div')),
					s(Q.$$.fragment),
					(R = t()),
					(U = o('div')),
					(J = o('h3')),
					(K = n('Hacia el encuentro con todo lo que Es')),
					(W = t()),
					(X = o('h4')),
					(Z = n(
						'+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus\n\t\t\t\tprincipios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo'
					)),
					(ee = t()),
					s(ae.$$.fragment),
					(re = t()),
					(se = o('div')),
					(te = o('div')),
					s(oe.$$.fragment),
					(ce = t()),
					(ne = o('div')),
					s(le.$$.fragment),
					(ie = t()),
					(me = o('p')),
					(fe = n(
						'¿Percibes 2 ese orden 1 atravesándote 0 en la forma 4 del encuentro 3? Es lo inefable\n\t\t\tconociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas\n\t\t\tque yo he visto, a dónde me llevan las corrientes de todas las formas..'
					)),
					($e = t()),
					(de = o('p')),
					(ue = n(
						'A medida que uno va averiguando cosas se va dando cuenta de que las cosas que uno puede llegar\n\t\t\ta saber quieren ser conocidas. Están ocultas y a la vez no lo están. Hay un juego ahí entre lo\n\t\t\tvelado y lo revelado, como si lo uno no tuviera sentido sin lo otro.'
					)),
					(ge = t()),
					(pe = o('div')),
					s(ve.$$.fragment),
					(he = t()),
					(_e = o('p')),
					(Ee = n(
						'Percibes cualquier cosa como lo que és; un símbolo. Funciona como un Tetris; el objetivo no es amontonar piezas sino disolverlas, ¡que desaparezcan!'
					)),
					(be = t()),
					(xe = o('p')),
					(ye = n('Los 5 arjés. Estructura dinámica sobre la que se asienta toda la Creación.')),
					(qe = t()),
					(je = o('p')),
					(Ie = o('strong')),
					(we = n('Y cuanto más perceptible es su inexistencia más presente está.')),
					(De = t()),
					(He = o('div')),
					(Ve = o('img')),
					(ze = t()),
					(Pe = o('div')),
					s(Ce.$$.fragment),
					(Le = t()),
					(Te = o('div')),
					(Ae = o('p')),
					(Se = n(
						'En ocasiones ni siquiera necesitas no estar viendo algo para estar viendo algo. Si vamos a\n\t\t\tdescifrar la Creación vamos a tener que acostumbrarnos a las paradojas.'
					)),
					(Fe = t()),
					(Ge = o('p')),
					(Ye = n(
						'Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La\n\t\t\tHermenéutica nace como "el arte o la técnica de explicar, descifrar o interpretar". Así que\n\t\t\tpara explicar o descifrar algo, luego veremos el qué, primeramente yo tengo que hacer una\n\t\t\thermenéutica de ese "algo", averiguar algo que vendrá recogido en alguna otra parte.'
					)),
					(Be = t()),
					(Me = o('div')),
					(Ne = o('div')),
					s(Oe.$$.fragment),
					(Qe = t()),
					s(Re.$$.fragment),
					this.h();
			},
			l(e) {
				l(a.$$.fragment, e), (r = i(e)), (b = m(e, 'DIV', { class: !0 }));
				var s = f(b);
				x = m(s, 'DIV', { class: !0 });
				var t = f(x);
				y = m(t, 'svg', { 'fill-rule': !0, 'clip-rule': !0, viewBox: !0 }, 1);
				var o = f(y);
				(q = m(o, 'path', { fill: !0, stroke: !0, 'stroke-width': !0, d: !0 }, 1)),
					f(q).forEach($),
					(w = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(w).forEach($),
					(V = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(V).forEach($),
					(z = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(z).forEach($),
					(P = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(P).forEach($),
					(T = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(T).forEach($),
					(A = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(A).forEach($),
					(S = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(S).forEach($),
					(F = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(F).forEach($),
					(G = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(G).forEach($),
					(Y = m(o, 'circle', { cx: !0, cy: !0, r: !0, transform: !0 }, 1)),
					f(Y).forEach($),
					o.forEach($),
					t.forEach($),
					(B = i(s)),
					(M = m(s, 'DIV', { class: !0 }));
				var c = f(M);
				N = m(c, 'DIV', { class: !0 });
				var n = f(N);
				O = m(n, 'DIV', { class: !0 });
				var u = f(O);
				l(Q.$$.fragment, u), u.forEach($), (R = i(n)), (U = m(n, 'DIV', { class: !0 }));
				var g = f(U);
				J = m(g, 'H3', {});
				var p = f(J);
				(K = d(p, 'Hacia el encuentro con todo lo que Es')),
					p.forEach($),
					(W = i(g)),
					(X = m(g, 'H4', {}));
				var v = f(X);
				(Z = d(
					v,
					'+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus\n\t\t\t\tprincipios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo'
				)),
					v.forEach($),
					g.forEach($),
					(ee = i(n)),
					l(ae.$$.fragment, n),
					n.forEach($),
					c.forEach($),
					s.forEach($),
					(re = i(e)),
					(se = m(e, 'DIV', { class: !0 }));
				var h = f(se);
				te = m(h, 'DIV', { class: !0 });
				var _ = f(te);
				l(oe.$$.fragment, _), _.forEach($), (ce = i(h)), (ne = m(h, 'DIV', { class: !0 }));
				var E = f(ne);
				l(le.$$.fragment, E), (ie = i(E)), (me = m(E, 'P', {}));
				var j = f(me);
				(fe = d(
					j,
					'¿Percibes 2 ese orden 1 atravesándote 0 en la forma 4 del encuentro 3? Es lo inefable\n\t\t\tconociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas\n\t\t\tque yo he visto, a dónde me llevan las corrientes de todas las formas..'
				)),
					j.forEach($),
					($e = i(E)),
					(de = m(E, 'P', {}));
				var I = f(de);
				(ue = d(
					I,
					'A medida que uno va averiguando cosas se va dando cuenta de que las cosas que uno puede llegar\n\t\t\ta saber quieren ser conocidas. Están ocultas y a la vez no lo están. Hay un juego ahí entre lo\n\t\t\tvelado y lo revelado, como si lo uno no tuviera sentido sin lo otro.'
				)),
					I.forEach($),
					E.forEach($),
					(ge = i(h)),
					(pe = m(h, 'DIV', { class: !0 }));
				var D = f(pe);
				l(ve.$$.fragment, D), (he = i(D)), (_e = m(D, 'P', {}));
				var H = f(_e);
				(Ee = d(
					H,
					'Percibes cualquier cosa como lo que és; un símbolo. Funciona como un Tetris; el objetivo no es amontonar piezas sino disolverlas, ¡que desaparezcan!'
				)),
					H.forEach($),
					(be = i(D)),
					(xe = m(D, 'P', {}));
				var k = f(xe);
				(ye = d(k, 'Los 5 arjés. Estructura dinámica sobre la que se asienta toda la Creación.')),
					k.forEach($),
					(qe = i(D)),
					(je = m(D, 'P', {}));
				var C = f(je);
				Ie = m(C, 'STRONG', {});
				var L = f(Ie);
				(we = d(L, 'Y cuanto más perceptible es su inexistencia más presente está.')),
					L.forEach($),
					C.forEach($),
					D.forEach($),
					(De = i(h)),
					(He = m(h, 'DIV', { class: !0 }));
				var ke = f(He);
				(Ve = m(ke, 'IMG', { src: !0, alt: !0 })),
					ke.forEach($),
					(ze = i(h)),
					(Pe = m(h, 'DIV', { class: !0 }));
				var Ue = f(Pe);
				l(Ce.$$.fragment, Ue), Ue.forEach($), (Le = i(h)), (Te = m(h, 'DIV', { class: !0 }));
				var Je = f(Te);
				Ae = m(Je, 'P', {});
				var Ke = f(Ae);
				(Se = d(
					Ke,
					'En ocasiones ni siquiera necesitas no estar viendo algo para estar viendo algo. Si vamos a\n\t\t\tdescifrar la Creación vamos a tener que acostumbrarnos a las paradojas.'
				)),
					Ke.forEach($),
					(Fe = i(Je)),
					(Ge = m(Je, 'P', {}));
				var We = f(Ge);
				(Ye = d(
					We,
					'Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La\n\t\t\tHermenéutica nace como "el arte o la técnica de explicar, descifrar o interpretar". Así que\n\t\t\tpara explicar o descifrar algo, luego veremos el qué, primeramente yo tengo que hacer una\n\t\t\thermenéutica de ese "algo", averiguar algo que vendrá recogido en alguna otra parte.'
				)),
					We.forEach($),
					Je.forEach($),
					h.forEach($),
					(Be = i(e)),
					(Me = m(e, 'DIV', { class: !0 }));
				var Xe = f(Me);
				Ne = m(Xe, 'DIV', { class: !0 });
				var Ze = f(Ne);
				l(Oe.$$.fragment, Ze),
					Ze.forEach($),
					Xe.forEach($),
					(Qe = i(e)),
					l(Re.$$.fragment, e),
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
					u(x, 'class', 'col_13 col_s2_5'),
					u(O, 'class', 'col_13'),
					u(U, 'class', 'col_13'),
					u(N, 'class', 'dg'),
					u(M, 'class', 'col_13 col_s2_8'),
					u(b, 'class', 'dg rg_1 cg_s2_1 p_3 bgc_primary c_4'),
					u(te, 'class', 'col_13 col_s2_8'),
					u(ne, 'class', 'col_13 col_s2_5 dg_0 gap_1'),
					u(pe, 'class', 'col_13 col_s2_5 dg_0 rg_1'),
					Ve.src !== (ke = './img/01234_bn.svg') && u(Ve, 'src', './img/01234_bn.svg'),
					u(Ve, 'alt', ''),
					u(He, 'class', 'col_13 col_s2_8'),
					u(Pe, 'class', 'col_13'),
					u(Te, 'class', 'col_13'),
					u(se, 'class', 'dg p_3 bgc_0 c_4 rg_1 cg_s2_1'),
					u(Ne, 'class', 'col_13 tac p_3'),
					u(Me, 'class', 'dg');
			},
			m(e, s) {
				g(a, e, s),
					p(e, r, s),
					p(e, b, s),
					v(b, x),
					v(x, y),
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
					v(b, B),
					v(b, M),
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
					v(N, ee),
					g(ae, N, null),
					p(e, re, s),
					p(e, se, s),
					v(se, te),
					g(oe, te, null),
					v(se, ce),
					v(se, ne),
					g(le, ne, null),
					v(ne, ie),
					v(ne, me),
					v(me, fe),
					v(ne, $e),
					v(ne, de),
					v(de, ue),
					v(se, ge),
					v(se, pe),
					g(ve, pe, null),
					v(pe, he),
					v(pe, _e),
					v(_e, Ee),
					v(pe, be),
					v(pe, xe),
					v(xe, ye),
					v(pe, qe),
					v(pe, je),
					v(je, Ie),
					v(Ie, we),
					v(se, De),
					v(se, He),
					v(He, Ve),
					v(se, ze),
					v(se, Pe),
					g(Ce, Pe, null),
					v(se, Le),
					v(se, Te),
					v(Te, Ae),
					v(Ae, Se),
					v(Te, Fe),
					v(Te, Ge),
					v(Ge, Ye),
					p(e, Be, s),
					p(e, Me, s),
					v(Me, Ne),
					g(Oe, Ne, null),
					p(e, Qe, s),
					g(Re, e, s),
					(Ue = !0);
			},
			p(e, [r]) {
				const s = {};
				1 & r && (s.$$scope = { dirty: r, ctx: e }), a.$set(s);
				const t = {};
				1 & r && (t.$$scope = { dirty: r, ctx: e }), ae.$set(t);
				const o = {};
				1 & r && (o.$$scope = { dirty: r, ctx: e }), Re.$set(o);
			},
			i(e) {
				Ue ||
					(h(a.$$.fragment, e),
					h(Q.$$.fragment, e),
					h(ae.$$.fragment, e),
					h(oe.$$.fragment, e),
					h(le.$$.fragment, e),
					h(ve.$$.fragment, e),
					h(Ce.$$.fragment, e),
					h(Oe.$$.fragment, e),
					h(Re.$$.fragment, e),
					(Ue = !0));
			},
			o(e) {
				_(a.$$.fragment, e),
					_(Q.$$.fragment, e),
					_(ae.$$.fragment, e),
					_(oe.$$.fragment, e),
					_(le.$$.fragment, e),
					_(ve.$$.fragment, e),
					_(Ce.$$.fragment, e),
					_(Oe.$$.fragment, e),
					_(Re.$$.fragment, e),
					(Ue = !1);
			},
			d(e) {
				E(a, e),
					e && $(r),
					e && $(b),
					E(Q),
					E(ae),
					e && $(re),
					e && $(se),
					E(oe),
					E(le),
					E(ve),
					E(Ce),
					e && $(Be),
					e && $(Me),
					E(Oe),
					e && $(Qe),
					E(Re, e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), a(this, e, null, T, r, {});
	}
}
