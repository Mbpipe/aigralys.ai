let currentLang = 'es';
function toggleLanguage(){
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const btn = document.querySelector('.lang-switch');
  btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.querySelectorAll('[data-es]').forEach(el=>{
    const text = el.getAttribute(`data-${currentLang}`);
    if(text){
      if(el.children.length===0){
        el.textContent = text;
      }else{
        const textNodes=[...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE);
        if(textNodes.length>0){ textNodes[0].textContent = text; }
      }
    }
  });
  document.documentElement.lang = currentLang;
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target=document.querySelector(a.getAttribute('href'));
    if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
const observerOptions={threshold:0.1, rootMargin:'0px 0px -100px 0px'};
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
    }
  });
},observerOptions);
document.querySelectorAll('.domain-card, .app-card, .insight-card').forEach(card=>{
  card.style.opacity='0';card.style.transform='translateY(30px)';
  card.style.transition='opacity .8s ease, transform .8s ease';
  observer.observe(card);
});
