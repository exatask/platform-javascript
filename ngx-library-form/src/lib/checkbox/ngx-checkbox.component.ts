import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCheckbox } from "../../input/ngx-element";

@Component({
  selector: 'ngx-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-checkbox.component.html',
  styles: [
  ]
})
export class NgxCheckboxComponent {

  @Input({
    required: true
  })
  element!: NgxCheckbox;
}
