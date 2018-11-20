import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  posts: [{}]

  constructor(private _http: PostService) {
    this._http.getPosts().subscribe(res => {
      this.posts = res.json();
      console.log(res.json());
    })
  }
}
