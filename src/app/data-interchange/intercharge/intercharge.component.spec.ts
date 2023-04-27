import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterchargeComponent } from './intercharge.component';

describe('InterchargeComponent', () => {
  let component: InterchargeComponent;
  let fixture: ComponentFixture<InterchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterchargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
