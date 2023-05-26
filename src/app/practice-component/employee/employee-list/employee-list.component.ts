import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public editMode:boolean=false;
  public selectedItem!:number;
  public empLabels:string[]=['S.No','Name','Phone','Department','Salary','Email']
  public employeeList: Employee[] = [
  ]
  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.employeeList = this.empService.getEmpData();
    this.empService.employeeChange.subscribe({
      next: (data: Employee[]) => {
        this.employeeList = data;
        console.log("Data",data);
      }
    })
  }
  onEdit(index: number): void {
   this.editMode=true;
   this.selectedItem=index;
   this.empService.getEmp(index);
   this.empService.selectedItemIndex.next(index);
  }
  onDelete(index: number): void {
    if(confirm("Are you Sure?")){
      this.empService.deleteEmpData(index);
    }
  }
}
