import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  kids: number[];
  length: number;
  commets: any[];
  item;
  constructor(private newsService:NewsService) {
   }

  ngOnInit() {
    this.newsService.getObserveble(15531265).subscribe(data => {
      this.item = data;});    
  }


}
