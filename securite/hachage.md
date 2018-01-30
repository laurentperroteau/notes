Hachage
=======

Créer un hash permet de calculer l'"empreinte" d'une donnée ([voir définition de "Fonction de hachage"](https://fr.wikipedia.org/wiki/Fonction_de_hachage)).

"Indécryptable" (ie: ne peut être inversé) et générant toujours la même empreinte, cela permet de stocker des données sans en connaître le contenu (comme un mot de passe) ou de vérifier l'intégrité d'un message (être sûr qu'il n'a pas été modifié).

Exemple hash : 

```js
const crypto = require('crypto');
const data = 'coucou';

function hashData(_data) {
  const hash = crypto.createHash('sha256');
  // const hash = crypto.createHmac('sha256', 'secret'); // hmac (hash avec un clé secrète)
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
