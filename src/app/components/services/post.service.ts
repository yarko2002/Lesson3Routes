import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/Post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPostsOfUser(id): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
