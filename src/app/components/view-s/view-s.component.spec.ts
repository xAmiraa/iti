import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSComponent } from './view-s.component';

describe('ViewSComponent', () => {
  let component: ViewSComponent;
  let fixture: ComponentFixture<ViewSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
