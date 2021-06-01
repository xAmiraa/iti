import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsProfileSubmittedComponent } from './students-profile-submitted.component';

describe('StudentsProfileSubmittedComponent', () => {
  let component: StudentsProfileSubmittedComponent;
  let fixture: ComponentFixture<StudentsProfileSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsProfileSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsProfileSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
