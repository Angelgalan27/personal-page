import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: string = `${environment.API_BASE_PATH}${environment.API.SKILL}`;
  constructor(private _http: HttpClient, private _global: GlobalService) { }

  getAll() {
    return this._http.get(`${this.url}`);
  }
}
