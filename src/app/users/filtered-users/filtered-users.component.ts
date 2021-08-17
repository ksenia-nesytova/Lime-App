import { Component, OnInit } from '@angular/core';
import { SortingService } from "../../sorting.service";
import { UserService } from "../../user.service";
@Component({
  selector: 'app-filtered-users',
  templateUrl: './filtered-users.component.html',
  styleUrls: ['./filtered-users.component.css'],
  providers: [ SortingService, UserService],
})
export class FilteredUsersComponent implements OnInit {

  filteredUsers: any[] = [];

  constructor(private sortingService: SortingService) { }

  ngOnInit(): void {
  }

  sort(prop: string) {
    this.sortingService.sort(this.filteredUsers, prop);
  }
}
