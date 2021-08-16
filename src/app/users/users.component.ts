import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {

  }

}
