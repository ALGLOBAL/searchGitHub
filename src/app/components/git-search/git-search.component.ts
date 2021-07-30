import { Component, OnInit } from '@angular/core';
import { UnifiedSearchService } from '../../services/unified-search.service';
import { Observable } from 'rxjs';
import * as actions from '../../store/actions/search.actions';
import * as selectors from '../../store/selectors/search.selectors';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { GitSearchService } from '../../services/git-search.service';
import { GitSearch } from '../../models/git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  searchResults = {
    repositories: {
      total_count: 0
    }
  };
  isLoad: boolean = false;
  searchQuery: string;
  loading$: Observable<boolean>;

  ngOnInit() {
    this.loading$.subscribe((data: boolean) => {
      this.isLoad = data;
    });
  };

  constructor(
    private store: Store<IAppState>,
    private searchService: GitSearchService,
    private unifiedSearchService: UnifiedSearchService,
  ) {
    this.loading$ = store.select(selectors.selectIsLoading);
  };

  gitSearch = () => {
    console.log('gitSearch');

    this.unifiedSearchService.unifiedSearch(this.searchQuery)
      .subscribe((res) => {
        this.searchResults = res;
        this.store.dispatch(actions.toggleLoading());
      }, error => {
        console.warn(error);
        alert(`Error: ${error.statusText}`);
      });
  };

  onChange = (event) => {
    this.store.dispatch(actions.toggleLoading());

    this.searchQuery = event.target.value;
    this.gitSearch();
  }
}
