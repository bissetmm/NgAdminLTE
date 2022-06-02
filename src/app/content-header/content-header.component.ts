import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { headers } from '../models/common';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  private onDestroy$ = new Subject();

  currentUrl:string = '';
  title:string | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.router.events
      .pipe(
        takeUntil(this.onDestroy$),
        filter((event: Event): event is RouterEvent => event instanceof NavigationEnd),
      ).subscribe((event: RouterEvent) => {
        console.log(event.url);
        this.currentUrl = event.url;
        this.title = this.getTitle(event.url);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  public getTitle(id:string){
    return this.headattr.find(x=>x.id===id)?.name;
  }

  private headattr:headers[] = [
    {
      id:"/dashbord1",
      name:"Dashbord1"
    },
    {
      id:"/dashbord22",
      name:"Dashbord2"
    },
    {
      id:"/dashbord3",
      name:"Dashbord3"
    },
  ]

}
