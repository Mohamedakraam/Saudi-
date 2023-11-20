import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { Product, TableRows, TopSelling, Employee } from '../table/table-data';

@Component({
  templateUrl: 'card.component.html',
  standalone: true,
  selector: 'app-ngbd-alert',
  
  imports: [NgbAlertModule, NgFor, NgIf],
 
  
})
export class CardsComponent {
  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }
}
