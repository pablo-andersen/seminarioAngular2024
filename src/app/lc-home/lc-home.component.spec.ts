import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcHomeComponent } from './lc-home.component';

describe('LcHomeComponent', () => {
  let component: LcHomeComponent;
  let fixture: ComponentFixture<LcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
