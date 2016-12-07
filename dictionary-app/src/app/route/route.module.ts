import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ProjectsComponent} from "../projects/projects.component";
import {DictionariesComponent} from "../dictionaries/dictionaries.component";
import {ProjectFormComponent} from "../projects/project-form/project-form.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'projects/new', component: ProjectFormComponent},
      { path: 'dictionaries', component: DictionariesComponent},
      { path: '**', redirectTo: '/'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DictionaryRouterModule { }
