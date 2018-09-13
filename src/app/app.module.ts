import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostComponent } from './posts/post/post.component';
import { PostFormImageComponent } from './posts/post-form-image/post-form-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    PostListComponent,
    PostComponent,
    PostFormImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
