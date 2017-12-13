RxJs
====

Pour n'utiliser que la première publication : `source.first()`
```js
/**
 * Solution à choisir
 * @source : https://stackoverflow.com/questions/42345969/angular-2-using-rxjs-take1-vs-first#answer-42346203
 */
const source1 = Rx.Observable.interval(1000);
source1.first().subscribe(val => console.log(val));

// Solution fonctionnant mais pas recommandé
const source2 = Rx.Observable.interval(1000);
const subscribe2 = source2.first().subscribe(val => {
  console.log(val);
  subscribe2.unsubscribe();
});

// Ne fonctionnne pas
const source3 = Rx.Observable.interval(1000);
const subscribe3 = source3.first().subscribe(val => console.log(val));
subscribe3.unsubscribe();
````    
