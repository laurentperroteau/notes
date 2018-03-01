import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/never';

import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LocalStoreService } from './local-store.service';
import { AwsS3StoreService } from './aws-s3-store.service';
import { LoggerService } from '../logger.service';
import { RestStoreService } from './rest-store.service';
import { NetworkService } from '../network.service';
import { QueueRequestService } from '../queue-request.service';

import { StoreRequest, StoreRequestResponse } from '../../models/request';
import { AfkdRequests, GameserverRequests } from '../../constants/requests';

const errorDelays = {
  default: 500,
  offline: 500,
  testServerOk: 0,
  testServerKo: 5000,
};

@Injectable()
export class StoresService {

  constructor(
    private _loggerService: LoggerService,
    private _localStoreService: LocalStoreService,
    private _restStoreService: RestStoreService,
    private _awsS3StoreService: AwsS3StoreService,
    private _networkService: NetworkService,
    private _queueRequestService: QueueRequestService,
  ) {}

  request(storeRequest: StoreRequest, body?: any, queries?: any): Observable<any> {
    if (body) storeRequest.body = body || {};
    if (queries) storeRequest.queries = queries;

    // Get http resquest
    return this._restStoreService.request(storeRequest);
  }

  addRetryPossibility(httpRequest: Observable<ArrayBuffer>, storeRequest: StoreRequest) {
	  const attempts = 5;
    let lastTryWasOffline = false;
    let errorTries = 0;
    let retryIndex = 0;

    return httpRequest
      /**
       * 1. Convert observable to "multicast" (posibility to return result on multiple subscribers
       */
      .share()

      /**
       * 2. On error, "requests attempt" are mapped and need observable to try again (limit es "attempt")
       *
       */
      .retryWhen((attempts$: Subject<HttpErrorResponse>) => {
        retryIndex++;
        if (!(retryIndex % 2)) { // Fix twice retry !
          return Observable.empty();
        } else {
          return attempts$.mergeMap((httpError: HttpErrorResponse) => {

            /**
             * 3. Add delay on matched errors
             * TODO: suppr si on a vraiment pas besoin de matcher les erreurs
             */
            /*if (errorStatusCodeNoRetry.some(e => e === httpError.status)) {
              return Observable.throw(httpError);
            }*/

            /**
             * 2. Merge "online" observable for adding "online/offline" info on http errors
             *   ie: this observable only publish on connection change
             *
             *   TODO: suppr, finalement probablement pas besoin d'observable
             */
            //return this.onStatusChange$.mergeMap(isOnline => {
              const isOnline = navigator.onLine;
              // this._loggerService.debug('isOnline', isOnline, 'httpError', httpError);

              // If offline, error "net::ERR_INTERNET_DISCONNECTED" with status 0
              if (!isOnline) {
                lastTryWasOffline = true;
                return Observable.of('offline').delay(errorDelays.offline);
              }
              // On change from offline to online, repeat request directly (no delay)
              else if (isOnline && lastTryWasOffline) {
                lastTryWasOffline = false;
                return Observable.of('online again');
              }

              /**
               * 3. Add delay on matched errors
               */
              // if (errorStatusCodeRetry.some(e => e === httpError.status)) {
                errorTries++;

                /**
                 * 4. On error n°2...
                 */
                if (errorTries === 2) { // TODO: /2 si suppr du retryIndex % 2
                  let isServerDownRequest: StoreRequest;
                  switch (storeRequest.server) {
                    case 'afkd':
                      isServerDownRequest = AfkdRequests.test;
                      break;
                    case 'gameserver':
                      isServerDownRequest = AfkdRequests.test;
                      break;
                    default:
                      this._loggerService.error(`Le serveur "${storeRequest.server} n'existe pas !`);
                      break;
                  }

                  /**
                   * 4. ... try "server test url" to confirm the server is down
                   */
                  return this._restStoreService.request(isServerDownRequest)
                    .mergeMap(__ => {
                      this._loggerService.warn(`Le serveur "${storeRequest.server} est up donc ne devrait pas renvoyer d'erreur`);
                      return Observable.of(httpError.status).delay(errorDelays.testServerOk);
                    })
                    .catch(error => {
                      // return Observable.of(`Le serveur "${request.server} est down, ne devrait pas renvoyer d'erreur`).delay(errorDelays.testServerKo);
                      this._loggerService.warn(`Le serveur "${storeRequest.server} est vraiment down, on fait quoi ?`, error);
                      errorTries = 0;

                      // TODO: relancer après un temps ou supprimer la requete courante et lancer le plan B
                      // TO test return Observable.throw(httpError);
                      return Observable.empty();
                    });
                } else {
                  /**
                   * 4. ... else retry after delay
                   */
                  return Observable.of(httpError.status).delay(errorDelays.default);
                }
              // }

              // Normally unreachable code
              // return Observable.throw(httpError);
            //});
          })
          // Quantity of retry
          .take(attempts)
          /**
           * 5. If attempts all, return error
           * // TODO: pour l'instant retourne un observable
           * // TODO: plan B ?
           */
          .concat(Observable.throw(attempts$.map(httpError => httpError)));
        }
      }
    );
  }

  addRetryPossibility2(httpRequest: Observable<ArrayBuffer>, storeRequest: StoreRequest) {
    const attempts = 5;
    let lastTryWasOffline = false;
    let errorTries = 0;
    let retryIndex = 0;

    return httpRequest
    /**
     * 1. Convert observable to "multicast" (posibility to return result on multiple subscribers
     */
      .share()

      /**
       * 2. On error, "requests attempt" are mapped and need observable to try again (limit es "attempt")
       *
       */
      .retryWhen((attempts$: Subject<HttpErrorResponse>) => {
        return attempts$.mergeMap((httpError: HttpErrorResponse) => {

          /**
           * 3. Add delay on matched errors
           */
          // if (errorStatusCodeRetry.some(e => e === httpError.status)) {
          errorTries++;

          const isOffline = !httpError.status; // 0 === net::ERR_INTERNET_DISCONNECTED

          if (isOffline) {
            return Observable.of().delay(errorDelays.offline * errorTries);
          } else {
            return Observable.of().delay(errorDelays.default * errorTries);
          }

        })
        // Quantity of retry
        .take(attempts)
        /**
         * 5. If attempts all, return error
         * // TODO: pour l'instant retourne un observable
         * // TODO: plan B ?
         */
        .concat(Observable.throw(attempts$.map(httpError => httpError)));
      });
  }

  allServersWorks() {
    return Promise.all([
      this.request(GameserverRequests.test).toPromise(),
      this.request(AfkdRequests.test).toPromise(),
      this._awsS3StoreService.isServersWork()
    ]).then(
      results => {
        return results.every(r => !!r);
      }
    );
  }
}
