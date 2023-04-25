import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingUsersComponent } from './routing-users.component';

describe('RoutingUsersComponent', () => {
  let component: RoutingUsersComponent;
  let fixture: ComponentFixture<RoutingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
