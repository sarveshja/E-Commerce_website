import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string='';
  password:string='';
  selleremail:string='';
  sellerpassword:string='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register(){
      
    if(this.email == ''){
      alert('please enter email');
      return;

     }
  
     if(this.password == '') {
      alert('please enter password');
      return;
     }
     
  
     this.auth.register    (this.email,this.password);
     this.email='';
     this.password = '';
     
  }

  sellerregister(){
      
    if(this.selleremail == ''){
      alert('please enter email');
      return;

     }
  
     if(this.sellerpassword == '') {
      alert('please enter password');
      return;
     }
     
  
     this.auth.register    (this.selleremail,this.sellerpassword);
     this.selleremail='';
     this.sellerpassword = '';
     
  }


}
