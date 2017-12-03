import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module'
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './services/news.service'
import { RouterModule } from '@angular/router';
import { routes } from './app.router'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
