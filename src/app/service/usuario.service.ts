import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:8080/usuarios/';

  constructor(private httpClient: HttpClient) {   }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.URL + 'detail/' + id);
  }
  // public save(usuario: Usuario): Observable<any> {
  //   return this.httpClient.post<any>(this.URL + 'create', usuario);
  // }
  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.URL + 'update/' + id, usuario);
  }
  // public delete(id: number): Observable<any> {
  //   return this.httpClient.delete<any>(this.URL + 'delete/' + id);
  // }
}
