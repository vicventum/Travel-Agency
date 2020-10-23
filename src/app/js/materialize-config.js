
// ScrollSpy
document.addEventListener('DOMContentLoaded', () => {
  const scrollspy = document.querySelectorAll('.scrollspy')
  M.ScrollSpy.init(scrollspy)
})

// Slider
const slider = document.querySelector('.slider')
M.Slider.init(slider, {
  indicators: false,
  height: 510,
  transition: 500,
  interval: 6000
})

// Slider
const sidenav = document.querySelector('.sidenav')
M.Sidenav.init(sidenav)

// Autocomplete
const ac = document.querySelectorAll('.autocomplete')
M.Autocomplete.init(ac, {
  data: {
    'Aruba': null,
    'Cancun Mexico': null,
    'Hawaii': null,
    'Florida': null,
    'California': null,
    'Jamaica': null,
    'Islas Las Palmas': null
  }
})

// Lightbox
const materialbox = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialbox)