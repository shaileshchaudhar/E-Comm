import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../data-type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
    productData :undefined| Products;
    ProductMessage:undefined| string

  constructor(private router :ActivatedRoute,private product:ProductsService,private Router :Router){

  }
  ngOnInit(){
    let id=this.router.snapshot.paramMap.get('id');
    console.log('id is=',id);
    id && this.product.getProduct(id).subscribe((result)=>{
      console.log(result);
      this.productData=result;
    })

  }
  Submit(data:Products){
    if(this.productData){
      data.id=this.productData.id;

    }
    this.product.UpdatedProduct(data).subscribe((result)=>{
      console.log(result);
   
      if(result){
       this.ProductMessage="Product Added Successfully";
      }
    })
    setTimeout(()=>(this.ProductMessage=undefined),3000)
    this.Router.navigate(["/seller-home"]);
  }
  
}
