import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMetricsComponent } from './performance-metrics.component';

describe('PerformanceMetricsComponent', () => {
  let component: PerformanceMetricsComponent;
  let fixture: ComponentFixture<PerformanceMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceMetricsComponent]
    });
    fixture = TestBed.createComponent(PerformanceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
