import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPassword } from "../../input/ngx-element";

@Component({
  selector: 'ngx-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-password.component.html',
  styles: [
  ]
})
export class NgxPasswordComponent {

  @Input({
    required: true
  })
  element!: NgxPassword;
}
