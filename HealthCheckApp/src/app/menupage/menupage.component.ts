import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {

  constructor(private router: Router){
  }

  public listItems: Array<string> = [
    "Temperatue in Celcius",
    "Blood Pressure",
    "Suger Level"
  ];

  onMenuClick(){
    if(this.listItems.toString() == "Temperatue in Celcius"){
      this.router.navigate(['/patientvitals']);
    }
    if(this.listItems.toString() == "Blood Pressure"){
      this.router.navigate(['/adddata']);
    }
    if(this.listItems.toString() == "Suger Level"){
      this.router.navigate(['/patientvitals']);
    }
  }

}
