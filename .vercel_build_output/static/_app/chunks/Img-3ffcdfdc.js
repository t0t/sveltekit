import{S as s,i as a,s as t,k as r,f as e,n as c,d as l,e as n,j as i,t as h,c as u,a as f,l as o,b as m,o as g,g as d,h as v,P as I}from"./index-d91e1ed8.js";function k(s){let a,t,r,c,I,k,p;return{c(){a=n("figure"),t=n("img"),c=i(),I=n("figcaption"),k=h(s[2]),this.h()},l(r){a=u(r,"FIGURE",{class:!0});var e=f(a);t=u(e,"IMG",{src:!0,alt:!0,href:!0,class:!0}),c=o(e),I=u(e,"FIGCAPTION",{class:!0});var n=f(I);k=m(n,s[2]),n.forEach(l),e.forEach(l),this.h()},h(){t.src!==(r=s[0])&&g(t,"src",r),g(t,"alt",s[2]),g(t,"href",s[3]),g(t,"class","svelte-tkranu"),g(I,"class","alt svelte-tkranu"),g(a,"class",p=s[5][s[4]]+" "+s[1]+" svelte-tkranu")},m(s,r){e(s,a,r),d(a,t),d(a,c),d(a,I),d(I,k)},p(s,e){1&e&&t.src!==(r=s[0])&&g(t,"src",r),4&e&&g(t,"alt",s[2]),8&e&&g(t,"href",s[3]),4&e&&v(k,s[2]),18&e&&p!==(p=s[5][s[4]]+" "+s[1]+" svelte-tkranu")&&g(a,"class",p)},d(s){s&&l(a)}}}function p(s){let a,t,r;return{c(){a=n("img"),this.h()},l(s){a=u(s,"IMG",{src:!0,alt:!0,href:!0,class:!0}),this.h()},h(){a.src!==(t=s[0])&&g(a,"src",t),g(a,"alt",s[2]),g(a,"href",s[3]),g(a,"class",r=s[5][s[4]]+" "+s[1]+" svelte-tkranu")},m(s,t){e(s,a,t)},p(s,e){1&e&&a.src!==(t=s[0])&&g(a,"src",t),4&e&&g(a,"alt",s[2]),8&e&&g(a,"href",s[3]),18&e&&r!==(r=s[5][s[4]]+" "+s[1]+" svelte-tkranu")&&g(a,"class",r)},d(s){s&&l(a)}}}function _(s){let a,t;return{c(){a=n("div"),this.h()},l(s){a=u(s,"DIV",{class:!0,style:!0}),f(a).forEach(l),this.h()},h(){g(a,"class",t=s[5][s[4]]+" "+s[1]+" svelte-tkranu"),I(a,"background-image","url("+s[0]+")")},m(s,t){e(s,a,t)},p(s,r){18&r&&t!==(t=s[5][s[4]]+" "+s[1]+" svelte-tkranu")&&g(a,"class",t),1&r&&I(a,"background-image","url("+s[0]+")")},d(s){s&&l(a)}}}function E(s){let a;function t(s,a){return 0===s[4]||3===s[4]||4===s[4]?_:1===s[4]||5===s[4]?p:k}let n=t(s),i=n(s);return{c(){i.c(),a=r()},l(s){i.l(s),a=r()},m(s,t){i.m(s,t),e(s,a,t)},p(s,[r]){n===(n=t(s))&&i?i.p(s,r):(i.d(1),i=n(s),i&&(i.c(),i.m(a.parentNode,a)))},i:c,o:c,d(s){i.d(s),s&&l(a)}}}function G(s,a,t){let{src:r}=a,{clases:e=""}=a,{alt:c="Imagen"}=a,{href:l}=a,{variante:n=0}=a;return s.$$set=s=>{"src"in s&&t(0,r=s.src),"clases"in s&&t(1,e=s.clases),"alt"in s&&t(2,c=s.alt),"href"in s&&t(3,l=s.href),"variante"in s&&t(4,n=s.variante)},[r,e,c,l,n,["Img_0","Img_1","Img_2","Img_3","Img_4","Img_5"]]}class b extends s{constructor(s){super(),a(this,s,G,E,t,{src:0,clases:1,alt:2,href:3,variante:4})}}export{b as I};