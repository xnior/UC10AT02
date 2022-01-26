import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaClasse } from '../models/listaclass';


@Injectable({
  providedIn: 'root'
})
export class ListaclassService {

  url="http://localhost:3000/classificados";


  constructor(private httpCliente: HttpClient) { }

  getListaClasse(): Observable<ListaClasse[]>{
    return this.httpCliente.get<ListaClasse[]>(this.url)
  }


  
}

