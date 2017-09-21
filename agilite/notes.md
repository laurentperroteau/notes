Notes agilité
============

> agilité orienté dev et pas tant côté client

Equipe DEV :
---------------

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

Faire des points au fur et à mesure pour savoir les actions doivent :
* A continuer/commencer
* Terminée/A arrêter
* A faire / refaire autrement


Réunion :
---------

Toujours timeboxer

Organisation tableaux (méthodes SCRUM) :
----------------------------------------

* __Roadmap__ (ou cahier des charges dans le pire des cas)
  * liste de feature global à transformer en epic/épopée
  * [ex trello](https://trello.com/b/lgXkJqsF/roadmap-example-folding-burritos)
* __Backlog__ : 
  * vue de toutes les US
  * pas de colonne mais une grande liste d'US rangée par sprint (bientôt ready, haut du backlog) ou epic/épopée (bas du backlog)
  * [ex epic](https://trello.com/b/JED7vZPv/epics-example-folding-burritos)
* __Kanban__ : 
  * vue de toutes les US active (en rédac ou en dev)
  * colonnes : Rédac à faire, Rédac en cours, US ready, To do, Doing, To test, Done
  * [ex kanban](https://trello.com/b/R1AALZw6/kanban-example-folding-burritos)
* __Scrum / Sprint__ :
  * vue des US d'un sprint (en préparation, en cours ou fini)
  * colonnes : To do, Doing, To Review, To test, Done
  
### Comment faire simple avec Trello : 

  * titre de la carte : 15 (Epopée) Mon petit titre
  * un grand tableau Roadmap/Backlog/Kanban avec 5 colonnes :
    * Roadmap : un grand pense-bête sans organisation précise
    * Epopée : une carte par épopée qui contient une liste des US (les items des listes peuvent se convertir en carte)
    * Rédac à faire
    * Rédac en cours
    * US ready => à déplacer dans tableau de sprint
  * un tableau pour chaque sprint
