document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click',()=>{
    const visible = links.style.display === 'flex';
    links.style.display = visible ? 'none' : 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth<900){
          document.querySelector('.nav-links').style.display='none';
        }
      }
    })
  })
});
