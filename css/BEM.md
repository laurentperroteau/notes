BEM
===

Slide de présentation : http://laurentperroteau.com/doc/bem/#/

Explication de la convention de nommage BEM :
---------------------------------------------

Nous utilisons la convention de nommage BEM (Block Element Modifier). C'est une méthode pour nommer et classifier les sélecteurs CSS de façon à les rendre beaucoup plus strict, transparent et informatif.

La convention de nommage suit ce modèle :
```css
.block {}
.block__element {}
.block--modifier {}
``` 
* `.block` représente le niveau supérieur d'une abstraction ou d'un composant
* `.block__element` représente un descendant de `.block` puisqu'il contribue à former `.block` dans son ensemble => deux__underscores
* `.block--modifier` représente un état ou une version différente de `.block` (ou d'un `.block__element`) => deux--tirets

Une analogie du fonctionnement de la méthode BEM :

```css
.personne {}
    .personne__main {}
    .personne__main--gauche {}
    .personne__main--droite {}
.personne--femme {}
    .personne--femme__main {}
        .personne--femme__main--gauche {}
```

Pour en savoir plus, lire cette traduction de [GuideCSS](http://guidecss.fr/convention.html).

Listes problèmes CSS résolu via BEM :
-------------------------------------


La liste (issu de la [présentation](https://speakerdeck.com/vjeux/react-css-in-js) CSS in JS) :

1. Global namespace : oui
2. Dependencies : non, tout les styles qui peuvent être global sont chargé
3. Dead code elimination : non, besoin de Webpack/JS composant
4. Minification : non
5. Sharing constants : CSS dans JS pour ce cas
6. Non-deterministics resolution : oui
7. Isolation : oui
