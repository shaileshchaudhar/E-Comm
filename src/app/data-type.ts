export interface Signup{
    name:string,
    password:string,
    emailId:string,
}
export interface Login{
    emailId:string,
    password:string,
}
export interface Products{
    id:number,
  image:string;
   Name:string,
   price:number,
   Color:string,
   description:string,
   category:string,
}
