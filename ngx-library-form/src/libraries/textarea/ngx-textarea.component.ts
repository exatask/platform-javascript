import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTextarea } from "../../input/ngx-element";

@Component({
  selector: 'ngx-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-textarea.component.html',
  styles: [
  ]
})
export class NgxTextareaComponent {

  @Input({
    required: true
  })
  element!: NgxTextarea;
}
