/*i. afficher le titre de la page*/
console.log("Titre de la page web:", document.title);
/*i. afficher l'URL*/
console.log("URL de la page web:", window.location.href);
/*i. afficher la date et l'heure de l'analyse*/
const dateheure = new Date();
console.log("Date et heure de l’analyse:", dateheure);
/*i. afficher la largeur et la hauteur de la page*/
console.log("Largeur de la fenêtre:", window.innerWidth);
console.log("Hauteur de la fenêtre", window.innerHeight);


/*ii. donner des statistiques sur certaines balises clés telles que: header, nav, main, section, article, footer, h1, h2, p, a, img, form, input, button */
function countelements(tagName) {
    const elements = document.querySelectorAll(tagName);
    return elements.length;
}
console.log("Nombre total de <header>:", countelements('header'));
console.log("Nombre total de <nav>:", countelements('nav'));
console.log("Nombre total de <main>:", countelements('main'));
console.log("Nombre total de <section>:", countelements('section'));
console.log("Nombre total de <article>:", countelements('article'));
console.log("Nombre total de <footer>:", countelements('footer'));
console.log("Nombre total de <h1>:", countelements('h1'));
console.log("Nombre total de <h2>:", countelements('h2'));
console.log("Nombre total de <h3>:", countelements('h3'));
console.log("Nombre total de <h4>:", countelements('h4'));
console.log("Nombre total de <p>:", countelements('p'));
console.log("Nombre total de <a>:", countelements('a'));
console.log("Nombre total de <img>:", countelements('img'));
console.log("Nombre total de <form>:", countelements('form'));
console.log("Nombre total de <input>:", countelements('input'));
console.log("Nombre total de <div>:", countelements('div'));


/*iii. indiquer combien d'images possèdent un attibut de type alt non vide, combien n'en ont pas*/
let nbAltnvide = 0;
let nbAltvide = 0;
const images = document.querySelectorAll('img');
images.forEach(image => {
    const alt = image.alt;
    if (alt && alt.trim().length > 0) { nbAltnvide++; }
    else { nbAltvide++; }
});
console.log("Images avec alt non vide:", nbAltnvide);
console.log("Images avec alt vide:", nbAltvide);


/*iv. distinguer approximativement les liens internes et externes*/
let liensint = 0;
let liensext = 0;
const hostnamepweb = window.location.hostname;
const liens = document.querySelectorAll('a');
liens.forEach(link => { if (link.hostname === hostnamepweb || link.hostname === "") { liensint++; } else { liensext++; } });
console.log("Liens internes:", liensint);
console.log("Liens externes:", liensext);


/*v. estimer le nombre d'éléments utilisant flexbox ou grid*/
let compterflex = 0;
let comptergrid = 0;
document.querySelectorAll('*').forEach(el => {
  const display = getComputedStyle(el).display;  
  switch (display) {
    case "flex":
    case "inline-flex":
      compterflex++;
      break;
    case "grid":
    case "inline-grid":
      comptergrid++;
      break;
  }
});
console.log("Éléments utilisant flexbox:", compterflex);
console.log("Éléments utilisant grid:", comptergrid);