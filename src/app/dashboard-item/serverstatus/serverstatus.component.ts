import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css']
})
export class ServerstatusComponent implements OnInit  {
  currentStatus :'online'| 'offline'|'unknown' = 'online';
  constructor(){}
 ngOnInit():void{
    setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus = 'online';
      }else if(rnd < 0.9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
    }, 5000); 
  }
}