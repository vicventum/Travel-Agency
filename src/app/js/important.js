addEventListener('DOMContentLoaded', () => {
  // console.log(document.styleSheets);
  let css

  // Comprueba cual es la hoja de estilo principal
  for (const i of document.styleSheets) {
    console.log(i);
    if (i.href !== null && (i.href.includes('localhost') || i.href.includes('github')) 
      css = i
  }

  let importants = []

  
  // Encontrando todos los importants
  for (const el of css.cssRules){
    // console.log(el.selectorText);
    if (el.selectorText !== undefined && el.selectorText.includes('important')) {
      console.log(el);
      // Asignando los !importants a los selectores indicados
      importants.push(el.cssText.replace(/;/g, '!important;')) 
    }
  }

  console.log(importants);
  // Inserta todos los importants en el DOM
  importants.forEach(el => css.insertRule(el, 0));
})
