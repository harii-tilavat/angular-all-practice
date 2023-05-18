import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/_model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }
  fetchData<T>(): Observable<T> {
    return this.http.get<T>('https://recipe-book-f8918-default-rtdb.firebaseio.com/recipes.json')
  }
  storeData(): any {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put<Recipe[]>('https://recipe-book-f8918-default-rtdb.firebaseio.com/recipes.json', recipes)
      .pipe(map((res) => {
        console.log(res);
        return res.map((recipe) => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        })
      }))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
