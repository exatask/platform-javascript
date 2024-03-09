import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSelect } from "../../input/ngx-element";

@Component({
  selector: 'ngx-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-select.component.html',
  styles: [
  ]
})
export class NgxSelectComponent {

  @Input({
    required: true
  })
  element!: NgxSelect;
}
