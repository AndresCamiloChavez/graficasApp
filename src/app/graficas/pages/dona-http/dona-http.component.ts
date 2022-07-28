import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css'],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficaService: GraficasService) {}
  public doughnutChartType: ChartType = 'doughnut';
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  ngOnInit(): void {
    // this.graficaService.getData().subscribe( (data) =>{

    //   const labels = Object.keys( data );
    //   const values: number[] =  Object.values(data) as number[];
    //   this.doughnutChartData.labels = labels;
    //   console.log(this.doughnutChartData.labels);

    //   this.doughnutChartData.datasets[0].data = values;
    //   this.chart?.update;
    // });
    this.graficaService.getDataEstruturada().subscribe(({labels, values}) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets[0].data = values;
    });
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
