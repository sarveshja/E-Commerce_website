import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {
  @Output() login = new EventEmitter<any>();
  @Output() register = new EventEmitter<any>();
  selleremail:string='';
  sellerpassword:string='';

  constructor(private auth:AuthService) { }
  authorize(value:any){
    this.login.emit({login:value});
  }

  onclick(){
    this.register.emit({register:true});
  }

  ngOnInit(): void {
  }

  sellersignIn() {
    if(this.selleremail == ''){
    alert('please enter email');
    return;
   }

   if(this.sellerpassword == '') {
    alert('please enter password');
    return;
   }

   this.auth.signIn(this.selleremail,this.sellerpassword).then((data:any)=>{
    this.authorize(data.success);
   });
   this.selleremail='';
   this.sellerpassword = '';
   
}

}
