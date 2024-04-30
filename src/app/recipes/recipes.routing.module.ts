import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeAddComponent } from "./recipe-add/recipe-add.component";

const routes :Routes = [
    {
        path : "recipes/add",
        component : RecipeAddComponent
    }
]

@NgModule({
    imports: [
        // forRoot takes the variables which has the routes information inside it
        RouterModule.forRoot(routes),
        RouterModule,
    ],
    exports: [RouterModule]
})

export class RecipesRoutingModule{
    
}