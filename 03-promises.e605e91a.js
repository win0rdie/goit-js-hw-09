var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n&&o({position:e,delay:t}),r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let t=+e.currentTarget.delay.value,n=+e.currentTarget.step.value,o=+e.currentTarget.amount.value;for(let e=1;e<=o;e++)i(e,t).then((({position:e,delay:t})=>{setTimeout((()=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}))})).catch((({position:e,delay:t})=>{setTimeout((()=>{r.Notify.warning(`❌ Rejected promise ${e} in ${t}ms`)}))})),t+=n}));
//# sourceMappingURL=03-promises.e605e91a.js.map