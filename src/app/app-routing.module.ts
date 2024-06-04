import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';

import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';

const routes: Routes = [
  
  {path:'forgotpassword',component:ForgotpasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
