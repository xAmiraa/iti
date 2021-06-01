import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LognInComponent } from './logn-in.component';


describe('LognInComponent', () => {
  let component: LognInComponent;
  let fixture: ComponentFixture<LognInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
