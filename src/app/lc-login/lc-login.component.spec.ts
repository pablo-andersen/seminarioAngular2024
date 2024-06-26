import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcLoginComponent } from './lc-login.component';

describe('LcLoginComponent', () => {
  let component: LcLoginComponent;
  let fixture: ComponentFixture<LcLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
