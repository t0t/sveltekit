import{e}from"./writeEffect-ad25c0cc.js";import{t}from"./onAnimationEnd-c4ef4008.js";import"./typingInterval-b805e32c.js";const c=async({elements:c},o)=>{if(o.cascade)c.forEach((e=>e.currentNode.textContent=""));else{const{getLongestTextElement:e}=await import("./index-f4c9ab6a.js"),a=e(c);t(a,(()=>o.dispatch("done")))}for(const t of c)o.cascade?await e(t,o):e(t,o);o.cascade&&o.dispatch("done")};export{c as mode};
