import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'dashboard-item' ,
    '(click)':'onclick()',
  }
})
export class DashboardItemComponent {
  //@HostBinding('class') clasName ='dashboard-item';
  @Input({required:true}) image ! : {src:string , alt : string};
  @Input({required:true}) title ! : string;
  onclick(){
    console.log('cklick!!')
  }

}
