import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw2P2Component } from './hw2-p2.component';

describe('Hw2P2Component', () => {
  let component: Hw2P2Component;
  let fixture: ComponentFixture<Hw2P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw2P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw2P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
