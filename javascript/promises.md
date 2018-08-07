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
    throw e; // like 'reject' (don't use 'return', so don't do that 'catch(e => throw e)')
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
    throw 'undexpected error'; // => generate fatal error because is not catched 
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

      resolvedPromise() // same problem a rejected promise
        .then(() => {
          console.log('level 2 success');
          throw 'undexpected error'; 
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


Bonne exemple complet :
-----------------------

````js callback not trigger
function level1Revolved() {
  return resolvedPromise()
    .then(() => {
      console.log('level 1 success'); // 1
      return 'ok 1';
    })
    .catch(error => {
      console.log('level 1 error');
      throw error;
    });
}

function level2Rejected() {
  return rejectedPromise()
    .then(() => {
      console.log('level 2 success'); // 3
      throw 'undexpected error';
      return 'ok 1';
    })
    .catch(error => {
      console.log('level 2 error'); // 4
      throw error;
    });
}

return level1()
  .then(() => {
    console.log('parent level 1 success'); // 2

    return level2()
      .then(() => {
        console.log('parent level 2 success');
        return 'ok parent';
      })
      .catch(error => {
        console.log('parent level 2 error');  // 5
        throw error;
      });
  })
  .catch(error => {
    console.log('parent level 1 error');  // 6
    throw error;
  });
````

Promise vs async/await :
------------------------

````js
callAPI(result) {
  http.get()
    .then(__ => {
      this.doSomethingOnSuccess();
    })
    .catch(e => console.log(e));
}

async callAPI(result) {
  try {
    await http.get();
  } catch (e) {
    console.error(e);
    return; // required
  }

  this.doSomethingOnSuccess();
}
````
