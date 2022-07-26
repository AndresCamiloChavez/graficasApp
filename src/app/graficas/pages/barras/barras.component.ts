import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#5D6B63', hoverBackgroundColor: '#5D6B22'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [ 28, 48,  40, 19, 86, 27, 90 ], label: 'Series C' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
      Math.round(Math.random() *100 ),
    ];

    this.chart?.update();
  }

}
