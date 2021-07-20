import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LancamentoService } from '../lancamento.service';
import { AppState, carregaChartList, carregaLancamentos } from '../ngrx';

@Component({
  selector: 'app-tabela-lancamentos',
  templateUrl: './tabela-lancamentos.component.html',
  styleUrls: ['./tabela-lancamentos.component.scss']
})
export class TabelaLancamentosComponent implements OnInit {

  public lancamentos : any[];
  public itens : Observable<Array<any>>;
  public chartData : Observable<Array<Lancamento>>;
  public lancamentoService : LancamentoService;
  dados : Array<Lancamento> = [];
  
  

  constructor(lancamentoService: LancamentoService, private store: Store<{ chartData: AppState}>) { 
    this.lancamentoService = lancamentoService;
    this.chartData = this.store.select('chartData').pipe( map (e => e.chartData));
    this.itens = this.store.select('chartData').pipe( map (e => e.lancamentos) );
    
  }

  chartData$ = this.store.select('chartData').pipe( map (e => e.chartData));

  ngOnInit() {

    console.log('tabela-lancamentos - init ');
    this.getLancamentos();

    
     

    }

  getLancamentos(): void {

   this.lancamentoService.getLancamentos().subscribe( x => { 
     this.store.dispatch(carregaLancamentos({lista : x.listaControleLancamento}));
     this.store.dispatch(carregaChartList({lista : this.getChartData()}));
    });
  }

  getChartData() : Array<Lancamento>{

    console.log("getChartData ");

      this.itens.subscribe( x => x.forEach(item => this.dados = [...this.dados,{name: item.nomeBanco, value: item.valorLancamentoRemessa}]));

      console.log(this.dados);
    //});
    return this.dados;
    
  }

}

export interface Lancamento {
  name : string;
  value : string;

}
