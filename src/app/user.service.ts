import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = '../../assets/test_users.json';

  constructor(
    private http: HttpClient) { }

    users: User[] = [];

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
