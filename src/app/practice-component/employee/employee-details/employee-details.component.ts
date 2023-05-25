import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public empForm!:FormGroup;
  public isUpdate:boolean=false;
  public selectedItem!:number;
  constructor(private fb:FormBuilder, private empService:EmployeeService) { }
  ngOnInit():void{
    this.empForm=this.fb.group({
      name:[null,Validators.required],
      salary:[null,Validators.required],
      phone:[null,Validators.required],
      department:[null,Validators.required],
      email:[null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    });
    this.empService.selectedItemIndex.subscribe({
      next:(index:number)=>{
        this.selectedItem=index;
        console.log(this.empService.getEmp(index));
      }
    })
  }
  onSave():void{
    if(this.empForm.valid){
      console.log(this.empForm.value);
      this.empService.setEmpData(this.empForm.value);
    }
    console.log(this.empService.getEmp(1));
    this.empForm.reset();
  }
  onUpdate():void{
    this.empForm.reset();
  }

}
