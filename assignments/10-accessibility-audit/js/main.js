function init() {
  //helper nav script
  const toggles = document.querySelectorAll('.toggle');

  function handleToggle(toggle) {
    const target_id = toggle.dataset.target;

    const target = document.getElementById(target_id);
    const click_to_close = document.querySelector(`[data-toggle="${target_id}"]`);

    function open() {
      toggle.classList.add('open');
      target.classList.add('open');
      click_to_close.classList.add('open');
    }

    function close() {
      toggle.classList.remove('open');
      target.classList.remove('open');
      click_to_close.classList.remove('open');
    }

    function updateState() {
      if (toggle.classList.contains('open')) {
        close();
      } else {
        open();
      }
    }

    toggle.addEventListener('click', updateState);
    click_to_close.addEventListener('click', close);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        close();
      }
    });
  }

  toggles.forEach((toggle) => handleToggle(toggle));

  const to_top = document.querySelector('.to-top');

  function handleToTop() {
    if (window.scrollY > 50) {
      to_top.classList.add('visible');
    } else {
      to_top.classList.remove('visible');
    }
  }

  to_top && handleToTop();

  to_top && window.addEventListener('scroll', handleToTop);
}

document.addEventListener('DOMContentLoaded', init);
