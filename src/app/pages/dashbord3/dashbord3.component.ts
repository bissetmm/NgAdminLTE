import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord3',
  templateUrl: './dashbord3.component.html',
  styleUrls: ['./dashbord3.component.scss']
})
export class Dashbord3Component implements OnInit {

  public cellSpacing: number[] = [10, 10];
  public headerCount: number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
