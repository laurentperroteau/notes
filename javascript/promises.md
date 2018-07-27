Promises
========

TODO : 
* exemple simple de promise
* gestion des erreurs/catch : https://jsfiddle.net/qdjkreo5/3242/


Enchaînement de promises :
--------------------------

Solution qui fonctionne mais promises redondantes (anti-pattern) : 

````js
return new Promise((resolve, reject) => {
  serviceCallApi
    .then(res => {
      res.coucou = 'test';
      resolve(res);
    })
    .catch(e => {
      console.error('Error in bla bla', e);
      reject(e);
    });
});
````

Solution : 

````js
return serviceCallApi
  .then(res => {
    res.coucou = 'test';
    return res; // return === resolve
  })
  .catch(e => {
    console.error('Error in bla bla', e);
    throw e; // throw === reject (attention, pas de return)
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
    return; // sinon continue
  }

  this.doSomethingOnSuccess();
}
````
