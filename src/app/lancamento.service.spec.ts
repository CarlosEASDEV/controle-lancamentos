import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LancamentoService } from './lancamento.service';

describe('LancamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: LancamentoService = TestBed.get(LancamentoService);
    expect(service).toBeTruthy();
  });
});
