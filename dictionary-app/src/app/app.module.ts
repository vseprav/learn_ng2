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
import { ProjectComponent } from './projects/project/project.component';
import {ProjectService} from "./project.service";
import { ProjectFormComponent } from './projects/project-form/project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProjectsComponent,
    DictionariesComponent,
    ProjectComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DictionaryRouterModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
