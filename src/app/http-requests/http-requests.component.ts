import { HttpClient } from '@angular/common/http';
import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Post } from '../_model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss'],
})
export class HttpRequestsComponent implements OnInit {
  public httpForm!: FormGroup;
  public loadedPost: Post[] = [];
  public isFetching: boolean = false;
  public error: null = null;
  constructor(private http: HttpClient, private postsService: PostsService) { }
  ngOnInit(): void {
    this.httpForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
    this.postsService.error
    .subscribe((error)=>{
      console.warn(error);
    });
    this.onFetchPost();
  }
  onCreatePost(): void {
    this.postsService.onCreatePost(this.httpForm.value.title, this.httpForm.value.content);
  }
  onFetchPost(): void {
    this.isFetching = true;
    this.postsService.onFetchPost()
      .subscribe((response) => {
        this.isFetching = false;
        this.loadedPost = response;
      },(error)=>{
        this.isFetching = false;
        this.error=error.message;
      });
  }
  onOkay():void{
    this.error=null;
  }
  onDeletePost(): void {
    this.postsService.onDeletePost()
      .subscribe()
  }
}
