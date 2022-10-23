import { Empresa } from './../models/Empresa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarEmpresaService {


  constructor(private httpClient: HttpClient) { }

  getEmpresa(cnpj: string): Observable<Empresa>{
    return this.httpClient.get<Empresa>(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`).pipe(
    );
  }


}
