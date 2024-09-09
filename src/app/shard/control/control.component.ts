import { Component, ContentChild, ElementRef, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

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
  @ContentChild('input') private control? : ElementRef<HTMLInputElement|HTMLTextAreaElement>;
  @HostListener('click') onclick(){
    console.log('onclick');
  }
  @Input() label!:string;
}
