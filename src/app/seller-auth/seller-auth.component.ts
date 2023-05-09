import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Signup } from '../data-type';
import { ProductsService } from '../services/products.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  ShowLogin:boolean=false;
  authError:string=''
 constructor(private seller:SellerService,private router :Router){}
 ngOnInit(){
  this.seller.reloadSeller();
 }
 Signup(data:Signup):void{
  this.seller.UserSignUp(data)
    
}
 Login(data:Login):void{
 this.seller.UserLogin(data);
 console.log(data);
 this.seller.IsLoginError.subscribe((error)=>{
  if(error){
    this.authError="login or Password is not Correct";
  }
 
 })
    
}
OpenLogin(){
 this.ShowLogin=true
}
OpenSignup(){
  this.ShowLogin=false
}

}

