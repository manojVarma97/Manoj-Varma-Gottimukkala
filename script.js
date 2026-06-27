document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});
const obs=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)en.target.classList.add('show');}),{threshold:.1});
document.querySelectorAll('.card,.stats div,.section').forEach(e=>obs.observe(e));