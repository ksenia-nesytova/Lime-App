import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  property: string = "";
  direction: number = 1;

  sort(collection: any[], prop: any) {

    collection.sort((a: any, b:any) => {
      let aValue: any;
      let bValue: any;

      aValue = a[prop];
      bValue = b[prop];

      if(aValue === bValue) {
        return 0;
      } else if(aValue > bValue) {
        return this.direction + -1;
      } else {
        return this.direction * 1;
      }

    })
  }

  constructor() { }
}
