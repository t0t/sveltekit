import{e}from"./writeEffect-ad25c0cc.js";import{t}from"./onAnimationEnd-c4ef4008.js";import"./typingInterval-b805e32c.js";const o=async({elements:o},c)=>{if(c.cascade)o.forEach((e=>e.currentNode.textContent=""));else{const{getLongestTextElement:e}=await import("./index-3d836196.js"),n=e(o);t(n,(()=>c.dispatch("done")))}for(const t of o)c.cascade?await e(t,c):e(t,c);c.cascade&&c.dispatch("done")};export{o as mode};
