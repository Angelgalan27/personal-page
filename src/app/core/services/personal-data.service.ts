import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  url: string = `${environment.API_BASE_PATH}${environment.API.PERSONAL_DATA}`;
  constructor(private _http: HttpClient, private _global: GlobalService) { }

  getAll() {
    return this._http.get(`${this.url}?language=${this._global.getIdiomaActual()}`);
  }

  getFile(path: string) {
    return this._http.get(`${this.url}/getfile?path=${path}`, { responseType: 'blob' });
  }
}
