import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PersonalDataService } from './core/services/personal-data.service';
import { PersonalDataModel } from './core/model/personal-data.mocel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ángel Aguilar Galán';

  personalData!: PersonalDataModel;
  constructor(private _translateService: TranslateService,
    private _personalData: PersonalDataService) {
    this._translateService.setDefaultLang('es_ES');
    this._translateService.use('es_ES');
    this.getPersonalData();
  }

  getPersonalData() {
    this._personalData.getAll()
    .subscribe((data: any) => this.personalData = data[0]);
  }
}
