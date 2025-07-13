document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('#main-nav');

  // Ensure both elements exist before adding the event listener
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      // Toggle the .is-open class on the navigation menu
      mainNav.classList.toggle('is-open');

      // Update the aria-expanded attribute for screen readers
      const isExpanded = mainNav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
});