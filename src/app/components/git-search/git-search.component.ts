import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/search.actions';
import * as selectors from '../../store/selectors/search.selectors';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { GitSearch } from '../../models/git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  repositories: GitSearch;
  repositories$: Observable<GitSearch> = this.store.select(selectors.selectRepositories);
  isLoad: boolean = false;
  loading$: Observable<boolean> = this.store.select(selectors.selectIsLoading);

  ngOnInit() {
    this.loading$.subscribe((data: boolean) => this.isLoad = data);
    this.repositories$.subscribe((repos: GitSearch) => this.repositories = repos)
  };

  constructor(
    private store: Store<IAppState>,
  ) {};

  onChange = (event) => {
    this.store.dispatch(actions.onChangeSearch({ payload: event.target.value }));
  }
}
