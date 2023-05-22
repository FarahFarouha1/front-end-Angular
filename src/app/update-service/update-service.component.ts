import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SERVICE } from '../model/SERVICER.model';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: []
})
export class UpdateServiceComponent  implements OnInit {
 
 
  @Input()serviceG! : SERVICE;
 @Input() ajout!:boolean;


 @Output()
serviceUpdated= new EventEmitter<SERVICE>();

updatedSer:SERVICE= {"idSer":0,"nomSer":""};


 constructor(){}
 
 
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateService ",this.serviceG);
  }


  saveService(){
    this.serviceUpdated.emit(this.serviceG);
    }
    
}
