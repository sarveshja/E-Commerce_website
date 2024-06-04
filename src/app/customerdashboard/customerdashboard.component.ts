import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Cart, Products } from '../products';
import { uniqBy} from 'lodash';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
  productList: Products[] =[];
  cartList:Cart[] =[];
  totalList: Products[] =[];
  categories=[];
  selCat:string=null;
  page="dashBoard";
  cartPage:boolean=false;
  loadPage: boolean=false;
  CheckOut:boolean=false;
  total: number;
  constructor(public  data : DataService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  AddToCart(product:Cart){
    product.customer_Id=this.data.getSession('customer');
    this.data.addProducttoCart(product);
  }
  getAllProducts(){
    this.data.getAllProducts().subscribe(res =>{
      this.productList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      var unique = uniqBy(this.productList,'category');
      this.categories=unique.map(x=>{
        return {name:x.category}
      });
      this.loadPage=true;
      this.totalList=this.productList;
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }
  clearfunc(){
    this.productList=this.totalList;
    this.selCat=null;
  }
  selCatValue(){
    if(this.selCat!=null||this.selCat!='')
    this.productList=this.totalList.filter(x=>x.category==this.selCat)
    else{
      this.productList=this.totalList;
      this.selCat=null;
    }
  }
  deleteProductcart(product){
    this.data.deleteProductCart(product);
    this.calculatetotal(this.cartList);
  }
  check(){
    alert('Your product will be soon dispatched. Continue Shopping');
    this.page="dashBoard";
  }
  navToCart(){
    this.total=0;
    this.data.getAllProductsCart().subscribe(res =>{
      this.cartList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        data.p_price=parseInt(data.p_price);
        //this.total=this.total+data.p_price;
        return data;
      })
      this.cartList=this.cartList.filter(x=>x.customer_Id==this.data.getSession('customer'))
      this.calculatetotal(this.cartList);
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }
  calculatetotal(cartList){
    this.total=0;
    cartList.forEach(element => {
      this.total=this.total+element.p_price;
    });
  }
  checkout(){
    this.cartList.forEach(element => {
      this.data.deleteProductCart(element);
    });
  }

  reload(){
    location.reload();
  }
}
