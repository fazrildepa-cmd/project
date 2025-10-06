// Small JS to handle interactions and subtle animations
document.getElementById('year').textContent = new Date().getFullYear();

function handleContact(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const message = f.message.value.trim();
  if(!name || !email || !message){
    alert('Please fill all fields.');
    return;
  }
  // This template includes a dummy submit — replace with your endpoint or email handler.
  alert('Thanks ' + name + '! This is a demo contact handler. Replace with your backend endpoint.');
  f.reset();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
toggle && toggle.addEventListener('click', ()=>{
  document.querySelector('.nav-links').classList.toggle('open');
});

// tiny reveal on scroll
const revealElements = document.querySelectorAll('.section-title, .project-card, .card, .stat, .skill, .about-text');
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting) en.target.classList.add('visible');
  })
},{threshold:0.12});
revealElements.forEach(el=>{
  el.classList.add('reveal');
  io.observe(el);
});
