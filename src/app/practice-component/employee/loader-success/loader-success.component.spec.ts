import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSuccessComponent } from './loader-success.component';

describe('LoaderSuccessComponent', () => {
  let component: LoaderSuccessComponent;
  let fixture: ComponentFixture<LoaderSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderSuccessComponent]
    });
    fixture = TestBed.createComponent(LoaderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
