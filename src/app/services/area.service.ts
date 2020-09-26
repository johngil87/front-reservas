import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  protected generateAuthBasicHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/jason'
    });
  }

  //leer areas
  getArea(): any{
    return this.http.get<any>(this.apiUrl+"/area");
  }

  insertarArea(area){
    return this.http.post<any>(this.apiUrl+"/departamentos",
                               JSON.stringify(area),
                               {headers: this.generateAuthBasicHeaders()});
  }

}
