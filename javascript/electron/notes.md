Notes Electron
==============
 
 Tuto :
 ------
 
 * https://zestedesavoir.com/tutoriels/996/vos-applications-avec-electron/

Serveur dans electron :
-----------------------

Il y a peu d'exemple, c'est parce que ce n'est pas très recommandé :

* "_You would be opening up a publicly accessible port on your users machine. Any program on that machine or any website loaded in a browser could connect to your local express instance.
It won't work on some user's machines due to their firewall settings. It simply won't let you open the port._" [source](https://blog.samuelattard.com/using-express-inside-electron/)
* "_It's actually recommended to do as much as possible in the renderer process._" [source](https://www.reddit.com/r/webdev/comments/45z120/what_is_the_best_way_to_make_http_requests_using/)

Code protégé :

* pas vraiment : [source](https://github.com/electron/electron/issues/2570)


