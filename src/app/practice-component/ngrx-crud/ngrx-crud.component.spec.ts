import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCrudComponent } from './ngrx-crud.component';

describe('NgrxCrudComponent', () => {
  let component: NgrxCrudComponent;
  let fixture: ComponentFixture<NgrxCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCrudComponent]
    });
    fixture = TestBed.createComponent(NgrxCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
