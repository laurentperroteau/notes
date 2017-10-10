Firebase
========

Premièrement, c'est quoi :
--------------------------

* Explication: https://www.quora.com/How-does-Firebase-work
* En bref, c'est un mix de __no-sql data storage__, __pub/sub server__, __web-sockets__ et __client-side library__

Firebase CLI :
--------------
* `$ firebase init` : init dans dossier courant un projet au choix
* `$ firebase database:get /albums` : print document json du path `albums`
* `$ firebase database:remove /posts` : suppr (demande de confirmer avant, `--confirm` pour s'en passé)
* `$ firebase database:set /test test-import.json` : remplace (ou insert si nouveau) le json d'un fichier sur le path `test` (le fichier `{ "coucou" : "test" }`)
* `$ firebase database:update /test/coucou test-import.json` : actualise un enfant de l'objet (le path)
