import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAllocationComponent } from './asset-allocation.component';

describe('AssetAllocationComponent', () => {
  let component: AssetAllocationComponent;
  let fixture: ComponentFixture<AssetAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetAllocationComponent]
    });
    fixture = TestBed.createComponent(AssetAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
