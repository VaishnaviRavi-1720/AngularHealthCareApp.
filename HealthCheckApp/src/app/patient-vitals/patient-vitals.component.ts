import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { formatDate } from '@progress/kendo-angular-intl';
import { tempdataobj } from 'src/app/tempdataobj';


@Component({
  selector: 'app-patient-vitals',
  templateUrl: './patient-vitals.component.html',
  styleUrls: ['./patient-vitals.component.css']
})
export class PatientVitalsComponent {
  public selectedDate: Date;
  public temperatureInCelsius: number;
  public gridData: any[] = [];
  @Output() todoAdd : EventEmitter<tempdataobj> = new EventEmitter();
  tempdataobj: any;

  constructor() { }

  public addData() {
    debugger
    const tempdataobj = {
      datetime: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en'),
      tempdata: this.temperatureInCelsius
    }
    this.tempdataobj?.push(tempdataobj);
    localStorage.setItem("tempdataobj", JSON.stringify(this.tempdataobj));

    this.gridData.push({
      //date : localStorage.getItem("datetime"),
      date: tempdataobj.datetime,
      temperature: tempdataobj.tempdata,
    });
    // this.selectedDate = null;
    // this.temperatureInCelsius = null;

  }
}
