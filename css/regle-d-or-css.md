Règle d'or du css
=================

* Ne pas utiliser les IDs pour styler => les réserver pour le JS et les ancres
* Préfixer les IDs et class ajouté/modifié en JS => `#jsMenuItem` ou `.jsIsActive`
* Limiter au possible les descendances. 
  * Mauvais exemple : `.content .primary ul > li .link-red {}`
* N'utiliser que les classes pour styler : 
  * Pas de `button {}`, de `div.toto li {}`, ni de `[data-toto=true] {}`
* Ne pas utiliser pas les tags de texte (`p`, `span`, `strong` etc...) pour autre chose
* Ne pas cumuler plus de 2 sélecteurs, créé une classe générique à la place
* Le sens du sélecteur dont avoir un rapport avec les styles qu'ils contiens : 
  * une classe avec un nom de couleur ne doit contenir que des couleurs, pas des tailles... et inversement
* Utiliser l'héritage, en particulier pour les fonts : si deux éléments enfants ont une même taille/couleur/etc..., setter cette propriété au parent
* Styler du petit vers le grand : l'élément => le module => le template => la page
