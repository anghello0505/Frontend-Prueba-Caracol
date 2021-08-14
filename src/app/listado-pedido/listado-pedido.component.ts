import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VendedoresService } from '../services/vendedores.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-listado-pedido',
  templateUrl: './listado-pedido.component.html',
  styleUrls: ['./listado-pedido.component.css']
})
export class ListadoPedidoComponent implements OnInit {

  listadoPedidos: any [] = [];
  listadoVendedores:any [] = [];
  id: number | undefined;
  fechaActual:Date = new Date();
  pedidoTemporal: any;

  form:FormGroup;

  constructor(private fb:FormBuilder, private toastr: ToastrService, private vendedoresService: VendedoresService, private pedidosService: PedidosService) {
    this.form = this.fb.group({
      idVendedorAprobado:['', Validators.required],
      fechaAprobacion:['']
    })
   }

  ngOnInit(): void {
    this.obtnerPedidos();
    this.obtenerVendedores();
  }

  editarPedido(pedido:any){
    this.id = pedido.idPedido
    this.pedidoTemporal = pedido;
  }

  eliminarPedido(id:number){
      this.pedidosService.deletePedido(id).subscribe(data => {
        this.toastr.error('El Pedido fue borrado con exito!','Pedido Borrado');
        this.obtnerPedidos();
      }, error => {
        console.log(error);
      })
  }

  guardarPedido(){
    const pedido:any = {
      idVendedor: this.pedidoTemporal.idVendedor,
      idCliente: this.pedidoTemporal.idCliente,
      idProducto: this.pedidoTemporal.idProducto,
      cantidad: this.pedidoTemporal.cantidad,
      fechaEmision: this.pedidoTemporal.fechaEmision,
      estado:'Aprobado',
      fechaAprobacion:this.fechaActual,
      idVendedorAprobado:this.form.get("idVendedorAprobado")?.value,
      vendedor: null,
      cliente: null,
      producto: null
    }

    this.pedidosService.updatePedido(this.id!, pedido).subscribe(data => {
      this.form.reset();
      this.id = undefined;
      this.pedidoTemporal = null;
      this.toastr.info('El Pedido fue Aprobado con exito','Pedido Aprobado');
      this.obtnerPedidos();
    })
  }

  obtnerPedidos(){
    this.pedidosService.getListaPedidos().subscribe(data => {
      this.listadoPedidos = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  obtenerVendedores(){
    this.vendedoresService.getListaVendedores().subscribe(data => {
      this.listadoVendedores = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
