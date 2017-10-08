Notes Ionic
===========

> les dernièrs test effectué, donc les notes concerne Ionic 3

* le lazyloading et le deep-link (hyperlink pour app) sont setter par défaut. Pour avoir des URLs de type "browser" :
````ts
@IonicPage({
  name: 'name-super-item-detail', // push les pages avec le nom et non la classe
  segment: 'path-super-item-detail' // url ajouter
})
````
