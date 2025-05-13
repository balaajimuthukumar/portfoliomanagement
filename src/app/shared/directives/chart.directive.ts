import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Chart } from 'chart.js';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective {
  @Input() chartType: ChartType = 'bar';
  @Input() chartData!: ChartData;
  @Input() chartOptions!: ChartOptions;

  private chart!: Chart;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] || changes['chartType'] || changes['chartOptions']) {
      this.createChart();
    }
  }

  private createChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.el.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions,
    });
  }

}
