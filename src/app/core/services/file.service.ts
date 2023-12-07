import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  url: string = `${environment.API_BASE_PATH}${environment.API.FILE}`;
  constructor(private _http: HttpClient, private _global: GlobalService) { }

  getFile(path: string) {
    return this._http.get(`${this.url}/getfile?path=${path}`, { responseType: 'blob' });
  }
}
