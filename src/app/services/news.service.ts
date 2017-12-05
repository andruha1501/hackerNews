import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { 
    
  }

  getPosts(): Observable<any> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
  }

  getObserveble(id):Observable<any> {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  }
  getItem(id, length): Observable<any> {
    let array: Observable<any>[] = [];
    for(let i = 0; i < length; i++) { 
      array.push(this.getObserveble(id[i]))
    }
    return Observable.combineLatest(...array);
  }


  getComments(id) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  }
}
