import { Type } from "../constant/element";

export interface NgxElement {

  type: Type;
  title: String;
}

export class NgxText implements NgxElement {

  type!: Type;
  title!: String;
}

export class NgxTextarea implements NgxElement {

  type!: Type;
  title!: String;
}

export class NgxRadio implements NgxElement {

  type!: Type;
  title!: String;
}

export class NgxCheckbox implements NgxElement {

  type!: Type;
  title!: String;
}

export class NgxSelect implements NgxElement {

  type!: Type;
  title!: String;
}
