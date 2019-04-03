Compartif Angular/React : 
=========================

> déjà, Angular ou React mais toujours avec Typescript :)

* __Jeu et app beaucoup d'intéraction UI__ (eu à la souris/clavier, drag/drop etc... et peu de persistance de data) => _React_ car incite/facilite la création de petit composant
* __Petite/moyenne app avec essentielement des connexion API__ (genre Backoffice) => _Angular_ car avec ses services, son module HTTP facile à connecter, RxJS déjà inclus si besoin d'un peu "de réactivité", Angular est beaucoup plus "out of the box" pour cela... là où on aura rapidement besoin d'un Redux (ou équivalent) avec React. 
* __Nouveau développeur__ => _React_ car le nouveau développeur n'aura connu que l'ES6, ne sera pas encore familier et PVC, DI etc... Le combo props/state est facile à comprendre et il pourra déjà faire beaucoup de chose avec. _Angular_ permet plus facilement de mal faire (un gros composant, donc avec un gros scope par exemple... et nécéssite l'apprentissage de chose spécifique au framework.
* __Dévéloppeur Back-End/Intégrateur__ => _Angular_ car le Back-End connaîtra déjà le MVC, l'injection de dépendance, les classes et pour certain de typage Typescript très mise en avant... L'intégration qui n'aura pas encore bien assimilé le "nouveau JS" et qui garde de mauvaise habitude aura besoin d'un framework cadré Angular (avec Style Guide etc... là ou React dépend du goût de chacun)
