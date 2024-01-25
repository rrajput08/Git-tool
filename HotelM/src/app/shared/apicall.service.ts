import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  name='Roshani'
  journey: any;
  url = 'http://localhost:3000'

  constructor ( private  httpClient : HttpClient){}

  postApiCall (endPoint : string, formData:any){
    let url = this.url + '/' + endPoint;
    return this.httpClient.post(url, formData)
  }

  getApiCall(journey:any){
    let url = this.url + '/' + journey;
  return this.httpClient.get(url)
  }
  
}
