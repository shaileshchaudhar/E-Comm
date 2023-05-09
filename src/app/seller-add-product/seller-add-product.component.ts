import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  AddproductMsg:string|undefined;
 constructor(private addproduct:ProductsService){}
Submit(data:Products){
 console.log(data);
 this.addproduct.addProducts(data).subscribe((result)=>{
  console.log(result);
  if(result){
    this.AddproductMsg='Product added successfully'
  }
 setTimeout(()=>(this.AddproductMsg=undefined),3000);
 }) 
}


}
