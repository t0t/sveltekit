import{S as s,i as a,s as r,k as e,f as t,n as c,d as l,e as n,j as i,t as h,c as f,a as o,l as m,b as u,o as g,I as d,g as v,h as I,P as p}from"./index-d91e1ed8.js";function y(s){let a,r,e,c,p,y,z;return{c(){a=n("figure"),r=n("img"),c=i(),p=n("figcaption"),y=h(s[1]),this.h()},l(e){a=f(e,"FIGURE",{class:!0});var t=o(a);r=f(t,"IMG",{src:!0,alt:!0,href:!0,class:!0}),c=m(t),p=f(t,"FIGCAPTION",{class:!0});var n=o(p);y=u(n,s[1]),n.forEach(l),t.forEach(l),this.h()},h(){r.src!==(e=s[0])&&g(r,"src",e),g(r,"alt",s[1]),g(r,"href",s[2]),g(r,"class","svelte-9ry4za"),g(p,"class","alt svelte-9ry4za"),g(a,"class",z=d(s[4][s[3]])+" svelte-9ry4za")},m(s,e){t(s,a,e),v(a,r),v(a,c),v(a,p),v(p,y)},p(s,t){1&t&&r.src!==(e=s[0])&&g(r,"src",e),2&t&&g(r,"alt",s[1]),4&t&&g(r,"href",s[2]),2&t&&I(y,s[1]),8&t&&z!==(z=d(s[4][s[3]])+" svelte-9ry4za")&&g(a,"class",z)},d(s){s&&l(a)}}}function z(s){let a,r,e;return{c(){a=n("img"),this.h()},l(s){a=f(s,"IMG",{src:!0,alt:!0,href:!0,class:!0}),this.h()},h(){a.src!==(r=s[0])&&g(a,"src",r),g(a,"alt",s[1]),g(a,"href",s[2]),g(a,"class",e=d(s[4][s[3]])+" svelte-9ry4za")},m(s,r){t(s,a,r)},p(s,t){1&t&&a.src!==(r=s[0])&&g(a,"src",r),2&t&&g(a,"alt",s[1]),4&t&&g(a,"href",s[2]),8&t&&e!==(e=d(s[4][s[3]])+" svelte-9ry4za")&&g(a,"class",e)},d(s){s&&l(a)}}}function _(s){let a,r;return{c(){a=n("div"),this.h()},l(s){a=f(s,"DIV",{class:!0,style:!0}),o(a).forEach(l),this.h()},h(){g(a,"class",r=d(s[4][s[3]])+" svelte-9ry4za"),p(a,"background-image","url("+s[0]+")")},m(s,r){t(s,a,r)},p(s,e){8&e&&r!==(r=d(s[4][s[3]])+" svelte-9ry4za")&&g(a,"class",r),1&e&&p(a,"background-image","url("+s[0]+")")},d(s){s&&l(a)}}}function E(s){let a;function r(s,a){return 0===s[3]||3===s[3]||4===s[3]?_:1===s[3]||5===s[3]?z:y}let n=r(s),i=n(s);return{c(){i.c(),a=e()},l(s){i.l(s),a=e()},m(s,r){i.m(s,r),t(s,a,r)},p(s,[e]){n===(n=r(s))&&i?i.p(s,e):(i.d(1),i=n(s),i&&(i.c(),i.m(a.parentNode,a)))},i:c,o:c,d(s){i.d(s),s&&l(a)}}}function G(s,a,r){let{src:e}=a,{alt:t="Imagen"}=a,{href:c}=a,{variante:l=0}=a;return s.$$set=s=>{"src"in s&&r(0,e=s.src),"alt"in s&&r(1,t=s.alt),"href"in s&&r(2,c=s.href),"variante"in s&&r(3,l=s.variante)},[e,t,c,l,["Img_0","Img_1","Img_2","Img_3","Img_4","Img_5"]]}class b extends s{constructor(s){super(),a(this,s,G,E,r,{src:0,alt:1,href:2,variante:3})}}export{b as I};