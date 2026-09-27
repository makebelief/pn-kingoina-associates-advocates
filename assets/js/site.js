const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>30);
onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
toggle?.addEventListener('click',()=>links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const form=document.querySelector('[data-contact-form]');
form?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent(`Website enquiry: ${data.get('matter')||'Legal matter'}`);
  const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nMatter: ${data.get('matter')}\n\n${data.get('message')}`);
  window.location.href=`mailto:pnkingoinaassociateslegal@gmail.com?subject=${subject}&body=${body}`;
});

const revealEls=document.querySelectorAll('.practice-card,.insight,.value,.profile-photo,.profile-copy,.statement,.contact-card,.form-card');revealEls.forEach(el=>el.classList.add('reveal'));if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});revealEls.forEach(el=>io.observe(el))}else{revealEls.forEach(el=>el.classList.add('in'))}
