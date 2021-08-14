import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosTotalesComponent } from './pedidos-totales.component';

describe('PedidosTotalesComponent', () => {
  let component: PedidosTotalesComponent;
  let fixture: ComponentFixture<PedidosTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosTotalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
