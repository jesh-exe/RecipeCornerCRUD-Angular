import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APP_SERVICE_CONFIG, APP_CONFIG } from 'src/app/app.config';
import { Recipe } from '../Recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes$ = this.http.get<Recipe[]>(this.config.apiEndpoint, {

    // We can add Header by Custom means too
    // Also to add more, we need to use Append Method 
    headers: new HttpHeaders({
      "Jayesh-Header": "rkfjtoiewfksnkjfnr W3N42J323 RM23OJR5H32O4ITHJ34 GKERNV3OKJ4TNGRFJND"
    }).append("Jesh", "Asdasdas")
  }).pipe(
    // Error Handling in RxJs
    // Just like catch in Promise of JS
    catchError((error) => {
      console.log(error)
      // We need to return an empty Array as it is expecting an array
      return of([]);
    })
  )

  constructor(private http: HttpClient, @Inject(APP_SERVICE_CONFIG) private config: any) { }

  getRecipes() {

    // Using the Http Client to get the request and response from the API
    // We need to provide the Interface of which type the data is going to be received from the backend or the API
    return this.http.get<Recipe[]>(this.config.apiEndpoint , {
      headers: new HttpHeaders({
        "token": "rkfjtoiewfksnkjfnr W3N42J323 RM23OJR5H32O4ITHJ34 GKERNV3OKJ4TNGRFJND"
      }).append("Jesh", "Asdasdas")
    });
  }

  getRecipeById(recipeId: number) {
    return this.http.get<Recipe>(this.config.apiEndpoint + "/" + recipeId);
    // return this.http.get<Recipe>("http://localhost:8080/recipes/1");
  }

  addRecipe(recipe: Recipe) {
    return this.http.post<Recipe[]>(this.config.apiEndpoint + "/add", recipe) ;
  }

  updateRecipe(recipe: Recipe)
  {
    return this.http.put<Recipe[]>(this.config.apiEndpoint, recipe);
  }

  deleteRecipe(id)
  {
    return this.http.delete<Recipe[]>(this.config.apiEndpoint + "/" + id);
  }

}