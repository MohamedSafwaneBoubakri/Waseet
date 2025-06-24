// Reveal effect on scroll
const revealElements = document.querySelectorAll('[data-scroll]');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => {
  scrollObserver.observe(el);
});
