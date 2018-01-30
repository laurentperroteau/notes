Hachage
=======

Hash :
------

Créer un hash permet de calculer une "empreinte" d'une donnée ([définition "Fonction de hachage"](https://fr.wikipedia.org/wiki/Fonction_de_hachage)).

"Indécryptable" (ie: ne peut être inversé) mais générant toujours la même empreinte, cela permet de stocker des données sans en connaître le contenu (comme un mot de passe).

Exemple hash : 

```js
const crypto = require('crypto');
const data = 'coucou';

function hashData(_data) {
  const hash = crypto.createHash('sha256');
  hash.update(_data);
  console.log(hash.digest('hex'));
}

console.log(hashData(data) === hashData(data));
/*
110812f67fa1e1f0117f6f3d70241c1a42a7b07711a93c2477cc516d9042f9db
110812f67fa1e1f0117f6f3d70241c1a42a7b07711a93c2477cc516d9042f9db
true
*/
```


Exemple hmac (hash avec un clé secrète) : 

```js
const crypto = require('crypto');
const data = 'coucou';

function hashPass(pass) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  console.log(hash.digest('hex'));
}

hashPass(data); // 110812f67fa1e1f0117f6f3d70241c1a42a7b07711a93c2477cc516d9042f9db
hashPass(data); // 110812f67fa1e1f0117f6f3d70241c1a42a7b07711a93c2477cc516d9042f9db
```
