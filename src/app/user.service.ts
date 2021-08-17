import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { User } from '../../app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
