import { Component } from '@angular/core';
import { ControlComponent } from "../../../shard/control/control.component";

@Component({
  selector: 'app-newtickets',
  standalone: true,
  imports: [ControlComponent],
  templateUrl: './newtickets.component.html',
  styleUrl: './newtickets.component.css'
})
export class NewticketsComponent {

}
