import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  { path: '', component: NewsComponent },
];