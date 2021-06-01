import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreCompanyComponent } from './read-more-company.component';

describe('ReadMoreCompanyComponent', () => {
  let component: ReadMoreCompanyComponent;
  let fixture: ComponentFixture<ReadMoreCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
