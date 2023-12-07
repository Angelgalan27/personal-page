import { Component, Input,OnInit } from '@angular/core';
import { EducationModel } from 'src/app/core/model/education.model';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-card-education',
  templateUrl: './card-education.component.html',
  styleUrls: ['./card-education.component.scss']
})
export class CardEducationComponent implements OnInit{

  @Input() education!: EducationModel;
  photo!: string;
  constructor(private _file: FileService) {

  }
  ngOnInit(): void {
    if(this.education.logo){
      this._file.getFile(this.education.logo).subscribe((data: any) => {
        this.photo = URL.createObjectURL(data)
      });
    }
  }
}
