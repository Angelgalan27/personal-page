import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainLeftComponent } from './components/main-left/main-left.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { CardExperiencieComponent } from './components/card-experiencie/card-experiencie.component';
import { CardEducationComponent } from './components/card-education/card-education.component';
import { CardSkillComponent } from './components/card-skill/card-skill.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    MainLeftComponent,
    MainComponent,
    CardExperiencieComponent,
    CardEducationComponent,
    CardSkillComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    ChipModule,
    TabViewModule,
    TranslateModule,
    TooltipModule,
    ProgressBarModule
  ],
  exports: [
    MainLeftComponent,
    MainComponent
  ]
})
export class ThemeModule { }
