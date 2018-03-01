import { Observable } from 'rxjs/Observable';

import { HttpParams } from '@angular/common/http';

export interface StoreRequests {
  [keyof: string]: StoreRequest;
}

export interface StoreRequest {
  server: 'afkd' | 'gameserver';
  verb: 'GET' | 'POST' | 'PUT' | 'PATCH';
  resource?: string;
  body?: any;
  queries?: HttpParams;
  headers?: {
    [name: string]: string | string[];
  };
  shouldRetry?: boolean;
}

export interface StoreRequestResponse {
  request: StoreRequest;
  httpRequest: Observable<ArrayBuffer>;
  tries: number;
}
