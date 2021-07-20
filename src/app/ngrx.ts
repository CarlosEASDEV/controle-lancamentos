import { state } from "@angular/animations";
import { createAction } from "@ngrx/store";
import {Action, props, createReducer, on, createSelector} from '@ngrx/store';
import { Observable } from "rxjs";


/*export const INITIAL_STATE = {
    resultado$:new Observable<Array<any>>()
}*/

export interface AppState {
    chartData: Array<any>;
    lancamentos: Array<any>;
}


export const initialState : AppState = {
    chartData : new Array<any>(),
    lancamentos : new Array<any>()
}

export const carregaChartList = createAction(
    '[ChartData] carrega grafico',
    props<{lista : Array<any>}>()
  );

  export const carregaLancamentos = createAction(
    '[Lancamentos] carrega lançamentos',
    props<{lista : Array<any>}>()
  );


 
  export const chartDataReducer = createReducer(
    initialState,
    on(carregaChartList, (state,{ lista }) => { 
        state = {...state, chartData : lista}
        console.log("reducer : "+state.chartData);
        return state;}),
    on(carregaLancamentos, (state,{ lista }) => { 
        console.log("reducer lista : "+lista); 
        //dadosLancamentos : Array<any>;
        //lista.subscribe( item => {state = {...state, lancamentos : item }});
       // console.log("reducer dadoslancamentos : "+dadosLancamentos); 
        state = {...state, lancamentos : lista}
        console.log("reducer lancamentos : "+state.lancamentos);
        return state;})
  );

