import { HttpClient } from '@angular/common/http';
import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Post, PostResponseModel, RootResponseModel } from '../_model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent implements OnInit {
  public httpForm!: FormGroup;
  public loadedPost: Array<RootResponseModel> = [];
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

    this.fetchPost();
  }
  createPost(): void {
    this.postsService.onCreatePost(
      this.httpForm.value.title,
      this.httpForm.value.content
    ).subscribe();
  }
  fetchPost(): void {
    this.isFetching = true;
    this.postsService.onFetchPost<RootResponseModel[]>().subscribe({
      next: (res: any) => {
        this.error = null;
        this.isFetching = false;
        this.loadedPost = res;
        console.log(this.loadedPost);
      },
      error: (err: any) => {
        console.log('Error:: ==> ', err);
        this.error = err.error;
      },
      complete: () => { },
    });
  }
  deletePost(): void {
    this.postsService.onDeletePost().subscribe(() => {
      this.loadedPost = [];
    });
  }
  getJson(): void {
    this.postsService.onGetJsonApi().subscribe((jsonResponse) => {
      this.images = jsonResponse.images;
      console.log(this.images);
    });
  }
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
