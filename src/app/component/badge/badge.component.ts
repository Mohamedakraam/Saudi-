import { Component } from "@angular/core";
import { NgFor, NgIf } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Product, TableRows, TopSelling,Employee } from '../table/table-data';
@Component({
  templateUrl: "badge.component.html",
  selector: 'app-ngbd-badge',
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf],
  styles: [
    `
      .alert-custom {
        color: #cc4dd5;
        background-color: #f0c4f3;
        border-color: #f0c4f3;
      }
    `,
  ],
})

export class BadgeComponent { 

  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }

  
}
