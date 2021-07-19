import { state } from "@angular/animations";
import { createAction } from "@ngrx/store";
import {Action, props, createReducer, on, createSelector} from '@ngrx/store';
import { Observable } from "rxjs";
import { Hotel } from './model/hoteis.model';

/*export const INITIAL_STATE = {
    resultado$:new Observable<Array<any>>()
}*/

export interface AppState {
    hoteis: Array<Hotel>;
    estadoLista: Map<number,boolean>;
}


export const initialState : AppState = {
    hoteis : new Array<Hotel>(),
    estadoLista: new Map()
}

export const retrievedHotelList = createAction(
    '[Hotel List/API] Retrieve Hoteis Success',
    props<{lista : Array<Hotel>}>()
  );

 export const recuperaEstadoLista = createAction(
    '[Estado da lista /API] Recupera estado da lista de resultado.',
    props<{listaEstado : Map<number,boolean>}>()
  );


  export const hoteisReducer = createReducer(
    initialState,
    on(retrievedHotelList, (state,{ lista }) => { 
        state = {...state, hoteis : lista}
        return state;}),
    on(recuperaEstadoLista, (state,{listaEstado}) => {
        state = {...state, estadoLista : listaEstado}
        return state;
    })
  );

  /*export const selectHoteis = createSelector(
    (state: AppState) => state.hoteis,
    (hoteis: Observable<Hotel>) => hoteis
  );*/

/*enum ActionTypes {
    Buscar = 'Buscar'
}


export class Buscar implements Action{

    readonly type = ActionTypes.Buscar

}*/

/*export const buscar = createAction (
    ActionTypes.Buscar,
    props<{payload : any}>()
)*/

/*export const reducer = (state = INITIAL_STATE , action: any) => {
    switch (action.type) {
        case 'Buscar' : 
            return {...state, resultado : state.resultado }
        default :
            return state
    }
}*/

/*export const buscaReducer = createReducer(INITIAL_STATE,
    on (buscar , state => ({...state, resultado : state.resultado$})))
*/
   