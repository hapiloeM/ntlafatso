(function(){
  const btn = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-nav-links]');
  if(btn && menu){
    btn.addEventListener('click', ()=> menu.classList.toggle('open'));
  }

  // Active link based on pathname
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav-links] a').forEach(a=>{
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === path) a.classList.add('active');
  });

  // Contact form helper: open mail client with prefilled subject/body
  const form = document.querySelector('[data-mailto-form]');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = form.getAttribute('data-to') || 'info@ntlafatsoconsulting.com';
      const subject = encodeURIComponent(form.querySelector('[name="subject"]').value || 'Enquiry');
      const name = form.querySelector('[name="name"]').value || '';
      const org = form.querySelector('[name="org"]').value || '';
      const message = form.querySelector('[name="message"]').value || '';
      const body = encodeURIComponent(
        `Name: ${name}
Organisation: ${org}

${message}
`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
})();
