function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove(".fijo"):e.classList.add("fijo")})).observe(document.querySelector(".descripcion"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),console.log();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarimagen;const c=document.createElement("Li");c.appendChild(n),e.appendChild(c)}}function mostrarimagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const c=document.createElement("DIV");c.appendChild(n),c.classList.add("overlay");const o=document.createElement("p");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){c.remove()},c.appendChild(o);const a=document.querySelector("body");a.appendChild(c),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
