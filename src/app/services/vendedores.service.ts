import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  myAppUrl = 'https://localhost:44362'
  myApiUrl = '/api/vendedores/'

  constructor(private http: HttpClient) { }

  getListaVendedores(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  deleteVendedores(id: number) : Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveVendedores(vendedor : any) : Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, vendedor);
  }

  updateVendores(id: number, vendedor: any ) : Observable<any>{
     return  this.http.put(this.myAppUrl + this.myApiUrl + id, vendedor );
  }
}
