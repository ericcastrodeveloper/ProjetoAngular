import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/internal/operators";
import {CidadeModel} from "../model/cidade.model.ts";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: Http) {
  }
  consultar() {
    return this.http.get("http://localhost:8080/cidades");
  }

  adicionar(CidadeModel cidade) {
  console.log("Teste");
  return this.http.post("http://localhost:8080/cidades", cidade);
  }
}
