import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string='default';
  sellerName:string='';
 constructor(private router :Router){}
 ngOnInit(){
  this.router.events.subscribe((res:any)=>{
   if(res.url){
    console.log(res.url);
    if(localStorage.getItem('seller') && res.url.includes('seller')){
    console.log('this is Seller Areas');
    this.menuType='seller'; 
    if(localStorage.getItem('seller')){
      let sellerStorage=localStorage.getItem('seller');
      let sellerData=sellerStorage && JSON.parse(sellerStorage)[0]
      this.sellerName=sellerData.Name

    }
    }
    else{
      console.log("this is not seller area");
      this.menuType='default';
    }
   }
  })
 }
 logout(){
  localStorage.removeItem('seller')
  this.router.navigate(['/']);
 }

 }
