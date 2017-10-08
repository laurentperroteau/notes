Notes agilité
============

> notes pour ScrumMaster/développeurs et pas PO/BA/client

![Représentation des étapes](http://www.aim-services.ch/blog/wp-content/uploads/2015/04/scrum-web.png)


* __Prérequis__ : 
  * être au moins 2 développeurs (pour PR, tests croisés etc..., et puis les rituels tous seules, pas génial)
  * Ne pas commencer une US si les specs ne sont pas complète et claire 
* __Simplicité__, dans la mesure où le client/CP/PO est capable de comprendre le principe du MVP, créer des US petites et simples :
  * ex: ne développer que 2 écrans sur les 10/15 prévues 
      * avantages/résultats => première livraison plus tôt, donc retours du client plus rapides
  * ex: un formulaire avec un datepicker (si c'est le premier de l'app) :
    * créer une première US avec le formulaire et juste un champ date natif
    * créer une deuxième US (pour le sprint suivant) pour le datepicker (généralement un plugin open source)
    * => avantages/résultats : 
      * US plus petites, donc plus flexible (plus agile, déplacable plus facilement)
      * on valide le besoin réel après le premier sprint
      * le choix et l'instalation d'un plugin étant importante et chronophage, pas de temps perdu
    * pourquoi un datepicker comme exemple ? C'est typiquement un élément qui "peut" paraître simple quand on est pas technique mais qui est en réalité impliquer beaucoup de chose (comportement, mobile, limite, localisation, format d'échange des dates etc...)
* __Transparence__ :
  * L'idée c'est d'éviter cela : 
    * ![Représentation des projets selon chacun](https://img.scoop.it/WrUBWnCbJR0JIQaC93Nvcjl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9)
  * Comment ?
    * c'est le client qui écrit les US (si ce n'est pas le cas, il doit les valider avant qu'elles soit ready)
    * livraison en continu : 
      * donc on peut tout revoir dès les premiers sprints/livraisons
      * et donc pas de surprise à la fin du projet
    * si deadline, le client sait ce qui peut être fait d'ici X sprint (donc X temps)
    * le développeur ne pourra pas passer une US à "done" sans qu'un autre développeur et le client ai testé
      
Démo :
------

* chaque DEV présente un partie (oblige à bien tester et se préparer)

Rétro :
------

* créer au moins un axe d'amélioration et en suivre l'état à chaque nouveau sprinte jusqu'à qu'il soit acquis (faire atelier si besoin pour les faire ressortir)
* météo (anonyme la communication gestion de projet/dev n'est pas complétement transparent)

Jeux agile :
------------

### Trouver axes d'amélioration : 

Placer des post it dans les cases :
  * ce que j'a aimé
  * ce que j'ai appris
  * ce que l'on aurait pu faire
  * ce que je souhaiterais que l'on fasse au prochain sprint
  
Sortir les axes concrets d'amélioration faisable dans le prochain sprint des 2 dernières cases, possibilité de considérer les 2 premières comme acquise.

Faire des points au fur et à mesure pour savoir si les actions doivent être :
* A continuer/commencer
* Terminée/A arrêter
* A faire / refaire autrement


Réunion :
---------

Toujours timeboxer

Rôles :
-------

* Product Owner :
  * responsable du product backlog, doit maximiser la valeur du produit et le travail de l'équipe de développement
  * Compétences : orienté business, c'est le client ou son représentant
* ScrumMaster : 
  * facilitateur, veille au respect des procédures Scrum et organise/anime les différents rituels :
    * Sprint planning
    * Daily stand-up ou  Daily Scrum
    * Demo/Sprint review
    * Rétrospective
  * Compétences : de préférence un développeur le reste du temps (ou ex-dev si Scrumaster à temps plein)  
* Equipe de développement :
  * responsables de livrer les US en recette/preprod et d'en faire la démo
