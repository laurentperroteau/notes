import * as _ from 'lodash';
import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// Partie "lib"
interface StateSubjectOptions {
  value: any;
  force: boolean;
  end: boolean;
}

class StatesSubject<T> extends Subject<any> {
  constructor() {
    super();
  }

  set(val) {
    this.next({value: val});
  }

  setForce(val?) {
    const obj = {force: true};
    this.next(val ? Object.assign(obj, {value: val}) : obj);
  }

  end() {
    this.next({end: true});
  }
}

export class BaseStates {
  action: StatesSubject<StateSubjectOptions>[] = [];
  onChangeAction: Observable<any>[] = [];

  constructor(statesEnum: any) {
    // TODO: créer un function loopOverEnum()
    Object.keys(statesEnum).filter(key => isNaN(Number(statesEnum[key]))).forEach(index => {
      this.action[index] = new StatesSubject<StateSubjectOptions>();
      this.onChangeAction[index] = new Observable<any>();
    });
  }

  setReducer(reducer: Function, actionEnum) {
    this.onChangeAction[actionEnum] = reducer(this.action[actionEnum]);
  }
}

// fin "lib"

// 1. Lister les actions
enum ACTION {
  filter,
  order,
}

/**
 * Gestion des états UI (sortie du composant)
 *
 * @notes: non testé en prod
 */
export class States extends BaseStates {
  init: boolean;
  filter: string;
  order: string;

  constructor(actionEnum: any, defaultStates: Partial<States>) {
    super(actionEnum);
    _.merge(this, defaultStates);

    /**
     * 2. Gerer les actions (comme un reducer) en utilisant "map" ou "flapMap"
     *
     * @notes : ici les conditions qui permettent de déterminer
     *   si il y a un réel changement d'état, si l'action est nécéssaire,
     *   si elle doit entraîner une autre action etcc...
     */
    const filterReducer = (obs$): Observable<any> => {
      return obs$.map((state: StateSubjectOptions): any => {
        // Exemple : quand le filtre à fini d'être exécuter, on tri
        if (state.end) {
          this.action[ACTION.order].setForce();
        } else {
          if (state.value !== this.filter) {
            _.merge(this, {filter: state.value}); // clone si object
            return this.filter;
          }
        }
      });
    };
    this.setReducer(filterReducer, ACTION.filter);

    const orderReducer = (obs$): Observable<any> => {
      return obs$.map((state: StateSubjectOptions): any => {
        if (state) {
          if (state.force) {
            return this.order;
          }

          if (state.value && state.value !== this.order) {
            _.merge(this, {order: state.value});
            return this.order;
          }
        }
      });
    };
    this.setReducer(orderReducer, ACTION.order);
  }
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="actionNeedFilter('coucou')">Filter coucou</button>
    <button (click)="actionNeedFilter('toto')">Filter toto</button>
    <button (click)="actionNeedOrder('asc')">Order asc</button>
    <button (click)="actionNeedOrder('dsc')">Order dsc</button>
    <pre>{{ states.filter }}</pre>
    <pre>{{ states.order }}</pre>
  `,
})
export class AppComponent {
  states: States;

  constructor() {
    // 3. Initialisatoin des états avec l'enum et les valeurs par défaut
    this.states = new States(ACTION, {init: true, order: 'asc'});

    // 4. Souscrire au changement d'état
    this.states.onChangeAction[ACTION.filter].subscribe(filterValue => {
      if (filterValue) {
        this.filter(filterValue).subscribe(r => this.states.action[ACTION.filter].end());
      }
    });
    this.states.onChangeAction[ACTION.order].subscribe(orderValue => {
      if (orderValue) {
        this.order(orderValue);
      }
    });

    // Init si besoin
    this.states.action[ACTION.order].setForce();
  }

  actionNeedFilter(val) {
    // 4. Demande d'exécuation de l'action filtre
    this.states.action[ACTION.filter].set(val)
  }

  actionNeedOrder(val) {
    this.states.action[ACTION.order].set(val)
  }

  filter(val) {
    console.log('JE FITRE', val);
    return Observable.of(val).delay(2000);
  }

  order(val) {
    console.log('JE TRI', val);
  }
}
