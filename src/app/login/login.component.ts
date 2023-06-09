import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { AuthService } from '../service/auth.service';

@Component({

 

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  erreur=0;
  user = new User();
  constructor(private authService : AuthService,
    private router: Router) { }
  ngOnInit(): void {
    
  }


  onLoggedin(){
    console.log(this.user);
     let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
    this.router.navigate(['/']);
    else
   // alert('Login ou mot de passe incorrecte!');
  this.erreur=1;
    }

}
