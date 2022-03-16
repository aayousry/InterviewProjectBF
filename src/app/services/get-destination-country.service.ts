import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDestinationCountryService {
  private baseUrl = "https://coding-challenge-api.bfdevsite.com/api/v1/site/1/product/";
  private product_id = 8;
  private destinationUri = "/destination_country";

//   URL: https://coding-challenge-api.bfdevsite.com/api/v1/<product_id>/

  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUYW5naWVycyBJbnRlcm5hdGlvbmFsIiwiaWF0IjoxNjI4MDA4MjAxLCJleHAiOjIyNTkxNjAyMDEsIm5iZiI6MTYyODAwODIwMSwianRpIjoiVkZzU3I5TE9hbHNKN1d0QyIsImFmZmlsaWF0ZV9pZCI6MSwicHJvZHVjdF9pZHMiOnsiMSI6MiwiMiI6NiwiMyI6NywiNCI6OCwiNSI6OSwiNiI6MTAsIjciOjExLCI4IjoxMn0sInBlcm1pc3Npb25zIjpbIlFRQyIsIkdBQyIsIkdEQyIsIkdIQyIsIkdSVSJdLCJzdWIiOiJQYXJ0bmVyIEFjY2VzcyBUb2tlbiJ9.sTZsa-ufE4MkDaqKMz380HmGZjc2evxOXw9M1H1M_Xs');

  constructor(private http: HttpClient) {
  }

  getDestinationCountry(){
    return this.http.get(`${this.baseUrl}${this.product_id}${this.destinationUri}`, { 'headers': this.headers });
  }

}




