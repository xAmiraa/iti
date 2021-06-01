import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JObDetailsComponent } from './job-details.component';

describe('JObDetailsComponent', () => {
  let component: JObDetailsComponent;
  let fixture: ComponentFixture<JObDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JObDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JObDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
