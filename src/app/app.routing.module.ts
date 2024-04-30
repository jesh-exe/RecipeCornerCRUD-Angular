import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeGuard } from './guards/add-recipe.guard';
import { LoginComponent } from './login/login.component';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { RecipeDataComponent } from './recipes/recipe-data/recipe-data.component';
import { RecipeUpdateComponent } from './recipes/recipe-update/recipe-update.component';
import { RecipesComponent } from './recipes/recipes.component';
import { WelcomeComponent } from './welcome/welcome.component';

// This file has all the routes defined for the Application
const routes: Routes = [
    {
        // Path is the string which would be shown in the address bar of the browser
        // We can configure different components according to the match of out path
        // This is global path as it is empty
        path: "",
        component: WelcomeComponent
    },
    {
        path: "recipes",
        component: RecipesComponent
    },
    {
        path: "recipes/add",
        component: RecipeAddComponent,
        // This is the guard
        canActivate: [AddRecipeGuard]
    },
    {
        // This is dynamic path, which takes recipeNumber dynamically and sends it to the Component
        path: "recipes/:recipeNumber",
        component: RecipeDataComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "update/:recipeNumber",
        component: RecipeUpdateComponent,
        canActivate: [AddRecipeGuard]
    }
];

@NgModule({
    imports: [
        // forRoot takes the variables which has the routes information inside it
        RouterModule.forRoot(routes),
        RouterModule,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}