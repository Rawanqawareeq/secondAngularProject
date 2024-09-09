import { Component } from '@angular/core';
import { NewticketsComponent } from "./newtickets/newtickets.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewticketsComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
