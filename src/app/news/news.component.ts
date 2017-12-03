import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service'
import {PaginationInstance} from 'ngx-pagination';

interface Item {
  by: string,
  descendants: number,
  id: number,
  score: number,
  time: number,
  url: string,
  title: string
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  postsId: number[];
  items: Item[] = [];
  config: PaginationInstance = {
    itemsPerPage: 15,
    currentPage: 1
};
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getPosts().subscribe(data => {
      this.postsId = data;
      this.showItem();
    }, error => console.error(error));
  }

  showItem(): void {
    this.newsService.getItem(this.postsId,60).subscribe(success => this.items = success), error => console.error(error);
    
    
  }

  numberItem(index): number {
    return index + (1+((this.config.currentPage-1)*this.config.itemsPerPage))
  }
  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  hideItem(item:Item): void {
    let index = this.items.findIndex(i => i.id === item.id);
    this.items.splice(index, 1);
    console.log(this.items);
  }
}
