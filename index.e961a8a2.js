!function(){const e=[],t=()=>e.forEach((e=>e()));window.addEventListener("DOMContentLoaded",t),window.addEventListener("popstate",t);let r=null,n=Date.now();const o=e=>fetch(`https://cors-proxy.htmldriven.com/?url=${e}`).then((e=>e.json())).catch((()=>{throw new Error("Failed to load comic data")})),a=()=>!r||Date.now()-n>3e5?o("https://xkcd.com/info.0.json").then((e=>(r=e,n=Date.now(),e))):Promise.resolve(r),l=document.querySelector(".strip"),c=l.querySelector(".strip__btn-display-toggle"),i=l.querySelector(".strip__image"),s=l.querySelector(".strip__transcript"),u=l.querySelector(".strip__title"),d=l.querySelector(".strip__date"),m=l.querySelector(".strip__alt-text"),p=l.querySelector(".strip__source-link");c.addEventListener("click",(()=>{i.classList.toggle("visually-hidden"),s.classList.toggle("visually-hidden")}));const h=document.querySelector(".navigation");h.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(r=>{var n;r.preventDefault(),n=new URL(e.href).searchParams.get("n"),history.pushState(null,null,n?`?n=${encodeURIComponent(n)}`:"?"),t()}))}));const y=h.querySelector("[data-navlink-first]"),v=h.querySelector("[data-navlink-prev]"),g=h.querySelector("[data-navlink-next]"),f=h.querySelector("[data-navlink-latest]");(t=>{const r=()=>{const e=new URL(location).searchParams.get("n")||"";t(e)};e.push(r)})((e=>{(e=>a().then((({num:t})=>{const r=parseInt(e);return!isNaN(r)&&r>=1&&r<=t?e:"random"===e?Math.floor(Math.random()*t+1).toString():""})))(e).then((r=>{if(e!==r)return(e=>{history.replaceState(null,null,e?`?n=${encodeURIComponent(e)}`:"?"),t()})(r);var n;(n=r,n?o(`https://xkcd.com/${n}/info.0.json`):a()).then((e=>{(e=>{var t;i.src=e.img,s.innerHTML=(t=e.transcript)?t.replace(/{{.*([aA]lt|[tT]ext):.*}}/,"").trim().replaceAll(/(?<!\<)\<(?!\<)/g,"&lt;").replaceAll(/(?<!\>)\>(?!\>)/g,"&gt;").replaceAll(/\<\<([\w\W]*?)\>\>/g,"<code>$1</code>").replaceAll(/\[\[([\w\W]*?)\]\]/g,"<strong>$1</strong>").replaceAll(/\(\(([\w\W]*?)\)\)/g,"<em>$1</em>").split("\n\n").map((e=>`<p>${e.replaceAll("\n","<br>")}</p>`)).join(""):"<em>No transcript available</em>",u.innerHTML=`#${e.num}: ${e.title}`;const{year:r,month:n,day:o}=e,a=new Date(r,n-1,o);d.textContent=`Posted on ${a.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}`,m.textContent=e.alt,p.href=`https://xkcd.com/${e.num}`})(e),a().then((t=>{var r,n;displayedNum=e.num,latestNum=t.num,r=displayedNum,n=latestNum,1===r?(v.removeAttribute("href"),y.removeAttribute("href")):(v.href="?n="+(r-1),y.href="?n=1"),r===n?(g.removeAttribute("href"),f.removeAttribute("href")):(g.href=`?n=${r+1}`,f.href="?")}))}))}))}))}();