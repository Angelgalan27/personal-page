import { Component, Input } from '@angular/core';
import { SkillModel } from 'src/app/core/model/skill.model';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.scss']
})
export class CardSkillComponent {

  @Input() skill!: SkillModel;

  getColor(){
    if(this.skill.level > 50){
      return '#8cc193';
    } else if(this.skill.level <= 50){
      return '#c7e567';
    } else {
      return '';
    }
  }
}
