import { StoreRequests } from '../models/request';
import { environment } from 'environments';
import {HttpParams} from '@angular/common/http';

export const AfkdRequests: StoreRequests = {
  checkUser: {
    server: 'afkd',
    verb: 'GET',
    headers: {
      'x-password': environment.server.gameserver.password
    },
    shouldRetry: false,
  },
  test: {
    server: 'afkd',
    verb: 'GET',
    resource: 'test',
    shouldRetry: false, // because it using in "retry test"
  },
  addTracking: {
    server: 'afkd',
    verb: 'POST',
    resource: 'trackings',
    shouldRetry: false
  }
};

export const GameserverRequests: StoreRequests = {
  test: {
    server: 'gameserver',
    verb: 'GET',
    resource: 'test',
    shouldRetry: false, // because it using in "retry test"
  },
  addResult: {
    server: 'gameserver',
    verb: 'PUT',
    resource: 'results/afkd',
    shouldRetry: false
  },

  /**
   * Unused
   *
   * - to use, set queries :
   * GameserverRequests.getGamePosition.queries = new HttpParams({ fromObject: {
      'refClient': this._userDataService.getUser().userKey,
      'results': 'false'
    }});
   */
  getProgress: {
    server: 'gameserver',
    verb: 'GET',
    headers: {
      'key': environment.server.gameserver.password
    },
    resource: 'trials/afkd',
    shouldRetry: false
  }
};
