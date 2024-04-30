import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './Recipe.interface';
import { RecipesService } from './services/Recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit, OnDestroy {

  recipeList: Recipe[];
  listLoaded: boolean = false;
  subscription: Subscription


  // Creating a stream
  recipeList$ = this.recipeService.recipes$

  constructor(private recipeService: RecipesService) {

  }

  ngOnInit() {

    // We need to use subscribe method to read the stream of data as Angular uses RxJs which has Observable as a object
    // Helps in getting data continuosly.
    this.recipeService.recipes$.subscribe((data: any) => {
      this.recipeList = data;
      this.listLoaded = true
    })

    // This way we can achieve unsubscribe in ngOnDestroy
    // this.subscription = this.recipeService.getRecipes().subscribe((data: any) => {
    //   this.recipeList = data.recipes;
    //   this.listLoaded = true
    // })
  }

  loadRecipes() {
    console.log("Loading Recipes....")
    this.recipeService.recipes$.subscribe((data: any) => {
      this.recipeList = data;
      this.listLoaded = true
    })
  }

  addRecipe() {
    var recipe: Recipe = {
      id: 1,
      name: "Chicken Tikka Masala",
      ingredients: ["Chicken", "Onion", "Tomato"],
      instructions: ["Cook Onions", "Cook Chicken Easy"],
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Indian",
      caloriesPerServing: 400,
      tags: ["Meal", "Lunch"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.9,
    }

  }

  deleteRecipe(id: number) {
    var answer: boolean = confirm("Do you wish to Delete Recipe?");
    if (answer) {
      this.recipeService.deleteRecipe(id).subscribe(
        result => {
          this.recipeList = [...result]
        },
        error => {
          console.log(error)
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}