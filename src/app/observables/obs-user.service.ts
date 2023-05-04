import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObsUserService {
  public activatedEmmiter = new Subject<boolean>;
  constructor(){
  }
}
