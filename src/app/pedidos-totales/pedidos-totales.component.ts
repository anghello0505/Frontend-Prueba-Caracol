import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos-totales',
  templateUrl: './pedidos-totales.component.html',
  styleUrls: ['./pedidos-totales.component.css']
})
export class PedidosTotalesComponent implements OnInit {

  listadoPedidos: any [] = [];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.obtnerPedidos();
  }

  obtnerPedidos(){
    this.pedidosService.getListaPedidosTotales().subscribe(data => {
      this.listadoPedidos = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
