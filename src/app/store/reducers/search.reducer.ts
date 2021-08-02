import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/search.actions';
import { initialAppState, IAppState } from '../state/app.state';

const searchReducer = createReducer(
  initialAppState,
  on(actions.setRepositoriesStore, (state, { payload }) => ({
    ...state,
    repositories: { ...payload },
  })),
  on(actions.toggleLoading, (state, { payload }) => ({
    ...state,
    loading: payload,
  })),
  on(actions.clearRepositories, () => ({
    ...initialAppState,
    loading: false,
  })),
  on(actions.setAdditionalReposDataStore, (state, { payload }) => ({
    ...state,
    additionalData: { ...payload },
  })),
  on(actions.clearAdditionalReposData, (state) => ({
    ...state,
    additionalData: null,
  })),
);

export function reducer(state: IAppState | undefined, action: Action) {
  return searchReducer(state, action);
}
