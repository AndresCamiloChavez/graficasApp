import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getDataEstruturada(): Observable<any>{
    return this.http.get('http://localhost:3000/grafica').pipe(
      delay(3000),
      map(data=>{
        const labels = Object.keys( data );
        const values: number[] =  Object.values(data) as number[];
        return {labels, values};
      })
    );
  }
}
