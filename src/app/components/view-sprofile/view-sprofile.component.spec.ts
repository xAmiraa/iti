import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSProfileComponent } from './view-sprofile.component';

describe('ViewSProfileComponent', () => {
  let component: ViewSProfileComponent;
  let fixture: ComponentFixture<ViewSProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
