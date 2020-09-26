import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Departamento} from './departamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private urlEndPoint: string = 'http://localhost:8080/RESERVASN/departamentos'

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento>{
    return this.http.get<Departamento>(this.urlEndPoint)
  }
}
