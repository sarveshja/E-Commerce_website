import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs';
import { DataService } from '../data.service';
import { Products } from '../products';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {
//   submitted:boolean=false;
//   successMessage:boolean=false;
//   formControls = this.dataService.form.controls;
//   productArray:any[]=[];
//   deleteMessage:boolean=false;
    productList: Products[] =[];
    productObj : Products = {
      id:'',
      p_model_no : '',
      p_name : '',
      p_img_path : '',
      p_price : '',
      p_seller_name : '',
      category :''
    }
    id : string ='';
    p_model_no : string='';
    p_name : string='';
    p_img_path : string='';
    p_price : string='';
    p_seller_name : string='';
    category : string ='';

  constructor(public  data : DataService) { }

  ngOnInit(): void {
    this.getAllProducts();  
    
  }


  getAllProducts(){
    this.data.getAllProducts().subscribe(res =>{
      this.productList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        //alert('started');
        return data;
        
      })
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }

  resetForm(){
    this.id = '';
    this.p_model_no = '';
    this.p_img_path = '';
    this.p_price = '';
    this.p_name = '';
    this.p_seller_name = '';
    this.category = '';
  }

  addProduct(){
    if(this.p_img_path == '' || this.p_model_no == '' || this.p_name == '' || this.p_price == '' || this.p_seller_name == ''){
      alert('Fill all the input fields');
    }

    this.productObj.id = '';
    this.productObj.p_model_no = this.p_model_no;
    this.productObj.p_name = this.p_name;
    this.productObj.p_img_path = this.p_img_path;
    this.productObj.p_price = this.p_price;
    this.productObj.p_seller_name = this.p_seller_name;
    this.productObj.category = this.category;

    this.data.addProduct(this.productObj);
    this.resetForm();
  }

  updateProduct(){

  }

  deleteProduct(product:Products){
    if(window.confirm('Are you sure you want to delete '+product.p_name+' ?')){
    this.data.deleteProduct(product);
    }
  }

  reload(){
    location.reload();
  }

}
