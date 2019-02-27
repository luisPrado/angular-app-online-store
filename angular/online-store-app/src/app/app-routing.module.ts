import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent }      from './articles/articles.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ArticleDetailComponent }  from './article-detail/article-detail.component';

const routes: Routes =  [
							{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
							{ path: 'articles', component: ArticlesComponent },
							{ path: 'detail/:id', component: ArticleDetailComponent },
							{ path: 'dashboard', component: DashboardComponent }
						];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
