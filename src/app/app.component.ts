import {Component, OnInit} from '@angular/core';
import {CidadeService} from "./cidade.service";
import {CidadeModel} from "../model/cidade.model.ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];
  id = 0;

  constructor(private cidadeService: CidadeService) {
    cidadeService.consultar().subscribe(c => this.cidades = c.json());
  }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    console.log('adicionado ' + nome);
    cidade = new CidadeModel();
    cidadeService.adicionar(cidade);
    this.cidades.push(cidade);
    alert("Adicionado: " + JSON.stringify(cidade));
  }

  excluir(nome: string) {
    console.log("Excluindo " + nome)
    for (var i = 0; i < this.cidades.length; i++) {
      if (this.cidades[i].nome === nome)
        this.cidades.splice(i, 1);
    }
  }

  atualizar(cidade: any) {
    console.log("Atualizando " + cidade.nome)
    for (var i = 0; i < this.cidades.length; i++) {
      if (this.cidades[i].id === cidade.id) {
        this.cidades[i].nome = cidade.nome;
        console.log("ID: " + this.cidades[i].id + " novo nome: " + this.cidades[i].nome);
        // alert("ID: "+this.cidades[i].id+" novo nome: "+this.cidades[i].nome);
      }
    }
    alert(JSON.stringify(cidade));

  }
}
