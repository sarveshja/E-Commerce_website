import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerheadComponent } from './sellerhead.component';

describe('SellerheadComponent', () => {
  let component: SellerheadComponent;
  let fixture: ComponentFixture<SellerheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
