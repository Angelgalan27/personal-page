import { Component, Input, OnInit } from '@angular/core';
import { PersonalDataModel } from 'src/app/core/model/personal-data.mocel';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.scss']
})
export class MainLeftComponent implements OnInit{

  @Input() personalData!: PersonalDataModel;
  photo!: string;
  constructor(private _file: FileService) {

   }
  ngOnInit(): void {
    this._file.getFile(this.personalData.photo).subscribe((data: any) => {
      this.photo = URL.createObjectURL(data)
    });
  }





}
