import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';
import { UserService } from "../user.service";
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

users: User[] = [];

genderOptions: string[] =  this.users.map(item => item.gender)
    .filter((value, index, self) => self.indexOf(value) === index);

cityOptions = this.users.map(item => item.address.city)
    .filter((value, index, self) => self.indexOf(value) === index);

departmentOptions = this.users.map(item => item.department)
    .filter((value, index, self) => self.indexOf(value) === index);

    async getConditionalDataUsingAsync() {
      let data = await this.getUsers().toPromise();
      console.log('please work');
    }

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
