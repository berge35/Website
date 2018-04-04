import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaScrollerComponent } from './media-scroller.component';

describe('MediaScrollerComponent', () => {
  let component: MediaScrollerComponent;
  let fixture: ComponentFixture<MediaScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
