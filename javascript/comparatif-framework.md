Compartif Angular/React : 
=========================

> déjà, Angular ou React mais toujours avec Typescript :)

* __Jeu et app avec beaucoup d'intéraction UI__ (et peu de persistance de data) => _React_ car incite/facilite la création de petit composant
* __Petite/moyenne app avec essentielement des connexions API__ (genre Backoffice) => _Angular_ car avec ses services, son module HTTP facile à connecter, RxJS déjà inclus si besoin d'un peu "de réactivité", Angular est beaucoup plus "out of the box" pour cela... là où on aura rapidement besoin d'un Redux (ou équivalent) avec React. 
* __Nouveau développeur__ => _React_ car le nouveau développeur n'aura connu que l'ES6, ne sera pas encore familier le MVC, l'injection de dépendance etc... Le combo props/state est facile à comprendre et il pourra déjà faire beaucoup de chose avec. _Angular_ permet plus facilement de mal faire (un gros composant, donc avec un gros scope par exemple...) et nécéssite pour commencer correctement l'apprentissage de différente feature spécifique au framework.
* __Dévéloppeur Back-End/Intégrateur HTML/CSS__ => _Angular_ car le Back-End connaîtra déjà le MVC, l'injection de dépendance, les classes et pour certains le typage très mise en avant... L'intégrateur HTML/CSS qui n'aura pas encore bien assimilé le "nouveau JS" et qui garde de mauvaise habitude aura besoin d'un framework cadré (avec Style Guide etc...) là où il y mille façon de faire du React.
* __Grosse application avec beaucoup de connexions API__ : => _ne sait pas_. J'ai tout de même paticiper à un projet de ce genre en Angular, je débutais encore un peu et le lead avait abusé de RxJS tandis que les autres développeurs (front Java) qui découvrait le JS ne comprenait rien à ce qu'il faisait. Il faudra donc au moins un Redux/ngRX pour cadré le "state management".
