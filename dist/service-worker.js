if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let l={};const o=e=>n(e,s),f={module:{uri:s},exports:l,require:o};i[s]=Promise.all(d.map((e=>f[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"32bdddd9c6ea2a715f721b7d434fbb3b"},{url:"main.css",revision:"1c65e333f8af8975051ffa0715039f6b"},{url:"main.js",revision:"0a47df3127962f1d7742af521963e0b3"},{url:"media/compass_fdb604b42070ed538e1a19724776f390.png",revision:null},{url:"media/facebook_d27449d3893d1a0e8667c406112f3a21.png",revision:null},{url:"media/github_bcf7ee3aeb239af59e10a9cb9818dab8.png",revision:null},{url:"media/instagram_cb672f468bcd4e01523305fc80925d34.png",revision:null},{url:"media/linkedin_4a22f01bde04fca6d4a50c89e70d326d.png",revision:null}],{})}));
