import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'syncfusion-angular-app';
  public cellSpacing: number[] = [10, 10];
  public columns: number = 6;
  public panels: any = [{'id':'Panel0', 'sizeX': 1, 'sizeY': 1,'row': 0, 'col': 0, header:'<div>Panel 0</div>', content:'<div class="content">Panel Content<div>'},
  {'id':'Panel1', 'sizeX': 3, 'sizeY': 2,'row': 0, 'col': 1, header:'<div>Panel 1</div>', content:'<div class="content">Panel Content<div>'},
  {'id':'Panel2', 'sizeX': 1, 'sizeY': 3,'row': 0, 'col': 4, header:'<div>Panel 2</div>', content:'<div class="content">Panel Content<div>'},
  {'id':'Panel3', 'sizeX': 1, 'sizeY': 1,'row': 1, 'col': 0, header:'<div>Panel 3</div>', content:'<div class="content">Panel Content<div>'},
  {'id':'Panel4', 'sizeX': 2, 'sizeY': 1,'row': 2, 'col': 0, header:'<div>Panel 4</div>', content:'<div class="content">Panel Content<div>'},
  {'id':'Panel5', 'sizeX': 1, 'sizeY': 1,'row': 2, 'col': 2, header:'<div>Panel 5</div>', content:'<div class="content">Panel Content<div>'},
  {'id':'Panel6','sizeX': 1, 'sizeY': 1,'row': 2, 'col': 3, header:'<div>Panel 6</div>', content:'<div class="content">Panel Content<div>'}
  ]
  public data: Object[] = [
    {
      OrderID: 10248,
      CustomerID: 'VINET',
      EmployeeID: 5,
      OrderDate: new Date(8364186e5),
      ShipName: 'Vins et alcools Chevalier',
      ShipCity: 'Reims',
      ShipAddress: '59 rue de l Abbaye',
      ShipRegion: 'CJ',
      ShipPostalCode: '51100',
      ShipCountry: 'France',
      Freight: 32.38,
      Verified: !0,
    },
    {
      OrderID: 10249,
      CustomerID: 'TOMSP',
      EmployeeID: 6,
      OrderDate: new Date(836505e6),
      ShipName: 'Toms Spezialitäten',
      ShipCity: 'Münster',
      ShipAddress: 'Luisenstr. 48',
      ShipRegion: 'CJ',
      ShipPostalCode: '44087',
      ShipCountry: 'Germany',
      Freight: 11.61,
      Verified: !1,
    },
    {
      OrderID: 10250,
      CustomerID: 'HANAR',
      EmployeeID: 4,
      OrderDate: new Date(8367642e5),
      ShipName: 'Hanari Carnes',
      ShipCity: 'Rio de Janeiro',
      ShipAddress: 'Rua do Paço, 67',
      ShipRegion: 'RJ',
      ShipPostalCode: '05454-876',
      ShipCountry: 'Brazil',
      Freight: 65.83,
      Verified: !0,
    },
  ];
}
