import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalComponent } from './signal.component';

describe('DefaultComponent', () => {
  let component: SignalComponent;
  let fixture: ComponentFixture<SignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
