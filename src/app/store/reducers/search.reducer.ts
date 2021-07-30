import { ESearchActions, SearchActions } from '../actions/search.actions';
import { initRepositories } from '../state/repositoryes.state';
import { GitSearch } from '../../models/git-search';


import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/search.actions';
import { initialAppState, IAppState } from '../state/app.state';

const searchReducer = createReducer(
  initialAppState,
  on(actions.setRepositoriesStore, (state, {payload} ) => ({
    ...state,
    ...payload,
  })),
);

export function reducer(state: IAppState | undefined, action: Action) {
  return searchReducer(state, action);
}

// export const searchReducer = (state = initRepositories, action: SearchActions): GitSearch => {
//   switch (action.type) {
//     case ESearchActions.SetRepositoriesStore: {
//       return {
//         ...action.payload,
//       }
//     }
//     default: return state;
//   }
// };
