import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {DictionaryRouterModule} from "./route/route.module";
import { ProjectsComponent } from './projects/projects.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProjectsComponent,
    DictionariesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DictionaryRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
