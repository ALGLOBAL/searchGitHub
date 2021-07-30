import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/search.actions';
import { initialAppState, IAppState } from '../state/app.state';

const searchReducer = createReducer(
  initialAppState,
  on(actions.setRepositoriesStore, (state, { payload } ) => ({
    ...state,
    ...payload,
  })),
  on(actions.toggleLoading, state => ({
    ...state,
    loading: !state.loading,
  })),
);

export function reducer(state: IAppState | undefined, action: Action) {
  return searchReducer(state, action);
}
