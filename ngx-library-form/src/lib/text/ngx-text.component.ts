import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxText } from "../../input/ngx-element";

@Component({
  selector: 'ngx-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-text.component.html',
  styles: [
  ]
})
export class NgxTextComponent {

  @Input({
    required: true
  })
  element!: NgxText;
}
