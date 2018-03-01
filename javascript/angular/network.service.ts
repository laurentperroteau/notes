import isOnlineByDNS from 'is-online';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { Injectable } from '@angular/core';

@Injectable()
export class NetworkService {
  onStatusChange$: Observable<boolean>;
  statusChangeSubject = new Subject<any>();
  sharedOnStatusChange$: Observable<boolean>;

  constructor() {
    /**
     * Create an obs that publish when conection change (depend window event, isOnline module and http error conection)
     */
    this.onStatusChange$ = Observable.merge(
      // Publish on event offline/online
      Observable.fromEvent(window, 'offline').map(() => false),
      Observable.fromEvent(window, 'online').map(() => true),

      // On online event, check real "isOnline" status // TODO: si online, c'est que offline à été détecté ! Donc inutile ?
      /*Observable.fromEvent(window, 'online').mergeMap(() => {
        return Observable.fromPromise(isOnlineByDNS());
      }),*/

      // Publish on subject published
      this.statusChangeSubject,

      // Publish onload
      Observable.create(observer => {

        /**
         * Use isOnline package, not navigator.onLine
         *
         * @see https://github.com/sindresorhus/is-online (for explanation)
         */
        isOnlineByDNS().then(
          online => {
            observer.next(online);
            observer.complete();
          }, error => {
            observer.network(false);
            observer.complete();
          }
        );
      }),
    ).distinctUntilChanged(); // Publish only is value change

    /**
     * Create a shared obs to use several times
     *
     * ie: Always subscribe on services init (because first value is navigator.onLine)
     */
    this.sharedOnStatusChange$ = this.onStatusChange$
      .share()
      // Because if publish a first time, the second subscription is not fire... start always with some value
      .startWith(navigator.onLine).distinctUntilChanged();
  }

  updateStatus(value: boolean) {
    this.statusChangeSubject.next(value);
  }

  forceCheckStatus(): Promise<boolean> {
    return new Promise(resolve => {
      isOnlineByDNS().then(
        online => {
          this.updateStatus(online);
          resolve(online);
        }, error => {
          resolve(false);
        }
      );
    });
  }
}
