import{S as t,i as e,s as n,e as s,p as a,c as r,a as o,q as l,d as c,o as i,P as u,f as $,r as f,w as h,Q as m,R as g,x as p,y as d,t as v,j as x,b as y,l as b,g as j,h as k,G as w,H as I,n as q,F as _,K as E,T as P,U as N,C as S,D as A,V as z,J as B,k as D,I as O}from"../chunks/index-d91e1ed8.js";import{G,c as L,B as V}from"../chunks/GridBase-a41c03d9.js";import{s as R}from"../chunks/pages-6818a1c6.js";import{H as F,S as H}from"../chunks/Header-c174dee5.js";/* empty css                                */import{B as C}from"../chunks/Img.svelte-8aacfaef.js";import{f as T}from"../chunks/index-65311448.js";import{L as U,a as W}from"../chunks/ListItem-8591f839.js";import"../chunks/index-78b22dae.js";const M=[{quote:"Aquel que sabe contar hasta cuatro puede conocer el universo entero",author:"Pitágoras",image:"/img/bg1.jpg"},{quote:"Lo que la realidad es, es su símbolo; el es, es el símbolo de lo real",author:"Raimon Panikkar",image:"/img/bg2.jpg"},{quote:"El mundo es un conglomerado de maneras diferentes de que ocurra siempre lo mismo.",author:"+0+1234",image:"/img/bg3.jpg"},{quote:"Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.",author:"Denis Wholey",image:"/img/img3.jpg"},{quote:"Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.",author:"Helen Rowland",image:"/img/cover4.jpg"}];function Q(t){let e,n,a,l;return{c(){e=s("q"),n=v(t[0]),a=x(),l=s("br"),this.h()},l(s){e=r(s,"Q",{class:!0});var i=o(e);n=y(i,t[0]),i.forEach(c),a=b(s),l=r(s,"BR",{class:!0}),this.h()},h(){i(e,"class","svelte-zrcspl"),i(l,"class","svelte-zrcspl")},m(t,s){$(t,e,s),j(e,n),$(t,a,s),$(t,l,s)},p(t,e){1&e&&k(n,t[0])},d(t){t&&c(e),t&&c(a),t&&c(l)}}}function J(t){let e,n,a;return{c(){e=s("span"),n=v("— "),a=v(t[1]),this.h()},l(s){e=r(s,"SPAN",{slot:!0,class:!0});var l=o(e);n=y(l,"— "),a=y(l,t[1]),l.forEach(c),this.h()},h(){i(e,"slot","author"),i(e,"class","svelte-zrcspl")},m(t,s){$(t,e,s),j(e,n),j(e,a)},p(t,e){2&e&&k(a,t[1])},d(t){t&&c(e)}}}function K(t){let e,n,v,x;return n=new C({props:{$$slots:{author:[J],default:[Q]},$$scope:{ctx:t}}}),{c(){e=s("div"),a(n.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0});var s=o(e);l(n.$$.fragment,s),s.forEach(c),this.h()},h(){i(e,"class","mySlides svelte-zrcspl"),u(e,"background-image","url("+t[2]+")")},m(t,s){$(t,e,s),f(n,e,null),x=!0},p(t,[s]){const a={};11&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a),(!x||4&s)&&u(e,"background-image","url("+t[2]+")")},i(t){x||(h(n.$$.fragment,t),m((()=>{v||(v=g(e,T,{},!0)),v.run(1)})),x=!0)},o(t){p(n.$$.fragment,t),v||(v=g(e,T,{},!1)),v.run(0),x=!1},d(t){t&&c(e),d(n),t&&v&&v.end()}}}function X(t,e,n){let{quote:s}=e,{author:a}=e,{image:r}=e;return t.$$set=t=>{"quote"in t&&n(0,s=t.quote),"author"in t&&n(1,a=t.author),"image"in t&&n(2,r=t.image)},[s,a,r]}class Y extends t{constructor(t){super(),e(this,t,X,K,n,{quote:0,author:1,image:2})}}function Z(t){let e,n,a,l;return{c(){e=s("span"),this.h()},l(t){e=r(t,"SPAN",{class:!0,title:!0}),o(e).forEach(c),this.h()},h(){i(e,"class","dot svelte-1mnwu1h"),i(e,"title",n=`quote by ${t[2]}`),w(e,"active",t[0]===t[1]),w(e,"not-clickable",t[3])},m(n,s){$(n,e,s),a||(l=I(e,"click",t[4]),a=!0)},p(t,[s]){4&s&&n!==(n=`quote by ${t[2]}`)&&i(e,"title",n),3&s&&w(e,"active",t[0]===t[1]),8&s&&w(e,"not-clickable",t[3])},i:q,o:q,d(t){t&&c(e),a=!1,l()}}}function tt(t,e,n){let{quoteIndex:s}=e,{counter:a}=e,{attribution:r}=e,{autoPlaying:o}=e;return t.$$set=t=>{"quoteIndex"in t&&n(0,s=t.quoteIndex),"counter"in t&&n(1,a=t.counter),"attribution"in t&&n(2,r=t.attribution),"autoPlaying"in t&&n(3,o=t.autoPlaying)},[s,a,r,o,function(e){_(t,e)}]}class et extends t{constructor(t){super(),e(this,t,tt,Z,n,{quoteIndex:0,counter:1,attribution:2,autoPlaying:3})}}function nt(t){let e,n,a,l,u,f,h;return{c(){e=s("div"),n=s("label"),a=s("input"),l=x(),u=s("span"),this.h()},l(t){e=r(t,"DIV",{class:!0,id:!0});var s=o(e);n=r(s,"LABEL",{class:!0});var i=o(n);a=r(i,"INPUT",{type:!0,class:!0}),l=b(i),u=r(i,"SPAN",{class:!0}),o(u).forEach(c),i.forEach(c),s.forEach(c),this.h()},h(){i(a,"type","checkbox"),i(a,"class","svelte-nzslgf"),i(u,"class","slider round svelte-nzslgf"),i(n,"class","switch svelte-nzslgf"),i(e,"class","switch-cont svelte-nzslgf"),i(e,"id","auto-play-cont")},m(s,r){$(s,e,r),j(e,n),j(n,a),a.checked=t[0],j(n,l),j(n,u),f||(h=[I(a,"change",t[2]),I(a,"change",t[1])],f=!0)},p(t,[e]){1&e&&(a.checked=t[0])},i:q,o:q,d(t){t&&c(e),f=!1,E(h)}}}function st(t,e,n){let{switchOn:s}=e;return t.$$set=t=>{"switchOn"in t&&n(0,s=t.switchOn)},[s,function(e){_(t,e)},function(){s=this.checked,n(0,s)}]}class at extends t{constructor(t){super(),e(this,t,st,nt,n,{switchOn:0})}}function rt(t,e,n){const s=t.slice();return s[5]=e[n],s[13]=n,s}function ot(t){let e,n;return e=new Y({props:{quote:t[5],author:t[3],image:t[4]}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p(t,n){const s={};32&n&&(s.quote=t[5]),8&n&&(s.author=t[3]),16&n&&(s.image=t[4]),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function lt(t){let e,n;return e=new et({props:{counter:t[13],quoteIndex:t[0],autoPlaying:t[2],attribution:t[5].author}}),e.$on("click",(function(){return t[9](t[13])})),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p(n,s){t=n;const a={};1&s&&(a.quoteIndex=t[0]),4&s&&(a.autoPlaying=t[2]),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function ct(t){let e,u,m,g,k,_,D,O,G,L,V,R,F,H,C,T=t[5],U=ot(t),W=M,Q=[];for(let n=0;n<W.length;n+=1)Q[n]=lt(rt(t,W,n));const J=t=>p(Q[t],1,1,(()=>{Q[t]=null}));function K(e){t[10](e)}let X={};return void 0!==t[1]&&(X.switchOn=t[1]),V=new at({props:X}),P.push((()=>N(V,"switchOn",K))),V.$on("change",t[8]),{c(){e=s("div"),U.c(),u=x(),m=s("span"),g=v("❮"),k=x(),_=s("span"),D=v("❯"),O=x(),G=s("div");for(let t=0;t<Q.length;t+=1)Q[t].c();L=x(),a(V.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=o(e);U.l(n),u=b(n),m=r(n,"SPAN",{href:!0,class:!0,title:!0});var s=o(m);g=y(s,"❮"),s.forEach(c),k=b(n),_=r(n,"SPAN",{href:!0,class:!0,title:!0});var a=o(_);D=y(a,"❯"),a.forEach(c),O=b(n),G=r(n,"DIV",{class:!0});var i=o(G);for(let e=0;e<Q.length;e+=1)Q[e].l(i);L=b(i),l(V.$$.fragment,i),i.forEach(c),n.forEach(c),this.h()},h(){i(m,"href","#prev"),i(m,"class","prev svelte-1kdelhj"),i(m,"title","previous quote"),w(m,"not-clickable",t[2]),i(_,"href","#next"),i(_,"class","next svelte-1kdelhj"),i(_,"title","next quote"),w(_,"not-clickable",t[2]),i(G,"class","dot-container svelte-1kdelhj"),i(e,"class","slideshow-container svelte-1kdelhj")},m(n,s){$(n,e,s),U.m(e,null),j(e,u),j(e,m),j(m,g),j(e,k),j(e,_),j(_,D),j(e,O),j(e,G);for(let t=0;t<Q.length;t+=1)Q[t].m(G,null);j(G,L),f(V,G,null),F=!0,H||(C=[I(m,"click",t[7]),I(_,"click",t[6])],H=!0)},p(t,[s]){if(32&s&&n(T,T=t[5])?(S(),p(U,1,1,q),A(),U=ot(t),U.c(),h(U),U.m(e,u)):U.p(t,s),4&s&&w(m,"not-clickable",t[2]),4&s&&w(_,"not-clickable",t[2]),5&s){let e;for(W=M,e=0;e<W.length;e+=1){const n=rt(t,W,e);Q[e]?(Q[e].p(n,s),h(Q[e],1)):(Q[e]=lt(n),Q[e].c(),h(Q[e],1),Q[e].m(G,L))}for(S(),e=W.length;e<Q.length;e+=1)J(e);A()}const a={};!R&&2&s&&(R=!0,a.switchOn=t[1],z((()=>R=!1))),V.$set(a)},i(t){if(!F){h(U);for(let t=0;t<W.length;t+=1)h(Q[t]);h(V.$$.fragment,t),F=!0}},o(t){p(U),Q=Q.filter(Boolean);for(let e=0;e<Q.length;e+=1)p(Q[e]);p(V.$$.fragment,t),F=!1},d(t){t&&c(e),U.d(t),B(Q,t),d(V),H=!1,E(C)}}}function it(t,e,n){let s,a,r,o=0;const l=()=>{n(0,o===M.length-1?o=0:o+=1)};let c,i=!1,u=!1;return t.$$.update=()=>{1&t.$$.dirty&&n(5,s=M[o].quote),1&t.$$.dirty&&n(3,a=M[o].author),1&t.$$.dirty&&n(4,r=M[o].image)},[o,i,u,a,r,s,l,()=>{n(0,0===o?o=M.length-1:o-=1)},()=>{i?(c=setInterval(l,5e3),n(2,u=!0)):(clearInterval(c),n(2,u=!1))},t=>n(0,o=t),function(t){i=t,n(1,i)}]}class ut extends t{constructor(t){super(),e(this,t,it,ct,n,{})}}function $t(t){let e,n,a,l,u,f,h;return{c(){e=s("figure"),n=s("img"),l=x(),u=s("figcaption"),f=v(t[1]),this.h()},l(s){e=r(s,"FIGURE",{class:!0});var a=o(e);n=r(a,"IMG",{src:!0,alt:!0,href:!0,class:!0}),l=b(a),u=r(a,"FIGCAPTION",{class:!0});var i=o(u);f=y(i,t[1]),i.forEach(c),a.forEach(c),this.h()},h(){n.src!==(a=t[0])&&i(n,"src",a),i(n,"alt",t[1]),i(n,"href",t[2]),i(n,"class","svelte-1j1j2e1"),i(u,"class","alt svelte-1j1j2e1"),i(e,"class",h=O(t[4][t[3]])+" svelte-1j1j2e1")},m(t,s){$(t,e,s),j(e,n),j(e,l),j(e,u),j(u,f)},p(t,s){1&s&&n.src!==(a=t[0])&&i(n,"src",a),2&s&&i(n,"alt",t[1]),4&s&&i(n,"href",t[2]),2&s&&k(f,t[1]),8&s&&h!==(h=O(t[4][t[3]])+" svelte-1j1j2e1")&&i(e,"class",h)},d(t){t&&c(e)}}}function ft(t){let e,n,a;return{c(){e=s("img"),this.h()},l(t){e=r(t,"IMG",{src:!0,alt:!0,href:!0,class:!0}),this.h()},h(){e.src!==(n=t[0])&&i(e,"src",n),i(e,"alt",t[1]),i(e,"href",t[2]),i(e,"class",a=O(t[4][t[3]])+" svelte-1j1j2e1")},m(t,n){$(t,e,n)},p(t,s){1&s&&e.src!==(n=t[0])&&i(e,"src",n),2&s&&i(e,"alt",t[1]),4&s&&i(e,"href",t[2]),8&s&&a!==(a=O(t[4][t[3]])+" svelte-1j1j2e1")&&i(e,"class",a)},d(t){t&&c(e)}}}function ht(t){let e,n;return{c(){e=s("div"),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0}),o(e).forEach(c),this.h()},h(){i(e,"class",n=O(t[4][t[3]])+" svelte-1j1j2e1"),u(e,"background-image","url("+t[0]+")")},m(t,n){$(t,e,n)},p(t,s){8&s&&n!==(n=O(t[4][t[3]])+" svelte-1j1j2e1")&&i(e,"class",n),1&s&&u(e,"background-image","url("+t[0]+")")},d(t){t&&c(e)}}}function mt(t){let e;function n(t,e){return 0===t[3]||3===t[3]||4===t[3]?ht:1===t[3]||5===t[3]?ft:$t}let s=n(t),a=s(t);return{c(){a.c(),e=D()},l(t){a.l(t),e=D()},m(t,n){a.m(t,n),$(t,e,n)},p(t,[r]){s===(s=n(t))&&a?a.p(t,r):(a.d(1),a=s(t),a&&(a.c(),a.m(e.parentNode,e)))},i:q,o:q,d(t){a.d(t),t&&c(e)}}}function gt(t,e,n){let{src:s}=e,{alt:a="Imagen"}=e,{href:r}=e,{variante:o=0}=e;return t.$$set=t=>{"src"in t&&n(0,s=t.src),"alt"in t&&n(1,a=t.alt),"href"in t&&n(2,r=t.href),"variante"in t&&n(3,o=t.variante)},[s,a,r,o,["Img_0","Img_1","Img_2","Img_3","Img_4","Img_5"]]}class pt extends t{constructor(t){super(),e(this,t,gt,mt,n,{src:0,alt:1,href:2,variante:3})}}function dt(t,e,n){const s=t.slice();return s[3]=e[n].url,s[4]=e[n].name,s[5]=e[n].description,s}function vt(t){let e,n,a,l,u,f,h=t[4]+"",m=t[5]+"";return{c(){e=v(h),n=x(),a=s("br"),l=s("span"),u=v(m),f=x(),this.h()},l(t){e=y(t,h),n=b(t),a=r(t,"BR",{class:!0}),l=r(t,"SPAN",{class:!0});var s=o(l);u=y(s,m),s.forEach(c),f=b(t),this.h()},h(){i(a,"class","svelte-1ucdo0e"),i(l,"class","svelte-1ucdo0e")},m(t,s){$(t,e,s),$(t,n,s),$(t,a,s),$(t,l,s),j(l,u),$(t,f,s)},p(t,n){1&n&&h!==(h=t[4]+"")&&k(e,h),1&n&&m!==(m=t[5]+"")&&k(u,m)},d(t){t&&c(e),t&&c(n),t&&c(a),t&&c(l),t&&c(f)}}}function xt(t){let e,n;return e=new W({props:{tipo:2,variante:t[1],href:t[3],alt:t[4],$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.variante=t[1]),1&n&&(s.href=t[3]),1&n&&(s.alt=t[4]),513&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function yt(t){let e,n,s=t[0],a=[];for(let o=0;o<s.length;o+=1)a[o]=xt(dt(t,s,o));const r=t=>p(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=D()},l(t){for(let e=0;e<a.length;e+=1)a[e].l(t);e=D()},m(t,s){for(let e=0;e<a.length;e+=1)a[e].m(t,s);$(t,e,s),n=!0},p(t,n){if(3&n){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=dt(t,s,o);a[o]?(a[o].p(r,n),h(a[o],1)):(a[o]=xt(r),a[o].c(),h(a[o],1),a[o].m(e.parentNode,e))}for(S(),o=s.length;o<a.length;o+=1)r(o);A()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)h(a[t]);n=!0}},o(t){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)p(a[e]);n=!1},d(t){B(a,t),t&&c(e)}}}function bt(t){let e,n;return e=new U({props:{tipo:3,variante:t[2],$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p(t,[n]){const s={};4&n&&(s.variante=t[2]),515&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function jt(t,e,n){let{secondaryNav:s=[{}]}=e,{url:a=""}=e,{name:r=""}=e,{description:o=""}=e,{variante_item:l="4"}=e,{variante_list:c="4"}=e,{tipo:i="4"}=e;return t.$$set=t=>{"secondaryNav"in t&&n(0,s=t.secondaryNav),"url"in t&&n(3,a=t.url),"name"in t&&n(4,r=t.name),"description"in t&&n(5,o=t.description),"variante_item"in t&&n(1,l=t.variante_item),"variante_list"in t&&n(2,c=t.variante_list),"tipo"in t&&n(6,i=t.tipo)},[s,l,c,a,r,o,i]}class kt extends t{constructor(t){super(),e(this,t,jt,bt,n,{secondaryNav:0,url:3,name:4,description:5,variante_item:1,variante_list:2,tipo:6})}}function wt(t){let e,n;return e=new F({props:{tipo:2,variante:6,textalign:"align-left",title:"Sergio Forés",subtitle:L[0].subtitle}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p:q,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function It(t){let e,n;return e=new kt({props:{secondaryNav:R,variante_item:1,variante_list:6}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p:q,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function qt(t){let e,n;return e=new ut({}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function _t(t){let e,n;return e=new C({props:{variante:1,color:"grey_1",align:"tal",text:"Percibir la conexión esencial de todo"}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p:q,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function Et(t){let e,n;return e=new pt({props:{variante:1,src:"./img/02234-14.jpg",alt:"Presentation"}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p:q,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function Pt(t){let e,n,s,r;return e=new C({props:{variante:1,color:"grey_5",text:"Puedes obtener más información contactándome en las redes o por Whatsapp"}}),s=new V({props:{variante:7,text:"Chat-Whatsapp",url:"https://api.whatsapp.com/send?phone=+34619549032"}}),{c(){a(e.$$.fragment),n=x(),a(s.$$.fragment)},l(t){l(e.$$.fragment,t),n=b(t),l(s.$$.fragment,t)},m(t,a){f(e,t,a),$(t,n,a),f(s,t,a),r=!0},p:q,i(t){r||(h(e.$$.fragment,t),h(s.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),r=!1},d(t){d(e,t),t&&c(n),d(s,t)}}}function Nt(t){let e,n;return e=new H({props:{variante:0,bg_color:"bggrey_1",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function St(t){let e;return{c(){e=s("div"),this.h()},l(t){e=r(t,"DIV",{class:!0}),o(e).forEach(c),this.h()},h(){i(e,"class","bggrey_3 fullfill")},m(t,n){$(t,e,n)},d(t){t&&c(e)}}}function At(t){let e,n,s,r;return e=new G({props:{tipo:2,variante:7,$$slots:{_8x8:[qt],_5x5:[It],_3x3:[wt]},$$scope:{ctx:t}}}),s=new G({props:{tipo:2,variante:7,$$slots:{_1x1:[St],_8x8:[Nt],_5x5:[Et],_3x3:[_t]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),n=x(),a(s.$$.fragment)},l(t){l(e.$$.fragment,t),n=b(t),l(s.$$.fragment,t)},m(t,a){f(e,t,a),$(t,n,a),f(s,t,a),r=!0},p(t,[n]){const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r)},i(t){r||(h(e.$$.fragment,t),h(s.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),p(s.$$.fragment,t),r=!1},d(t){d(e,t),t&&c(n),d(s,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,At,n,{})}}
