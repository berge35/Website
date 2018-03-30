import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw2P5Component } from './hw2-p5.component';

describe('Hw2P5Component', () => {
  let component: Hw2P5Component;
  let fixture: ComponentFixture<Hw2P5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw2P5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw2P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
