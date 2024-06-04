import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  // email : string = '';
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  // forgotpassword(){
  //   this.auth.forgotpassword(this.email);
  //   this.email='';
  // }

}
