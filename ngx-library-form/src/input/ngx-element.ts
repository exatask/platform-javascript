export enum Type {

  TEXT,
  TEXTAREA,
  PASSWORD,
  RADIO,
  CHECKBOX,
  SELECT,
  COLOR,
  FILE,
  HIDDEN
}

export abstract class NgxElement {

  type!: Type;
  title!: String;
  id!: String;
  name!: String;
  placeholder!: String;

  required!: Boolean;
  disabled!: Boolean;
}

export class NgxText extends NgxElement {
}

export class NgxTextarea extends NgxElement {
}

export class NgxPassword extends NgxElement {
}

export class NgxRadio extends NgxElement {

  data!: NgxRadioData[];
}

export class NgxCheckbox extends NgxElement {

  data!: NgxCheckboxData[];
}

export class NgxSelect extends NgxElement {
}

export class NgxColor extends NgxElement {
}

export class NgxFile extends NgxElement {
}

export class NgxHidden extends NgxElement {
}

export class NgxRadioData {

  id!: String;
  title!: String;
  value!: String;

  disabled!: Boolean;
}

export class NgxCheckboxData {

  id!: String;
  name!: String;
  title!: String;
  value!: String;

  disabled!: Boolean;
}
