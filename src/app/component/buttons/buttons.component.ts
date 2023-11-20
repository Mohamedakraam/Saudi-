import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Product, TableRows, TopSelling, Employee } from '../table/table-data';

interface buttonsData {
  btn: string;
  icon: string;
}

@Component({
  selector: 'app-ngbd-buttons',
  standalone: true,
  templateUrl: 'buttons.component.html',
  imports: [
    FormsModule, ReactiveFormsModule , NgFor
  ]
})
export class NgbdButtonsComponent implements OnInit {
  topSelling: Product[];

  trow: TableRows[];

  constructor() {

    this.topSelling = TopSelling;

    this.trow = Employee;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}