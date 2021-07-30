import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  SetRepositoriesStore,
  GetRepositoriesBySearch,
  GetRepositoriesFromStore,
  ESearchActions,
} from '../actions/search.actions';
import { selectRepositories } from '../selectors/search.selectors';

@Injectable()
export class SearchEffects {
  getRepositories = createEffect(() =>
    this._actions$.pipe(
      ofType<GetRepositoriesFromStore>(ESearchActions.GetRepositoriesFromStore),
      map(() => this._store)
    )
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
  ) {}
}
