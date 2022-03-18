import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-quote-form-component',
  templateUrl: './get-quote-form-component.component.html',
  styleUrls: ['./get-quote-form-component.component.scss']
})
export class GetQuoteFormComponentComponent implements OnInit {

  getQuoteForm = new FormGroup({
    hostCountry: new FormControl('', Validators.required),
    hostState: new FormControl(''),
    destinationCountry: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    totalCost: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    depositDate: new FormControl('', Validators.required),
    winterSport: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
