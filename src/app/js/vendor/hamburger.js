// Look for .hamburger
const hamburger = document.getElementById("iconHamburger"),
  header = document.getElementById('header'),
  body = document.getElementById('body'),
  links = document.querySelectorAll('.header__nav-link')

// On click
hamburger.addEventListener("click", () => {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  header.classList.toggle("open");
  body.classList.toggle("no-scroll")
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove("is-active");
  header.classList.remove("open");
    body.classList.remove("no-scroll")
  })
})
