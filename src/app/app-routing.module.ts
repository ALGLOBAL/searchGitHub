import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchComponent } from './components/git-search/git-search.component';

const routes: Routes = [
  {
    path: '',
    component: GitSearchComponent,
    data: {
      title: 'Git Search'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
