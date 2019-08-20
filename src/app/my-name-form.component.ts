import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-name-form',
  template: `
    <mat-form-field>
      <p>Name<p>
      <input matInput name="nameForm" #nameForm="ngModel" [(ngModel)]="name">
    </mat-form-field>
`,
})
export class NameFormComponent  {
  @Input() name: string;
  @ViewChild('nameForm', {static: true}) nameForm: FormGroup;
}
