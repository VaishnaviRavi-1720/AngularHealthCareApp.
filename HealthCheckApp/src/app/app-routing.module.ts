import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login-page/login-page.component';
import { MenupageComponent } from './menupage/menupage.component';
import { PatientVitalsComponent } from './patient-vitals/patient-vitals.component';


const routes: Routes = [
  {path: 'adddata' , component: AddDataComponent},
  {path: '' , component: HeaderComponent},
  {path: 'loginpage' , component: LoginComponent},
  {path: 'patientvitals', component: PatientVitalsComponent},
  {path: 'menu', component: MenupageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
