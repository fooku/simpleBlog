import { Component, Output,ViewChild, EventEmitter, Renderer,Input, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-form-image',
  templateUrl: './post-form-image.component.html',
  styleUrls: ['./post-form-image.component.scss']
})
export class PostFormImageComponent implements OnChanges{
  @Input() image;
  @Output() imageChange = new EventEmitter();

  @ViewChild('uploader') fileInput;

  constructor(private renderer: Renderer) {}
  
  ngOnChanges(chang : SimpleChanges){
    if (!chang.image.currentValue) {
      this.image = "/assets/images/no-image.png"
    }
  }

  triggerFileUpload() {
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement,
      'dispatchEvent',
      [new MouseEvent('click', { bubbles: true })]
    )
  }
  uploadImage(event){
    const reader = new FileReader();
    const image = event.target.files[0];

    reader.onload = () => {
      const result = reader.result;

      this.image = result
      this.imageChange.emit(result);
    }

    reader.readAsDataURL(image);
  }
}
