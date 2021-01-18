import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAcivityComponent } from './payment-acivity.component';

describe('PaymentAcivityComponent', () => {
  let component: PaymentAcivityComponent;
  let fixture: ComponentFixture<PaymentAcivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAcivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAcivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
