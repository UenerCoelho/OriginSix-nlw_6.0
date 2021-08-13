/* Abre e fecha o menu quando clicar nos ícones: hambúrguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // Se o Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Se o Scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Swiper library
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  // Swiper Pagination
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// ScrollReveal Library
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Back-to-top Button */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
