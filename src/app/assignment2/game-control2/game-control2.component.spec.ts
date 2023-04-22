import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControl2Component } from './game-control2.component';

describe('GameControl2Component', () => {
  let component: GameControl2Component;
  let fixture: ComponentFixture<GameControl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameControl2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameControl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
