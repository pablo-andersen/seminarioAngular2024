import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcContactComponent } from './lc-contact.component';

describe('LcContactComponent', () => {
  let component: LcContactComponent;
  let fixture: ComponentFixture<LcContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
