import { Inject, Injectable, InjectionToken } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service'
import { Products } from './products';
import { throwIfEmpty } from 'rxjs';

export const SESSION_SESSION =
new InjectionToken<StorageService>('SESSION_SESSION');
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private afs:AngularFirestore, @Inject(SESSION_STORAGE) public storage:StorageService) { }
  addProduct(product:Products){
    product.id = this.afs.createId();
    
    this.afs.collection('/products/').add(product);
  }
  addProducttoCart(product:Products){
    product.id = this.afs.createId();
    this.afs.collection('/Cart/').add(product);
    alert("Product added successfully")
  }

  getAllProducts(){
    return this.afs.collection('products').snapshotChanges();
  }
  getAllProductsCart(){
    return this.afs.collection('Cart').snapshotChanges();
  }

  deleteProduct(product:Products){
    return this.afs.collection('/products/').doc(product.id).delete();
  }
  deleteProductCart(product:Products){
    return this.afs.collection('/Cart/').doc(product.id).delete();
  }

  updateProducts(product:Products){
    this.deleteProduct(product);
    this.addProduct(product);
  }
  setSession(key:string, value:any){
    this.storage.set(key,value);
  }
  getSession(key:string){
    return this.storage.get(key);
  }
}
