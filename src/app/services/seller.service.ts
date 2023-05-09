import { EventEmitter, Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Login, Signup } from '../data-type';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  URL:any='http://localhost:3000/Seller'
  IsLogined =new BehaviorSubject<boolean>(false)
  IsLoginError=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private route :Router) { }
  UserSignUp(data:Signup){
    this.http.post(this.URL,data,{observe:'response'})
    .subscribe((result)=>{
      console.log(result);
      // this.IsLogined.next(true);
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        console.log(result.body);
        this.route.navigate(['seller-home']);
      }
     
    })
    
  }
  reloadSeller(){
     if(localStorage.getItem('seller')){
      this.IsLogined.next(true);
      this.route.navigate(['seller-home']);
      console.log('Login');
     }
  }
  UserLogin(data:Login){
    this.http.get(`http://localhost:3000/Seller?emailId=${data.emailId}&password=${data.password}`,{observe:'response'})
    .subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length){
        console.log('user LoggedIn');
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.route.navigate(['seller-home']);
      }
      else{
        console.log("Login Failed");
        this.IsLoginError.emit(true);
      }
    })
  }

}
