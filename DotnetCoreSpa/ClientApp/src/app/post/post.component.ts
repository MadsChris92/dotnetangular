import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  name: "test"

  constructor(private _http: PostService) { }

  ngOnInit() {

  }

  submit() {
    console.log("name:" + name)
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    var post = {
      title: f.value.title,
      body: f.value.body
    }

    this._http.addPost(post).subscribe(res => console.log(res.json()));
  }
}
