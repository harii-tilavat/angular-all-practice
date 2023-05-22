import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  public loggedIn:boolean=false;

  constructor(){}
  isAuthenticated():Promise<boolean>{
    return new Promise(
      (resolve)=>{
        setTimeout(()=>{
          resolve(this.loggedIn);
        },1000);
      }
    );
  }
  login(){
    this.loggedIn=true;
  }
  logout(){
    this.loggedIn=false;
  }
}
