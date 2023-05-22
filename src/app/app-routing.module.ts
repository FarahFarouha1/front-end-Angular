import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { UpdatePatientComponent } from './service/update-patient/update-patient.component';
import { RechercheParServiceComponent } from './recherche-par-service/recherche-par-service.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeServicesComponent } from './liste-services/liste-services.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patients", component :  AddPatientsComponent},
  {path: "updatePatient/:id", component: UpdatePatientComponent},
  {path: "rechercheParService", component : RechercheParServiceComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeService", component : ListeServicesComponent},
  {path: 'Login', component: LoginComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


