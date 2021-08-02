import { createAction, props } from '@ngrx/store';
import { GitSearch } from '../../models/git-search';
import { GitAdditionalData } from '../../models/git-additional-data';

export enum ESearchActions {
  GetAdditionalReposData = 'get_additional_repos_data',
  SetAdditionalReposData = 'set_additional_repos_data_store',
  SetRepositoriesStore = 'set_repositories_store',
  OnChangeSearch = 'on_change_search',
  ToggleLoading = 'toggle_loading',
  ClearRepositories = 'clear_repositories',
}

export const toggleLoading = createAction(
  ESearchActions.ToggleLoading,
  props<{ payload: boolean }>()
);

export const getAdditionalReposData = createAction(
  ESearchActions.GetAdditionalReposData,
  props<{ payload: { query: string } }>()
);

export const setAdditionalReposDataStore = createAction(
  ESearchActions.SetAdditionalReposData,
  props<{ payload: GitAdditionalData }>()
);

export const onChangeSearch = createAction(
  ESearchActions.OnChangeSearch,
  props<{ payload: { query: string } }>()
);

export const setRepositoriesStore = createAction(
  ESearchActions.SetRepositoriesStore,
  props<{ payload: GitSearch }>()
);

export const clearRepositories = createAction(
  ESearchActions.ClearRepositories,
);
