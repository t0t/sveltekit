import{w as r}from"./index-5ff1f943.js";import{m as t,a2 as e,a3 as n,Z as o}from"./index-9877b8f5.js";function s(r){return"[object Date]"===Object.prototype.toString.call(r)}function i(r,t){if(r===t||r!=r)return()=>r;const e=typeof r;if(e!==typeof t||Array.isArray(r)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const e=t.map(((t,e)=>i(r[e],t)));return r=>e.map((t=>t(r)))}if("object"===e){if(!r||!t)throw new Error("Object cannot be null");if(s(r)&&s(t)){r=r.getTime();const e=(t=t.getTime())-r;return t=>new Date(r+t*e)}const e=Object.keys(t),n={};return e.forEach((e=>{n[e]=i(r[e],t[e])})),r=>{const t={};return e.forEach((e=>{t[e]=n[e](r)})),t}}if("number"===e){const e=t-r;return t=>r+t*e}throw new Error(`Cannot interpolate ${e} values`)}function a(s,a={}){const f=r(s);let u,c=s;function l(r,l){if(null==s)return f.set(s=r),Promise.resolve();c=r;let p=u,b=!1,{delay:m=0,duration:y=400,easing:w=o,interpolate:j=i}=t(t({},a),l);if(0===y)return p&&(p.abort(),p=null),f.set(s=c),Promise.resolve();const d=e()+m;let A;return u=n((t=>{if(t<d)return!0;b||(A=j(s,r),"function"==typeof y&&(y=y(s,r)),b=!0),p&&(p.abort(),p=null);const e=t-d;return e>y?(f.set(s=r),!1):(f.set(s=A(w(e/y))),!0)})),u.promise}return{set:l,update:(r,t)=>l(r(c,s),t),subscribe:f.subscribe}}export{a as t};