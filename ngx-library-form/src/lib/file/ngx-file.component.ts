import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFile } from "../../input/ngx-element";

@Component({
  selector: 'ngx-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ngx-file.component.html',
  styles: [
  ]
})
export class NgxFileComponent {

  @Input({
    required: true
  })
  element!: NgxFile;
}
