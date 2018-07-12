import { CidadeModel } from './../model/cidade.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private url = 'http://localhost:8080/cidades';

  constructor(private http: HttpClient) {
  }
  consultar() {
    return this.http.get(this.url);
  }

  // tslint:disable-next-line:no-shadowed-variable
  adicionar(cidade:  CidadeModel) {
  console.log(JSON.stringify(cidade));
  return this.http.post(this.url, cidade);
  }

  atualizar(cidade: CidadeModel) {
    return this.http.put(this.url, cidade);
  }

  deletar (id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }


}
