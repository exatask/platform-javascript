import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHidden } from "../../input/ngx-element";

@Component({
  selector: 'ngx-hidden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-hidden.component.html',
  styles: [
  ]
})
export class NgxHiddenComponent {

  @Input({
    required: true
  })
  element!: NgxHidden;
}
