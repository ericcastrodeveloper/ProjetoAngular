import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Subscription} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: Http) {
  }
  consultar(): Subscription{
    return this.http.get("http://localhost:3000/cidades").subscribe(response => response.json());

  }
}
