import { HttpClient } from '@angular/common/http';
import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PostResponseModel, RootResponseModel } from '../../_model';
import { PostsService } from '../../_services';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent implements OnInit {
  public httpForm!: FormGroup;
  public loadedPost:any = [];
  public isFetching: boolean = false;
  public error: string | null = null;
  public errorMessage: string = 'An error occurred';
  public images!: string[];
  constructor(private postsService: PostsService) { }
  ngOnInit(): void {
    this.httpForm = new FormGroup({
      title: new FormControl('Demo!', [Validators.required]),
      content: new FormControl('Just a Test', [Validators.required]),
    });

    // this.fetchPost();
  }
  createPost() {
    this.postsService.onCreatePost(this.httpForm.value.title, this.httpForm.value.content).subscribe({
      next: (res) => {
        // console.warn(res);
      },
      error: (err: any) => {
        this.error=err.name;
      },
      complete: () => { }
    })
  }
  fetchPost() {
    this.isFetching=true;
    this.postsService.onFetchPost<RootResponseModel[]>().subscribe({
      next: (res:RootResponseModel[]) => {
        console.log(res);
        this.loadedPost=res;
        this.isFetching=false;
      },
      error: (err: any) => {
        this.error=err.name;
      }
    });
  }
  deletePost() {
    this.postsService.onDeletePost().subscribe({
      next:()=>{
        this.loadedPost=[];
      }
    })
  }

  // getJson(): void {
  //   this.postsService.onGetJsonApi().subscribe((jsonResponse) => {
  //     this.images = jsonResponse.images;
  //     console.log(this.images);
  //   });
  // }
  onHandleError(): void {
    this.error = null;
  }
  // updateData():void{
  //   this.postsService.updateData()
  //     .subscribe((update)=>{
  //       console.warn(update);
  //     })
  // }
}
