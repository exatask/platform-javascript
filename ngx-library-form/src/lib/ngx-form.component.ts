import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxForm } from "../input/ngx-form";
import { Type } from "../constant/element";
import { NgxTextComponent } from "./text/ngx-text.component";
import { NgxTextareaComponent } from "./textarea/ngx-textarea.component";
import { NgxRadioComponent } from "./radio/ngx-radio.component";
import { NgxSelectComponent } from "./select/ngx-select.component";
import { NgxCheckboxComponent } from "./checkbox/ngx-checkbox.component";

@Component({
  selector: 'ngx-form',
  standalone: true,
  imports: [CommonModule, NgxTextComponent, NgxTextareaComponent, NgxRadioComponent, NgxSelectComponent, NgxCheckboxComponent],
  templateUrl: 'ngx-form.component.html',
  styles: [
  ]
})
export class NgxFormComponent {

  @Input({
    required: true
  })
  form!: NgxForm

  elementType: typeof Type = Type;
}
