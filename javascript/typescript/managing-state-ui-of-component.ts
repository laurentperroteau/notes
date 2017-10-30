import * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';

import { LazyLoadEvent } from 'primeng/primeng';

/**
 * Test de gestion des états sortie du composant, non fini et non testé
 * 
 * @notes, le type LazyLoadEvent vient de PrimeNg
 * @url: https://github.com/primefaces/primeng/blob/master/src/app/components/common/lazyloadevent.ts
 */
export class States implements LazyLoadEvent {
  init: boolean;
  filterValues: FilterValues = {};

  // Subject
  filterChange = new Subject();
  orderChange = new Subject();
  rangeChange = new Subject();

  // Action
  triggerFilter = new Subject();
  triggerOrder = new Subject();
  triggerRange = new Subject();

  constructor(defaultStates: Partial<States>) {
    _.merge(this, defaultStates);

    /**
     * Toutes les conditions qui permettent de déterminer
     *   si il y a un réel changement d'état, si l'action est nécéssaire,
     *   doivent se faire dans cette objet, dans les souscriptons suivantes
     */
    this.filterChange.subscribe((val: FilterValues) => {
      if (val !== this.filterValues) {
        Object.assign(this.filterValues, val);

        this.triggerFilter.next(this.filterValues);
      }
    });

    this.orderChange.subscribe((val: States) => {
      if (val !== this) {
        Object.assign(this, val);

        this.triggerOrder.next(this);
      }
    });

    this.rangeChange.subscribe((val: States) => {
      if (val !== this) {
        Object.assign(this, val);

        this.triggerRange.next(this);
      }
    });
  }
}

export class ClassNeedStaes<T> {
  states: States;

  constructor() {
    this.states = new States({ init: true, first: 0, rows: 20 });

    /**
     * L'objet "states" n'ayant pas accès au méhode de filtre, tri etc...
     *   on souscrira au "trigger" pour trigger les méthodes
     *   et pour contrôler l'ordre des actions.
     * Les différents sujets pourrait être assemblé dans un seul sujet
     */

    // Après filtre, changer tri
    this.states.triggerFilter.subscribe((f: FilterValues) => {
      if (!this.isListOfTableEmpty()) {
        this.filterList(f).subscribe(() => {
          this.states.orderChange.next({});
        })
      }
    });

    // Après tri, changer "rang"
    this.states.triggerOrder.subscribe((o: LazyLoadDatatable) => {
      this.orderList(o).subscribe(() => {
        this.states.rangeChange.next({});
      });
    });
    
    this.states.triggerRange.subscribe((r: LazyLoadDatatable) => this.setRange(r));
  }
  
  /**
   * On ne fait que déclanché l'état, 
   *   pas gestion des états ici mais dans la classe States
   */
  autresMethodesQuiAppelLeFiltre(newFilter) {
    this.states.filterChange.next({global: newFilter});
  }
}
