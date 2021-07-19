import { Component, OnInit } from '@angular/core';
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
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(lancamentoService: LancamentoService) { 
    this.lancamentoService = lancamentoService;
  }

  ngOnInit() {

    console.log('tabela-lancamentos - init ');

    this.getLancamentos();




  }

  getLancamentos(): void {
    this.lancamentoService.getLancamentos()
        .subscribe(lancamentos => this.itens = lancamentos.listaControleLancamento);
  }

}
