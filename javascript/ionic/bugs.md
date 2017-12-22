Bugs
====

Intl :
------

* pas d'accès au polyfill 
* ajouter sur le app.component :
```
// Can't add polyfill on ionic, so load it everytime
import 'intl';
import 'intl/locale-data/jsonp/en';
```
