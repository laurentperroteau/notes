Notes Ionic
===========

> concerne Ionic 3

Ressources :
------------

* [Tendance des développeurs Ionic](https://ionicframework.com/survey/2017)
* [Ionic staters](https://ionicframework.com/docs/cli/starters.html)
  * `conference` n'a pas été actualisé à Ionic 3 (lazyload, @IonicPage etc...) mais c'est une vrai app complète
  * `super` est bien à jour mais c'est plus un ensemble d'exemple
  
Différence avec Angular/Angular cli  :
-------------------------

* embarque tslint-eslint-rules et tslint-ionic-rules mais certaines n'ont pas l'ai d'être les mêmes
* le polyfill est généré pendant le build (et est inclus dans le index.html)

Routing :
---------

* le lazyloading et le deep-link (hyperlink pour app) sont setter par défaut. Pour avoir des URLs de type "browser" :
````ts
@IonicPage({
  name: 'name-super-item-detail', // push les pages avec le nom et non la classe
  segment: 'path-super-item-detail' // url ajouter
})
````
* on ne "navigue" vers un composant, on le "push"
* on ne récupère pas les données au construtor ou OnInit du composant mais on lui passe en paramètre du push :
````ts
this.navCtrl.push('name-super-item-detail', {item});
````
* de même on lui "renvoi" pour fermer la page (TODO: à confirmer parce parce que là c'était un modal) :
````ts
this.viewCtrl.dismiss(newItem);
````

__Conséquences :__
* __Good__ : ça force la création de composant [stateful/stateless](https://toddmotto.com/stateful-stateless-components)
* __Bad__ : au F5 d'une page fonctionnant avec une données transmise via le push, on a pas la donnée !

### TODO :
* core, shared model ionic 3, poser question forum
