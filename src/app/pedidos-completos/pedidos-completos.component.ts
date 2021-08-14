import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos-completos',
  templateUrl: './pedidos-completos.component.html',
  styleUrls: ['./pedidos-completos.component.css']
})
export class PedidosCompletosComponent implements OnInit {
  listadoPedidos: any [] = [];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.obtnerPedidos();
  }

  obtnerPedidos(){
    this.pedidosService.getListaPedidosAprobados().subscribe(data => {
      this.listadoPedidos = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
