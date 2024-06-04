import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import {Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin :boolean = false;

  constructor(public firebaseAuth :AngularFireAuth,private router :Router) { }
  

  signIn(email : string, password : string):Promise<any> {
    return new Promise((resolve,reject)=>{
      this.firebaseAuth.signInWithEmailAndPassword(email,password).then( ()=> {
        
    
        localStorage.setItem('token','true');
        
        resolve({success:true});
      }, err => {
        alert(err.message);
        
        reject({success:false});
      }
      )
    })
    
  }
  // register method
  register(email : string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(() =>{
     alert('registation successfully');
     
    }, err => {
      alert(err.message);
      
    })
  }
  

  
}
