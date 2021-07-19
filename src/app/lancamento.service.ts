import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(
    private http: HttpClient) { }

  private lancamentoUrl = 'http://localhost:3000';


  getLancamentos(): Observable<any> {
    return this.http.get<any>(this.lancamentoUrl+'/lancamentos')
      .pipe(
        tap(_ => this.log('Carregou lançamentos.')),
        catchError(this.handleError<any>('getLancamentos', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`lancamentoService: ${message}`);
  }

}
