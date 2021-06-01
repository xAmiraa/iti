import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVIEWWComponent } from './student-vieww.component';

describe('StudentVIEWWComponent', () => {
  let component: StudentVIEWWComponent;
  let fixture: ComponentFixture<StudentVIEWWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVIEWWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVIEWWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
