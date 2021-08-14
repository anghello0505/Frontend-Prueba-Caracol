import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  myAppUrl = 'https://localhost:44362'
  myApiUrl = '/api/productos/'

  constructor(private http: HttpClient) { }

  getListaProductos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  getListaProductosPorId(id:number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl+id);
  }

  deleteProductos(id: number) : Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveProductos(producto : any) : Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, producto);
  }

  updateProducto(id: number, producto: any ) : Observable<any>{
     return  this.http.put(this.myAppUrl + this.myApiUrl + id, producto );
  }
}
