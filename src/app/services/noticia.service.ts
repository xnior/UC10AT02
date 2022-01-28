import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  url="http://localhost:3000/noticias";


  constructor(private httpCliente: HttpClient) { }

  getNoticias(): Observable<any>{
    return this.httpCliente.get<Noticia[]>(this.url)
  }
}
