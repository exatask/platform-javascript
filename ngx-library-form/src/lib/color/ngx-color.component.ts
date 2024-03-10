import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxColor } from "../../input/ngx-element";

@Component({
  selector: 'ngx-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-color.component.html',
  styles: [
  ]
})
export class NgxColorComponent {

  @Input({
    required: true
  })
  element!: NgxColor;
}
