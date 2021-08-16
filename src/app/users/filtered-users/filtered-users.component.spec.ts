import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredUsersComponent } from './filtered-users.component';

describe('FilteredUsersComponent', () => {
  let component: FilteredUsersComponent;
  let fixture: ComponentFixture<FilteredUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
