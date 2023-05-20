import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe, User } from 'src/app/_model';
import { Observable, exhaustMap, map, take, tap } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authenticationService: AuthenticationService) { }
  fetchData<T>(): Observable<T> {
   return this.authenticationService.user
      .pipe(
        take(1),
        exhaustMap((user:User) => {
          console.log('User=======',user);
          return this.http.get<T>('https://recipe-book-f8918-default-rtdb.firebaseio.com/recipes.json',
          {
            params:new HttpParams().set('auth',user.token)
          }
          )
        }),
        map((recipes: T) => {
          return recipes;
          // return res.map((recipe:any) => {
          //   return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          // })
        }),
        tap((recipes: T) => {
          this.recipeService.setRecipe(recipes as Recipe[]);
        })
      )
  }
  storeData(): any {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put<Recipe[]>('https://recipe-book-f8918-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
