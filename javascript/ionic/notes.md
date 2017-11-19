Notes Ionic
===========

> concerne Ionic 3

Ressources :
------------

* [Tendance des développeurs Ionic](https://ionicframework.com/survey/2017)
* [Ionic staters](https://ionicframework.com/docs/cli/starters.html)
  * `conference` n'a pas été actualisé à Ionic 3 (lazyload, @IonicPage etc...) mais c'est une vrai app complète
  * `super` est bien à jour mais c'est plus un ensemble d'exemple
  
Différence de config avec Angular/Angular CLI  :
------------------------------------------------

* embarque tslint-eslint-rules et tslint-ionic-rules (qui ne sont pas dans package.json), ce n'est apparement pas exactemnet les mêmes règles que Angular CLI
  * __TODO__ : voir ajouter [codelyzer](https://github.com/mgechev/codelyzer), le lint d'angular
* le polyfill est généré pendant le build (et est inclus dans le index.html)

Routing :
---------

* on ne "navigue" pas vers un composant, on le "push"
* IonicPage
  * pour avoir des URLs de type "browser" :
````ts
@IonicPage({
  name: 'name-item-detail', // push les pages avec le nom et non la classe
  segment: 'path-item-detail/:id' // url ajouter
})
````
  * les url pour app [via deeplinks](https://ionicframework.com/docs/native/deeplinks/) n'est pas utilisé par défaut (_TODO: tester si en le settant cela remplace les segement des IonicPage_)

Modules :
---------

Les IonicPage (qui sont des modules) ont besoin d'importer le composant dans IonicPageModule :

````ts
imports: [ IonicPageModule.forChild(FrontHomePage) ],
````

Les composants des modules "maison" (autre que le root et les pages) ont besoin d'être ajouté à IonicModule :

````ts
imports: [ IonicModule.forRoot(AlbumListComponent) ],
````

Shared module :
---------------

C'est apparement impossible de partager des composants entre module de type page : https://github.com/ionic-team/ionic/issues/13328

TODO: 
* inclure shared module in app module
* ne pas créer le ionic page avec module si ça ne fonctionne pas (c'est à dire, a confirmer, quand on utilise un custom component)
* voir liées ces 2 issues à celle que j'ai crée :
  * https://github.com/ionic-team/ionic-app-scripts/issues/
  * https://github.com/ionic-team/ionic-app-scripts/issues/867
