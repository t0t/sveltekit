import{S as t,i as e,s as a,e as n,t as i,j as s,c as r,a as l,b as c,d as o,l as m,o as g,f as d,g as $,h as u,n as f,G as p,H as h,F as v,K as x,Y as b,p as w,q as I,r as P,w as y,x as k,y as D,C as E,D as S,Q as T,Z as j,_ as N,J as C}from"../../chunks/index-d91e1ed8.js";import{B as V,C as G,c as L,G as U}from"../../chunks/Cover-f3b4dc33.js";import{a as q,f as M}from"../../chunks/index-65311448.js";import{S as R}from"../../chunks/Section-2261cd02.js";import"../../chunks/index-78b22dae.js";const A=[{id:0,name:"Primera imagen",imgurl:"img/obra/img1.jpg",description:"3D Print Painting. 100cm"},{id:1,name:"Red Nature",imgurl:"img/obra/img2.jpg",description:"3D Print Painting. 100cm"},{id:2,name:"Path",imgurl:"img/obra/img3.jpg",description:"3D Print Painting. 100cm"},{id:3,name:"Country Road",imgurl:"img/obra/img4.jpg",description:"3D Print Painting. 100cm"},{id:4,name:"Throughway",imgurl:"img/obra/img5.jpg",description:"3D Print Painting. 100cm"},{id:5,name:"Golden Pond",imgurl:"img/obra/img5.jpg",description:"3D Print Painting. 100cm"},{id:6,name:"preUltima imagen",imgurl:"img/obra/img6.jpg",description:"3D Print Painting. 100cm"},{id:7,name:"Ultima imagen",imgurl:"img/obra/img3.jpg",description:"3D Print Painting. 100cm"}];function H(t){let e,a,p,h,v,x,b,w;return{c(){e=n("div"),a=n("div"),p=i(t[0]),h=i(" / "),v=i(t[1]),x=s(),b=n("img"),this.h()},l(n){e=r(n,"DIV",{class:!0});var i=l(e);a=r(i,"DIV",{class:!0});var s=l(a);p=c(s,t[0]),h=c(s," / "),v=c(s,t[1]),s.forEach(o),x=m(i),b=r(i,"IMG",{src:!0,alt:!0,title:!0,class:!0}),i.forEach(o),this.h()},h(){g(a,"class","numbertext svelte-1yu7aww"),b.src!==(w=t[2])&&g(b,"src",w),g(b,"alt",t[3]),g(b,"title",t[4]),g(b,"class","svelte-1yu7aww"),g(e,"class","Slide svelte-1yu7aww")},m(t,n){d(t,e,n),$(e,a),$(a,p),$(a,h),$(a,v),$(e,x),$(e,b)},p(t,[e]){1&e&&u(p,t[0]),2&e&&u(v,t[1]),4&e&&b.src!==(w=t[2])&&g(b,"src",w),8&e&&g(b,"alt",t[3]),16&e&&g(b,"title",t[4])},i:f,o:f,d(t){t&&o(e)}}}function O(t,e,a){let{slideNo:n}=e,{totalSlides:i}=e,{image:s}=e,{altTag:r}=e,{description:l}=e;return t.$$set=t=>{"slideNo"in t&&a(0,n=t.slideNo),"totalSlides"in t&&a(1,i=t.totalSlides),"image"in t&&a(2,s=t.image),"altTag"in t&&a(3,r=t.altTag),"description"in t&&a(4,l=t.description)},[n,i,s,r,l]}class z extends t{constructor(t){super(),e(this,t,O,H,a,{slideNo:0,totalSlides:1,image:2,altTag:3,description:4})}}function B(t){let e,a,i,s;return{c(){e=n("img"),this.h()},l(t){e=r(t,"IMG",{class:!0,id:!0,src:!0,alt:!0,title:!0}),this.h()},h(){g(e,"class","sample cursor svelte-shjdxg"),g(e,"id",t[3]),e.src!==(a=t[0])&&g(e,"src",a),g(e,"alt",t[1]),g(e,"title",t[2]),p(e,"active",t[4])},m(a,n){d(a,e,n),i||(s=h(e,"click",t[5]),i=!0)},p(t,[n]){8&n&&g(e,"id",t[3]),1&n&&e.src!==(a=t[0])&&g(e,"src",a),2&n&&g(e,"alt",t[1]),4&n&&g(e,"title",t[2]),16&n&&p(e,"active",t[4])},i:f,o:f,d(t){t&&o(e),i=!1,s()}}}function F(t,e,a){let{thumbImg:n}=e,{altTag:i}=e,{titleLink:s}=e,{id:r}=e,{selected:l}=e;return t.$$set=t=>{"thumbImg"in t&&a(0,n=t.thumbImg),"altTag"in t&&a(1,i=t.altTag),"titleLink"in t&&a(2,s=t.titleLink),"id"in t&&a(3,r=t.id),"selected"in t&&a(4,l=t.selected)},[n,i,s,r,l,function(e){v(t,e)}]}class J extends t{constructor(t){super(),e(this,t,F,B,a,{thumbImg:0,altTag:1,titleLink:2,id:3,selected:4})}}function K(t){let e,a,p,v,b,w,I,P,y,k,D;return{c(){e=n("div"),a=n("a"),p=i("❮"),v=s(),b=n("p"),w=i(t[0]),I=s(),P=n("a"),y=i("❯"),this.h()},l(n){e=r(n,"DIV",{class:!0});var i=l(e);a=r(i,"A",{href:!0,class:!0});var s=l(a);p=c(s,"❮"),s.forEach(o),v=m(i),b=r(i,"P",{id:!0,class:!0});var g=l(b);w=c(g,t[0]),g.forEach(o),I=m(i),P=r(i,"A",{href:!0,class:!0});var d=l(P);y=c(d,"❯"),d.forEach(o),i.forEach(o),this.h()},h(){g(a,"href","#arrowL"),g(a,"class","arrow prev svelte-dw7qg1"),g(b,"id","caption"),g(b,"class","svelte-dw7qg1"),g(P,"href","#arrowR"),g(P,"class","arrow next svelte-dw7qg1"),g(e,"class","caption-container svelte-dw7qg1")},m(n,i){d(n,e,i),$(e,a),$(a,p),$(e,v),$(e,b),$(b,w),$(e,I),$(e,P),$(P,y),k||(D=[h(a,"click",t[2]),h(P,"click",t[3])],k=!0)},p(t,[e]){1&e&&u(w,t[0])},i:f,o:f,d(t){t&&o(e),k=!1,x(D)}}}function Q(t,e,a){let{caption:n}=e;const i=b();return t.$$set=t=>{"caption"in t&&a(0,n=t.caption)},[n,i,()=>i("prevClick"),()=>i("nextClick")]}class Y extends t{constructor(t){super(),e(this,t,Q,K,a,{caption:0})}}function Z(t,e,a){const n=t.slice();return n[7]=e[a].id,n[8]=e[a].imgurl,n[9]=e[a].name,n}function _(t){let e,a;return e=new J({props:{thumbImg:t[8],altTag:t[9],id:t[7],selected:Number(t[0])===t[7]}}),e.$on("click",(function(){return t[6](t[7])})),{c(){w(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p(a,n){t=a;const i={};1&n&&(i.selected=Number(t[0])===t[7]),e.$set(i)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function W(t){let e,a,u,f,p,v,x,b,V,G,L,U,R,H;p=new z({props:{image:t[1].imgurl,altTag:t[1].name,attr:t[1].description,slideNo:t[1].id+1,totalSlides:A.length}}),x=new Y({props:{caption:A[t[0]].description}}),x.$on("prevClick",t[3]),x.$on("nextClick",t[2]);let O=A,B=[];for(let n=0;n<O.length;n+=1)B[n]=_(Z(t,O,n));const F=t=>k(B[t],1,1,(()=>{B[t]=null}));return{c(){e=n("div"),a=n("span"),u=i("✗"),f=s(),w(p.$$.fragment),v=s(),w(x.$$.fragment),b=s(),V=n("div");for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var n=l(e);a=r(n,"SPAN",{class:!0});var i=l(a);u=c(i,"✗"),i.forEach(o),f=m(n),I(p.$$.fragment,n),v=m(n),I(x.$$.fragment,n),b=m(n),V=r(n,"DIV",{class:!0});var s=l(V);for(let e=0;e<B.length;e+=1)B[e].l(s);s.forEach(o),n.forEach(o),this.h()},h(){g(a,"class","close cursor svelte-1x39c5h"),g(V,"class","Thumbnails svelte-1x39c5h"),g(e,"class","lightbox svelte-1x39c5h")},m(n,i){d(n,e,i),$(e,a),$(a,u),$(e,f),P(p,e,null),$(e,v),P(x,e,null),$(e,b),$(e,V);for(let t=0;t<B.length;t+=1)B[t].m(V,null);U=!0,R||(H=h(a,"click",t[5]),R=!0)},p(t,[e]){const a={};2&e&&(a.image=t[1].imgurl),2&e&&(a.altTag=t[1].name),2&e&&(a.attr=t[1].description),2&e&&(a.slideNo=t[1].id+1),p.$set(a);const n={};if(1&e&&(n.caption=A[t[0]].description),x.$set(n),17&e){let a;for(O=A,a=0;a<O.length;a+=1){const n=Z(t,O,a);B[a]?(B[a].p(n,e),y(B[a],1)):(B[a]=_(n),B[a].c(),y(B[a],1),B[a].m(V,null))}for(E(),a=O.length;a<B.length;a+=1)F(a);S()}},i(t){if(!U){y(p.$$.fragment,t),y(x.$$.fragment,t);for(let t=0;t<O.length;t+=1)y(B[t]);T((()=>{L&&L.end(1),G||(G=j(e,q,{x:-300})),G.start()})),U=!0}},o(t){k(p.$$.fragment,t),k(x.$$.fragment,t),B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)k(B[e]);G&&G.invalidate(),L=N(e,M,{}),U=!1},d(t){t&&o(e),D(p),D(x),C(B,t),t&&L&&L.end(),R=!1,H()}}}function X(t,e,a){let n,{imageShowingIndex:i=0}=e;const s=t=>a(0,i=Number(t));return t.$$set=t=>{"imageShowingIndex"in t&&a(0,i=t.imageShowingIndex)},t.$$.update=()=>{1&t.$$.dirty&&console.log(i),1&t.$$.dirty&&a(1,n=A[i])},[i,n,()=>{a(0,i===A.length-1?i=0:i+=1)},()=>{a(0,0===i?i=A.length-1:i-=1)},s,function(e){v(t,e)},t=>s(t)]}class tt extends t{constructor(t){super(),e(this,t,X,W,a,{imageShowingIndex:0})}}function et(t,e,a){const n=t.slice();return n[1]=e[a].id,n[2]=e[a].imgurl,n[3]=e[a].name,n}function at(t){let e,a,i,s;return{c(){e=n("img"),this.h()},l(t){e=r(t,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){g(e,"id",t[1]),e.src!==(a=t[2])&&g(e,"src",a),g(e,"alt",t[3]),g(e,"class","svelte-631io9")},m(a,n){d(a,e,n),i||(s=h(e,"click",t[0]),i=!0)},p:f,d(t){t&&o(e),i=!1,s()}}}function nt(t){let e,a=A,i=[];for(let n=0;n<a.length;n+=1)i[n]=at(et(t,a,n));return{c(){e=n("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var a=l(e);for(let e=0;e<i.length;e+=1)i[e].l(a);a.forEach(o),this.h()},h(){g(e,"class","DemoGallery svelte-631io9")},m(t,a){d(t,e,a);for(let n=0;n<i.length;n+=1)i[n].m(e,null)},p(t,[n]){if(0&n){let s;for(a=A,s=0;s<a.length;s+=1){const r=et(t,a,s);i[s]?i[s].p(r,n):(i[s]=at(r),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=a.length}},i:f,o:f,d(t){t&&o(e),C(i,t)}}}function it(t){return[function(e){v(t,e)}]}class st extends t{constructor(t){super(),e(this,t,it,nt,a,{})}}function rt(t){let e,a;return e=new st({}),e.$on("click",t[2]),{c(){w(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p:f,i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function lt(t){let e,a;return e=new tt({props:{imageShowingIndex:t[1]}}),e.$on("click",t[3]),{c(){w(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p(t,a){const n={};2&a&&(n.imageShowingIndex=t[1]),e.$set(n)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function ct(t){let e,a,i,c,$,u;const f=[lt,rt],p=[];function h(t,e){return t[0]?0:1}return e=h(t),a=p[e]=f[e](t),$=new V({props:{variante:1,text:"View gallery"}}),$.$on("click",t[4]),{c(){a.c(),i=s(),c=n("aside"),w($.$$.fragment),this.h()},l(t){a.l(t),i=m(t),c=r(t,"ASIDE",{class:!0});var e=l(c);I($.$$.fragment,e),e.forEach(o),this.h()},h(){g(c,"class","svelte-1b47u2g")},m(t,a){p[e].m(t,a),d(t,i,a),d(t,c,a),P($,c,null),u=!0},p(t,[n]){let s=e;e=h(t),e===s?p[e].p(t,n):(E(),k(p[s],1,1,(()=>{p[s]=null})),S(),a=p[e],a?a.p(t,n):(a=p[e]=f[e](t),a.c()),y(a,1),a.m(i.parentNode,i))},i(t){u||(y(a),y($.$$.fragment,t),u=!0)},o(t){k(a),k($.$$.fragment,t),u=!1},d(t){p[e].d(t),t&&o(i),t&&o(c),D($)}}}function ot(t,e,a){let n=!1,i=0;return[n,i,t=>{a(1,i=Number(t.target.id)),a(0,n=!0)},()=>a(0,n=!1),()=>a(0,n=!0)]}class mt extends t{constructor(t){super(),e(this,t,ot,ct,a,{})}}function gt(t){let e,a;return e=new G({props:{title:L[1].title,subtitle:L[1].subtitle,text:L[1].text,img:L[1].img}}),{c(){w(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p:f,i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function dt(t){let e,a,s,m,u,f,p;return{c(){e=n("video"),a=n("source"),m=n("source"),f=n("p"),p=i("Ups! Su navegador no soporta vídeos HTML5."),this.h()},l(t){e=r(t,"VIDEO",{poster:!0,loop:!0,playsinline:!0,controls:!0});var n=l(e);a=r(n,"SOURCE",{src:!0,type:!0}),m=r(n,"SOURCE",{src:!0,type:!0}),f=r(n,"P",{});var i=l(f);p=c(i,"Ups! Su navegador no soporta vídeos HTML5."),i.forEach(o),n.forEach(o),this.h()},h(){a.src!==(s="/img/desdelapoesiadelamateria.webm")&&g(a,"src","/img/desdelapoesiadelamateria.webm"),g(a,"type","video/webm"),m.src!==(u="/img/desdelapoesiadelamateria.mp4")&&g(m,"src","/img/desdelapoesiadelamateria.mp4"),g(m,"type","video/mp4"),g(e,"poster","/img/cover3.jpg"),e.loop=!0,e.playsInline=!0,e.controls="controls"},m(t,n){d(t,e,n),$(e,a),$(e,m),$(e,f),$(f,p)},d(t){t&&o(e)}}}function $t(t){let e,a,s;return{c(){e=n("div"),a=n("p"),s=i("Desde la poesía de la materia"),this.h()},l(t){e=r(t,"DIV",{slot:!0});var n=l(e);a=r(n,"P",{});var i=l(a);s=c(i,"Desde la poesía de la materia"),i.forEach(o),n.forEach(o),this.h()},h(){g(e,"slot","subarea1")},m(t,n){d(t,e,n),$(e,a),$(a,s)},d(t){t&&o(e)}}}function ut(t){let e,a,s;return{c(){e=n("div"),a=n("p"),s=i("Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia."),this.h()},l(t){e=r(t,"DIV",{slot:!0});var n=l(e);a=r(n,"P",{});var i=l(a);s=c(i,"Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia."),i.forEach(o),n.forEach(o),this.h()},h(){g(e,"slot","subarea2")},m(t,n){d(t,e,n),$(e,a),$(a,s)},d(t){t&&o(e)}}}function ft(t){let e,a;return e=new U({props:{variante:4,$$slots:{subarea2:[ut],subarea1:[$t],default:[dt]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},p(t,a){const n={};1&a&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function pt(t){let e,a;return e=new mt({}),{c(){w(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){P(e,t,n),a=!0},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function ht(t){let e,a,n,i,r,l;return e=new R({props:{id:"cover",variante:3,$$slots:{default:[gt]},$$scope:{ctx:t}}}),n=new R({props:{variante:2,$$slots:{default:[ft]},$$scope:{ctx:t}}}),r=new R({props:{id:"lightboxgallery",variante:3,$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment),a=s(),w(n.$$.fragment),i=s(),w(r.$$.fragment)},l(t){I(e.$$.fragment,t),a=m(t),I(n.$$.fragment,t),i=m(t),I(r.$$.fragment,t)},m(t,s){P(e,t,s),d(t,a,s),P(n,t,s),d(t,i,s),P(r,t,s),l=!0},p(t,[a]){const i={};1&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i);const s={};1&a&&(s.$$scope={dirty:a,ctx:t}),n.$set(s);const l={};1&a&&(l.$$scope={dirty:a,ctx:t}),r.$set(l)},i(t){l||(y(e.$$.fragment,t),y(n.$$.fragment,t),y(r.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),k(n.$$.fragment,t),k(r.$$.fragment,t),l=!1},d(t){D(e,t),t&&o(a),D(n,t),t&&o(i),D(r,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,ht,a,{})}}
