// minimal horizontal scroll handler for arrow buttons
function setupScrollButtons(){
  document.querySelectorAll('.scroll-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-target');
      if(!id) return;
      const el = document.querySelector(id);
      if(!el) return;
      const amount = el.clientWidth * 0.8;
      el.scrollBy({left: btn.classList.contains('next') ? amount : -amount, behavior:'smooth'});
    });
  });
}
document.addEventListener('DOMContentLoaded', setupScrollButtons);

