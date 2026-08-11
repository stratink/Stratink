document.addEventListener('DOMContentLoaded', () => {
  // Replace custom Header tags with reusable screen headers.
  document.querySelectorAll('Header').forEach(header => {
    const title = header.getAttribute('data-title') || 'Stratink';
    const wrapper = document.createElement('div');
    wrapper.className = 'topbar';
    wrapper.innerHTML = `
      <button class="back ghost" data-screen="residentDashboard">‹</button>
      <div><h2>${title}</h2><p>Stratink Prototype</p></div>
      <div class="avatar">S</div>
    `;
    header.replaceWith(wrapper);
  });

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-screen]');
    if (!button) return;
    event.preventDefault();
    showScreen(button.dataset.screen);
  });
});
