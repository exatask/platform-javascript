import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRadio } from "../../input/ngx-element";

@Component({
  selector: 'ngx-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-radio.component.html',
  styles: [
  ]
})
export class NgxRadioComponent {

  @Input({
    required: true
  })
  element!: NgxRadio;
}
