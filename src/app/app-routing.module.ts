import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroPedidoComponent } from './registro-pedido/registro-pedido.component';
import { ListadoPedidoComponent } from './listado-pedido/listado-pedido.component';
import { PedidosCompletosComponent } from './pedidos-completos/pedidos-completos.component';
import { PedidosTotalesComponent } from './pedidos-totales/pedidos-totales.component';

const routes: Routes = [
  {
    path:'',
    component: RegistroPedidoComponent,
    pathMatch:'full'
  },
  {
    path:'listadoPedidos',
    component: ListadoPedidoComponent
  },
  {
    path:'listadoPedidosCompletos',
    component: PedidosCompletosComponent
  },
  {
    path:'listadoPedidosTotales',
    component: PedidosTotalesComponent
  },
  {
    path: '**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
