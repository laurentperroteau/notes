NPM
===

npm _install_ vs _upate_ ?
--------------------------

* `$ npm install` => installe les paquets listé dans `package.json`
* `$ npm update` => actualise les paquets déjà installés dans `node_modules`
  * `$ npm outdated` => liste les paquets qui seront actualisés au _update_
  * __Important__ : utiliser _update_ uniquement en locale, jamais sur un autre environnement

NPM lock package :
------------------

A partir de NPM 5, un fichier `package-lock.json` est généré et permet de figer les versions des paquets.

> pour actualiser NPM : `$ npm install npm@latest -g`

* il faut versionner ce fichier, c'est lui qui sera utiliser à chaque _install_
* sera actualisé quand :
  * _update_
  * _install_ d'un nouveau paquet
  * _install_ d'un paquet avec une version spécifique
  * `$ npm uninstall mon-packet`

Et npm-shrinkwrap.json ? :
-------------------------

Déjà existant avec NPM 5, il va plus loin en figeant aussi les paquets qui ne sont pas au premier niveau (ie: les paquets sont tous installé au premier niveau sauf si 2 paquets utilisent la même dépendance mais avec une version différente).

Là ou le `lock` est obligatoire (toujours généré), le `shrinkwrap` doit être volontairement généré. Si le `lock` est déjà existant : `$ npm shrinkwrap`
