
addEventListener('DOMContentLoaded', () => {
  console.log(document.styleSheets);
  let css


  // Comprueba cual es la hoja de estilo principal
  for (const i of document.styleSheets) {
    if (i.href.includes('localhost')) 
      css = i
  }
  console.log(css);

  // css.forEach(el => {
  //   if (el.selectorText ===  'search__input') console.log(el);
  // });
  let importants

  for (const el of css.cssRules) {
    if (el.selectorText === '.search__input.important') {
      console.log(el);
      console.log(el.cssText);
      importants = el.cssText.replace(/;/g, '!important;')
      
      // console.log(el.cssText);
      // console.log(el);
    }
  }
  console.log(importants);
  css.insertRule(importants, 0); 
})


// css[890].cssText