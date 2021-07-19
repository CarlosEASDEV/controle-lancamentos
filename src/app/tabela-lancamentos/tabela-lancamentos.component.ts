import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-tabela-lancamentos',
  templateUrl: './tabela-lancamentos.component.html',
  styleUrls: ['./tabela-lancamentos.component.scss']
})
export class TabelaLancamentosComponent implements OnInit {

  public lancamentos : any;
  public itens : any[];
  public lancamentoService : LancamentoService;
  
  chartData : any[];

  constructor(lancamentoService: LancamentoService) { 
    this.lancamentoService = lancamentoService;
  }

  ngOnInit() {

    console.log('tabela-lancamentos - init ');

    this.getLancamentos();

    }

  getLancamentos(): void {
    this.chartData = [];
    this.lancamentoService.getLancamentos()
        .subscribe(lancamentos => {this.itens = lancamentos.listaControleLancamento;
          this.itens.forEach((item) => {
            this.chartData.push({name: item.nomeBanco, value: item.valorLancamentoRemessa});
          
        });
        console.log(this.chartData);
        });
  }

  getChartData() : void{
    
  }

}
