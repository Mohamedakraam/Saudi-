import { Component } from "@angular/core";
import { NgFor, NgIf } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Product, TableRows, TopSelling,Employee } from '../table/table-data';
@Component({
  templateUrl: "badge.component.html",
  selector: 'app-ngbd-badge',
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf],
  styleUrls: ['badge.component.scss']
})

export class BadgeComponent { 

  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }

  
}
