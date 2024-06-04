import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
// import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { RegisterComponent } from './register/register.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AuthService } from './auth.service';
import { LoginlogoComponent } from './loginlogo/loginlogo.component';
import { SellerheadComponent } from './sellerhead/sellerhead.component';
import { DataService } from './data.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {ColorPickerModule} from 'primeng/colorpicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { HomeComponent } from './home/home.component';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CustomerloginComponent,
    SellerloginComponent,
    RegisterComponent,
    CustomerdashboardComponent,
    SellerdashboardComponent,
    LoginlogoComponent,
    SellerheadComponent,
    ForgotpasswordComponent,
    VerifyemailComponent,
    HomeComponent
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ColorPickerModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    DropdownModule,
    TooltipModule
    
  ],
  providers: [
    AuthService,
    DataService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
