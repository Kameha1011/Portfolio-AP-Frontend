import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
    providedIn: 'root'
  })
export class EducacionService {
    expURL = 'http://localhost:8080/educacion/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.expURL + 'lista');
  }
  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.expURL + 'detail/' + id);
  }
  public save(exp: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', exp);
  }
  public update(id: number, exp: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.expURL + 'update/' + id, exp);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + 'delete/' + id);
  }
}
