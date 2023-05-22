import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: []
})
export class RechercheParNomComponent implements OnInit{

allPatients!:Patient[];
  nomPatient!:string;
  patients!:Patient[];
  searchTerm!:string;



constructor(private patientService :PatientService){}


ngOnInit(): void {
  this.patientService.listePatient().subscribe(pas => {
    console.log(pas);
    this.patients = pas;
    });
    
}

rechercherPas(){
  this.patientService.rechercherParNom(this.nomPatient).
  subscribe(pas => {
  this.patients = pas;
  console.log(pas)});
  }




  onKeyUp(filterText : string){
    this.patients = this.allPatients.filter(item =>
    item.nomPatient.toLowerCase().includes(filterText));
    }

}
