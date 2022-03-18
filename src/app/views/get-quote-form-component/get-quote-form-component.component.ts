import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GetAllowedCurrenciesService} from 'src/app/services/get-allowed-currencies.service';
import {GetDestinationCountryService} from 'src/app/services/get-destination-country.service';
import {GetHostCountryService} from 'src/app/services/get-host-country.service';
import {GetQuoteService} from 'src/app/services/get-quote.service';

@Component({
  selector: 'app-get-quote-form-component',
  templateUrl: './get-quote-form-component.component.html',
  styleUrls: ['./get-quote-form-component.component.scss']
})
export class GetQuoteFormComponentComponent implements OnInit {

  hostCountrySelectedBool: boolean  = false;

  getQuoteForm = new FormGroup({
    hostCountry: new FormControl('', Validators.required),
    hostState: new FormControl({value:'', disabled: !this.hostCountrySelectedBool}),
    destinationCountry: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    currency: new FormControl({value:'', disabled: !this.hostCountrySelectedBool}, Validators.required),
    totalCost: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    depositDate: new FormControl('', Validators.required),
    winterSport: new FormControl('', Validators.required),
  });

  resultCurrencies;
  resultDestinationCountries;
  resultHostCountries;
  resultQuote;

  constructor(
    public getQuoteService: GetQuoteService,
    public getAllowedCurrenciesService: GetAllowedCurrenciesService,
    public getDestinationCountryService: GetDestinationCountryService,
    public getHostCountryService: GetHostCountryService) { }


  ngOnInit(): void {
    this.getHostCountry();
    this.getDestinationCountry();
//     this.getQuote();
  }

  getAllowedCurrencies(countryValue: string){
    this.getAllowedCurrenciesService.getAllowedCurrencies(countryValue).subscribe(currenciesResult => {
        this.resultCurrencies = currenciesResult;
    }, error => {
      console.log("ERORRRRRR" + JSON.stringify(error));
    });
  }

  getDestinationCountry(){
    this.getDestinationCountryService.getDestinationCountry().subscribe(countriesResult => {
        this.resultDestinationCountries = countriesResult;
    }, error => {
      console.log("ERORRRRRR" + JSON.stringify(error));
    });
  }

  getHostCountry(){
    this.getHostCountryService.getHostCountry().subscribe(countriesResult => {
        this.resultHostCountries = countriesResult;
    }, error => {
      console.log("ERORRRRRR" + JSON.stringify(error));
    });
  }

  getQuote(){
    this.getQuoteService.getQuote().subscribe(quoteResult => {
        this.resultQuote = quoteResult;
        console.log("!!!! Here:   " + JSON.stringify(this.resultQuote));
    }, error => {
      console.log("ERORRRRRR" + JSON.stringify(error));
    });
  }

  hostCountrySelected(){
//     console.log(this.getQuoteForm!.get('hostCountry')!);
    let countryValue = this.getQuoteForm.controls['hostCountry'].value;
    this.getAllowedCurrencies(countryValue);
    this.hostCountrySelectedBool = true;
    const ctrl = this.getQuoteForm!.get('hostState')!;
    const ctrl2 = this.getQuoteForm!.get('currency')!;
    ctrl.enable();
    ctrl2.enable();
  }


}
