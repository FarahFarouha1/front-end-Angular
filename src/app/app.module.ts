import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './service/update-patient/update-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParServiceComponent } from './recherche-par-service/recherche-par-service.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';
import { ListeServicesComponent } from './liste-services/liste-services.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientsComponent,
    UpdatePatientComponent,
    RechercheParServiceComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeServicesComponent,
    UpdateServiceComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  //  Ng2SearchPipeModule ,

    HttpClientModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
