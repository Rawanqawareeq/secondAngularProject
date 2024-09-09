import { Component, ElementRef, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class:'control',
   // '(click)':'onclick()',
  }
})
export class ControlComponent {
  private el = inject(ElementRef);
  @HostListener('click') onclick(){
    console.log('onclick');
    console.log(this.el);
  }
  @Input() label!:string;
}
