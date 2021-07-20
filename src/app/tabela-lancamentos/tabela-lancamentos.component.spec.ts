import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { TabelaLancamentosComponent } from './tabela-lancamentos.component';
import { chartDataReducer } from '../ngrx';

describe('TabelaLancamentosComponent', () => {
  let component: TabelaLancamentosComponent;
  let fixture: ComponentFixture<TabelaLancamentosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({chartData : chartDataReducer})],
      declarations: [ TabelaLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
