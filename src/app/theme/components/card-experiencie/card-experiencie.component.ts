import { Component, Input, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/core/model/experience.model';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-card-experiencie',
  templateUrl: './card-experiencie.component.html',
  styleUrls: ['./card-experiencie.component.scss']
})
export class CardExperiencieComponent implements OnInit{

  @Input() experience!: ExperienceModel;
  photo!: string;
  constructor(private _file: FileService) {

  }
  ngOnInit(): void {
    if(this.experience.logo){
      this._file.getFile(this.experience.logo).subscribe((data: any) => {
        this.photo = URL.createObjectURL(data)
      });
    }
  }


}
