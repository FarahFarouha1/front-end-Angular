import { Component, OnInit } from '@angular/core';
import { SERVICE } from '../model/SERVICER.model';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: []
})

export class ListeServicesComponent implements OnInit {
  

  services! : SERVICE[];
  ajout:boolean=true;
  updatedSer: SERVICE= {"idSer":0,"nomSer":""};
  //ttribute name.
  constructor(private patientService :PatientService) { }

  ngOnInit(): void {
    this.patientService.listeService().
subscribe(sers => {this.services = sers._embedded.services;
console.log(sers);
});
  }
  chargerServices(){
    this.patientService.listeService().subscribe(sers=> {this.services = sers._embedded.services;
      console.log(sers);
    });
  }



  serviceUpdated(ser:SERVICE){
    console.log("ser updated event",ser);
    this.patientService.ajouterService(ser).
    subscribe(()=> this.chargerServices());
    }

    updateService(ser:SERVICE){
      this.updatedSer=ser;
      this.ajout=false;
    }
    
   
}
