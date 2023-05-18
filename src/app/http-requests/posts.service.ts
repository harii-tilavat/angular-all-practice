import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchResponseModel, Post, PostResponseModel, RootResponseModel } from '../_model';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public test: string = 'this is test';
  public loadedPost = [];
  public error = new Subject<string>();
  constructor(private http: HttpClient) { }

  onCreatePost(title: string, content: string): Observable<any> {
    const postData = { title: title, content: content }
    return this.http.post<any>('https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json', postData , {observe:'response'});
  }
  onFetchPost<T>(): Observable<T> {
    let searchParams=new HttpParams();
   searchParams= searchParams.append("key","Value");
   searchParams= searchParams.append("anotherKey","Value");
    const postArray: T[] = [];
    return this.http.get<FetchResponseModel>(
      'https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
        params:searchParams
      })
      .pipe(map((response: FetchResponseModel) => {
        for (let key in response) {
          postArray.push({ ...response[key] as T, id: key });
        }
        return postArray as T;
      }));
  }
  onDeletePost() {
    return this.http
      .delete(
        'https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            // console.log('Sending Succesfully!');
          }
          if (event.type === HttpEventType.Response) {
            // console.log(event);
          }
          // console.log(HttpEventType);
        })
      );
  }
  onGetJsonApi(): Observable<any> {
    return this.http.get('https://dummyjson.com/products/1', {
      responseType: 'json',
    });
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    throw error.error;
  }
  // testFetch() {
  //   return this.http
  //     .get(
  //       'https://recipe-book-f8918-default-rtdb.firebaseio.com/posts.json',
  //       { observe: 'events' }
  //     )
  //     .pipe(
  //       tap((event) => {
  //         if (event.type === HttpEventType.Sent) {
  //           console.log("Send Request");
  //         }
  //         if (event.type === HttpEventType.Response) {
  //           console.log(event.body);
  //         }
  //       })
  //     );
  // }
  // updateData(): Observable<Object> {
  //   const updateData = {
  //     title: 'Harit',
  //     content: 'Tilavat ',
  //   }
  //   return this.http
  //     .put(
  //       'https://recipe-book-f8918-default-rtdb.firebaseio.com/newPost.json',
  //       updateData
  //     )
  // }
}

// const postArray = [];
// for (let key in response.body) {
//   postArray.push({ ...response.body[key], id: key });
// }
// return postArray;
