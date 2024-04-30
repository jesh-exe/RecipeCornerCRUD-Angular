import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';
import { Recipe } from '../Recipe.interface';
import { RecipesComponent } from '../recipes.component';
import { RecipesService } from '../services/Recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipeList : Recipe

  @Output() recipeToDelete : EventEmitter<number>  = new EventEmitter<number>()

  @ViewChild(RecipesComponent) main : RecipesComponent

  constructor(private recipeService : RecipesService,public loginService : LoginService) { }

  list : Recipe[]
  
  ngOnInit() {
  }

  deleteRecipe(id:number){
    this.recipeToDelete.emit(id);
  }

}
