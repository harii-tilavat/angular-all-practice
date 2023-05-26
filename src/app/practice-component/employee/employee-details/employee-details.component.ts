import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/_model';
import { CustomValidtors } from 'src/app/_validators/custom-validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public empForm!: FormGroup;
  public editMode: boolean = false;
  public selectedItemIndex!: number;
  public updatedMessage!:string;
  constructor(private fb: FormBuilder, private empService: EmployeeService) { }
  ngOnInit(): void {
    this.empForm = this.fb.group({
      name: [null, Validators.required],
      salary: [null, Validators.required],
      number: [null, [Validators.required],this.onlyNumbers],
      department: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    });
    this.empService.selectedItemIndex.subscribe({
      next: (index: number) => {
        this.selectedItemIndex = index;
        this.editMode=true;
        const selectedItem:Employee = this.empService.getEmp(index);
        // console.log("Selected:", this.selectedItem);
        this.empForm.setValue({
          name:selectedItem.name,
          salary:selectedItem.salary,
          number:selectedItem.number,
          department:selectedItem.department,
          email:selectedItem.email
        })
      }
    })
  }
  onSave(): void {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this.empService.setEmpData(this.empForm.value);
      this.updatedMsg('Saved');
    }
    console.log(this.empService.getEmp(1));
    this.empForm.reset();
  }
  onUpdate(): void {
    if(this.editMode){
      this.empService.updateEmpData(this.selectedItemIndex,this.empForm.value);
      this.updatedMsg('Updated');
    }
    this.empForm.reset();
  }
  updatedMsg(message:string):void{
    this.updatedMessage=message;
    setTimeout(()=>{
      this.updatedMessage=''
    },2500);
  }
  onlyNumbers(control:AbstractControl):Promise<any> | Observable<any> {
    return new Promise((resolve,reject)=>{
      if(isNaN(control.value)){
        resolve({'onlyNumbers':true});
      }
      else{
        resolve(null);
      }
    });
  }
}
