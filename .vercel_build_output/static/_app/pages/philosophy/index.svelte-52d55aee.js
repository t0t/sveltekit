import{S as e,i as t,s as i,M as s,e as a,c as r,a as o,d as n,o as l,I as c,f as u,O as m,w as d,x as p,t as f,b as h,g as $,H as g,X as b,h as v,k as x,p as q,q as y,r as E,y as L,C as V,D as C,j,l as z,J as w,n as S,E as T}from"../../chunks/index-d91e1ed8.js";import{G as A,C as I,c as P}from"../../chunks/Cover-a94e894d.js";import{S as H}from"../../chunks/Section-db7b341b.js";function M(e){let t,i,f;const h=e[4].default,$=s(h,e,e[3],null);return{c(){t=a("section"),$&&$.c(),this.h()},l(e){t=r(e,"SECTION",{id:!0,class:!0});var i=o(t);$&&$.l(i),i.forEach(n),this.h()},h(){l(t,"id",e[1]),l(t,"class",i=c(e[2][e[0]])+" svelte-eqyc2h")},m(e,i){u(e,t,i),$&&$.m(t,null),f=!0},p(e,[s]){$&&$.p&&8&s&&m($,h,e,e[3],s,null,null),(!f||2&s)&&l(t,"id",e[1]),(!f||1&s&&i!==(i=c(e[2][e[0]])+" svelte-eqyc2h"))&&l(t,"class",i)},i(e){f||(d($,e),f=!0)},o(e){p($,e),f=!1},d(e){e&&n(t),$&&$.d(e)}}}function _(e,t,i){let{$$slots:s={},$$scope:a}=t,{variante:r=0}=t,{id:o=""}=t;return e.$$set=e=>{"variante"in e&&i(0,r=e.variante),"id"in e&&i(1,o=e.id),"$$scope"in e&&i(3,a=e.$$scope)},[r,o,["Section_0","Section_1","Section_2","Section_3","Section_4","Section_5","Section_6"],a,s]}class k extends e{constructor(e){super(),t(this,e,_,M,i,{variante:0,id:1})}}function G(e,t,i){const s=e.slice();return s[3]=t[i],s}function N(e,t,i){const s=e.slice();return s[3]=t[i],s}function R(e){let t,i,s,m,d,p=e[3].title+"";return{c(){t=a("button"),i=f(p),this.h()},l(e){t=r(e,"BUTTON",{class:!0});var s=o(t);i=h(s,p),s.forEach(n),this.h()},h(){l(t,"class",s=c(e[0]===e[3].id?"active":"")+" svelte-t1reyv")},m(s,a){u(s,t,a),$(t,i),m||(d=g(t,"click",(function(){b(e[2](e[3].id))&&e[2](e[3].id).apply(this,arguments)})),m=!0)},p(a,r){e=a,2&r&&p!==(p=e[3].title+"")&&v(i,p),3&r&&s!==(s=c(e[0]===e[3].id?"active":"")+" svelte-t1reyv")&&l(t,"class",s)},d(e){e&&n(t),m=!1,d()}}}function D(e){let t,i;return t=new k({props:{variante:6,$$slots:{default:[F]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p(e,i){const s={};258&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function U(e){let t,i=e[3].content+"";return{c(){t=a("p"),this.h()},l(e){t=r(e,"P",{class:!0}),o(t).forEach(n),this.h()},h(){l(t,"class","svelte-t1reyv")},m(e,s){u(e,t,s),t.innerHTML=i},p(e,s){2&s&&i!==(i=e[3].content+"")&&(t.innerHTML=i)},d(e){e&&n(t)}}}function O(e){let t,i,s,c,m,d,p,g=e[3].subtitle+"";return{c(){t=a("figure"),i=a("img"),m=j(),d=a("figcaption"),p=f(g),this.h()},l(e){t=r(e,"FIGURE",{slot:!0,class:!0});var s=o(t);i=r(s,"IMG",{src:!0,alt:!0,class:!0}),m=z(s),d=r(s,"FIGCAPTION",{class:!0});var a=o(d);p=h(a,g),a.forEach(n),s.forEach(n),this.h()},h(){i.src!==(s=e[3].img)&&l(i,"src",s),l(i,"alt",c=e[3].subtitle),l(i,"class","svelte-t1reyv"),l(d,"class","svelte-t1reyv"),l(t,"slot","subarea1"),l(t,"class","svelte-t1reyv")},m(e,s){u(e,t,s),$(t,i),$(t,m),$(t,d),$(d,p)},p(e,t){2&t&&i.src!==(s=e[3].img)&&l(i,"src",s),2&t&&c!==(c=e[3].subtitle)&&l(i,"alt",c),2&t&&g!==(g=e[3].subtitle+"")&&v(p,g)},d(e){e&&n(t)}}}function B(e){let t,i,s=e[3].tags+"";return{c(){t=a("small"),i=f(s),this.h()},l(e){t=r(e,"SMALL",{slot:!0,class:!0});var a=o(t);i=h(a,s),a.forEach(n),this.h()},h(){l(t,"slot","subarea2"),l(t,"class","svelte-t1reyv")},m(e,s){u(e,t,s),$(t,i)},p(e,t){2&t&&s!==(s=e[3].tags+"")&&v(i,s)},d(e){e&&n(t)}}}function F(e){let t,i,s;return t=new A({props:{variante:3,$$slots:{subarea2:[B],subarea1:[O],default:[U]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment),i=j()},l(e){y(t.$$.fragment,e),i=z(e)},m(e,a){E(t,e,a),u(e,i,a),s=!0},p(e,i){const s={};258&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){p(t.$$.fragment,e),s=!1},d(e){L(t,e),e&&n(i)}}}function J(e){let t,i,s=e[0]==e[3].id&&D(e);return{c(){s&&s.c(),t=x()},l(e){s&&s.l(e),t=x()},m(e,a){s&&s.m(e,a),u(e,t,a),i=!0},p(e,i){e[0]==e[3].id?s?(s.p(e,i),3&i&&d(s,1)):(s=D(e),s.c(),d(s,1),s.m(t.parentNode,t)):s&&(V(),p(s,1,1,(()=>{s=null})),C())},i(e){i||(d(s),i=!0)},o(e){p(s),i=!1},d(e){s&&s.d(e),e&&n(t)}}}function Q(e){let t,i,s,c,m=e[1],f=[];for(let a=0;a<m.length;a+=1)f[a]=R(N(e,m,a));let h=e[1],$=[];for(let a=0;a<h.length;a+=1)$[a]=J(G(e,h,a));const g=e=>p($[e],1,1,(()=>{$[e]=null}));return{c(){t=a("nav");for(let e=0;e<f.length;e+=1)f[e].c();i=j();for(let e=0;e<$.length;e+=1)$[e].c();s=x(),this.h()},l(e){t=r(e,"NAV",{class:!0});var a=o(t);for(let t=0;t<f.length;t+=1)f[t].l(a);a.forEach(n),i=z(e);for(let t=0;t<$.length;t+=1)$[t].l(e);s=x(),this.h()},h(){l(t,"class","svelte-t1reyv")},m(e,a){u(e,t,a);for(let i=0;i<f.length;i+=1)f[i].m(t,null);u(e,i,a);for(let t=0;t<$.length;t+=1)$[t].m(e,a);u(e,s,a),c=!0},p(e,[i]){if(7&i){let s;for(m=e[1],s=0;s<m.length;s+=1){const a=N(e,m,s);f[s]?f[s].p(a,i):(f[s]=R(a),f[s].c(),f[s].m(t,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=m.length}if(3&i){let t;for(h=e[1],t=0;t<h.length;t+=1){const a=G(e,h,t);$[t]?($[t].p(a,i),d($[t],1)):($[t]=J(a),$[t].c(),d($[t],1),$[t].m(s.parentNode,s))}for(V(),t=h.length;t<$.length;t+=1)g(t);C()}},i(e){if(!c){for(let e=0;e<h.length;e+=1)d($[e]);c=!0}},o(e){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)p($[t]);c=!1},d(e){e&&n(t),w(f,e),e&&n(i),w($,e),e&&n(s)}}}function K(e,t,i){let{tabsContent:s=[]}=t,{activeTabValue:a=1}=t;return e.$$set=e=>{"tabsContent"in e&&i(1,s=e.tabsContent),"activeTabValue"in e&&i(0,a=e.activeTabValue)},[a,s,e=>()=>i(0,a=e)]}class X extends e{constructor(e){super(),t(this,e,K,Q,i,{tabsContent:1,activeTabValue:0})}}const W=[{id:0,title:"0. Cifra",subtitle:"La Cifra",img:"./img/ceroo.svg",tags:"tag1, tag2, tag3...",content:"Cifra viene del árabe hispánico ṣífr que significa 'cero' (eventualmente cualquier dígito) y también viene de safara, o del sánscrito hindú sunya que significan 'estar vacío'. En la mística judía la sefirá tiene que ver con vasija, contenedor o recipiente. Es el infinito incognoscible que se encapsula y se preña a sí mismo para dejar espacio en su interior a la finitud. <br>Cero es lo sagrado oculto en lo profano. Todo se 'auto cifra' como Nada. La infinitud está en lo finito pero sólo puede caber desde su ocultamiento o auto retirada. La cifra (0) y el arjé (1) son la esencia mínima y máxima de la existencia juntas. Comprender este concepto es comprender la disolución que permite que exista toda coagulación. Cifra (0) es la posibilidad de que el ser de algo (1) ocurra (4)."},{id:1,title:"1. Arjé",subtitle:"El Arjé",img:"./img/uno.svg",tags:"tag1, tag2, tag3...",content:"Arjé proviene de la Antigua Grecia y significa principio, razón primordial, originaria, el comienzo del universo o el primer elemento de todas las cosas. Es la matriz o el molde inicial. El arjé es el 'plano' o 'blueprint' de la Creación que subyace o 'está antes' de lo creado. Término 'mimetizado' (2) como Adam Kadmón según la mística judía. Todo lo que sucederá en el futuro ya tiene su raíz en el acto inicial de la creación. <br> Del arjé deriva todo, es el ser nuclear de las cosas, su centro. El Arjé es el deseo, la voluntad, irradiación, consciencia, luz, foco, un punto sin dimensión, es la coordenada en el espacio, el logos, prototipo, arquetipo... La Unidad primera emanada de la nada que se mantiene inalterable. La semilla, la gota seminal que contiene ya todo aquello que Es."},{id:2,title:"2. Mímesis",subtitle:"La Mímesis",img:"./img/dos.svg",tags:"tag1, tag2, tag3...",content:"En Cabalá, Reshimó refiere al aroma de algo original que queda y se mantiene en el tiempo y el espacio. Un recuerdo, referencia, memoria, eco esencial de algo anterior. Un registro de información previo a lo revelado que se percibe como 'otra vez ello'. <br> La mimesis según Aristóteles no es copia o reproducción de algo, sino transposición de la cosa misma nuevamente. Es la separación ilusoria entre lo mismo en las cosas. Por la naturaleza líquida del Conocimiento éste no se puede poseer, sólo puede ser 'emulado' desde su experiencia. El pensador cree 'inventar' y poseer un concepto dentro de un nombre o un término, pero es ilusorio porque el 'pensador' tan solo recibe esos pensamientos, no los crea. Por tanto, aunque usemos distintos términos para poder contextualizar temas, son ficticios y su aglomeración gratuita solo crea más ruído y confusión."},{id:3,title:"3. Símbolo",subtitle:"El Símbolo",img:"./img/tres.svg",tags:"tag1, tag2, tag3...",content:"Se lo define como la representación perceptible de una idea. Símbolo viene de symballein, symbolon que en el relato griego es la tessera hospitalis o 'tablilla del recuerdo' que correspondía al objeto que, habiendo sido dividido, podía ser reunido, congregado, reencontrado. El símbolo es la relación de lo aparentemente diferente; no es simplemente objetivo ni puramente subjetivo, sino que es constitutivamente La relación. El símbolo es símbolo cuando simboliza, cuando se le reconoce en cuanto tal. Un símbolo que no hable directamente a quien lo percibe deja de ser símbolo. Es lo que amalgama, la mediación. Meditar es percibir lo simbólico. Lo real es símbolo. Todo se vela y revela como símbolo, no sólo a través de él sino en él. Si algo trasciende está siendo simbólico, ya que es el lenguaje de la Creación. "},{id:4,title:"4. Ritmo",subtitle:"El Ritmo",img:"./img/cuatro.svg",tags:"tag1, tag2, tag3...",content:"Ritmo proviene del griego Rithmos y del sánscrito Rta significando Periodicidad en la sucesión de una serie de cosas. <br> La Creación surge de un deseo por conocerse (01) y se manifiesta y cristaliza en el acto de olvidarse (10). El 0 se ritma colocándose tras el 1, de modo que lo coagula a través de un proceso. Es el movimiento el que estructura al sistema. 10 es el movimiento de 1+2+3+4. El ritmo es la metaestructura dinámica que sostiene el despliegue de lo que Es, la pauta que lo cierra, la manera en que la finitud puede perpetuarse y sostenerse. La materia es luz que se agota al transcurrir. Luz que se termina y empieza cíclicamente el mundo, el cuerpo, la vida. El sostén físico de la metafísico. Completud, cúlmen, demostración y prueba de todo."}];function Y(e){let t,i;return t=new X({props:{tabsContent:W}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p:S,i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}class Z extends e{constructor(e){super(),t(this,e,null,Y,i,{})}}function ee(e){let t,i;return t=new I({props:{variante:2,title:P[3].title,subtitle:P[3].subtitle,text:P[3].text,img:P[3].img}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p:S,i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function te(e){let t,i,s,a,c,m,d,p,f,h,g,b;return{c(){t=T("svg"),i=T("path"),s=T("circle"),a=T("circle"),c=T("circle"),m=T("circle"),d=T("circle"),p=T("circle"),f=T("circle"),h=T("circle"),g=T("circle"),b=T("circle"),this.h()},l(e){t=r(e,"svg",{"fill-rule":!0,"clip-rule":!0,viewBox:!0},1);var l=o(t);i=r(l,"path",{fill:!0,stroke:!0,"stroke-width":!0,d:!0},1),o(i).forEach(n),s=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(s).forEach(n),a=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(a).forEach(n),c=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(c).forEach(n),m=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(m).forEach(n),d=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(d).forEach(n),p=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(p).forEach(n),f=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(f).forEach(n),h=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(h).forEach(n),g=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(g).forEach(n),b=r(l,"circle",{cx:!0,cy:!0,r:!0,transform:!0},1),o(b).forEach(n),l.forEach(n),this.h()},h(){l(i,"fill","none"),l(i,"stroke","#000"),l(i,"stroke-width",".7"),l(i,"d","M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30 53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z"),l(s,"cx","168.3"),l(s,"cy","18.1"),l(s,"r","6"),l(s,"transform","translate(-17 -8) scale(.67024)"),l(a,"cx","214.1"),l(a,"cy","98.5"),l(a,"r","6"),l(a,"transform","translate(-17 -8) scale(.67024)"),l(c,"cx","259.9"),l(c,"cy","178.2"),l(c,"r","6"),l(c,"transform","translate(-17 -8) scale(.67024)"),l(m,"cx","305.7"),l(m,"cy","257.8"),l(m,"r","6"),l(m,"transform","translate(-17 -8) scale(.67024)"),l(d,"cx","214.1"),l(d,"cy","257.8"),l(d,"r","6"),l(d,"transform","translate(-17 -8) scale(.67024)"),l(p,"cx","123.2"),l(p,"cy","257.8"),l(p,"r","6"),l(p,"transform","translate(-17 -8) scale(.67024)"),l(f,"cx","30.8"),l(f,"cy","257.8"),l(f,"r","6"),l(f,"transform","translate(-17 -8) scale(.67024)"),l(h,"cx","76.9"),l(h,"cy","178.2"),l(h,"r","6"),l(h,"transform","translate(-17 -8) scale(.67024)"),l(g,"cx","168.3"),l(g,"cy","178.2"),l(g,"r","6"),l(g,"transform","translate(-17 -8) scale(.67024)"),l(b,"cx","123.2"),l(b,"cy","98.5"),l(b,"r","6"),l(b,"transform","translate(-17 -8) scale(.67024)"),l(t,"fill-rule","evenodd"),l(t,"clip-rule","evenodd"),l(t,"viewBox","0 0 193 169")},m(e,r){u(e,t,r),$(t,i),$(t,s),$(t,a),$(t,c),$(t,m),$(t,d),$(t,p),$(t,f),$(t,h),$(t,g),$(t,b)},d(e){e&&n(t)}}}function ie(e){let t,i,s,c,m,d,p,g,b;return{c(){t=a("hgroup"),i=a("h2"),s=f("+0+1234"),c=j(),m=a("h3"),d=f("Hacia el encuentro con todo lo que Es"),p=j(),g=a("h4"),b=f("+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo."),this.h()},l(e){t=r(e,"HGROUP",{slot:!0});var a=o(t);i=r(a,"H2",{});var l=o(i);s=h(l,"+0+1234"),l.forEach(n),c=z(a),m=r(a,"H3",{});var u=o(m);d=h(u,"Hacia el encuentro con todo lo que Es"),u.forEach(n),p=z(a),g=r(a,"H4",{});var f=o(g);b=h(f,"+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo."),f.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea1")},m(e,a){u(e,t,a),$(t,i),$(i,s),$(t,c),$(t,m),$(m,d),$(t,p),$(t,g),$(g,b)},d(e){e&&n(t)}}}function se(e){let t,i,s,c,m,d;return{c(){t=a("nav"),i=a("a"),s=f("Slides"),c=j(),m=a("a"),d=f("Libro"),this.h()},l(e){t=r(e,"NAV",{slot:!0});var a=o(t);i=r(a,"A",{href:!0,target:!0});var l=o(i);s=h(l,"Slides"),l.forEach(n),c=z(a),m=r(a,"A",{href:!0,target:!0});var u=o(m);d=h(u,"Libro"),u.forEach(n),a.forEach(n),this.h()},h(){l(i,"href","https://slides.com/sergiofores/"),l(i,"target","_blank"),l(m,"href","https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing"),l(m,"target","_blank"),l(t,"slot","subarea2")},m(e,a){u(e,t,a),$(t,i),$(i,s),$(t,c),$(t,m),$(m,d)},d(e){e&&n(t)}}}function ae(e){let t,i;return t=new A({props:{variante:1,$$slots:{subarea2:[se],subarea1:[ie],default:[te]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p(e,i){const s={};1&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function re(e){let t,i;return{c(){t=a("img"),this.h()},l(e){t=r(e,"IMG",{src:!0,alt:!0}),this.h()},h(){t.src!==(i="./img/logo.svg")&&l(t,"src","./img/logo.svg"),l(t,"alt","")},m(e,i){u(e,t,i)},d(e){e&&n(t)}}}function oe(e){let t,i,s;return{c(){t=a("div"),i=a("p"),s=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),this.h()},l(e){t=r(e,"DIV",{slot:!0});var a=o(t);i=r(a,"P",{});var l=o(i);s=h(l,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),l.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea1")},m(e,a){u(e,t,a),$(t,i),$(i,s)},d(e){e&&n(t)}}}function ne(e){let t,i,s;return{c(){t=a("div"),i=a("p"),s=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),this.h()},l(e){t=r(e,"DIV",{slot:!0});var a=o(t);i=r(a,"P",{});var l=o(i);s=h(l,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),l.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea2")},m(e,a){u(e,t,a),$(t,i),$(i,s)},d(e){e&&n(t)}}}function le(e){let t,i;return t=new A({props:{variante:0,$$slots:{subarea2:[ne],subarea1:[oe],default:[re]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p(e,i){const s={};1&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function ce(e){let t,i;return{c(){t=a("img"),this.h()},l(e){t=r(e,"IMG",{src:!0,alt:!0}),this.h()},h(){t.src!==(i="./img/01234_bn.svg")&&l(t,"src","./img/01234_bn.svg"),l(t,"alt","")},m(e,i){u(e,t,i)},d(e){e&&n(t)}}}function ue(e){let t,i,s;return{c(){t=a("div"),i=a("p"),s=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),this.h()},l(e){t=r(e,"DIV",{slot:!0});var a=o(t);i=r(a,"P",{});var l=o(i);s=h(l,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),l.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea1")},m(e,a){u(e,t,a),$(t,i),$(i,s)},d(e){e&&n(t)}}}function me(e){let t,i,s,c,m,d;return{c(){t=a("div"),i=a("p"),s=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),c=j(),m=a("p"),d=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),this.h()},l(e){t=r(e,"DIV",{slot:!0});var a=o(t);i=r(a,"P",{});var l=o(i);s=h(l,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),l.forEach(n),c=z(a),m=r(a,"P",{});var u=o(m);d=h(u,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),u.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea2")},m(e,a){u(e,t,a),$(t,i),$(i,s),$(t,c),$(t,m),$(m,d)},d(e){e&&n(t)}}}function de(e){let t,i;return t=new A({props:{variante:2,$$slots:{subarea2:[me],subarea1:[ue],default:[ce]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p(e,i){const s={};1&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function pe(e){let t,i;return{c(){t=a("img"),this.h()},l(e){t=r(e,"IMG",{src:!0,alt:!0}),this.h()},h(){t.src!==(i="./img/grafico-8.svg")&&l(t,"src","./img/grafico-8.svg"),l(t,"alt","")},m(e,i){u(e,t,i)},d(e){e&&n(t)}}}function fe(e){let t,i,s,c;return{c(){t=a("div"),i=a("p"),s=a("strong"),c=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),this.h()},l(e){t=r(e,"DIV",{slot:!0});var a=o(t);i=r(a,"P",{});var l=o(i);s=r(l,"STRONG",{});var u=o(s);c=h(u,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),u.forEach(n),l.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea1")},m(e,a){u(e,t,a),$(t,i),$(i,s),$(s,c)},d(e){e&&n(t)}}}function he(e){let t,i,s,c,m,d;return{c(){t=a("div"),i=a("p"),s=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),c=j(),m=a("p"),d=f("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),this.h()},l(e){t=r(e,"DIV",{slot:!0});var a=o(t);i=r(a,"P",{});var l=o(i);s=h(l,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),l.forEach(n),c=z(a),m=r(a,"P",{});var u=o(m);d=h(u,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex."),u.forEach(n),a.forEach(n),this.h()},h(){l(t,"slot","subarea2")},m(e,a){u(e,t,a),$(t,i),$(i,s),$(t,c),$(t,m),$(m,d)},d(e){e&&n(t)}}}function $e(e){let t,i;return t=new A({props:{variante:2,$$slots:{subarea2:[he],subarea1:[fe],default:[pe]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},p(e,i){const s={};1&i&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function ge(e){let t,i;return t=new Z({}),{c(){q(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){E(t,e,s),i=!0},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){p(t.$$.fragment,e),i=!1},d(e){L(t,e)}}}function be(e){let t,i,s,a,r,o,l,c,m,f,h,$;return t=new H({props:{id:"philosophy",variante:3,$$slots:{default:[ee]},$$scope:{ctx:e}}}),s=new H({props:{variante:0,$$slots:{default:[ae]},$$scope:{ctx:e}}}),r=new H({props:{variante:0,$$slots:{default:[le]},$$scope:{ctx:e}}}),l=new H({props:{variante:0,$$slots:{default:[de]},$$scope:{ctx:e}}}),m=new H({props:{variante:4,$$slots:{default:[$e]},$$scope:{ctx:e}}}),h=new H({props:{id:"tabheaders",variante:5,$$slots:{default:[ge]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment),i=j(),q(s.$$.fragment),a=j(),q(r.$$.fragment),o=j(),q(l.$$.fragment),c=j(),q(m.$$.fragment),f=j(),q(h.$$.fragment)},l(e){y(t.$$.fragment,e),i=z(e),y(s.$$.fragment,e),a=z(e),y(r.$$.fragment,e),o=z(e),y(l.$$.fragment,e),c=z(e),y(m.$$.fragment,e),f=z(e),y(h.$$.fragment,e)},m(e,n){E(t,e,n),u(e,i,n),E(s,e,n),u(e,a,n),E(r,e,n),u(e,o,n),E(l,e,n),u(e,c,n),E(m,e,n),u(e,f,n),E(h,e,n),$=!0},p(e,[i]){const a={};1&i&&(a.$$scope={dirty:i,ctx:e}),t.$set(a);const o={};1&i&&(o.$$scope={dirty:i,ctx:e}),s.$set(o);const n={};1&i&&(n.$$scope={dirty:i,ctx:e}),r.$set(n);const c={};1&i&&(c.$$scope={dirty:i,ctx:e}),l.$set(c);const u={};1&i&&(u.$$scope={dirty:i,ctx:e}),m.$set(u);const d={};1&i&&(d.$$scope={dirty:i,ctx:e}),h.$set(d)},i(e){$||(d(t.$$.fragment,e),d(s.$$.fragment,e),d(r.$$.fragment,e),d(l.$$.fragment,e),d(m.$$.fragment,e),d(h.$$.fragment,e),$=!0)},o(e){p(t.$$.fragment,e),p(s.$$.fragment,e),p(r.$$.fragment,e),p(l.$$.fragment,e),p(m.$$.fragment,e),p(h.$$.fragment,e),$=!1},d(e){L(t,e),e&&n(i),L(s,e),e&&n(a),L(r,e),e&&n(o),L(l,e),e&&n(c),L(m,e),e&&n(f),L(h,e)}}}export default class extends e{constructor(e){super(),t(this,e,null,be,i,{})}}
