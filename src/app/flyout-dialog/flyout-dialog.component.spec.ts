import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutDialogComponent } from './flyout-dialog.component';

describe('FlyoutDialogComponent', () => {
  let component: FlyoutDialogComponent;
  let fixture: ComponentFixture<FlyoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlyoutDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
