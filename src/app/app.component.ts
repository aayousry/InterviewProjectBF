import { Component, OnInit } from '@angular/core';
import {GetAllowedCurrenciesService} from 'src/app/services/get-allowed-currencies.service';
import {GetDestinationCountryService} from 'src/app/services/get-destination-country.service';
import {GetHostCountryService} from 'src/app/services/get-host-country.service';
import {GetQuoteService} from 'src/app/services/get-quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'A-Hassan-BattleFace-App';
  resultCurrencies: Object = "null";
  resultDestinationCountries: Object = "null";
  resultHostCountries: Object = "null";
  resultQuote: Object = "null";

  constructor(
  public getQuoteService: GetQuoteService,
  public getAllowedCurrenciesService: GetAllowedCurrenciesService,
  public getDestinationCountryService: GetDestinationCountryService,
  public getHostCountryService: GetHostCountryService,) { }

  ngOnInit(): void {
    this.getAllowedCurrencies();
//     this.getDestinationCountry();
//     this.getHostCountry();
    this.getQuote();
  }

  getAllowedCurrencies(){
    this.getAllowedCurrenciesService.getAllowedCurrencies().subscribe(currenciesResult => {
        this.resultCurrencies = currenciesResult;
        console.log("!!!! Here:   " + JSON.stringify(this.resultCurrencies));
    }, error => {
      console.log("ERORRRRRR" + JSON.stringify(error));
    });
  }

  getDestinationCountry(){
    this.getDestinationCountryService.getDestinationCountry().subscribe(countriesResult => {
        this.resultDestinationCountries = countriesResult;
        console.log("!!!! Here:   " + JSON.stringify(this.resultDestinationCountries));
    }, error => {
      console.log("ERORRRRRR" + JSON.stringify(error));
    });
  }

  getHostCountry(){
    this.getHostCountryService.getHostCountry().subscribe(countriesResult => {
        this.resultHostCountries = countriesResult;
        console.log("!!!! Here:   " + JSON.stringify(this.resultHostCountries));
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


}
