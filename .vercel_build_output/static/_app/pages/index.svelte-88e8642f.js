import{S as t,i as e,s as n,e as s,t as a,j as r,c as l,a as o,b as i,d as c,l as u,o as $,P as h,f,g,h as m,Q as d,R as p,G as v,H as x,n as y,F as b,K as w,p as k,q,r as E,w as I,x as P,y as j,T as S,U as A,C as D,D as O,V as T,J as V,O as B,M as N}from"../chunks/index-d91e1ed8.js";import{B as L,C as M,c as z}from"../chunks/Cover-15f98305.js";import{S as C}from"../chunks/Section-f5afcac2.js";import{f as H}from"../chunks/index-65311448.js";import{s as G}from"../chunks/pages-26a130a6.js";import"../chunks/index-78b22dae.js";const Q=[{quote:"The road to success is always under construction.",author:"Lily Tomlin",image:"/img/bg1.jpg"},{quote:"A day without sunshine is like, you know, night.",author:"Steve Martin",image:"/img/bg2.jpg"},{quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",author:"Ellen Degeneres",image:"/img/bg3.jpg"},{quote:"Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.",author:"Denis Wholey",image:"/img/bg4.jpg"},{quote:"Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.",author:"Helen Rowland",image:"/img/cover4.jpg"}];function R(t){let e,n,v,x,y,b,w,k,q;return{c(){e=s("div"),n=s("q"),v=a(t[0]),x=r(),y=s("p"),b=a("—"),w=a(t[1]),this.h()},l(s){e=l(s,"DIV",{class:!0,style:!0});var a=o(e);n=l(a,"Q",{class:!0});var r=o(n);v=i(r,t[0]),r.forEach(c),x=u(a),y=l(a,"P",{class:!0});var $=o(y);b=i($,"—"),w=i($,t[1]),$.forEach(c),a.forEach(c),this.h()},h(){$(n,"class","svelte-xu0hux"),$(y,"class","author svelte-xu0hux"),$(e,"class","mySlides svelte-xu0hux"),h(e,"background-image","url("+t[2]+")")},m(t,s){f(t,e,s),g(e,n),g(n,v),g(e,x),g(e,y),g(y,b),g(y,w),q=!0},p(t,[n]){(!q||1&n)&&m(v,t[0]),(!q||2&n)&&m(w,t[1]),(!q||4&n)&&h(e,"background-image","url("+t[2]+")")},i(t){q||(d((()=>{k||(k=p(e,H,{},!0)),k.run(1)})),q=!0)},o(t){k||(k=p(e,H,{},!1)),k.run(0),q=!1},d(t){t&&c(e),t&&k&&k.end()}}}function U(t,e,n){let{quote:s}=e,{author:a}=e,{image:r}=e;return t.$$set=t=>{"quote"in t&&n(0,s=t.quote),"author"in t&&n(1,a=t.author),"image"in t&&n(2,r=t.image)},[s,a,r]}class _ extends t{constructor(t){super(),e(this,t,U,R,n,{quote:0,author:1,image:2})}}function F(t){let e,n,a,r;return{c(){e=s("span"),this.h()},l(t){e=l(t,"SPAN",{class:!0,title:!0}),o(e).forEach(c),this.h()},h(){$(e,"class","dot svelte-1duox9k"),$(e,"title",n=`quote by ${t[2]}`),v(e,"active",t[0]===t[1]),v(e,"not-clickable",t[3])},m(n,s){f(n,e,s),a||(r=x(e,"click",t[4]),a=!0)},p(t,[s]){4&s&&n!==(n=`quote by ${t[2]}`)&&$(e,"title",n),3&s&&v(e,"active",t[0]===t[1]),8&s&&v(e,"not-clickable",t[3])},i:y,o:y,d(t){t&&c(e),a=!1,r()}}}function J(t,e,n){let{quoteIndex:s}=e,{counter:a}=e,{attribution:r}=e,{autoPlaying:l}=e;return t.$$set=t=>{"quoteIndex"in t&&n(0,s=t.quoteIndex),"counter"in t&&n(1,a=t.counter),"attribution"in t&&n(2,r=t.attribution),"autoPlaying"in t&&n(3,l=t.autoPlaying)},[s,a,r,l,function(e){b(t,e)}]}class K extends t{constructor(t){super(),e(this,t,J,F,n,{quoteIndex:0,counter:1,attribution:2,autoPlaying:3})}}function W(t){let e,n,a,i,h,m,d;return{c(){e=s("section"),n=s("label"),a=s("input"),i=r(),h=s("span"),this.h()},l(t){e=l(t,"SECTION",{id:!0,class:!0});var s=o(e);n=l(s,"LABEL",{class:!0});var r=o(n);a=l(r,"INPUT",{type:!0,class:!0}),i=u(r),h=l(r,"SPAN",{class:!0}),o(h).forEach(c),r.forEach(c),s.forEach(c),this.h()},h(){$(a,"type","checkbox"),$(a,"class","svelte-1i1zxen"),$(h,"class","slider round svelte-1i1zxen"),$(n,"class","switch svelte-1i1zxen"),$(e,"id","auto-play-cont"),$(e,"class","svelte-1i1zxen")},m(s,r){f(s,e,r),g(e,n),g(n,a),a.checked=t[0],g(n,i),g(n,h),m||(d=[x(a,"change",t[2]),x(a,"change",t[1])],m=!0)},p(t,[e]){1&e&&(a.checked=t[0])},i:y,o:y,d(t){t&&c(e),m=!1,w(d)}}}function X(t,e,n){let{switchOn:s}=e;return t.$$set=t=>{"switchOn"in t&&n(0,s=t.switchOn)},[s,function(e){b(t,e)},function(){s=this.checked,n(0,s)}]}class Y extends t{constructor(t){super(),e(this,t,X,W,n,{switchOn:0})}}function Z(t,e,n){const s=t.slice();return s[5]=e[n],s[13]=n,s}function tt(t){let e,n;return e=new _({props:{quote:t[5],author:t[3],image:t[4]}}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p(t,n){const s={};32&n&&(s.quote=t[5]),8&n&&(s.author=t[3]),16&n&&(s.image=t[4]),e.$set(s)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function et(t){let e,n;return e=new K({props:{counter:t[13],quoteIndex:t[0],autoPlaying:t[2],attribution:t[5].author}}),e.$on("click",(function(){return t[10](t[13])})),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p(n,s){t=n;const a={};1&s&&(a.quoteIndex=t[0]),4&s&&(a.autoPlaying=t[2]),e.$set(a)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function nt(t){let e,h,m,d,p,b,B,N,L,M,z,C,H,G,R,U=t[5],_=tt(t),F=Q,J=[];for(let n=0;n<F.length;n+=1)J[n]=et(Z(t,F,n));const K=t=>P(J[t],1,1,(()=>{J[t]=null}));function W(e){t[11](e)}let X={};return void 0!==t[1]&&(X.switchOn=t[1]),z=new Y({props:X}),S.push((()=>A(z,"switchOn",W))),z.$on("change",t[8]),{c(){e=s("div"),_.c(),h=r(),m=s("span"),d=a("❮"),p=r(),b=s("span"),B=a("❯"),N=r(),L=s("div");for(let t=0;t<J.length;t+=1)J[t].c();M=r(),k(z.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var n=o(e);_.l(n),h=u(n),m=l(n,"SPAN",{href:!0,class:!0,title:!0});var s=o(m);d=i(s,"❮"),s.forEach(c),p=u(n),b=l(n,"SPAN",{href:!0,class:!0,title:!0});var a=o(b);B=i(a,"❯"),a.forEach(c),n.forEach(c),N=u(t),L=l(t,"DIV",{class:!0});var r=o(L);for(let e=0;e<J.length;e+=1)J[e].l(r);M=u(r),q(z.$$.fragment,r),r.forEach(c),this.h()},h(){$(m,"href","#prev"),$(m,"class","prev svelte-elw41n"),$(m,"title","previous quote"),v(m,"not-clickable",t[2]),$(b,"href","#next"),$(b,"class","next svelte-elw41n"),$(b,"title","next quote"),v(b,"not-clickable",t[2]),$(e,"class","slideshow-container svelte-elw41n"),$(L,"class","dot-container svelte-elw41n")},m(n,s){f(n,e,s),_.m(e,null),g(e,h),g(e,m),g(m,d),g(e,p),g(e,b),g(b,B),f(n,N,s),f(n,L,s);for(let t=0;t<J.length;t+=1)J[t].m(L,null);g(L,M),E(z,L,null),H=!0,G||(R=[x(m,"click",t[7]),x(b,"click",t[6])],G=!0)},p(t,[s]){if(32&s&&n(U,U=t[5])?(D(),P(_,1,1,y),O(),_=tt(t),_.c(),I(_),_.m(e,h)):_.p(t,s),4&s&&v(m,"not-clickable",t[2]),4&s&&v(b,"not-clickable",t[2]),5&s){let e;for(F=Q,e=0;e<F.length;e+=1){const n=Z(t,F,e);J[e]?(J[e].p(n,s),I(J[e],1)):(J[e]=et(n),J[e].c(),I(J[e],1),J[e].m(L,M))}for(D(),e=F.length;e<J.length;e+=1)K(e);O()}const a={};!C&&2&s&&(C=!0,a.switchOn=t[1],T((()=>C=!1))),z.$set(a)},i(t){if(!H){I(_);for(let t=0;t<F.length;t+=1)I(J[t]);I(z.$$.fragment,t),H=!0}},o(t){P(_),J=J.filter(Boolean);for(let e=0;e<J.length;e+=1)P(J[e]);P(z.$$.fragment,t),H=!1},d(t){t&&c(e),_.d(t),t&&c(N),t&&c(L),V(J,t),j(z),G=!1,w(R)}}}function st(t,e,n){let s,a,r,l=0;const o=()=>{n(0,l===Q.length-1?l=0:l+=1)};let i,c=!1,u=!1;return t.$$.update=()=>{1&t.$$.dirty&&console.log(l),1&t.$$.dirty&&n(5,s=Q[l].quote),1&t.$$.dirty&&n(3,a=Q[l].author),1&t.$$.dirty&&n(4,r=Q[l].image),1&t.$$.dirty&&console.log(l),512&t.$$.dirty&&console.log(i)},[l,c,u,a,r,s,o,()=>{n(0,0===l?l=Q.length-1:l-=1)},()=>{c?(n(9,i=setInterval(o,5e3)),n(2,u=!0)):(clearInterval(i),n(2,u=!1))},i,t=>n(0,l=t),function(t){c=t,n(1,c)}]}class at extends t{constructor(t){super(),e(this,t,st,nt,n,{})}}const rt=t=>({}),lt=t=>({}),ot=t=>({}),it=t=>({}),ct=t=>({}),ut=t=>({});function $t(t){let e;const n=t[6].hasimage,a=N(n,t,t[5],ut),r=a||function(t){let e,n;return{c(){e=s("img"),this.h()},l(t){e=l(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(n=t[2])&&$(e,"src",n),$(e,"alt","Imagen"),$(e,"class","svelte-1iribl9")},m(t,n){f(t,e,n)},p(t,s){4&s&&e.src!==(n=t[2])&&$(e,"src",n)},d(t){t&&c(e)}}}(t);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){a?a.p&&32&e&&B(a,n,t,t[5],e,ct,ut):r&&r.p&&4&e&&r.p(t,e)},i(t){e||(I(r,t),e=!0)},o(t){P(r,t),e=!1},d(t){r&&r.d(t)}}}function ht(t){let e,n,h,d,p,v,x,y,b,w,k,q,E,j=t[2]&&$t(t);const S=t[6].hasvideo,A=N(S,t,t[5],it),T=t[6].hasSVG,V=N(T,t,t[5],lt),L=t[6].default,M=N(L,t,t[5],null);return{c(){e=s("div"),n=s("div"),j&&j.c(),h=r(),A&&A.c(),d=r(),V&&V.c(),p=r(),v=s("div"),x=s("h2"),y=a(t[0]),b=r(),w=s("p"),k=r(),M&&M.c(),this.h()},l(s){e=l(s,"DIV",{class:!0});var a=o(e);n=l(a,"DIV",{class:!0});var r=o(n);j&&j.l(r),h=u(r),A&&A.l(r),d=u(r),V&&V.l(r),r.forEach(c),p=u(a),v=l(a,"DIV",{class:!0});var $=o(v);x=l($,"H2",{class:!0});var f=o(x);y=i(f,t[0]),f.forEach(c),b=u($),w=l($,"P",{class:!0}),o(w).forEach(c),k=u($),M&&M.l($),$.forEach(c),a.forEach(c),this.h()},h(){$(n,"class","BannerMedia svelte-1iribl9"),$(x,"class","svelte-1iribl9"),$(w,"class","svelte-1iribl9"),$(v,"class","BannerText svelte-1iribl9"),$(e,"class",q="Banner "+t[4][t[3]]+" svelte-1iribl9")},m(s,a){f(s,e,a),g(e,n),j&&j.m(n,null),g(n,h),A&&A.m(n,null),g(n,d),V&&V.m(n,null),g(e,p),g(e,v),g(v,x),g(x,y),g(v,b),g(v,w),w.innerHTML=t[1],g(v,k),M&&M.m(v,null),E=!0},p(t,[s]){t[2]?j?(j.p(t,s),4&s&&I(j,1)):(j=$t(t),j.c(),I(j,1),j.m(n,h)):j&&(D(),P(j,1,1,(()=>{j=null})),O()),A&&A.p&&32&s&&B(A,S,t,t[5],s,ot,it),V&&V.p&&32&s&&B(V,T,t,t[5],s,rt,lt),(!E||1&s)&&m(y,t[0]),(!E||2&s)&&(w.innerHTML=t[1]),M&&M.p&&32&s&&B(M,L,t,t[5],s,null,null),(!E||8&s&&q!==(q="Banner "+t[4][t[3]]+" svelte-1iribl9"))&&$(e,"class",q)},i(t){E||(I(j),I(A,t),I(V,t),I(M,t),E=!0)},o(t){P(j),P(A,t),P(V,t),P(M,t),E=!1},d(t){t&&c(e),j&&j.d(),A&&A.d(t),V&&V.d(t),M&&M.d(t)}}}function ft(t,e,n){let{$$slots:s={},$$scope:a}=e,{title:r=""}=e,{text:l=""}=e,{img:o=""}=e,{variante:i=0}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"text"in t&&n(1,l=t.text),"img"in t&&n(2,o=t.img),"variante"in t&&n(3,i=t.variante),"$$scope"in t&&n(5,a=t.$$scope)},[r,l,o,i,["variante_0","variante_1"],a,s]}class gt extends t{constructor(t){super(),e(this,t,ft,ht,n,{title:0,text:1,img:2,variante:3})}}function mt(t){let e,n;return e=new L({props:{variante:1,text:"cta text",url:"#"}}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p:y,i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function dt(t){let e,n;return e=new gt({props:{variante:1,title:"CTA Banner",text:"Labore est temporibus odit, exercitationem et magnam",img:"./img/bg1.jpg",$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}class pt extends t{constructor(t){super(),e(this,t,null,dt,n,{})}}function vt(t,e,n){const s=t.slice();return s[0]=e[n].url,s[1]=e[n].name,s}function xt(t){let e,n,h,m=t[1]+"";return{c(){e=s("a"),n=a(m),h=r(),this.h()},l(t){e=l(t,"A",{href:!0,class:!0,role:!0});var s=o(e);n=i(s,m),h=u(s),s.forEach(c),this.h()},h(){$(e,"href",t[0]),$(e,"class","NavItem svelte-9xzbdf"),$(e,"role","navigation")},m(t,s){f(t,e,s),g(e,n),g(e,h)},p:y,d(t){t&&c(e)}}}function yt(t){let e,n=G,a=[];for(let s=0;s<n.length;s+=1)a[s]=xt(vt(t,n,s));return{c(){e=s("nav");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=l(t,"NAV",{class:!0});var n=o(e);for(let e=0;e<a.length;e+=1)a[e].l(n);n.forEach(c),this.h()},h(){$(e,"class","svelte-9xzbdf")},m(t,n){f(t,e,n);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(t,[s]){if(0&s){let r;for(n=G,r=0;r<n.length;r+=1){const l=vt(t,n,r);a[r]?a[r].p(l,s):(a[r]=xt(l),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},i:y,o:y,d(t){t&&c(e),V(a,t)}}}class bt extends t{constructor(t){super(),e(this,t,null,yt,n,{})}}function wt(t){let e,n;return e=new M({props:{title:z[0].title,subtitle:z[0].subtitle,text:z[0].text,img:z[0].img}}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p:y,i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function kt(t){let e,n;return e=new bt({}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function qt(t){let e,n;return e=new at({}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function Et(t){let e,n;return e=new pt({}),{c(){k(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function It(t){let e,n,s,a,l,o,i,$;return e=new C({props:{id:"cover",variante:1,$$slots:{default:[wt]},$$scope:{ctx:t}}}),s=new C({props:{id:"navsecondary",variante:1,$$slots:{default:[kt]},$$scope:{ctx:t}}}),l=new C({props:{id:"quoterotator",variante:1,$$slots:{default:[qt]},$$scope:{ctx:t}}}),i=new C({props:{id:"ctabanner",variante:1,$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){k(e.$$.fragment),n=r(),k(s.$$.fragment),a=r(),k(l.$$.fragment),o=r(),k(i.$$.fragment)},l(t){q(e.$$.fragment,t),n=u(t),q(s.$$.fragment,t),a=u(t),q(l.$$.fragment,t),o=u(t),q(i.$$.fragment,t)},m(t,r){E(e,t,r),f(t,n,r),E(s,t,r),f(t,a,r),E(l,t,r),f(t,o,r),E(i,t,r),$=!0},p(t,[n]){const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),i.$set(c)},i(t){$||(I(e.$$.fragment,t),I(s.$$.fragment,t),I(l.$$.fragment,t),I(i.$$.fragment,t),$=!0)},o(t){P(e.$$.fragment,t),P(s.$$.fragment,t),P(l.$$.fragment,t),P(i.$$.fragment,t),$=!1},d(t){j(e,t),t&&c(n),j(s,t),t&&c(a),j(l,t),t&&c(o),j(i,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,It,n,{})}}