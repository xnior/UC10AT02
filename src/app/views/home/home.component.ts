import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ListaclassService } from "src/app/services/listaclass.service";
import { ListaClasse } from "src/app/models/listaclass";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private noticiaService: NoticiaService, private listaService: ListaclassService) { }

  listaNoticias = [] as Noticia[]

  listaClassif =[] as ListaClasse[]



  ngOnInit(): void { this.carregarNoticias(), this.carregarListaClasse() }  

    carregarNoticias(){
  this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticia[]) => {
  this.listaNoticias = noticiasRecebidas;
  console.log(this.listaNoticias);
  })
    }

  carregarListaClasse(){
    this.listaService.getListaClasse().subscribe((listaRecebida: ListaClasse[]) => {
      this.listaClassif = listaRecebida;
      console.log(this.listaClassif);
    })
  }
}