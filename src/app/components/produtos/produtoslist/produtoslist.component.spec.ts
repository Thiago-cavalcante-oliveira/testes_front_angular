import { ProdutoslistComponent } from './produtoslist.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos-service';

describe('ProdutoslistComponent', () => {
  let component: ProdutoslistComponent;
  let fixture: ComponentFixture<ProdutoslistComponent>;
  let mockProdutosService: jasmine.SpyObj<ProdutosService>;
  let mockModalService: jasmine.SpyObj<NgbModal>;

  beforeEach(()=>{
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [ProdutoslistComponent],
        providers: [
          { provide: ProdutosService, useValue: mockProdutosService },
          { provide: NgbModal, useValue: mockModalService },
        ],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
        ]

    })}
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoslistComponent);
    component = fixture.componentInstance;
    mockProdutosService.listAll.and.returnValue(of([]));
    fixture.detectChanges();
  });
  it(' criar o componente', () => {
    // Verifica se o componente foi criado com sucesso
    expect(component).toBeTruthy();
  });
  it('chamar o método listAll', () => {
    // Verifica se o método listAll foi chamado durante a inicialização
    expect(mockProdutosService.listAll).toHaveBeenCalled();
  });
  it('abrir modal no método', () => {
    const mockModalRef: NgbModalRef = jasmine.createSpyObj('NgbModalRef', ['componentInstance']);
    mockModalService.open.and.returnValue(mockModalRef);
    component.adicionar({});
    expect(mockModalService.open).toHaveBeenCalledOnceWith({}, { size: 'sm' });
  });

  it('deve abrir modal no método editar', () => {
    const mockModalRef: NgbModalRef = jasmine.createSpyObj('NgbModalRef', ['componentInstance']);
    mockModalService.open.and.returnValue(mockModalRef);
    const mockProduto: Produto = { id: 1, nome: 'Produto Teste', valor: 10 };
    component.editar({}, mockProduto, 0);
    expect(mockModalService.open).toHaveBeenCalledOnceWith({}, { size: 'sm' });
  });

  it('emitir produto no método', () => {
    const mockProduto: Produto = { id: 1, nome: 'Produto Teste', valor: 10 };
    spyOn(component.retorno, 'emit');
    component.lancamento(mockProduto);
    expect(component.retorno.emit).toHaveBeenCalledWith(mockProduto);
  });
});
