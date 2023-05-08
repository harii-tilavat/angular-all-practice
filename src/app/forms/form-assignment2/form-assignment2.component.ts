import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-assignment2',
  templateUrl: './form-assignment2.component.html',
  styleUrls: ['./form-assignment2.component.scss']
})
export class FormAssignment2Component implements OnInit {
  public projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  public projectForm!: FormGroup;
  public pName!:string;
  public pMail!:string;
  public pStatus!:string;
  public forbiddenNames:string[]=['test','hello'];
  public validName!:boolean;
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required],this.forbiddenName),
      projectMail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Stable', [Validators.required])
    });
    console.log("Check "+ this.forbiddenNames.includes('test'));
  }
  onSubmitForm(): void {
    console.log(this.projectForm.value);
  }
  forbiddenName(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      if (control.value==='test') {
        resolve({ 'forbiddenName': true });
      } else {
        resolve(null);
      }
    })
  }
}
