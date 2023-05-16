import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_model';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public loadedPost!: Post[];
  public error=new Subject<string>();
  constructor(private http: HttpClient) {}

  onCreatePost(title: string, content: string): void {
    let postData = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((response) => {
        console.log(response);
      },(error)=>{
        this.error.next(error.message);
      });
  }
  onFetchPost():Observable<any[]> {
    let postArray: Post[] = [];
    return this.http
      .get<{ [key: string]: Post }>(
        'https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((response) => {
          for (let key in response) {
            postArray.push({...response[key],id:key});
          }
          return postArray;
        })
      );
  }
  onDeletePost():Observable<any> {
   return this.http.delete('https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json');
  }
}
