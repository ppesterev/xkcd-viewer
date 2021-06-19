!function(){const e=[],t=()=>e.forEach((e=>e()));window.addEventListener("DOMContentLoaded",t),window.addEventListener("popstate",t);let r=null,l=Date.now();const n=e=>fetch(`https://eigencors.herokuapp.com/${e}`).then((e=>e.json())).catch((()=>{throw new Error("Failed to load comic data")})),a=()=>!r||Date.now()-l>3e5?n("https://xkcd.com/info.0.json").then((e=>(r=e,l=Date.now(),e))):Promise.resolve(r),o=document.querySelector("[data-strip-placeholder]"),s=document.querySelector("[data-strip-placeholder-message]"),i=document.querySelector(".strip"),c=i.querySelector("[data-strip-view-toggle]"),d=i.querySelector("[data-strip-image]"),p=i.querySelector("[data-strip-transcript]"),u=i.querySelector("[data-strip-number]"),h=i.querySelector("[data-strip-title]"),m=i.querySelector("[data-strip-date]"),y=i.querySelector("[data-strip-alt-text]"),g=i.querySelector("[data-strip-source-link]"),v=i.querySelector("[data-strip-explain-link]"),f=()=>{o.style.display=null,i.style.display="none",o.style.display=null,i.style.display="none",o.classList.add("strip-placeholder--loading"),o.classList.remove("strip-placeholder--error"),s.textContent="Loading..."},S=e=>{if(!e)return o.style.display=null,i.style.display="none",o.classList.remove("strip-placeholder--loading"),o.classList.add("strip-placeholder--error"),void(s.textContent="Error loading strip data");o.style.display="none",i.style.display=null;const t=new Image;if(t.src=e.img,d.innerHTML="",e.link){const r=document.createElement("a");r.href=e.link,r.target="blank",r.appendChild(t),d.appendChild(r)}else d.appendChild(t);var r;p.innerHTML=(r=e.transcript)?r.replace(/{{[^{]*?([aA]lt|[tT]itle)[\ -]?([tT]ext)*:[^}]*?}}/,"").trim().replaceAll(/(?<!\<)\<(?!\<)/g,"&lt;").replaceAll(/(?<!\>)\>(?!\>)/g,"&gt;").replaceAll(/\<\<([\w\W]*?)\>\>/g,"<code>$1</code>").replaceAll(/\[\[([\w\W]*?)\]\]/g,"<strong>$1</strong>").replaceAll(/\(\(([\w\W]*?)\)\)/g,"<em>$1</em>").replaceAll(/\{\{([\w\W]*?)\}\}/g,"<em><strong>$1</strong></em>").split("\n\n").map((e=>`<p>${e.replaceAll("\n","<br>")}</p>`)).join(""):"<em>No transcript available</em>",u.textContent=`#${e.num}:`,h.innerHTML=`${e.title}`;const{year:l,month:n,day:a}=e,c=new Date(l,n-1,a);m.textContent=`Posted on ${c.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}`,y.textContent=e.alt,g.href=`https://xkcd.com/${e.num}`,v.href=`https://www.explainxkcd.com/wiki/index.php/${e.num}`};c.addEventListener("click",(()=>{d.classList.toggle("visually-hidden"),p.classList.toggle("visually-hidden"),c.classList.toggle("toggle-btn--image"),c.classList.toggle("toggle-btn--transcript")}));const w=document.querySelector(".navigation");w.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(r=>{var l;r.preventDefault(),e.hasAttribute("href")&&(l=e.href.split("#")[1],history.pushState(null,null,l?`#${encodeURIComponent(l)}`:"#"),t())}))}));const q=w.querySelector("[data-navlink-first]"),L=w.querySelector("[data-navlink-prev]"),k=w.querySelector("[data-navlink-next]"),x=w.querySelector("[data-navlink-latest]");f(),(t=>{const r=()=>{const e=location.hash.slice(1)||"";t(e)};e.push(r)})((e=>{(e=>a().then((({num:t})=>{const r=parseInt(e);return!isNaN(r)&&r>=1&&r<=t?e:"random"===e?Math.floor(Math.random()*t+1).toString():""})))(e).then((r=>{if(e!==r)return(e=>{history.replaceState(null,null,e?`#${encodeURIComponent(e)}`:"#"),t()})(r);var l;a().then((e=>{var t,l;latestNum=e.num,displayedNum=parseInt(r)||latestNum,t=displayedNum,l=latestNum,1===t?(L.removeAttribute("href"),q.removeAttribute("href")):(L.href="#"+(t-1),q.href="#1"),t===l?(k.removeAttribute("href"),x.removeAttribute("href")):(k.href=`#${t+1}`,x.href="#")})),f(),(l=r,l?n(`https://xkcd.com/${l}/info.0.json`):a()).then((e=>{S(e)})).catch((()=>{S(null)}))}))}))}();