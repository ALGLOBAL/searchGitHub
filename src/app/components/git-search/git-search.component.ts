import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/search.actions';
import * as selectors from '../../store/selectors/search.selectors';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { GitSearch } from '../../models/git-search';
import { filter } from './logic';

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
  filters = [{
    name: 'JavaScript',
    isChecked: false,
  }, {
    name: 'TypeScript',
    isChecked: false,
  }];
  querySearch: string = '';

  constructor(
    private store: Store<IAppState>,
  ) {};

  ngOnInit() {
    this.loading$.subscribe((data: boolean) => this.isLoad = data);

    this.repositories$.subscribe((repos: GitSearch) => {
      this.store.dispatch(actions.toggleLoading({ payload: false }));
      this.repositories = filter(repos, this.filters);
    })
  };

  onSearch = () => {
    !this.isLoad && this.store.dispatch(actions.toggleLoading({ payload: true }));
    this.store.dispatch(actions.onChangeSearch({ payload: {
        query: this.querySearch,
      }
    }));
  };

  onChange = (event) => {
    this.querySearch = event.target.value;
    this.onSearch();
  };

  onCheck = (event) => {
    for (const filter of this.filters) {
      if (event.source.name !== filter.name) {
        continue;
      }

      filter.isChecked = event.checked;
    }

    this.onSearch();
  }
}
