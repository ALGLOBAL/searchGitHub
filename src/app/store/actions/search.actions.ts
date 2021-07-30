import { Action, createAction, props } from '@ngrx/store';
import { GitSearch } from '../../models/git-search';

export enum ESearchActions {
  GetRepositoriesFromStore = 'get_repositories_from_store',
  GetRepositoriesBySearch = 'get_repositories_by_search',
  SetRepositoriesStore = 'set_repositories_store',
  OnChangeSearch = 'on_change_search',
}

export const getRepositoriesFromStore = createAction(
  ESearchActions.GetRepositoriesFromStore,
);

export const onChangeSearch = createAction(
  ESearchActions.OnChangeSearch,
  props<{ payload: string }>()
);

export const setRepositoriesStore = createAction(
  ESearchActions.SetRepositoriesStore,
  props<{ payload: GitSearch }>()
);

export class GetRepositoriesFromStore implements Action {
  public readonly type = ESearchActions.GetRepositoriesFromStore;
}

export class GetRepositoriesBySearch implements Action {
  public readonly type = ESearchActions.GetRepositoriesBySearch;
  constructor(public payload: string) {}
}

export class SetRepositoriesStore implements Action {
  public readonly type = ESearchActions.SetRepositoriesStore;
  constructor(public payload: GitSearch) {}
}

export type SearchActions = GetRepositoriesFromStore | SetRepositoriesStore | GetRepositoriesBySearch;
