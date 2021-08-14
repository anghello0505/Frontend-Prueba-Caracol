import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from '../services/clientes.service';
import { ProductosService } from '../services/productos.service';
import { VendedoresService } from '../services/vendedores.service';
import { PedidosService } from '../services/pedidos.service';


@Component({
  selector: 'app-registro-pedido',
  templateUrl: './registro-pedido.component.html',
  styleUrls: ['./registro-pedido.component.css']
})
export class RegistroPedidoComponent implements OnInit {

  listadoClientes: any[] = [];
  listadoVendedores: any[] = [];
  listadoProductos: any[] = [];
  fechaActual:Date = new Date();
  estado: string = 'Registrado';
  form:FormGroup
  valido:boolean = true;

  constructor(private fb:FormBuilder, private toastr: ToastrService, private clienteService:ClientesService, private productoService: ProductosService, private vendedoresService: VendedoresService, private pedidosService: PedidosService) { 
    this.form = this.fb.group({
      vendedor: ['',Validators.required],
      cliente: ['',Validators.required],
      producto:['',Validators.required],
      cantidad: ['',[Validators.min(1)]],
      fechaEmision:[this.fechaActual],
      estado:['Registrado'],
    })
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerVendedores();
    this.obtenerProductos();
    this.form.patchValue({
      fechaEmision: this.fechaActual
    })
  }

  obtenerClientes(){
    this.clienteService.getListaCliente().subscribe(data => {
      this.listadoClientes = data;
    }, error => {
      console.log(error);
    });
  }
  obtenerVendedores(){
    this.vendedoresService.getListaVendedores().subscribe(data => {
      this.listadoVendedores = data;
    },error => {
      console.log(error);
    });
  }

  obtenerProductos(){
    this.productoService.getListaProductos().subscribe(data => {
      this.listadoProductos = data;
    }, error => {
      console.log(error);
    });
  }

  async guardarPedido() {
    const pedido:any = {
      idVendedor:this.form.get("vendedor")?.value,
      idCliente: this.form.get("cliente")?.value,
      idProducto: this.form.get("producto")?.value,
      cantidad: this.form.get("cantidad")?.value,
      fechaEmision:this.fechaActual,
      estado:'Registrado',
      vendedor: null,
      cliente: null,
      producto: null
    }

    await this.validarCantidad(pedido);

    if(this.valido == true){
      this.pedidosService.savePedido(pedido).subscribe(data => {
        this.toastr.success('EL Pedido fue Registrado!', 'Pedido Registrado!');
        this.obtenerClientes();
        this.obtenerVendedores();
        this.obtenerProductos();
        this.form.reset();
      },  error => {
        console.log(error);
        this.toastr.error('La cantidad Ingresada es mayor al inventario existente');
      });
    }else{
      this.valido = true;
    }

  }

  validarCantidad(pedido:any){
    this.productoService.getListaProductosPorId(pedido.idProducto).subscribe(data => {

      if (data.existencia < pedido.cantidad){
        this.valido = false
        this.toastr.error(`Para el producto: ${data.nombre}, solo hay: ${data.existencia} disponibles `);
      }else {
        this.valido = true;
      }
    }, error => {
      console.log(error);
      this.toastr.error('Error en el servidor');
    })

  }



}
