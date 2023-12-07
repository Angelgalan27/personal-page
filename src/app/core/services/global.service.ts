import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _translate: TranslateService) { }


  getIdiomaActual() {
    return this._translate.currentLang;
  }
}
