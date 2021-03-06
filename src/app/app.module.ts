import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaLancamentosComponent } from './tabela-lancamentos/tabela-lancamentos.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { chartDataReducer } from './ngrx';

@NgModule({
  declarations: [
    AppComponent,
    TabelaLancamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({chartData : chartDataReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
