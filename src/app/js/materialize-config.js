M.AutoInit()

// Slider
const slider = document.querySelector('.slider')
M.Slider.init(slider, {
  indicators: false,
  height: 510,
  transition: 500,
  interval: 6000
})

// Autocomplete
const ac = document.querySelector('.autocomplete')
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