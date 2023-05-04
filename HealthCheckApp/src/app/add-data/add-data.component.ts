import { Component } from '@angular/core';
import { formatDate } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  public selectedDate: Date;
  public upperRange: number;
  public lowerRange: number;
  public gridData: any[] = [];


  //Bloodpressure
  public addData() {
    debugger
    this.gridData.push({
      date: this.selectedDate.toLocaleDateString(),
      //date: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en'),
      upperRange: this.upperRange,
      lowerRange: this.lowerRange,
    });
    // this.selectedDate = null;
    // this.temperatureInCelsius = null;
  }
  //localStorage.setItem("todos", JSON.stringify(this.todos));

}
