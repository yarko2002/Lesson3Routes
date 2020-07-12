import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {PostService} from '../services/post.service';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private postService: PostService, private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  details(id: number) {
    this.postService.getPostsOfUser(id).subscribe(postsOfUser => {
      console.log(postsOfUser)
      for (const post of postsOfUser) {
        this.commentService
          .getCommentsOfPost(post.id)
          .subscribe(commentsOfPostOfUser => console.log(commentsOfPostOfUser));

      }
    });
  }
}
