import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienciaService } from 'src/app/core/services/experience.service';
import { TranslateService } from '@ngx-translate/core';
import { EducacionService } from 'src/app/core/services/education.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { ExperienceModel } from 'src/app/core/model/experience.model';
import { EducationModel } from 'src/app/core/model/education.model';
import { SkillModel } from 'src/app/core/model/skill.model';
import { PersonalDataModel } from 'src/app/core/model/personal-data.mocel';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() personalData!: PersonalDataModel;
  @Output() eventEmmitChangeIdi: EventEmitter<boolean> = new EventEmitter();
  experiencies: ExperienceModel[] = [];
  educations: EducationModel[] = [];
  skills: SkillModel[] = [];
;  constructor(private _experience: ExperienciaService,
    private _translateService: TranslateService,
    private _education: EducacionService,
    private _skills: SkillService) {
    this.getExperiencies();
    this.getEducations();
    this.getSkills();
   }

   setLanguge(language: string) {
   this._translateService.setDefaultLang(language);
   this._translateService.use(language).subscribe(() => {
    this.getExperiencies();
    this.getEducations();
    this.eventEmmitChangeIdi.emit(true);
  });
   }

   getExperiencies() {
    this._experience.getAll().subscribe((data: any) => {
      this.experiencies = data;
    });
   }

   getEducations() {
    this._education.getAll().subscribe((data: any) => {
      this.educations = data;
    });
   }

   getSkills() {
    this._skills.getAll().subscribe((data: any) => {
      this.skills = data;
    });
   }
}
