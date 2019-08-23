import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
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
export class NameFormComponent implements OnChanges {
  @Input() name: string;
  @ViewChild('nameForm', {static: true}) nameForm: FormGroup;

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }
}
