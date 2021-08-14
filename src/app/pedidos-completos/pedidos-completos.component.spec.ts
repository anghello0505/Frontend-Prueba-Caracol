import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCompletosComponent } from './pedidos-completos.component';

describe('PedidosCompletosComponent', () => {
  let component: PedidosCompletosComponent;
  let fixture: ComponentFixture<PedidosCompletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosCompletosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
