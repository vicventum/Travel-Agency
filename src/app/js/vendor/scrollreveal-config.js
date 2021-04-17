import ScrollReveal  from "../../vendor/ScrollReveal/scrollreveal"
const sr = ScrollReveal({
    duration: 1300,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0.15, 1)'
})

// Header ---
// Logo
// sr.reveal('.brand-logo', {
//     opacity: 0,
//     distance: '50%',
//     origin: 'left',
//     duration: 2000,
//     delay: 800,
//     reset: false,
// })
// // navbar__menu
// sr.reveal('.navbar__menu li', {
//     opacity: 0,
//     distance: '20%',
//     interval: 150,
//     // duration: 2000
//     delay: 1500,
//     reset: false,
// })

// Hero ---
sr.reveal('.caption > *', {
    opacity: 0,
    distance: '20%',
    interval: 150,
    // duration: 2000
    // delay: 800
})

// section-icons ---
sr.reveal('.section-icons article', {
    opacity: 0,
    distance: '30%',
    interval: 200,
    origin: 'left',
})

// section-popular ---
sr.reveal('.section-popular article', {
    opacity: 0,
    distance: '20%',
    interval: 200,
    origin: 'right',
})

// section-gallery ---
sr.reveal('.section-gallery .row img', {
    opacity: 0,
    distance: '20%',
    interval: 150,
    origin: 'left',
    viewFactor: 0.4
})

// form ---
sr.reveal('.section-contact .input-field', {
    opacity: 0,
    distance: '50%',
    origin: 'bottom',
    duration: 1200,
    interval: 100,
})