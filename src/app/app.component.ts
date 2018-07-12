import { CidadeModel } from './../model/cidade.model';
import {Component, OnInit} from '@angular/core';
import {CidadeService} from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = new Array();
  cidade = new CidadeModel();
  id = 0;

  constructor(private cidadeService: CidadeService) {
    cidadeService.consultar().subscribe((c: any[]) => {
     this.cidades = c;
    });
  }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    console.log('adicionado ' + nome);
    this.cidade.nome = nome;
    this.cidadeService.adicionar(this.cidade).subscribe((r: any) => {
      this.cidade = r;
      this.cidadeService.consultar().subscribe((c: any[]) => {
        this.cidades = c;
       });
      alert('Adicionado: ' + JSON.stringify(this.cidade));
    }, (error) => {
      alert('Erro ao Adicionar!');
    });

  }

  excluir(cidade: CidadeModel) {
    console.log('Excluindo ' + cidade.nome);
    this.cidadeService.deletar(cidade.id).subscribe(() => {
      for (let i = 0; i < this.cidades.length; i++) {
        if (this.cidades[i].nome === cidade.nome) {
          this.cidades.splice(i, 1);
        }
      }
      alert('Removido com sucesso!');
    }, (error) => {
      alert('Erro ao remover!');
    });
  }

  atualizar(cidade: any) {
    console.log('Atualizando ' + cidade.nome);
    this.cidadeService.atualizar(cidade).subscribe(() => {
      for (let i = 0; i < this.cidades.length; i++) {
        if (this.cidades[i].id === cidade.id) {
          this.cidades[i].nome = cidade.nome;
          console.log('ID: ' + this.cidades[i].id + ' novo nome: ' + this.cidades[i].nome);
          // alert("ID: "+this.cidades[i].id+" novo nome: "+this.cidades[i].nome);
        }
      }
      alert('Atualizado com sucesso!');
    }, (error) => {
      alert('Erro ao atualizar!');
    });
  }
}
