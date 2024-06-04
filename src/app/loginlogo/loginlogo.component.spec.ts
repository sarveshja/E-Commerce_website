import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlogoComponent } from './loginlogo.component';

describe('LoginlogoComponent', () => {
  let component: LoginlogoComponent;
  let fixture: ComponentFixture<LoginlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginlogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
