import {Component, OnInit} from '@angular/core';
import {CommentService} from '../services/comment.service';
import {Comment} from '../models/Comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
