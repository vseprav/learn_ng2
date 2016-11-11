import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {RouterModule} from "@angular/router";
import { AddUserComponent } from './users/add-user/add-user.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'users', component: UsersComponent },
      { path: 'users/new', component: AddUserComponent },
      { path: 'posts', component: PostsComponent },
      {path: '**', redirectTo: '/'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
