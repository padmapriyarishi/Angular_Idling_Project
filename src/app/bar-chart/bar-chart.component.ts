import { Component, OnInit } from '@angular/core';
import pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit {
  selectedAssets : string = ''

  constructor() { }

  ngOnInit(): void {
    this.selectedAssets = '(9650) ALL ASSETS'
  }

  public chartType: string = "bar";

  public years : string = "day";

  public chartDatasets: Array<any> = [
    { data: [1950, 1130, 1576, 1911,500,0], label:"IDLING" }
  ];
  public barChartPlugins = [pluginDataLabels];

  public chartLabels: Array<any> = [
    "0-10%",
    "10-15%",
    "10-25%",
    "> 25%"
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        "#EB5757",
        "#CCCCCC",
        "rgba(242,201,76,1)",
        "rgba(72, 197, 129, 1)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "#EB5757",
        "#CCCCCC",
        "rgba(242,201,76,1)",
        "rgba(72, 197, 129, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 2
    }
  ];
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        color:'#666666',
        font: {
          size: 10,
          weight:700
        }
      }
    }

  };

  
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  onYearChange(year) {

  }

  onChangeAssets() {

  }

}
