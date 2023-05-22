
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.model';
import { SERVICE } from 'src/app/model/SERVICER.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html'

})

export class UpdatePatientComponent  implements OnInit{
  currentPatient =new Patient();
  services! : SERVICE[];
  updatedSerId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private patientService: PatientService)
  {}

  ngOnInit(): void {
    this.patientService.listeService().
    subscribe(sers => {console.log(sers);
    this.services = sers._embedded.services;
    }
    );
    this.patientService.consulterPatient(this.activatedRoute.snapshot.params['id']).
    subscribe( pas =>{ this.currentPatient = pas;
    this.updatedSerId = this.currentPatient.service.idSer;
    } ) ;
    }
    
    updatePatient() {
      this.currentPatient.service = this.services.
       find(ser => ser.idSer == this.updatedSerId)!;
      this.patientService.updatePatient(this.currentPatient).subscribe(pas => {
      this.router.navigate(['patients']); }
      );
      }
      
}
