import { createAction, props } from '@ngrx/store';
import { GitSearch } from '../../models/git-search';

export enum ESearchActions {
  GetRepositoriesFromStore = 'get_repositories_from_store',
  SetRepositoriesStore = 'set_repositories_store',
  OnChangeSearch = 'on_change_search',
  ToggleLoading = 'toggle_loading',
  ClearRepositories = 'clear_repositories',
}

export const toggleLoading = createAction(
  ESearchActions.ToggleLoading,
  props<{ payload: boolean }>()
);

export const getRepositoriesFromStore = createAction(
  ESearchActions.GetRepositoriesFromStore,
);

export const onChangeSearch = createAction(
  ESearchActions.OnChangeSearch,
  props<{ payload: any }>()
);

export const setRepositoriesStore = createAction(
  ESearchActions.SetRepositoriesStore,
  props<{ payload: GitSearch }>()
);

export const clearRepositories = createAction(
  ESearchActions.ClearRepositories,
);
