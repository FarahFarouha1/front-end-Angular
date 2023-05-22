import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Patient } from '../model/patient.model';
import { SERVICE } from '../model/SERVICER.model';
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',

})
export class AddPatientsComponent  implements OnInit{


  newPatient = new Patient();
  services ! :SERVICE[];
  newIdSer !:number;
  newService!:SERVICE;
  mes!: string;

  constructor(private patientService:PatientService,
               private router:Router
    ){}

    ngOnInit(): void {
      this.patientService.listeService().
      subscribe(sers => {console.log(sers);
      this.services = sers._embedded.services;
      }
      );
      }
      addPatient(){
        this.newPatient.service = this.services.find(ser => ser.idSer == this.newIdSer)!;
        this.patientService.ajoutPatient(this.newPatient)
        .subscribe(pas => {
        console.log(pas);
        this.router.navigate(['patients']);
        });
        }
        


}