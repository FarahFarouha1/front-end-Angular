import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { SERVICE } from '../model/SERVICER.model';
import { PatientService } from '../service/patient.service';


@Component({
  selector: 'app-recherche-par-service',
  templateUrl: './recherche-par-service.component.html',
  styleUrls: []
})
export class RechercheParServiceComponent implements OnInit {



  patients! : Patient[];
  IdService! : number;
  services! : SERVICE[];
  constructor(private patientService :PatientService){}
  
ngOnInit(): void{
  this.patientService.listeService().
subscribe(sers => {this.services = sers._embedded.services;
console.log(sers);
});
     
 }

 onChange() {
  this.patientService.rechercherParService(this.IdService).
  subscribe(pas =>{this.patients=pas});//services ghalta normallement patient 
}

}