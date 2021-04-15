import{S as t,i as e,s as a,e as s,p as n,c as r,a as o,q as c,d as l,o as i,P as u,f as h,r as f,w as $,Q as m,R as g,x as p,y as d,t as v,j as b,b as _,l as y,g as x,h as k,G as w,H as q,n as I,F as E,K as j,T as P,U as D,C as N,D as V,V as B,J as S,k as A}from"../chunks/index-d91e1ed8.js";import{c as O,B as L}from"../chunks/Grid.svelte-916f7747.js";import{s as R}from"../chunks/pages-cee8d843.js";import{H}from"../chunks/Header-cd15ff25.js";import{L as W,a as C}from"../chunks/ListItem-cf78d2b1.js";import{B as F}from"../chunks/Blockquote-779c1cb4.js";import{f as G}from"../chunks/index-65311448.js";import{I as Q}from"../chunks/Img-fdbb3f27.js";/* empty css                                  */import"../chunks/index-78b22dae.js";const T=[{quote:"Aquel que sabe contar hasta cuatro puede conocer el universo entero",author:"Pitágoras",image:"/img/bg1.jpg"},{quote:"Lo que la realidad es, es su símbolo; el es, es el símbolo de lo real",author:"Raimon Panikkar",image:"/img/bg2.jpg"},{quote:"El mundo es un conglomerado de maneras diferentes de que ocurra siempre lo mismo.",author:"+0+1234",image:"/img/bg3.jpg"},{quote:"Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.",author:"Denis Wholey",image:"/img/img3.jpg"},{quote:"Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.",author:"Helen Rowland",image:"/img/cover4.jpg"}];function U(t){let e,a,n,c;return{c(){e=s("q"),a=v(t[0]),n=b(),c=s("br"),this.h()},l(s){e=r(s,"Q",{class:!0});var i=o(e);a=_(i,t[0]),i.forEach(l),n=y(s),c=r(s,"BR",{class:!0}),this.h()},h(){i(e,"class","svelte-etc2be"),i(c,"class","svelte-etc2be")},m(t,s){h(t,e,s),x(e,a),h(t,n,s),h(t,c,s)},p(t,e){1&e&&k(a,t[0])},d(t){t&&l(e),t&&l(n),t&&l(c)}}}function J(t){let e,a,n;return{c(){e=s("span"),a=v("— "),n=v(t[1]),this.h()},l(s){e=r(s,"SPAN",{slot:!0,class:!0});var c=o(e);a=_(c,"— "),n=_(c,t[1]),c.forEach(l),this.h()},h(){i(e,"slot","author"),i(e,"class","svelte-etc2be")},m(t,s){h(t,e,s),x(e,a),x(e,n)},p(t,e){2&e&&k(n,t[1])},d(t){t&&l(e)}}}function K(t){let e,a,v,b;return a=new F({props:{$$slots:{author:[J],default:[U]},$$scope:{ctx:t}}}),{c(){e=s("div"),n(a.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0});var s=o(e);c(a.$$.fragment,s),s.forEach(l),this.h()},h(){i(e,"class","mySlides svelte-etc2be"),u(e,"background-image","url("+t[2]+")")},m(t,s){h(t,e,s),f(a,e,null),b=!0},p(t,[s]){const n={};11&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n),(!b||4&s)&&u(e,"background-image","url("+t[2]+")")},i(t){b||($(a.$$.fragment,t),m((()=>{v||(v=g(e,G,{},!0)),v.run(1)})),b=!0)},o(t){p(a.$$.fragment,t),v||(v=g(e,G,{},!1)),v.run(0),b=!1},d(t){t&&l(e),d(a),t&&v&&v.end()}}}function z(t,e,a){let{quote:s}=e,{author:n}=e,{image:r}=e;return t.$$set=t=>{"quote"in t&&a(0,s=t.quote),"author"in t&&a(1,n=t.author),"image"in t&&a(2,r=t.image)},[s,n,r]}class M extends t{constructor(t){super(),e(this,t,z,K,a,{quote:0,author:1,image:2})}}function X(t){let e,a,n,c;return{c(){e=s("span"),this.h()},l(t){e=r(t,"SPAN",{class:!0,title:!0}),o(e).forEach(l),this.h()},h(){i(e,"class","dot svelte-nhxify"),i(e,"title",a=`quote by ${t[2]}`),w(e,"active",t[0]===t[1]),w(e,"not-clickable",t[3])},m(a,s){h(a,e,s),n||(c=q(e,"click",t[4]),n=!0)},p(t,[s]){4&s&&a!==(a=`quote by ${t[2]}`)&&i(e,"title",a),3&s&&w(e,"active",t[0]===t[1]),8&s&&w(e,"not-clickable",t[3])},i:I,o:I,d(t){t&&l(e),n=!1,c()}}}function Y(t,e,a){let{quoteIndex:s}=e,{counter:n}=e,{attribution:r}=e,{autoPlaying:o}=e;return t.$$set=t=>{"quoteIndex"in t&&a(0,s=t.quoteIndex),"counter"in t&&a(1,n=t.counter),"attribution"in t&&a(2,r=t.attribution),"autoPlaying"in t&&a(3,o=t.autoPlaying)},[s,n,r,o,function(e){E(t,e)}]}class Z extends t{constructor(t){super(),e(this,t,Y,X,a,{quoteIndex:0,counter:1,attribution:2,autoPlaying:3})}}function tt(t){let e,a,n,c,u,f,$;return{c(){e=s("div"),a=s("label"),n=s("input"),c=b(),u=s("span"),this.h()},l(t){e=r(t,"DIV",{class:!0,id:!0});var s=o(e);a=r(s,"LABEL",{class:!0});var i=o(a);n=r(i,"INPUT",{type:!0,class:!0}),c=y(i),u=r(i,"SPAN",{class:!0}),o(u).forEach(l),i.forEach(l),s.forEach(l),this.h()},h(){i(n,"type","checkbox"),i(n,"class","svelte-drv5cw"),i(u,"class","slider round svelte-drv5cw"),i(a,"class","switch svelte-drv5cw"),i(e,"class","switch-cont svelte-drv5cw"),i(e,"id","auto-play-cont")},m(s,r){h(s,e,r),x(e,a),x(a,n),n.checked=t[0],x(a,c),x(a,u),f||($=[q(n,"change",t[2]),q(n,"change",t[1])],f=!0)},p(t,[e]){1&e&&(n.checked=t[0])},i:I,o:I,d(t){t&&l(e),f=!1,j($)}}}function et(t,e,a){let{switchOn:s}=e;return t.$$set=t=>{"switchOn"in t&&a(0,s=t.switchOn)},[s,function(e){E(t,e)},function(){s=this.checked,a(0,s)}]}class at extends t{constructor(t){super(),e(this,t,et,tt,a,{switchOn:0})}}function st(t,e,a){const s=t.slice();return s[5]=e[a],s[13]=a,s}function nt(t){let e,a;return e=new M({props:{quote:t[5],author:t[3],image:t[4]}}),{c(){n(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){f(e,t,s),a=!0},p(t,a){const s={};32&a&&(s.quote=t[5]),8&a&&(s.author=t[3]),16&a&&(s.image=t[4]),e.$set(s)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function rt(t){let e,a;return e=new Z({props:{counter:t[13],quoteIndex:t[0],autoPlaying:t[2],attribution:t[5].author}}),e.$on("click",(function(){return t[9](t[13])})),{c(){n(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){f(e,t,s),a=!0},p(a,s){t=a;const n={};1&s&&(n.quoteIndex=t[0]),4&s&&(n.autoPlaying=t[2]),e.$set(n)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function ot(t){let e,u,m,g,k,E,A,O,L,R,H,W,C,F,G,Q=t[5],U=nt(t),J=T,K=[];for(let a=0;a<J.length;a+=1)K[a]=rt(st(t,J,a));const z=t=>p(K[t],1,1,(()=>{K[t]=null}));function M(e){t[10](e)}let X={};return void 0!==t[1]&&(X.switchOn=t[1]),H=new at({props:X}),P.push((()=>D(H,"switchOn",M))),H.$on("change",t[8]),{c(){e=s("div"),U.c(),u=b(),m=s("span"),g=v("❮"),k=b(),E=s("span"),A=v("❯"),O=b(),L=s("div");for(let t=0;t<K.length;t+=1)K[t].c();R=b(),n(H.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var a=o(e);U.l(a),u=y(a),m=r(a,"SPAN",{href:!0,class:!0,title:!0});var s=o(m);g=_(s,"❮"),s.forEach(l),k=y(a),E=r(a,"SPAN",{href:!0,class:!0,title:!0});var n=o(E);A=_(n,"❯"),n.forEach(l),O=y(a),L=r(a,"DIV",{class:!0});var i=o(L);for(let e=0;e<K.length;e+=1)K[e].l(i);R=y(i),c(H.$$.fragment,i),i.forEach(l),a.forEach(l),this.h()},h(){i(m,"href","#prev"),i(m,"class","prev svelte-8o60eg"),i(m,"title","previous quote"),w(m,"not-clickable",t[2]),i(E,"href","#next"),i(E,"class","next svelte-8o60eg"),i(E,"title","next quote"),w(E,"not-clickable",t[2]),i(L,"class","dot-container svelte-8o60eg"),i(e,"class","slideshow-container svelte-8o60eg")},m(a,s){h(a,e,s),U.m(e,null),x(e,u),x(e,m),x(m,g),x(e,k),x(e,E),x(E,A),x(e,O),x(e,L);for(let t=0;t<K.length;t+=1)K[t].m(L,null);x(L,R),f(H,L,null),C=!0,F||(G=[q(m,"click",t[7]),q(E,"click",t[6])],F=!0)},p(t,[s]){if(32&s&&a(Q,Q=t[5])?(N(),p(U,1,1,I),V(),U=nt(t),U.c(),$(U),U.m(e,u)):U.p(t,s),4&s&&w(m,"not-clickable",t[2]),4&s&&w(E,"not-clickable",t[2]),5&s){let e;for(J=T,e=0;e<J.length;e+=1){const a=st(t,J,e);K[e]?(K[e].p(a,s),$(K[e],1)):(K[e]=rt(a),K[e].c(),$(K[e],1),K[e].m(L,R))}for(N(),e=J.length;e<K.length;e+=1)z(e);V()}const n={};!W&&2&s&&(W=!0,n.switchOn=t[1],B((()=>W=!1))),H.$set(n)},i(t){if(!C){$(U);for(let t=0;t<J.length;t+=1)$(K[t]);$(H.$$.fragment,t),C=!0}},o(t){p(U),K=K.filter(Boolean);for(let e=0;e<K.length;e+=1)p(K[e]);p(H.$$.fragment,t),C=!1},d(t){t&&l(e),U.d(t),S(K,t),d(H),F=!1,j(G)}}}function ct(t,e,a){let s,n,r,o=0;const c=()=>{a(0,o===T.length-1?o=0:o+=1)};let l,i=!1,u=!1;return t.$$.update=()=>{1&t.$$.dirty&&a(5,s=T[o].quote),1&t.$$.dirty&&a(3,n=T[o].author),1&t.$$.dirty&&a(4,r=T[o].image)},[o,i,u,n,r,s,c,()=>{a(0,0===o?o=T.length-1:o-=1)},()=>{i?(l=setInterval(c,5e3),a(2,u=!0)):(clearInterval(l),a(2,u=!1))},t=>a(0,o=t),function(t){i=t,a(1,i)}]}class lt extends t{constructor(t){super(),e(this,t,ct,ot,a,{})}}function it(t,e,a){const s=t.slice();return s[3]=e[a].url,s[4]=e[a].name,s[5]=e[a].description,s}function ut(t){let e,a,n,c,u,f,$=t[4]+"",m=t[5]+"";return{c(){e=v($),a=b(),n=s("br"),c=s("span"),u=v(m),f=b(),this.h()},l(t){e=_(t,$),a=y(t),n=r(t,"BR",{class:!0}),c=r(t,"SPAN",{class:!0});var s=o(c);u=_(s,m),s.forEach(l),f=y(t),this.h()},h(){i(n,"class","svelte-1vwij43"),i(c,"class","svelte-1vwij43")},m(t,s){h(t,e,s),h(t,a,s),h(t,n,s),h(t,c,s),x(c,u),h(t,f,s)},p(t,a){1&a&&$!==($=t[4]+"")&&k(e,$),1&a&&m!==(m=t[5]+"")&&k(u,m)},d(t){t&&l(e),t&&l(a),t&&l(n),t&&l(c),t&&l(f)}}}function ht(t){let e,a;return e=new C({props:{tipo:2,variante:t[1],href:t[3],alt:t[4],$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){f(e,t,s),a=!0},p(t,a){const s={};2&a&&(s.variante=t[1]),1&a&&(s.href=t[3]),1&a&&(s.alt=t[4]),513&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function ft(t){let e,a,s=t[0],n=[];for(let o=0;o<s.length;o+=1)n[o]=ht(it(t,s,o));const r=t=>p(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=A()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=A()},m(t,s){for(let e=0;e<n.length;e+=1)n[e].m(t,s);h(t,e,s),a=!0},p(t,a){if(3&a){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=it(t,s,o);n[o]?(n[o].p(r,a),$(n[o],1)):(n[o]=ht(r),n[o].c(),$(n[o],1),n[o].m(e.parentNode,e))}for(N(),o=s.length;o<n.length;o+=1)r(o);V()}},i(t){if(!a){for(let t=0;t<s.length;t+=1)$(n[t]);a=!0}},o(t){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)p(n[e]);a=!1},d(t){S(n,t),t&&l(e)}}}function $t(t){let e,a;return e=new W({props:{tipo:3,variante:t[2],$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,s){f(e,t,s),a=!0},p(t,[a]){const s={};4&a&&(s.variante=t[2]),515&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function mt(t,e,a){let{secondaryNav:s=[{}]}=e,{url:n=""}=e,{name:r=""}=e,{description:o=""}=e,{variante_item:c="4"}=e,{variante_list:l="4"}=e,{tipo:i="4"}=e;return t.$$set=t=>{"secondaryNav"in t&&a(0,s=t.secondaryNav),"url"in t&&a(3,n=t.url),"name"in t&&a(4,r=t.name),"description"in t&&a(5,o=t.description),"variante_item"in t&&a(1,c=t.variante_item),"variante_list"in t&&a(2,l=t.variante_list),"tipo"in t&&a(6,i=t.tipo)},[s,c,l,n,r,o,i]}class gt extends t{constructor(t){super(),e(this,t,mt,$t,a,{secondaryNav:0,url:3,name:4,description:5,variante_item:1,variante_list:2,tipo:6})}}function pt(t){let e,a,u,m,g,v,_,k,w,q,E,j,P,D,N,V,B,S,A,W,C,G;return u=new H({props:{tipo:2,variante:6,title:"Sergio Forés",subtitle:O[0].subtitle}}),v=new gt({props:{secondaryNav:R,variante_item:1,variante_list:6}}),w=new lt({}),P=new F({props:{variante:1,text:"Percibir la conexión esencial de todo"}}),V=new Q({props:{variante:1,src:"./img/02234-14.jpg",alt:"Presentation"}}),A=new F({props:{variante:1,text:"Puedes obtener más información contactándome en las redes o por Whatsapp"}}),C=new L({props:{variante:7,text:"Chat-Whatsapp",url:"https://api.whatsapp.com/send?phone=+34619549032"}}),{c(){e=s("div"),a=s("div"),n(u.$$.fragment),m=b(),g=s("div"),n(v.$$.fragment),_=b(),k=s("div"),n(w.$$.fragment),q=b(),E=s("div"),j=s("div"),n(P.$$.fragment),D=b(),N=s("div"),n(V.$$.fragment),B=b(),S=s("div"),n(A.$$.fragment),W=b(),n(C.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=o(e);a=r(s,"DIV",{class:!0});var n=o(a);c(u.$$.fragment,n),n.forEach(l),m=y(s),g=r(s,"DIV",{class:!0});var i=o(g);c(v.$$.fragment,i),i.forEach(l),_=y(s),k=r(s,"DIV",{class:!0});var h=o(k);c(w.$$.fragment,h),h.forEach(l),s.forEach(l),q=y(t),E=r(t,"DIV",{class:!0});var f=o(E);j=r(f,"DIV",{class:!0});var $=o(j);c(P.$$.fragment,$),$.forEach(l),D=y(f),N=r(f,"DIV",{class:!0});var p=o(N);c(V.$$.fragment,p),p.forEach(l),f.forEach(l),B=y(t),S=r(t,"DIV",{class:!0});var d=o(S);c(A.$$.fragment,d),W=y(d),c(C.$$.fragment,d),d.forEach(l),this.h()},h(){i(a,"class"," bgc_primary c_5 mh_3 dg_0 pcc col_13 col_s2_5 "),i(g,"class","col_13 col_s2_8"),i(k,"class","col_13 mh_5"),i(e,"class","dg"),i(j,"class","col_13 col_s2_8 c_5 tac"),i(N,"class","col_13 col_s2_5 "),i(E,"class","dg p_3 bgc_primary rg_1"),i(S,"class","col_s2_13 rg_1 p_3 dg_0 pcc bgc_0 c_4 tac")},m(t,s){h(t,e,s),x(e,a),f(u,a,null),x(e,m),x(e,g),f(v,g,null),x(e,_),x(e,k),f(w,k,null),h(t,q,s),h(t,E,s),x(E,j),f(P,j,null),x(E,D),x(E,N),f(V,N,null),h(t,B,s),h(t,S,s),f(A,S,null),x(S,W),f(C,S,null),G=!0},p:I,i(t){G||($(u.$$.fragment,t),$(v.$$.fragment,t),$(w.$$.fragment,t),$(P.$$.fragment,t),$(V.$$.fragment,t),$(A.$$.fragment,t),$(C.$$.fragment,t),G=!0)},o(t){p(u.$$.fragment,t),p(v.$$.fragment,t),p(w.$$.fragment,t),p(P.$$.fragment,t),p(V.$$.fragment,t),p(A.$$.fragment,t),p(C.$$.fragment,t),G=!1},d(t){t&&l(e),d(u),d(v),d(w),t&&l(q),t&&l(E),d(P),d(V),t&&l(B),t&&l(S),d(A),d(C)}}}export default class extends t{constructor(t){super(),e(this,t,null,pt,a,{})}}
