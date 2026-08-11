document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('AppHeader').forEach(el => {
    const title = el.getAttribute('title') || 'Stratink';
    const back = el.getAttribute('back') || 'residentHome';
    const header = document.createElement('header');
    header.className = 'page-top';
    header.innerHTML = `<button class="back" data-screen="${back}">‹</button><h2>${title}</h2>`;
    el.replaceWith(header);
  });
  function showScreen(id){
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
  }
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-screen]');
    if(!trigger) return;
    e.preventDefault();
    showScreen(trigger.dataset.screen);
  });
});
