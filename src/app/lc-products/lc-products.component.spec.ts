import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcProductsComponent } from './lc-products.component';

describe('LcProductsComponent', () => {
  let component: LcProductsComponent;
  let fixture: ComponentFixture<LcProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
