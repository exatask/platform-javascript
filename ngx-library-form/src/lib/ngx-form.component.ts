import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxForm } from "../input/ngx-form";
import { NgxTextComponent } from "./text/ngx-text.component";
import { NgxTextareaComponent } from "./textarea/ngx-textarea.component";
import { NgxRadioComponent } from "./radio/ngx-radio.component";
import { NgxSelectComponent } from "./select/ngx-select.component";
import { NgxCheckboxComponent } from "./checkbox/ngx-checkbox.component";
import { NgxPasswordComponent } from "./password/ngx-password.component";
import { NgxColorComponent } from "./color/ngx-color.component";
import { Type } from "../input/ngx-element";
import { NgxFileComponent } from "./file/ngx-file.component";
import { NgxHiddenComponent } from "./hidden/ngx-hidden.component";

@Component({
  selector: 'ngx-form',
  standalone: true,
  imports: [CommonModule, NgxTextComponent, NgxTextareaComponent, NgxRadioComponent, NgxSelectComponent, NgxCheckboxComponent, NgxPasswordComponent, NgxColorComponent, NgxFileComponent, NgxHiddenComponent],
  templateUrl: 'ngx-form.component.html',
  styles: [
  ]
})
export class NgxFormComponent {

  @Input({
    required: true
  })
  form!: NgxForm

  protected readonly elementType = Type;
}
