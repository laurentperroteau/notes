import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

import { StoreRequest, StoreRequestResponse } from '../models/request';

const triesLimit = 3;
const errorStatusCodeRetry = [
  0,   // Unknown Error
  // 404, // Not Found
  503, // Service Unavailable
]; // TODO: to complete

const errorDelays = {
  default: 500,
  offline: 500,
  testServerOk: 0,
  testServerKo: 5000,
};

/**
 * JAMAIS TESTE EN PRODUCTION
 *
*/ 

@Injectable()
export class QueueRequestService {
  queues = {};
  // isPendingRequest = false;

  constructor(private _loggerService: LoggerService) {}

  add(storeRequest: StoreRequest, httpRequest: Observable<ArrayBuffer>) {
    if (this.queues[storeRequest.server] === undefined) {
      this.queues[storeRequest.server] = new Queue(this._loggerService);
    }

    return this.queues[storeRequest.server].add(storeRequest, httpRequest);
  }

  start() {
    Object.keys(this.queues).forEach( key => {
      this.queues[key].subscribeToNextRequest(0);
    });
  }
}

export class Queue {
  private _loggerServiceInstance;
  requestsQueue: StoreRequestResponse[] = [];
  // isPendingRequest = false;

  constructor(_logger: LoggerService) {
    this._loggerServiceInstance = _logger;
  }

  add(storeRequest: StoreRequest, httpRequest: Observable<ArrayBuffer>) {
    this.requestsQueue.push({
      request: storeRequest,
      httpRequest: httpRequest.share(),
      tries: 0,
    });

    return this.requestsQueue[this.requestsQueue.length - 1];
  }

  exist(index) {
    return this.requestsQueue[index] !== undefined;
  }

  subscribeToNextRequest(index) {
    // this.isPendingRequest = true;

    // Limit tries
    if (this.exist(index) && this.requestsQueue[index].tries > triesLimit) {
      index++;
    }

    if (!this.exist(index)) {
      this._onQueueEnd();
      return;
    }

    // Count one try
    this.requestsQueue[index].tries++;import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

import { StoreRequest, StoreRequestResponse } from '../models/request';

const triesLimit = 3;
const errorStatusCodeRetry = [
  0,   // Unknown Error
  // 404, // Not Found
  503, // Service Unavailable
]; // TODO: to complete

const errorDelays = {
  default: 500,
  offline: 500,
  testServerOk: 0,
  testServerKo: 5000,
};

@Injectable()
export class QueueRequestService {
  queues = {};
  // isPendingRequest = false;

  constructor(private _loggerService: LoggerService) {}

  add(storeRequest: StoreRequest, httpRequest: Observable<ArrayBuffer>) {
    if (this.queues[storeRequest.server] === undefined) {
      this.queues[storeRequest.server] = new Queue(this._loggerService);
    }

    return this.queues[storeRequest.server].add(storeRequest, httpRequest);import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

import { StoreRequest, StoreRequestResponse } from '../models/request';

const triesLimit = 3;
const errorStatusCodeRetry = [
  0,   // Unknown Error
  // 404, // Not Found
  503, // Service Unavailable
]; // TODO: to complete

const errorDelays = {
  default: 500,
  offline: 500,
  testServerOk: 0,
  testServerKo: 5000,
};

@Injectable()
export class QueueRequestService {
  queues = {};
  // isPendingRequest = false;

  constructor(private _loggerService: LoggerService) {}

  add(storeRequest: StoreRequest, httpRequest: Observable<ArrayBuffer>) {
    if (this.queues[storeRequest.server] === undefined) {
      this.queues[storeRequest.server] = new Queue(this._loggerService);
    }

    return this.queues[storeRequest.server].add(storeRequest, httpRequest);
  }

  start() {
    Object.keys(this.queues).forEach( key => {
      this.queues[key].subscribeToNextRequest(0);
    });
  }
}

export class Queue {
  private _loggerServiceInstance;
  requestsQueue: StoreRequestResponse[] = [];
  // isPendingRequest = false;

  constructor(_logger: LoggerService) {
    this._loggerServiceInstance = _logger;
  }

  add(storeRequest: StoreRequest, httpRequest: Observable<ArrayBuffer>) {
    this.requestsQueue.push({
      request: storeRequest,
      httpRequest: httpRequest.share(),
      tries: 0,
    });

    return this.requestsQueue[this.requestsQueue.length - 1];
  }

  exist(index) {
    return this.requestsQueue[index] !== undefined;
  }

  subscribeToNextRequest(index) {
    // this.isPendingRequest = true;

    // Limit tries
    if (this.exist(index) && this.requestsQueue[index].tries > triesLimit) {
      index++;
    }

    if (!this.exist(index)) {
      this._onQueueEnd();
      return;
    }

    // Count one try
    this.requestsQueue[index].tries++;

    this.requestsQueue[index].httpRequest.subscribe(
      __ => {
        this._onQueueNextNoError(index);
      },
      error => {
        // Check if a "material" error
        if (errorStatusCodeRetry.indexOf(error.status) === -1) {
          this._onQueueNextNoError(index);
        } else {
          this._onQueueEnd(index);
        }
        this._loggerServiceInstance.warn('Fin de la queue avec comme erreur final', error);
        return error;
      }
    );
  }

  _onQueueNextNoError(index) {
    // Prepare to subscribe next
    index++;

    if (this.exist(index)) {
      this.subscribeToNextRequest(index);
    } else {
      this._onQueueEnd();
    }
  }

  _onQueueEnd(indexFailedRequest?: number) {
    // this.isPendingRequest = false;

    // If no index, all request finish correctly
    if (indexFailedRequest === undefined) {
      this.requestsQueue = [];
      console.log(`Toute les requêtes de la fil d'attente ont fini correctement`);
      this._loggerServiceInstance.info(`Toute les requêtes de la fil d'attente ont fini correctement`);
    }
    // If index, keep in queue request no finished
    else {
      this.requestsQueue = this.requestsQueue.filter((obs$, indexRequestToSave) => indexFailedRequest <= indexRequestToSave);
      this._loggerServiceInstance.info(
        `Toute les requêtes de la fil d'attente n'ont pas fini correctement, sauvegarde des restantes`,
        'requestsQueue.length',
        this.requestsQueue
      );
    }
  }
}

  }

  start() {
    Object.keys(this.queues).forEach( key => {
      this.queues[key].subscribeToNextRequest(0);
    });
  }
}

export class Queue {
  private _loggerServiceInstance;
  requestsQueue: StoreRequestResponse[] = [];
  // isPendingRequest = false;

  constructor(_logger: LoggerService) {
    this._loggerServiceInstance = _logger;
  }

  add(storeRequest: StoreRequest, httpRequest: Observable<ArrayBuffer>) {
    this.requestsQueue.push({
      request: storeRequest,
      httpRequest: httpRequest.share(),
      tries: 0,
    });

    return this.requestsQueue[this.requestsQueue.length - 1];
  }

  exist(index) {
    return this.requestsQueue[index] !== undefined;
  }

  subscribeToNextRequest(index) {
    // this.isPendingRequest = true;

    // Limit tries
    if (this.exist(index) && this.requestsQueue[index].tries > triesLimit) {
      index++;
    }

    if (!this.exist(index)) {
      this._onQueueEnd();
      return;
    }

    // Count one try
    this.requestsQueue[index].tries++;

    this.requestsQueue[index].httpRequest.subscribe(
      __ => {
        this._onQueueNextNoError(index);
      },
      error => {
        // Check if a "material" error
        if (errorStatusCodeRetry.indexOf(error.status) === -1) {
          this._onQueueNextNoError(index);
        } else {
          this._onQueueEnd(index);
        }
        this._loggerServiceInstance.warn('Fin de la queue avec comme erreur final', error);
        return error;
      }
    );
  }

  _onQueueNextNoError(index) {
    // Prepare to subscribe next
    index++;

    if (this.exist(index)) {
      this.subscribeToNextRequest(index);
    } else {
      this._onQueueEnd();
    }
  }

  _onQueueEnd(indexFailedRequest?: number) {
    // this.isPendingRequest = false;

    // If no index, all request finish correctly
    if (indexFailedRequest === undefined) {
      this.requestsQueue = [];
      console.log(`Toute les requêtes de la fil d'attente ont fini correctement`);
      this._loggerServiceInstance.info(`Toute les requêtes de la fil d'attente ont fini correctement`);
    }
    // If index, keep in queue request no finished
    else {
      this.requestsQueue = this.requestsQueue.filter((obs$, indexRequestToSave) => indexFailedRequest <= indexRequestToSave);
      this._loggerServiceInstance.info(
        `Toute les requêtes de la fil d'attente n'ont pas fini correctement, sauvegarde des restantes`,
        'requestsQueue.length',
        this.requestsQueue
      );
    }
  }
}


    this.requestsQueue[index].httpRequest.subscribe(
      __ => {
        this._onQueueNextNoError(index);
      },
      error => {
        // Check if a "material" error
        if (errorStatusCodeRetry.indexOf(error.status) === -1) {
          this._onQueueNextNoError(index);
        } else {
          this._onQueueEnd(index);
        }
        this._loggerServiceInstance.warn('Fin de la queue avec comme erreur final', error);
        return error;
      }
    );
  }

  _onQueueNextNoError(index) {
    // Prepare to subscribe next
    index++;

    if (this.exist(index)) {
      this.subscribeToNextRequest(index);
    } else {
      this._onQueueEnd();
    }
  }

  _onQueueEnd(indexFailedRequest?: number) {
    // this.isPendingRequest = false;

    // If no index, all request finish correctly
    if (indexFailedRequest === undefined) {
      this.requestsQueue = [];
      console.log(`Toute les requêtes de la fil d'attente ont fini correctement`);
      this._loggerServiceInstance.info(`Toute les requêtes de la fil d'attente ont fini correctement`);
    }
    // If index, keep in queue request no finished
    else {
      this.requestsQueue = this.requestsQueue.filter((obs$, indexRequestToSave) => indexFailedRequest <= indexRequestToSave);
      this._loggerServiceInstance.info(
        `Toute les requêtes de la fil d'attente n'ont pas fini correctement, sauvegarde des restantes`,
        'requestsQueue.length',
        this.requestsQueue
      );
    }
  }
}
