import { Component,Output ,EventEmitter} from '@angular/core';
import { Post } from '../shared/post.model'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Output() formSubmit: EventEmitter<Post> = new EventEmitter();
  model: Post = new Post();
  constructor(){
    this.resetPost();
  }
  createPost(){
    console.log(this.model)
    this.formSubmit.emit(this.model);
    this.resetPost();
  }
  private resetPost(){
    this.model = new Post();
  }
  changeImage(image){
    this.model.image = image
  }
}
