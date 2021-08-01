import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap, debounceTime } from 'rxjs/operators';
import { GitSearchService } from '../../services/git-search.service';
import { IAppState } from '../state/app.state';
import * as actions from "../actions/search.actions";
import { filter } from './logic';
// import { selectRepositories } from '../selectors/search.selectors';

@Injectable()
export class SearchEffects {
  loadRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.onChangeSearch),
      debounceTime(300),
      switchMap(action => {
        return this.repositoriesService.getSearch(action.payload.query).pipe(
          map(repos => filter(repos, action.payload.filters)),
          map(filteredRepos => actions.setRepositoriesStore({ payload: filteredRepos })),
          catchError(() => of(actions.clearRepositories()))
        );
      }),
    )
  );

  constructor(
    private store: Store<IAppState>,
    private actions$: Actions,
    private repositoriesService: GitSearchService,
  ) {}
}
