import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url: string = `${environment.API_BASE_PATH}${environment.API.EDUCATION}`;
  constructor(private _http: HttpClient, private _global: GlobalService) { }


  getAll() {
    return this._http.get(`${this.url}?language=${this._global.getIdiomaActual()}`);
  }
}
