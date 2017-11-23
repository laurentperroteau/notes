Notes agilité
============

> notes pour ScrumMaster/développeurs et pas PO/client

![Représentation des étapes](http://www.aim-services.ch/blog/wp-content/uploads/2015/04/scrum-web.png)

_En anglais : Product Backlog (ou backlog), Sprint planning, Sprint, Daily Scrum (ou Daily Meetup, Daily Stand-up), Sprint review (la démo) et Sprint retrospective (la rétro). Voir [lexique](http://www.agiliste.fr/lexique-agile-scrum/)._

* __Prérequis__ : 
  * être au moins 2 développeurs (pour PR, tests croisés etc..., et puis les rituels tous seules, pas génial)
  * Ne pas commencer une US si les specs ne sont pas complète et claire 
* __Pourquoi__ :
  * _La méthode scrum est fondée sur la conviction que le développement logiciel est une activité par nature non-déterministe et que l'ensemble des activités de réalisation d'un projet complexe ne peut être anticipé et planifié. C'est en cela que le scrum s'oppose aux démarches prédictives telles que le cycle en V ([source](https://fr.m.wikipedia.org/wiki/Scrum_%28Boite_%C3%A0_outils%29?wprov=sfta1#Caract.C3.A9ristiques))._
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
      
Les douze principes :
---------------------

> ... et comment les mettres concrètement en application

[Source](https://fr.wikipedia.org/wiki/M%C3%A9thode_agile#Douze_principes_g.C3.A9n.C3.A9raux)

1. __Satisfaire le client en priorité__ _=> même si un choix est frustrant, c'est lui qui paye, c'est lui qui a raison (dans la mesure ou il n'entrave pas le projet)_
2. __Accueillir favorablement les demandes de changement__ _=> c'est le cycle de vie normal d'un produit, c'est pour cela que l'on doit faire simple (i.e.: point 10)_
3. __Livrer le plus souvent possible des versions opérationnelles de l’application__ _=> c'est le seul moyen de passer "réelement a Done" une fonctionnalitée ! Permet également des retours du client plus rapides donc moins de surprise dans la vie du projet (on ne parle pas de fin projet!)_
4. __Assurer une coopération permanente entre le client et l’équipe projet__ _=> ..._
5. __Construire des projets autour d’individus motivés__ _=> i.e.: point 11_
6. __Privilégier la conversation en face à face__ _=> ..._
7. __Mesurer l’avancement du projet en termes de fonctionnalités de l’application__ _=> la [méthode SCRUM](https://fr.wikipedia.org/wiki/Scrum_(Boite_%C3%A0_outils)) de faire le point sur l'avancement à tout moment_
8. __Faire avancer le projet à un rythme soutenable et constant__ _=> la méthode SCRUM nous rensigne sur la vélocité sans à aucun moment parler d'heure de travail_
9. __Porter une attention continue à l’excellence technique et à la conception__ _=> mettre en place [certaines pratique de la méthode Xp](https://fr.wikipedia.org/wiki/Extreme_programming#Pratiques) permet cela_
10. __Faire simple__ _=> c'est ainsi plus facile à faire évoluer_
11. __Responsabiliser les équipes__ _=> i.e.: point 5_
12. __Ajuster à intervalles réguliers son comportement et ses processus pour être plus efficace__ _=> l'amélioration en continu, c'est ce qui permet d'adapter la méthodologie à chaque projet (si besoin) et de faire évoluer tous le monde_

Estimation :
------------
<img src="https://danielettinger.files.wordpress.com/2015/07/img_2627.png" height="200">

> ne jamais jugé la quantité d'une proposition, l'important c'est d'être constant

* En point de complexité ([voir comparatif](../comparatif.md))
* En "[planning pocker](https://fr.wikipedia.org/wiki/Planning_poker)" : au moins au début du projet et si il y a des niveaux de connaissances différent (cela évite de se faire influencer)

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

#### Faire des points au fur et à mesure pour savoir si les actions doivent être :
* A continuer/commencer
* Terminée/A arrêter
* A faire / refaire autrement


Réunion :
---------

Toujours timeboxer

Rôles :
-------

* Product Owner :
  * représentant des utilisateurs, responsable du product backlog, doit maximiser la valeur du produit et le travail de l'équipe de développement
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
