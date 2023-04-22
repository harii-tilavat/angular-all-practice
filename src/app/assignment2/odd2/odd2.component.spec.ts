import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odd2Component } from './odd2.component';

describe('Odd2Component', () => {
  let component: Odd2Component;
  let fixture: ComponentFixture<Odd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Odd2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Odd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
