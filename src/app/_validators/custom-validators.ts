import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidtors{
  constructor(){}
  notString(control:AbstractControl):Promise<any> | Observable<any> {
    return new Promise((resolve,reject)=>{
      if(isNaN(control.value)){
        resolve({'textNotAllowed':true});
      }
      else{
        resolve(null);
      }
    });
  }
}
