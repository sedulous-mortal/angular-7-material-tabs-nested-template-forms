import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-name-form',
  template: `
  <ng-template matTabContent #nameForm>
    <mat-form-field>
      <p>Name<p>
      <input matInput [(ngModel)]="name">
    </mat-form-field>
  </ng-template>
  <ng-container *ngTemplateOutlet="nameForm"></ng-container>
`,
})
export class NameFormComponent implements OnChanges {
  @Input() name: string;
  @ViewChild('nameForm', {static: true})
  private nameForm: TemplateRef<any>;

  ngOnChanges(changes: SimpleChanges){
    console.log(this.nameForm)
  }
}
