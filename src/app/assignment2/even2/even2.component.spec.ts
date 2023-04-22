import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Even2Component } from './even2.component';

describe('Even2Component', () => {
  let component: Even2Component;
  let fixture: ComponentFixture<Even2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Even2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Even2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
