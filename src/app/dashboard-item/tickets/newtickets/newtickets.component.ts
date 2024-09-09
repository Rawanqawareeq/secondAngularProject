import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shard/control/control.component";
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shard/button/button.component';

@Component({
  selector: 'app-newtickets',
  standalone: true,
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './newtickets.component.html',
  styleUrl: './newtickets.component.css'
})
export class NewticketsComponent {
  @ViewChild('form') form? : ElementRef<HTMLFormElement>;
  onSubmit(title:string,textarea : string){
    console.dir(title);
    this.form?.nativeElement.reset();

  }

}
