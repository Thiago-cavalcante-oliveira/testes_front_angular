
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidoslistComponent } from './pedidoslist.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { Pedido } from 'src/app/models/pedido';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos-service';

describe('PedidoslistComponent', () => {
  let component: PedidoslistComponent;
  let fixture: ComponentFixture<PedidoslistComponent>;
  let mockPedidoService: jasmine.SpyObj<PedidosService>;
  let mockModalService: jasmine.SpyObj<NgbModal>;

  beforeEach(
    waitForAsync(() => {

      mockPedidoService = jasmine.createSpyObj('PedidosService', ['listAll']);
      mockModalService = jasmine.createSpyObj('NgbModal', ['open']);



      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [PedidoslistComponent],
        providers: [
          { provide: PedidosService, useValue: mockPedidoService },
          { provide: NgbModal, useValue: mockModalService },
        ],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
        ]

    })
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoslistComponent);
    component = fixture.componentInstance;
    mockPedidoService.listAll.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('chamar o método listAll ', () => {
    expect(mockPedidoService.listAll).toHaveBeenCalled();
  });

  it('abrir modal no método adicionar', () => {
    // Criação de um modal simulado e configuração do spy para retornar o modal simulado
    const mockModalRef: NgbModalRef = jasmine.createSpyObj('NgbModalRef', ['componentInstance']);
    mockModalService.open.and.returnValue(mockModalRef);

    component.adicionar({});

    expect(mockModalService.open).toHaveBeenCalledOnceWith({}, { size: 'sm' });
  });

  it(' abrir modal no método editar', () => {
    // Criação de um modal simulado e configuração do spy para retornar o modal simulado
    const mockModalRef: NgbModalRef = jasmine.createSpyObj('NgbModalRef', ['componentInstance']);
    mockModalService.open.and.returnValue(mockModalRef);

    const mockPedido: Pedido = { id: 1, obs: 'Pedido Teste', produtos: [] };

    component.editar({}, mockPedido, 0);

    expect(mockModalService.open).toHaveBeenCalledOnceWith({}, { size: 'sm' });
  });


});
