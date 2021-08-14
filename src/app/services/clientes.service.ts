import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  myAppUrl = 'https://localhost:44362'
  myApiUrl = '/api/clientes/'

  constructor(private http: HttpClient) { }

  getListaCliente(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  deleteCliente(id: number) : Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveCliente(cliente : any) : Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, cliente);
  }

  updateCliente(id: number, cliente: any ) : Observable<any>{
     return  this.http.put(this.myAppUrl + this.myApiUrl + id, cliente );
  }
}
