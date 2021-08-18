import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/interfaces';
import { UserService } from "../user.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

users: User[] = [];


@Input() genderOptions: string[] = this.users.map(item => item.gender)
    .filter((value, index, self) => self.indexOf(value) === index);

cityOptions = this.users.map(item => item.address.city)
    .filter((value, index, self) => self.indexOf(value) === index);

departmentOptions = this.users.map(item => item.department)
    .filter((value, index, self) => self.indexOf(value) === index);


    getUsers(): void {
      this.userService.getUsers()
        .subscribe(users => this.users = users)
    }
    constructor(private userService: UserService) {}

    ngOnInit() {
      this.getUsers();
      console.log(this.genderOptions)
    }

}
