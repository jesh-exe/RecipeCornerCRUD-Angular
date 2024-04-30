import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../Recipe.interface';
import { RecipesService } from '../services/Recipes.service';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css']
})
export class RecipeUpdateComponent implements OnInit {


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

  constructor(private routeData: ActivatedRoute, private recipeService: RecipesService, private route : Router) { }

  ngOnInit() {
    var recipeId: number;
    this.routeData.params.subscribe((param) => recipeId = param.recipeNumber);
    this.recipeService.getRecipeById(recipeId).subscribe((data) => this.recipeFormData = data);
  }

  handleUpdateData() {
    this.recipeService.updateRecipe(this.recipeFormData).subscribe(
      data => {
        alert("Recipe Updated")
        this.route.navigateByUrl("recipes");
      },
      error => {
        console.log(error);
      }
    )
  }

}