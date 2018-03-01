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

// JAMAIS TESTE EN PRODUCTION

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
    const httpRequest = this._request(storeRequest);

    // To manage queue and "retry request" when erros, add "retry" and push it in queue
    if (storeRequest.shouldRetry) {
      const httpRequestInQueue = this._queueRequestService.add(storeRequest, httpRequest).httpRequest;

      // TODO: aucun interet si une requete gameserver et une requete afkd, un peu plus si S3
      // this._queueRequestService.start();

      return httpRequestInQueue;
    } else {
      return httpRequest;
    }
  }
  
  _request(request: StoreRequest): Observable<ArrayBuffer> {
	  let url = environment.server[request.server].url;
	  const options: any = {};

	  if (request.resource) url += `/api/${request.resource}`;
    if (request.headers) options.headers = request.headers;
    if (request.queries) options.params = request.queries;

    switch (request.verb) {
      case 'POST':
        return this._http.post(url, request.body, options);
      case 'PUT':
        return this._http.put(url, request.body, options);
      case 'PATCH':
        return this._http.patch(url, request.body, options);
      default:
        return this._http.get(url, options);
    }
  }
}
