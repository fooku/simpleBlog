import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {
  posts : Post[] = [];

  createPost(post: Post){
    this.posts.push(post)
    console.log(this.posts)
  }

}
