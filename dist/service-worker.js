if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return d;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"6169b652b2d1abaa4a3edfe0e9d281e2"},{url:"72a0ddb5550a25ee4345dbe17f1baa19.jpg",revision:"08d78a2e9d8e4345d937224534e250d7"},{url:"images/bg_news.jpg",revision:"08d78a2e9d8e4345d937224534e250d7"},{url:"images/favicon-16x16.png",revision:"0f0a9d24ce21fe7f0f7080725f3337e0"},{url:"images/favicon-32x32.png",revision:"e734c0572925577ee2206165ba3bb9c2"},{url:"images/favicon.ico",revision:"987c3df24e58bfd269dd361f7325696f"},{url:"main.css",revision:"906a49075fc168aa37ad4c797deffdcc"},{url:"main.js",revision:"dbeaaca9163db2db2bcefadd265d73cf"}],{})}));
