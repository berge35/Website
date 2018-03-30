import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVizComponent } from './info-viz.component';

describe('InfoVizComponent', () => {
  let component: InfoVizComponent;
  let fixture: ComponentFixture<InfoVizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
