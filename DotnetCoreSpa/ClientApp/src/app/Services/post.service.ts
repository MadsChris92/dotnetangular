import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get('/api/posts');
  }

  addPost(post) {
    return this.http.post('/api/posts', post);
  }
}
