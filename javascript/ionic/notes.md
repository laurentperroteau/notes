Notes Ionic
===========

> concerne Ionic 3

[Tendance des Ionic](https://ionicframework.com/survey/2017)

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