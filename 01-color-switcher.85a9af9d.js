const e=document.body,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{interval=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),a.addEventListener("click",(()=>{t.disabled=!1,clearInterval(interval)}));
//# sourceMappingURL=01-color-switcher.85a9af9d.js.map
