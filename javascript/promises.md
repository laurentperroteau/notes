Promises
========

### Exemple

````js
return serviceCallApi
  .then(res => {
    res.coucou = 'test';
    return res; // like 'resolve' but stoping execution
  })
  .catch(e => {
    console.error('Error in bla bla', e);
    throw e; // like 'reject' (don't use 'return', so don't do that => 'catch(e => throw e)')
  });
````

### Interface d'une promise

```ts
interface Promise<T> {
  then<TResult>(
    onfulfilled?: (value: T) => TResult | PromiseLike<TResult>,
    onrejected?: (reason: any) => void
  ): Promise<TResult>;

  catch(
    onrejected?: (reason: any) => void
  ): Promise<T>;
}
```

Règles d'or :
-------------

1. Toujours catcher une erreur depuis le `onrejected` de `catch` et non celui de `then` (voir le mauvais exemple n°1).
2. A l'intérieur d'une promise, toujours utiliser `return` et `throw` (qui stop l'exécution) et non `resolve` et `reject` (voir le mauvais exemple n°2).

> [jsFiddle](https://jsfiddle.net/laurentperroteau/xhra58vf/26/) pour tester ces exemples

Mauvais exemples :
------------------

### N°1 : ne pas utiliser le callback `onrejected` de `then`

````js
return resolvedPromise()
  .then(() => {
    console.log('success');
    throw 'unexpected error'; // => generate fatal error because is not catched 
    return 'ok';
  }, error => { // => onrejected callback not trigger 
    console.log('error');
    throw error;
  });
````

### N°2 : ne pas utiliser `resolve` et `reject` à l'intérieur d'une autre promise

````js
return new Promise((resolve, reject) => {
  resolvedPromise()
    .then(() => {
      console.log('level 1 success');

      resolvedPromise() // same problem with a rejected promise
        .then(() => {
          console.log('level 2 success');
          throw 'unexpected error'; 
        })
        .catch(error => { // => trigger
          console.log('level 2 error');
          reject(error);
        });
    })
    .catch(error => { // => not trigger
      console.log('level 1 error');
      reject(error);
    });
});
````

Exception : besoin de `resolve` dans le `catch`


Correction complète :
---------------------

````js
function level1Revolved() {
  return resolvedPromise()
    .then(result => {
      console.log('level 1 success'); // 1
      return result;
    })
    /* .catch(error => { throw error; })*/; // unuseful if only 'throw error'
}

function level2Rejected() {
  return rejectedPromise()
    .then(result => { // jump to catch
      console.log('level 2 success');
      return result;
    })
    .catch(error => {
      console.log('level 2 error'); // 3
      throw error;
    });
}

function test() {
  return level1Revolved()
    .then(result1 => {
      console.log('parent level 1 success'); // 2

      return level2Rejected(/*result1*/)
        .then((result2 => { // don't trigger this "onfulfilled'
          console.log('parent level 2 success');
          return result2;
        })
        .catch(error => {
          console.log('parent level 2 error');  // 4
          throw error;
        });
    })
    .catch(error => {
      console.log('parent level 1 error');  // 5
      throw error;
    });
}
````

Correction version async/await :
--------------------------------

__Avantages__

1. Moins d'indentation
2. Economie de lignes (12% ici)
3. Pas de confusions avec les `onrejected`, `reject`, `return` and `throw`

````js
async function level1Revolved() {
  const result = await resolvedPromise();
  console.log('level 1 success'); // 1
  return result;
}

async function level2Rejected() {
  try {
    const result = await rejectedPromise(); // jump to catch
    console.log('level 2 success');
    return result;
  } catch(error) {
    console.log('level 2 error'); // 3 
    throw error;
  }
}

async function test() {
  try {
    const result1 = await level1Revolved();
    console.log('parent level 1 success'); // 2

    try {
      const result2 = await level2Rejected(/*result1*/);
      console.log('parent level 2 success');
      return result2;
    } catch(error) {
      console.log('parent level 2 error');  // 4
      throw error;
    }
  } catch(error) {
    console.log('parent level 1 error');  // 5
    throw error;
  }
}
````

Correction version [await-to-js](https://www.npmjs.com/package/await-to-js) :
--------------------------------

__Avantages__

1. Voir avantages du async/await
2. Encore plus lisible, enfin au moins la fonction `level2Rejected()` (selon les goût)

````js
...

async function level2Rejected() {
  const [ error, result ] = await to(rejectedPromise());
  if (error) throw error;
  
  console.log('level 2 success');
  return result;
}

async function test() {
  const [ error1, result1 ] = await to(level1Revolved());
  if (error1) {
    // Quand "level2Rejected", pas trigger au contraires des exemples précédents (donc ça dépend des utilisations)
    console.log('parent level 1 error');
    throw error1;
  }
  console.log('parent level 1 success'); // 2
  
  const [ error2, result2 ] = await to(level2Rejected(/*result1*/));
  if (!error2) {
    console.log('parent level 2 error');  // 4
    throw error2;
  } 
  
  return result2;
}
````
