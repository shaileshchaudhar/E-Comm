import { Component } from '@angular/core';
import { Products } from '../data-type';
import { ProductsService } from '../services/products.service';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  icon=faTrash;
  Icon=faPen
  ProductList : undefined|Products[]
  productMessage:undefined|string;
  constructor(private productlist:ProductsService,private router :ActivatedRoute){

  }
  ngOnInit(){
    this.list();
  }
  Product_Delete(id:number){
 console.log("id test",id);
 this.productlist.deleteProduct(id).subscribe((result)=>{
 console.log(result);
 if(result){
  this.productMessage="product is deleted";
  this.list();
 }
 })
 setTimeout(()=>(this.productMessage=undefined),3000);
  }
  list(){
    this.productlist.productList().subscribe((result: any)=>{
      console.log(result);
      this.ProductList=result
      console.log('product list output');
     })

  }

}
