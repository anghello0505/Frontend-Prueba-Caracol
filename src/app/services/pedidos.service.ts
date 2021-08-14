import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  myAppUrl = 'https://localhost:44362'
  myApiUrl1 = '/registrados/'
  myApiUrl2 = '/aprobados/'
  myApiUrl = '/api/pedidos/'

  constructor(private http: HttpClient) { }

  getListaPedidos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl1);
  }
  getListaPedidosAprobados(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl2);
  }

  getListaPedidosTotales(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deletePedido(id: number) : Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  savePedido(pedido : any) : Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, pedido);
  }

  updatePedido(id: number, pedido: any ) : Observable<any>{
     return  this.http.put(this.myAppUrl + this.myApiUrl + id, pedido );
  }
}
