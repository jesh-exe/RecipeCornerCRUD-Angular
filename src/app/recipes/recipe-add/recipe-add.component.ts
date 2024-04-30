import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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