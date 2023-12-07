import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url: string = `${environment.API_BASE_PATH}${environment.API.EXPERIENCE}`;
  constructor(private _http: HttpClient, private _global: GlobalService) { }

  getAll() {
    return this._http.get(`${this.url}?language=${this._global.getIdiomaActual()}`);
  }
}
