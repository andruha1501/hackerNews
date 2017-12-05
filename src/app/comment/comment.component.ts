import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from "../services/news.service"
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() commentID: number;
  comment; 
  collapse: boolean;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getObserveble(this.commentID).subscribe(data => {
      this.comment = data
    })
    this.collapse = false;
  }

}
