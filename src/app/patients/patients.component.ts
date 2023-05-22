import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { AuthService } from '../service/auth.service';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  
})

export class PatientsComponent implements OnInit{
  patients!: Patient[];
  
constructor( private patientService:PatientService,
  public authService: AuthService){
}

ngOnInit(): void{
 this.chargerPatients();
    
}

chargerPatients(){
  this.patientService.listePatient().subscribe(pas => {
    console.log(pas);
    this.patients = pas;
    });
}

supprimerPatient(p: Patient)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.patientService.supprimerPatient(p.idPatient).subscribe(() => {
console.log("patient supprimé");
this.chargerPatients();
});
}

}