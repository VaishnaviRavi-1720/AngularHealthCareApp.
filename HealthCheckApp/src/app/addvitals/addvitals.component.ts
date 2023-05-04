import { Component } from '@angular/core';

@Component({
  selector: 'app-addvitals',
  templateUrl: './addvitals.component.html',
  styleUrls: ['./addvitals.component.css']
})
export class AddvitalsComponent {
    title = 'Angular Kendo Showcases';
    public curDate: Date = new Date();
    public epDateFormat: string = "dd-MMM-yyyy";

}
