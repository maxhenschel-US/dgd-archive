// Console log info
console.log("Name: Max Henschel");
console.log("GitHub: https://github.com/maxhenschel-us");
console.log("Email: maxhenschel@gmail.com");
console.log("Artist: fashi0ncrime$");

// Fade-in effect on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  },
  {
    threshold: 0.25,
  }
);

sections.forEach(section => observer.observe(section));
