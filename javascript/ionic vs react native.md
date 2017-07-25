Ionic vs React Native
=====================

* Google trends (a prendre avec des pincettes)
  * [Angular 2/4 vs React](https://trends.google.com.sg/trends/explore?q=angular2%20%2B%20%22angular%202%22%20%2B%20%22angular%204%22%20%2B%20angular4,reactjs%20%2B%20%22react%20js%22)
    * pas trop discutable mais :
      * certains vous dirons qu'avec une bonne doc, moins besoin de recherche (la communauté React est très prosélitiste, mais peut-être à raison)
      * là ou react est privilégié par "ceux qui ont une bonne base JS", les back-end s'orienteront plus vers Angular, donc feront plus de recherche
  * [Ionic Framework vs React Native](https://trends.google.com.sg/trends/explore?q=ionic%20framework%20%2B%20ionic%20framwork%202,react%20native) vs [Ionic vs React Native](https://trends.google.com.sg/trends/explore?q=ionic,react%20native)
    * résultat très différent si on ajoute ou pas le mot "framework" avec Ionic mais :
      * React Native augmente constament (triplé en une année)
      * Ionic reste constant (les montées de Ionic à la fin de l'été 2016 n'a pas de sens)
* Microsoft à créer un plugin pour créer des applications Windows avec React Native : https://github.com/Microsoft/react-native-windows
* Article Ionic vs React Native : 
  * comme pour les batailles React vs Angular, la communauté React est beaucoup plus présente sur le web, donc React gagne tous le temps
  * https://www.codementor.io/fmcorz/react-native-vs-ionic-du1087rsw
  * https://www.digitz.fr/blog/developpement-mobile-hybride-ionic-vs-react-native/
  * Comparaison (Ionic vs React) :     
  
|        | Ionic | React Native |
| ------ | ------- | ------------- |
| Style  | CSS normal, pas d'HTML  | "CSS" dans JS, utilisation seulement de composant natif ??? |
| Cross Plateform  | Android / iOS / Windows | Android / iOS et plugin pour Windows |
| Plugins | PhoneGap / Cordova | plugin React Native (mais possibilité d'utiliser Cordova) |
| Performance | WebView (WebView Chrome dans Safari sur iOS), donc bof | Natif, donc excellent |
| Développement | Phase sans Cordova dans navigateur, avec simulateur sinon | Utilisation du simulateur ou d'un mobile + un plugin pour avec la console dans Chrome | 
| Conaissances prérequises | Angular 2 | React JS |
| Rapidité de dev (si connaissance prérequises) | Très rapide pour feature web normale, un peu moins si plugin Cordova | Moyennement rapide, besoin de comprendre tous les composants et s'adapter |
| Maison mère | ??? | Facebook |

Conslusion (temp) :
-------------------

* Ionic si :
  * petit appli 
  * besoin de dev rapide
  * critère perf moyennement important (devices clients pas trop vieux)
  * équipe ne connait Angular 2/4 mais pas React
* sinon, choisir React Native

https://medium.com/dailyjs/11-mistakes-ive-made-during-react-native-redux-app-development-8544e2be9a9

