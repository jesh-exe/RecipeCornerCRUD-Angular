import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatProgressSpinnerModule } from '@angular/material';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app.config';
import { HeaderComponent } from './header/header.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { InitService } from './init.service';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipeDataComponent } from './recipes/recipe-data/recipe-data.component';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './recipes/recipe-update/recipe-update.component';
import { LoginComponent } from './login/login.component';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    // This are the library used for Angular Material
    MatChipsModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule
  ],

  declarations: [	
    AppComponent,
    RecipesComponent,
    RecipeCardComponent,
    HeaderComponent,
    WelcomeComponent,
    RecipeDataComponent,
    RecipeAddComponent,
    RecipeUpdateComponent,
      LoginComponent
   ],


  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
