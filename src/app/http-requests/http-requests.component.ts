import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent implements OnInit {
  public httpForm!: FormGroup;
  public testArray:number[]=[1,2,3,4,5];
  public testObject:{}={
    name:'hello',
    age:20
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log(this.testArray);
    console.log(this.testObject);
    this.httpForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
    this.fetchPost();
  }
 public onCreatePost(): void {
    this.http
      .post(
        'https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json',
        this.httpForm.value
      )
      .subscribe((response: any) => {
      });
  }

  private fetchPost():void{
    this.http.get('https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((responseData:{[key:string]:any})=>{
      const postArray=[];
      console.log(responseData);
      for(const key in responseData){
        console.warn(responseData[key]);
        // postArray.push(responseData[key])
      }
    }))
    .subscribe((response)=>{
      console.log(response);
    })
  }
  public fetchPost2():void{
    this.fetchPost();
  }
}
