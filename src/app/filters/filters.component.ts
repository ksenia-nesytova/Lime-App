import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';
import { UserService } from "../user.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

users: User[] = [];

genderOptions: string[] = [];
departmentOptions: string[] = [];
cityOptions: any[] = [];

//
// this.cityOptions =  data.map(item => item.address.city)
//     .filter((value, index, self) => self.indexOf(value) === index);

// departmentOptions = this.users.map(item => item.department)
//     .filter((value, index, self) => self.indexOf(value) === index);


    async getOptions() {
      let data = await this.userService.getUsers()
      .toPromise();

      this.genderOptions =  data.map(item => item.gender)
          .filter((value, index, self) => self.indexOf(value) === index);

      this.departmentOptions = data.map(item => item.department)
          .filter((value, index, self) => self.indexOf(value) === index);

      this.cityOptions = data.map(item => item.address.city)
          .filter((value, index, self) => self.indexOf(value) === index);

        return this.genderOptions,
          this.departmentOptions,
          this.cityOptions;
    }

    constructor(private userService: UserService) {}

    ngOnInit() {
      this.userService
        .getUsers()
        .subscribe((users: User[]) => (this.users = users));
      this.getOptions()
    }

}
