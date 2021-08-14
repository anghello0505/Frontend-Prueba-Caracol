import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { RegistroPedidoComponent } from './registro-pedido/registro-pedido.component';
import { ListadoPedidoComponent } from './listado-pedido/listado-pedido.component';

import {HttpClientModule} from '@angular/common/http';
import { PedidosCompletosComponent } from './pedidos-completos/pedidos-completos.component';
import { PedidosTotalesComponent } from './pedidos-totales/pedidos-totales.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistroPedidoComponent,
    ListadoPedidoComponent,
    PedidosCompletosComponent,
    PedidosTotalesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
