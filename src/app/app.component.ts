import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerstatusComponent } from "./dashboard-item/serverstatus/serverstatus.component";
import { TrafficComponent } from "./dashboard-item/traffic/traffic.component";
import { TicketsComponent } from "./dashboard-item/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerstatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
  
}
