import { Component } from '@angular/core';
import { Person } from './person-data.model';

@Component({
  selector: 'wrapper-component',
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent  {
  personData: Person = {
    name: 'Alicia Turret',
    phone: '123-456-7890',
  }
}