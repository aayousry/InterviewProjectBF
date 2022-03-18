import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuoteService {

  private baseUrl = "https://coding-challenge-api.bfdevsite.com/api/v1/token/quotation";

  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUYW5naWVycyBJbnRlcm5hdGlvbmFsIiwiaWF0IjoxNjI4MDA4MjAxLCJleHAiOjIyNTkxNjAyMDEsIm5iZiI6MTYyODAwODIwMSwianRpIjoiVkZzU3I5TE9hbHNKN1d0QyIsImFmZmlsaWF0ZV9pZCI6MSwicHJvZHVjdF9pZHMiOnsiMSI6MiwiMiI6NiwiMyI6NywiNCI6OCwiNSI6OSwiNiI6MTAsIjciOjExLCI4IjoxMn0sInBlcm1pc3Npb25zIjpbIlFRQyIsIkdBQyIsIkdEQyIsIkdIQyIsIkdSVSJdLCJzdWIiOiJQYXJ0bmVyIEFjY2VzcyBUb2tlbiJ9.sTZsa-ufE4MkDaqKMz380HmGZjc2evxOXw9M1H1M_Xs');

  private params = {
     "product_id": 8,
     "age": '28,16',
     "currency_id": 'USD',
     "destination_country_ids": 'CZ',
     "host_country_id": 'US',
     "country_state": 'AL',
     "start_date": '2022-10-01',
     "end_date": '2022-10-30',
     "trip_cost": 500,
     "deposit_date": '2022-10-01',
     "winter_sport_extension": true
  }

  constructor(private http: HttpClient) {
  }

  getQuote(params){
    return this.http.post(`${this.baseUrl}`, params, { 'headers': this.headers });
  }

}

