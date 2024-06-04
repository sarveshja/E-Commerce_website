import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GadgetsIndia.com';
  
  user_type : string = '';
  authorization_allowed : any = false;  

  login1(event: { login: any; }){
    this.authorization_allowed = event.login;
  }

  register1(event: { register: any; }){
    if(event.register == true){
      this.user_type = 'register';
    }
  }
}
