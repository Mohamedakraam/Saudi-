import { Input, Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { Product, TableRows, TopSelling,Employee } from '../table/table-data';

@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf],
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss']
})
export class NgbdAlertBasicComponent {
  // this is for the Closeable Alert
  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }
}