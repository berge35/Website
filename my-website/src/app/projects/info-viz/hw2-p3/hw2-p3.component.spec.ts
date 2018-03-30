import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw2P3Component } from './hw2-p3.component';

describe('Hw2P3Component', () => {
  let component: Hw2P3Component;
  let fixture: ComponentFixture<Hw2P3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw2P3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw2P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
