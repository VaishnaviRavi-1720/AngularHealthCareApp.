import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label'
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

import { AddDataComponent } from './add-data/add-data.component';
import { HeaderComponent } from './header/header.component';
import { PatientVitalsComponent } from './patient-vitals/patient-vitals.component';
import { DateInputComponent, DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DateInputModule } from '@progress/kendo-angular-dateinputs';
import { LoginComponent } from './login-page/login-page.component';
import { AddvitalsComponent } from './addvitals/addvitals.component';
import { MenupageComponent } from './menupage/menupage.component';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    HeaderComponent,
    PatientVitalsComponent,
    LoginComponent,
    AddvitalsComponent,
    MenupageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabelModule,
    ButtonModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputModule,
    DropDownsModule,
    GridModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
