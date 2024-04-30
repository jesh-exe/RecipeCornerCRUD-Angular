import { Component, OnInit } from '@angular/core';
import { pipe } from '@angular/core/src/render3/pipe';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Recipe } from '../Recipe.interface';
import { RecipesService } from '../services/Recipes.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeFormData: Recipe = {
    id: 0,
    name: "",
    ingredients: [],
    instructions: [],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: "",
    cuisine: "",
    caloriesPerServing: 0,
    tags: [],
    image: "",
    rating: 0,
  }

  constructor(private recipeService : RecipesService, private route : Router) { }

  ngOnInit() {
    // Using Router to access the Routing Events 
    this.route.events.pipe(filter((event)=>event instanceof NavigationStart)).subscribe((event)=>console.log("Navigation Started"));
    this.route.events.pipe(filter((event)=>event instanceof NavigationEnd)).subscribe((event)=>console.log("Navigation Ended"));
  }

  public handleAddData(){
    console.log(this.recipeFormData)
    this.recipeService.addRecipe(this.recipeFormData).subscribe(
      result => {
        alert("Recipe Added!")
        this.route.navigateByUrl("/recipes");
      },
      error => {
        alert("Error Adding Recipe"+error);
      }
    );
  }
}