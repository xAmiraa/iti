import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompanyrequistComponent } from './all-companyrequist.component';

describe('AllCompanyrequistComponent', () => {
  let component: AllCompanyrequistComponent;
  let fixture: ComponentFixture<AllCompanyrequistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCompanyrequistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompanyrequistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
