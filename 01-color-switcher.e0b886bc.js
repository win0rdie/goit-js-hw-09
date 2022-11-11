const e=document.body,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");let d=null;t.addEventListener("click",(()=>{d=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),a.addEventListener("click",(()=>{t.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.e0b886bc.js.map
