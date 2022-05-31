import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DashboardLayoutComponent,
  PanelModel,
} from '@syncfusion/ej2-angular-layouts';
import panelData from '../../models/panels-data';
import { headers } from 'src/app/models/common';

@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.scss'],
})
export class Dashbord1Component implements OnInit {
  @ViewChild('api_dashboard')
  public dashboardObject: DashboardLayoutComponent | undefined;
  public panels: any = panelData;
  public count: number = 5;
  public panelsData: PanelModel[] = [
    {
      sizeX: 2,
      sizeY: 2,
      row: 0,
      col: 0,
      header: '<div>Panel 1</div>',
    },
    {
      sizeX: 2,
      sizeY: 2,
      row: 0,
      col: 2,
      header: '<div>Panel 2</div>',
    },
    {
      sizeX: 2,
      sizeY: 2,
      row: 0,
      col: 4,
      header: '<div>Panel 3</div>',
    },
    {
      sizeX: 4,
      sizeY: 2,
      row: 2,
      col: 0,
      header: '<div>Panel 4</div>',
    },
    {
      sizeX: 2,
      sizeY: 2,
      row: 2,
      col: 4,
      header: '<div>Panel 5</div>',
    },
  ];
  public cellSpacing: number[] = [10, 10];
  public headerCount: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
