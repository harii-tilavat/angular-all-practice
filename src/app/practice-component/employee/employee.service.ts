import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from 'src/app/_model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  public employeeChange = new Subject<Employee[]>;
  public selectedItemIndex=new Subject<number>;
  public employeeList: Employee[] = [
    {
      "name": "John Doe",
      "number": 12345,
      "department": "Engineering",
      "salary": 60000,
      "email": "johndoe@example.com"
    },
    {
      "name": "Jane Smith",
      "number": 54321,
      "department": "Marketing",
      "salary": 45000,
      "email": "janesmith@example.com"
    },
    {
      "name": "Michael Johnson",
      "number": 98765,
      "department": "Sales",
      "salary": 55000,
      "email": "michaeljohnson@example.com"
    },
    {
      "name": "Emily Williams",
      "number": 67890,
      "department": "Human Resources",
      "salary": 70000,
      "email": "emilywilliams@example.com"
    },
    {
      "name": "David Brown",
      "number": 24680,
      "department": "Finance",
      "salary": 80000,
      "email": "davidbrown@example.com"
    },
    {
      "name": "Olivia Davis",
      "number": 13579,
      "department": "Engineering",
      "salary": 65000,
      "email": "oliviadavis@example.com"
    },
    {
      "name": "Liam Wilson",
      "number": 86420,
      "department": "Marketing",
      "salary": 50000,
      "email": "liamwilson@example.com"
    },
    {
      "name": "Sophia Martinez",
      "number": 11223,
      "department": "Sales",
      "salary": 60000,
      "email": "sophiamartinez@example.com"
    },
    {
      "name": "Noah Anderson",
      "number": 99887,
      "department": "Human Resources",
      "salary": 72000,
      "email": "noahanderson@example.com"
    },
    {
      "name": "Ava Taylor",
      "number": 44556,
      "department": "Finance",
      "salary": 85000,
      "email": "avataylor@example.com"
    }
  ]

  constructor() { }
  getEmpData(): Employee[] {
    return this.employeeList.slice();
  }
  getEmp(index:number){
    return this.employeeList[index];
  }
  setEmpData(data: Employee): void {
    this.employeeList.push(data);
    this.employeeChange.next(this.employeeList.slice());
    console.log(this.employeeList);
    console.log("IN details:", data);
  }

  deleteEmpData(index: number):void {
    this.employeeList.splice(index, 1);
    this.employeeChange.next(this.employeeList.slice());
  }
  updateEmpData(index:number,updatedData:Employee):void{
    this.employeeList[index]=updatedData;
    this.employeeChange.next(this.employeeList.slice());
  }
}
