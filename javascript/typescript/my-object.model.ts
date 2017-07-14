import * as _ from 'lodash';

import {
  CodeLibelle
} from '../../+shared';

import { MyChildrenObject } from './my-children-object.model';

export class MyObject {
  numbo: number;
  phrase: string;
  childrenObjectList: MyChildrenObject[];

  constructor(objScr: any) {
    // Copy objScr without childrenObjectList property
    let {childrenObjectList, ...objDest} = objScr;
    
    // Add list of MyChildrenObject
    objDest.childrenObjectList = [];
    objScr.childrenObjectList.forEach((child: MyChildrenObject) => {
      objDest.childrenObjectList.push(new MyChildrenObject(child));
    });

    _.merge(this, objDest);
  }
}
