import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCompanyComponent } from './message-company.component';

describe('MessageCompanyComponent', () => {
  let component: MessageCompanyComponent;
  let fixture: ComponentFixture<MessageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
