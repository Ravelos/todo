import { TestBed } from '@angular/core/testing';

import { ListaTarefasService } from './lista-tarefas.service';

describe('ListaTarefasService', () => {
  let service: ListaTarefasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTarefasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
