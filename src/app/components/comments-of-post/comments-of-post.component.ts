import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})
export class CommentsOfPostComponent implements OnInit {

  comments: Comment[];
  constructor() { }

  ngOnInit(): void {
  }

}
