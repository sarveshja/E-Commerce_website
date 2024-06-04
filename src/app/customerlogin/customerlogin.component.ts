import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  @Output() login = new EventEmitter<any>();
  @Output() register = new EventEmitter<any>();
  email:string='';
  password:string='';

  
  constructor(private auth: AuthService,public  data : DataService){}

  authorize(value:any){
    this.login.emit({login:value});
  }

  ngOnInit(): void {
    
  }

  onclick(){
    this.register.emit({register:true});
  }

  signIn() {
    if(this.email == ''){
    alert('please enter email');
    return;
   }

   if(this.password == '') {
    alert('please enter password');
    return;
   }

   this.auth.signIn(this.email,this.password).then((data:any)=>{
    this.authorize(data.success);
    this.data.setSession('customer',this.email)
    this.email='';
    this.password = '';
   });
   
   
}

}
