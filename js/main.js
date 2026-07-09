// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Contact form: client-side submit → success state
const inquiryForm = document.querySelector('#inquiry-form');
const successPanel = document.querySelector('#form-success');

if (inquiryForm && successPanel) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    inquiryForm.hidden = true;
    successPanel.hidden = false;
    successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  const resetButton = successPanel.querySelector('.form-reset');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      inquiryForm.reset();
      successPanel.hidden = true;
      inquiryForm.hidden = false;
    });
  }
}
