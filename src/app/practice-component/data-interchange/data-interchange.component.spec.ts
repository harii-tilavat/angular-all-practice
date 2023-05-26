import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInterchangeComponent } from './data-interchange.component';

describe('DataInterchangeComponent', () => {
  let component: DataInterchangeComponent;
  let fixture: ComponentFixture<DataInterchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInterchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInterchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
