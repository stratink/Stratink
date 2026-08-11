document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('AppPage').forEach(el => {
    const title = el.getAttribute('title') || 'Stratink';
    const back = el.getAttribute('back') || 'residentHome';
    const header = document.createElement('header');
    header.className = 'page-top';
    header.innerHTML = `<button class="back" data-screen="${back}">‹</button><h2>${title}</h2>`;
    el.replaceWith(header);
  });
  function showScreen(id){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
  }
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-screen]');
    if(!btn) return;
    e.preventDefault();
    showScreen(btn.dataset.screen);
  });
});
