import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FilteredUsersComponent } from './users/filtered-users/filtered-users.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

import { SortingService } from "./sorting.service";
import { FiltersComponent } from './filters/filters.component';
import { FiltersPipe } from './filters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilteredUsersComponent,
    FiltersComponent,
    FiltersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
