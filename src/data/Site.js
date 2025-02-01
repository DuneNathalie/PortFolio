import bdf from '../../src/assets/logos/fred.png';
import spa from '../../src/assets/logos/spa.png';
import fag from '../../src/assets/logos/fag.png';
import astro from '../../src/assets/logos/astro.png';

import imgbdf from '../../src/assets/Site/Bdf.png';
import imgSpa from '../../src/assets/Site/Spa.png';
import imgFag from '../../src/assets/Site/Fag.png';
import imgAstro from '../../src/assets/Site/Astro.png';


const Data_Sites = [
    {
        id: 1, title: 'FilmaGogo', langage: "React, TypeScrypt, Javascript, SCSS,HTML, Nodes.js.", description: `Filmagogo est inspiré d'une application bien connue permettant de consulter des films et séries. L'objectif est d'offrir une expérience utilisateur similaire en s'appuyant sur l'API de The Movie Database pour afficher les affiches, titres, notes et descriptions des œuvres.

La diffusion des films et séries n'est pas une fonctionnalité disponible. Cependant, pour certains d'entre eux, un lien permet d’être redirigé vers des sites ou plateformes où ils sont accessibles.`, url: "https://filmagogo.vercel.app/", icon: fag, img: imgFag
    },
    {
        id: 2, title: 'BazarDeFred', langage: "React, TypeScrypt, Javascript, HTML, SCSS, Nodes.js.", description: `Il s'agit d'un site vitrine que j'ai conçu pour ma sœur afin de mettre en valeur ses tableaux et son univers artistique. Ce site, simple et épuré, a été réalisé dans un délai court pour répondre rapidement à son besoin.

Pour améliorer sa visibilité en ligne, j'ai pris soin d'optimiser le site pour le référencement naturel (SEO) et de l'indexer sur Google, afin qu'elle puisse être facilement trouvée via les moteurs de recherche.`, url: "https://bazartdefred.com/", icon: bdf, img: imgbdf
    },
    {
        id: 3, title: 'AstroQuizz', langage: "React, JavaSript, HTML, CSS, Nodes.js, Express.", description: `Ce projet a été réalisé en groupe dans le cadre de ma formation de Développeur Web et Mobile à la Wild Code School de Nantes. Nous avons imaginé un site éducatif sur les planètes, spécialement conçu pour les enfants.
        L'objectif était de vulgariser l'astronomie et de rendre son apprentissage amusant et ludique.

Dans ce projet, j'ai été principalement chargé de développer la page Quizz, permettant aux enfants de tester leurs connaissances tout en s'amusant.`, url: "https://github.com/DuneNathalie/AstroQuizz/tree/main", icon: astro, img: imgAstro
    },
    {
        id: 4, title: 'Spa', langage: "Html, CSS, Javascript.", description: `Ce projet a été réalisé en groupe dans le cadre de ma formation de Développeur Web et Mobile à la Wild Code School de Nantes.

Après moins de 15 jours de formation, nous avons reçu notre tout premier projet à réaliser en HTML et CSS, avec une option facultative  JavaScript.

J'ai été chargée de créer la page produit, un véritable défi à l'époque étant donné que j'étais encore très novice. Malgré les difficultés, j'étais fière du résultat et de tout ce que j'avais appris en si peu de temps.`, url: "https://baptistecourtin.github.io/Projet1-SPA/pages/", icon: spa, img: imgSpa
    },
];

export default Data_Sites;