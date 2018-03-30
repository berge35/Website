import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw2P4Component } from './hw2-p4.component';

describe('Hw2P4Component', () => {
  let component: Hw2P4Component;
  let fixture: ComponentFixture<Hw2P4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw2P4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw2P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
