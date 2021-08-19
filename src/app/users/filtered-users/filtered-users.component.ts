import { Component, OnInit, Input } from '@angular/core';
import { SortingService } from "../../sorting.service";
import { UserService } from "../../user.service";
import { User } from "../../shared/interfaces";

@Component({
  selector: 'app-filtered-users',
  templateUrl: './filtered-users.component.html',
  styleUrls: ['./filtered-users.component.css'],
  providers: [ SortingService, UserService],
})
export class FilteredUsersComponent implements OnInit {
  private _users: User[] = [];
  @Input() get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    if(value) {
      this.filteredUsers = this._users = value;
    }
  }


  filteredUsers: any[] = [];

  constructor(private sortingService: SortingService) { }

  ngOnInit() {
    this.filteredUsers = this._users;
  }

  sort(prop: string) {
    this.sortingService.sort(this.filteredUsers, prop);
  }
}
