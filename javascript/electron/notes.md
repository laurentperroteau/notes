Notes Electron
==============
 
 Tuto novice :
 -------------
 
 * https://zestedesavoir.com/tutoriels/996/vos-applications-avec-electron/ (en français !)


Serveur dans electron :
-----------------------

Ce n'est pas très recommandé !

* "_You would be opening up a publicly accessible port on your users machine. Any program on that machine or any website loaded in a browser could connect to your local express instance.
It won't work on some user's machines due to their firewall settings. It simply won't let you open the port._" [source](https://blog.samuelattard.com/using-express-inside-electron/)
* "_It's actually recommended to do as much as possible in the renderer process._" [source](https://www.reddit.com/r/webdev/comments/45z120/what_is_the_best_way_to_make_http_requests_using/)
* utiliser plutôt une JSON database comme [lowdb](https://github.com/typicode/lowdb)

Le code de l'application est-il protégé :
-----------------------------------------

* pas vraiment : [source](https://github.com/electron/electron/issues/2570), [source](https://github.com/electron/electron/issues/3041)
* pour un package `.deb`, le code est accessible en "dezippant"
* si choix du format asar (créer par Electron), les sources ne sont pas accéssible directement mais en installant le package npm _[asar](https://www.npmjs.com/package/asar)_, c'est possible
* __TODO__ : _tester sur windows avec un format .exe et Mac avec un équivalent_

### Packager :

* pour [debian](https://github.com/unindented/electron-installer-debian)


